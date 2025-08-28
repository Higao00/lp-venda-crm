'use client';

import React from 'react';
import Image from 'next/image';
import { easeOut, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './styles';

const workSteps = [
    { id: 1, title: 'Entendimento da necessidade do cliente' },
    { id: 2, title: 'Análise e arquitetura do sistema' },
    { id: 3, title: 'Apresentação do projeto e alinhamento' },
    { id: 4, title: 'Desenvolvimento e testes contínuos' },
    { id: 5, title: 'Entrega, implantação e suporte' },
];

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    hidden: {},
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
};

export default function WorkProcess() {
    return (
        <S.SectionWrapper>
            <S.BackgroundImageWrapper>
                <Image
                    src="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/desenvolvimento-de-software/nosso-processo-de-trabalho.webp"
                    alt="Nosso processo de desenvolvimento de software sob medida"
                    fill
                    style={{ objectFit: 'cover', zIndex: -2 }}
                    priority
                />
                <S.Overlay />
            </S.BackgroundImageWrapper>

            <S.ContentWrapper>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    Nosso Processo de Trabalho
                </motion.h2>

                {/* Primeira linha */}
                <div className="desktop">
                    <S.StepsGridFirstRow
                        as={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {workSteps.slice(0, 3).map(({ id, title }) => (
                            <motion.div
                                key={id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <S.StepCard>
                                    <S.StepBadge>{`PASSO ${id}`}</S.StepBadge>
                                    <h3>{title}</h3>
                                </S.StepCard>
                            </motion.div>
                        ))}
                    </S.StepsGridFirstRow>
                </div>

                {/* Segunda linha */}
                <div className="desktop">
                    <S.StepsFlexSecondRow
                        as={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {workSteps.slice(3).map(({ id, title }) => (
                            <motion.div
                                key={id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <S.StepCard>
                                    <S.StepBadge>{`PASSO ${id}`}</S.StepBadge>
                                    <h3>{title}</h3>
                                </S.StepCard>
                            </motion.div>
                        ))}
                    </S.StepsFlexSecondRow>
                </div>

                {/* Mobile - Carousel */}
                <S.StepsCarousel className="mobile">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                    >
                        {workSteps.map(({ id, title }) => (
                            <SwiperSlide key={id}>
                                <S.StepCard>
                                    <S.StepBadge>{`PASSO ${id}`}</S.StepBadge>
                                    <h3>{title}</h3>
                                </S.StepCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.StepsCarousel>
            </S.ContentWrapper>
        </S.SectionWrapper>
    );
}
