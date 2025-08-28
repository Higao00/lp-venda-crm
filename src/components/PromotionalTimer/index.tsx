import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function PromotionalTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Define a data final (7 dias a partir de agora)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 7);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = endDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleClick = () => {
        const message = `Olá! Vi a promoção do CRM e gostaria de mais informações sobre o desconto especial.`;
        const url = `https://api.whatsapp.com/send/?phone=5516991027826&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <S.PromoBar
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100
            }}
        >
            <motion.div 
                className="message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
            >
                <strong>OFERTA ESPECIAL:</strong> 30% de desconto nos 3 primeiros meses!
            </motion.div>
            
            <motion.div 
                className="timer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {Object.entries(timeLeft).map(([key, value], index) => (
                    <motion.div
                        key={key}
                        className="time-block"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.6 + (index * 0.1),
                            type: "spring",
                            stiffness: 300
                        }}
                    >
                        {value}{key.charAt(0)}
                    </motion.div>
                ))}
            </motion.div>

            <motion.button 
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
            >
                Aproveitar Agora
            </motion.button>
        </S.PromoBar>
    );
}
