import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useDevice } from '@/hooks/useDevice';

const Nav = styled(motion.nav)`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    padding: 12px 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        gap: 20px;
    }
`;

const NavItem = styled(motion.button)<{ isActive: boolean }>`
    background: none;
    border: none;
    padding: 8px 12px;
    color: ${props => props.isActive ? props.theme.colors.green : props.theme.colors.darkGray};
    font-size: 14px;
    font-weight: ${props => props.isActive ? '600' : '400'};
    cursor: pointer;
    position: relative;
    transition: color 0.3s;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${props => props.isActive ? '100%' : '0'};
        height: 2px;
        background: ${props => props.theme.colors.green};
        transition: width 0.3s;
    }
`;

const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'problems', label: 'Problemas' },
    { id: 'video', label: 'Demo' },
    { id: 'faq', label: 'FAQ' },
    { id: 'cta', label: 'Contato' },
];

export default function MobileNavigation() {
    const [activeSection, setActiveSection] = useState('hero');
    const { isMobile } = useDevice();

    useEffect(() => {
        if (!isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isMobile]);

    if (!isMobile) return null;

    const handleClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <AnimatePresence>
            <Nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {sections.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        isActive={activeSection === id}
                        onClick={() => handleClick(id)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {label}
                    </NavItem>
                ))}
            </Nav>
        </AnimatePresence>
    );
}
