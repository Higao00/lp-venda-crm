import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './styles';

export default function ExitIntent() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    const handleClose = () => setIsVisible(false);

    const handleCTA = () => {
        const message = "Olá! Vi a oferta especial de 50% de desconto no primeiro mês e gostaria de mais informações.";
        const url = `https://api.whatsapp.com/send/?phone=5516991027826&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        handleClose();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <S.Overlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <S.Modal
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-button" onClick={handleClose}>×</button>
                        <h2>Espere um momento!</h2>
                        <p>Não perca a oportunidade de transformar a gestão do seu negócio</p>

                        <div className="offer">
                            <strong>Oferta Especial</strong>
                            <p>50% de desconto no primeiro mês + Implementação Gratuita</p>
                        </div>

                        <ul className="features">
                            <li>Economia de tempo com automação de processos</li>
                            <li>Aumento médio de 40% nas vendas</li>
                            <li>Suporte dedicado 24/7</li>
                            <li>Setup completo em até 7 dias</li>
                        </ul>

                        <button className="whatsapp-button" onClick={handleCTA}>
                            Quero Aproveitar Esta Oferta
                        </button>
                    </S.Modal>
                </S.Overlay>
            )}
        </AnimatePresence>
    );
}
