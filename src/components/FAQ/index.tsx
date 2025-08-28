import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './styles';

type FAQItem = {
    question: string;
    answer: string;
};

export default function FAQ() {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "Quanto tempo leva para implementar o CRM?",
            answer: "O tempo médio de implementação é de 2 a 4 semanas, dependendo da complexidade dos seus processos. Nossa equipe trabalha de forma ágil para garantir uma transição suave e eficiente."
        },
        {
            question: "O CRM é personalizável para meu segmento?",
            answer: "Sim! Nosso CRM é altamente customizável e pode ser adaptado para qualquer segmento. Desenvolvemos funcionalidades específicas para atender às necessidades únicas do seu negócio."
        },
        {
            question: "Como funciona o suporte técnico?",
            answer: "Oferecemos suporte técnico 24/7 via chat, email e telefone. Nossa equipe está sempre disponível para ajudar com dúvidas, treinamentos e resolução de problemas."
        },
        {
            question: "Existe um período de teste gratuito?",
            answer: "Sim! Oferecemos 14 dias de teste gratuito com todas as funcionalidades disponíveis. Você poderá avaliar completamente a plataforma antes de tomar uma decisão."
        },
        {
            question: "É possível migrar dados do meu sistema atual?",
            answer: "Sim, nossa equipe possui experiência em migração de dados de diversos sistemas. Realizamos todo o processo de forma segura e eficiente, garantindo que nenhuma informação seja perdida."
        },
        {
            question: "Qual o investimento necessário?",
            answer: "O investimento varia de acordo com o número de usuários e funcionalidades necessárias. Oferecemos planos flexíveis que se adaptam ao seu orçamento, começando em R$ 197/mês."
        }
    ];

    const handleClick = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const answerVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.8
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <S.FAQ id="faq">
                <motion.div
                    className="faq-header"
                    variants={containerVariants}
                >
                    <motion.h2 variants={itemVariants}>Perguntas Frequentes</motion.h2>
                    <motion.p variants={itemVariants}>Tire suas dúvidas sobre nossa solução</motion.p>
                </motion.div>

                <motion.div
                    className="faq-items"
                    variants={containerVariants}
                >
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openItem === index ? 'open' : ''}`}
                            onClick={() => handleClick(index)}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="question">
                                <h3>{item.question}</h3>
                                <motion.span
                                    className="icon"
                                    animate={{ rotate: openItem === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {openItem === index ? '−' : '+'}
                                </motion.span>
                            </div>
                            <AnimatePresence>
                                {openItem === index && (
                                    <motion.div
                                        className="answer"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={answerVariants}
                                        style={{ 
                                            overflow: 'hidden',
                                            originY: 0
                                        }}
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="faq-cta"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p variants={itemVariants}>Não encontrou o que procura?</motion.p>
                    <motion.button
                        className="whatsapp-button"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Fale com um especialista
                    </motion.button>
                </motion.div>
            </S.FAQ>
        </motion.div>
    );
}
