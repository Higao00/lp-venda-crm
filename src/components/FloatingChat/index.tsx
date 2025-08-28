import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
`;

const ChatButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blue};
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        background: ${({ theme }) => theme.colors.blueHover};
    }
`;

const ChatWindow = styled(motion.div)`
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 300px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
`;

const ChatHeader = styled.div`
    background: ${({ theme }) => theme.colors.blue};
    color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.blueHover};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .info {
        h3 {
            margin: 0;
            font-size: 1rem;
        }
        
        p {
            margin: 4px 0 0;
            font-size: 0.875rem;
            opacity: 0.8;
        }
    }
`;

const ChatBody = styled.div`
    padding: 16px;

    .message {
        margin-bottom: 16px;
        line-height: 1.4;
    }

    .options {
        display: grid;
        gap: 8px;
        
        button {
            padding: 8px 16px;
            border: 1px solid ${({ theme }) => theme.colors.blue};
            border-radius: 20px;
            background: white;
            color: ${({ theme }) => theme.colors.blue};
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: ${({ theme }) => theme.colors.blue};
                color: white;
            }
        }
    }
`;

type Option = {
    text: string;
    message: string;
};

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const options: Option[] = [
        {
            text: "Quero uma demonstração",
            message: "Olá! Gostaria de agendar uma demonstração do CRM."
        },
        {
            text: "Preciso de mais informações",
            message: "Olá! Gostaria de mais informações sobre o CRM."
        },
        {
            text: "Quero saber os preços",
            message: "Olá! Gostaria de conhecer os planos e preços do CRM."
        },
        {
            text: "Tenho outras dúvidas",
            message: "Olá! Tenho algumas dúvidas sobre o CRM."
        }
    ];

    const handleOptionClick = (message: string) => {
        const url = `https://api.whatsapp.com/send/?phone=5516991027826&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <ChatWidget>
            <ChatButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '×' : '💬'}
            </ChatButton>

            <AnimatePresence>
                {isOpen && (
                    <ChatWindow
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChatHeader>
                            <div className="avatar">SC</div>
                            <div className="info">
                                <h3>Suporte ao Cliente</h3>
                                <p>Online agora</p>
                            </div>
                        </ChatHeader>

                        <ChatBody>
                            <div className="message">
                                Olá! Como posso ajudar você hoje?
                            </div>

                            <div className="options">
                                {options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(option.message)}
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        </ChatBody>
                    </ChatWindow>
                )}
            </AnimatePresence>
        </ChatWidget>
    );
}
