// ProjectsGrid.tsx
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y, Keyboard } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './styles';

const features = [
    {
        id: 1,
        title: 'Consulta Automática na Receita Federal',
        subtitle: 'Enriqueça os cadastros com dados oficiais e sempre atualizados.',
        image: 'https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/diferenciais/integracao-receita.webp',
    },
    {
        id: 2,
        title: 'Assinatura Digital Integrada',
        subtitle: 'Feche negócios online de forma rápida e segura.',
        image: 'https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/diferenciais/assinatura-digital.webp',
    },
    {
        id: 3,
        title: 'Interface Simples e Intuitiva',
        subtitle: 'Treinamento rápido e uso fácil para toda a equipe.',
        image: 'https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/diferenciais/facilidade-uso.webp',
    },
    {
        id: 4,
        title: 'Propostas 100% Personalizadas',
        subtitle: 'Adapte cada proposta ao cliente com agilidade e profissionalismo.',
        image: 'https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/diferenciais/personalizacao.webp',
    },

    {
        id: 5,
        title: 'Integrações Sob Medida',
        subtitle: 'Conecte o CRM a qualquer sistema usado pela sua empresa.',
        image: 'https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/diferenciais/integracoes.webp',
    },
];

export default function ProjectsGrid() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <S.ProjectsSection aria-labelledby="crm-diferenciais-title">
            <h2 id="crm-diferenciais-title">Descubra os pontos fortes do nosso CRM</h2>

            <S.Carousel>
                <div className="nav-buttons" aria-hidden="false">
                    <button
                        ref={prevRef}
                        aria-label="Anterior"
                        title="Anterior"
                        type="button"
                    >
                        <FaChevronLeft aria-hidden />
                    </button>
                    <button
                        ref={nextRef}
                        aria-label="Próximo"
                        title="Próximo"
                        type="button"
                    >
                        <FaChevronRight aria-hidden />
                    </button>
                </div>

                <Swiper
                    modules={[Pagination, Navigation, A11y, Keyboard]}
                    pagination={{ clickable: true }}
                    loop
                    keyboard={{ enabled: true }}
                    navigation={{
                        // refs serão injetadas no onBeforeInit
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // garante que os botões já existam no init
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const nav = swiper.params.navigation as any;
                        nav.prevEl = prevRef.current;
                        nav.nextEl = nextRef.current;
                    }}
                    spaceBetween={24}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {features.map(({ id, title, subtitle, image }, index) => (
                        <SwiperSlide key={id}>
                            <S.ProjectCard role="article" aria-label={title} tabIndex={0}>
                                <figure>
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={480}
                                        height={320}
                                        // apenas a 1ª imagem como prioridade (melhor LCP)
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 33vw, 25vw"
                                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                    />
                                    <figcaption>
                                        <p className="title"><strong>{title}</strong></p>
                                        {subtitle && <p className="subtitle">{subtitle}</p>}
                                    </figcaption>
                                </figure>
                            </S.ProjectCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.Carousel>
        </S.ProjectsSection>
    );
}
