import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function pad(n: number) {
    return String(n).padStart(2, '0');
}

export default function PromotionalTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        // Data final (7 dias a partir de agora) — persiste em localStorage para não “resetar”
        const key = 'promo_end_date';
        let endDate = (() => {
            const saved = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
            if (saved) {
                const d = new Date(saved);
                if (!isNaN(d.getTime())) return d;
            }
            const d = new Date();
            d.setDate(d.getDate() + 7);
            if (typeof window !== 'undefined') localStorage.setItem(key, d.toISOString());
            return d;
        })();

        const timer = setInterval(() => {
            const now = new Date();
            const difference = endDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (hidden) return null;

    const blocks = [
        { key: 'days', label: 'dias', value: pad(timeLeft.days) },
        { key: 'hours', label: 'h', value: pad(timeLeft.hours) },
        { key: 'minutes', label: 'min', value: pad(timeLeft.minutes) },
        { key: 'seconds', label: 's', value: pad(timeLeft.seconds) },
    ];

    return (
        <S.PromoBar
            role="region"
            aria-label="Barra de promoção"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
            <S.Inner>
                <motion.div
                    className="message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                >
                    <strong>OFERTA ESPECIAL:</strong> 30% de desconto nos 3 primeiros meses!
                </motion.div>

                <motion.div
                    className="timer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    {blocks.map((b, i) => (
                        <motion.div
                            key={b.key}
                            className="time-block"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300 }}
                        >
                            <span className="value" aria-label={b.key}>{b.value}</span>
                            <span className="label">{b.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    onClick={handleClick}
                    className="cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                >
                    Aproveitar Agora
                </motion.button>

                {/* <button className="close" aria-label="Fechar promoção" onClick={() => setHidden(true)}>
                    ×
                </button> */}
            </S.Inner>
        </S.PromoBar>
    );
}
