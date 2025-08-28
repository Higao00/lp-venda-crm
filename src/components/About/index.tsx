'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './styles';

import {
    FaLaptopCode,
    FaRocket,
    FaDatabase,
    FaChartLine,
    FaPlug,
    FaUsers
} from 'react-icons/fa';

const whatWeDoCards = [
    {
        id: 1,
        title: 'Websites Institucionais',
        description:
            'Sites modernos, responsivos e otimizados para gerar autoridade e presença digital profissional.',
        icon: <FaLaptopCode size={40} color="#01395c" />,
    },
    {
        id: 2,
        title: 'Landing Pages de Conversão',
        description:
            'Páginas focadas em resultado, com estrutura estratégica para campanhas e captação de leads.',
        icon: <FaRocket size={40} color="#01395c" />,
    },
    {
        id: 3,
        title: 'Sistemas de Gestão',
        description:
            'Soluções sob medida para controle de processos internos, como vendas, estoque, atendimento e mais.',
        icon: <FaDatabase size={40} color="#01395c" />,
    },
    {
        id: 4,
        title: 'Dashboards Personalizados',
        description:
            'Painéis visuais e interativos para análise de dados em tempo real com foco em tomada de decisão.',
        icon: <FaChartLine size={40} color="#01395c" />,
    },
    {
        id: 5,
        title: 'Integrações com APIs',
        description:
            'Conectamos sistemas via API para automatizar fluxos, sincronizar dados e integrar plataformas.',
        icon: <FaPlug size={40} color="#01395c" />,
    },
    {
        id: 6,
        title: 'Portais e CRMs Customizados',
        description:
            'Portais de clientes, atendimento e relacionamento com funcionalidades únicas para sua operação.',
        icon: <FaUsers size={40} color="#01395c" />,
    },
];

export default function AboutAndWhatWeDo() {
    const message = `Olá, gostaria de um orçamento para desenvolvimento de software sob medida com a Zurke.`;

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        hidden: {},
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <S.SectionWrapper>
            {/* Sobre a Zurke */}
            <S.AboutSection>
                <h2>Sobre a Zurke Innovation</h2>

                <motion.div
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {[
                        {
                            title: 'Visão Estratégica',
                            text: 'Transformar tecnologia em vantagem competitiva para nossos clientes por meio de soluções digitais sob medida.',
                        },
                        {
                            title: 'Compromisso com o Resultado',
                            text: 'Ajudamos empresas a crescer com tecnologia, combinando agilidade, inovação e entrega eficiente.',
                        },
                        {
                            title: 'Desenvolvimento Personalizado',
                            text: 'Cada sistema é construído com base nos desafios reais do cliente, garantindo aderência, escalabilidade e valor.',
                        },
                    ].map(({ title, text }, idx) => (
                        <motion.div
                            className="about-card"
                            key={idx}
                            variants={cardVariants}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </S.AboutSection>

            {/* O Que Fazemos */}
            <S.WhatWeDoSection>
                <h2>O que fazemos</h2>

                {/* Grid desktop */}
                <S.WhatWeDoGrid className="desktop">
                    {/* Primeira linha com 4 cards */}
                    <div className="row">
                        {whatWeDoCards.slice(0, 4).map(({ id, title, description, icon }) => (
                            <motion.div
                                key={id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <S.Card>
                                    <div className="icon">{icon}</div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </S.Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Segunda linha com 2 cards centralizados */}
                    <div className="row center">
                        {whatWeDoCards.slice(4).map(({ id, title, description, icon }) => (
                            <motion.div
                                key={id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <S.Card>
                                    <div className="icon">{icon}</div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </S.Card>
                            </motion.div>
                        ))}
                    </div>
                </S.WhatWeDoGrid>


                {/* Carousel mobile */}
                <S.WhatWeDoCarousel className="mobile">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                    >
                        {whatWeDoCards.map(({ id, title, description, icon }) => (
                            <SwiperSlide key={id}>
                                <S.Card>
                                    <div className="icon">{icon}</div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </S.Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.WhatWeDoCarousel>

                <motion.button
                    className="whatsapp-button"
                    onClick={() =>
                        window.open(
                            `https://api.whatsapp.com/send/?phone=5516991027826&text=${encodeURIComponent(
                                message
                            )}`,
                            '_blank'
                        )
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Solicite um orçamento
                </motion.button>
            </S.WhatWeDoSection>
        </S.SectionWrapper>
    );
}
