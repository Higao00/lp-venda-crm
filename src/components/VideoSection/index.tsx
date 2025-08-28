import React from 'react';
import * as S from './styles';

type VideoSectionProps = {
    demoLink: string; // link da base teste
    videoId?: string; // opcional: default para o seu ID
};

export default function VideoSection({
    demoLink,
    videoId = 'oYflRPy83us',
}: VideoSectionProps) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

    return (
        <S.Section aria-labelledby="crm-video-title">
            <S.Container>
                <S.VideoCol>
                    <div className="video-wrapper">
                        <iframe
                            src={embedUrl}
                            title="Demonstração do CRM"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </S.VideoCol>

                <S.TextCol>
                    <h2 id="crm-video-title">Seu CRM, do jeito que sua operação precisa</h2>
                    <p>
                        Nosso CRM foi pensado para <strong>acelerar a rotina comercial</strong> sem acrescentar
                        complexidade. Cadastros enriquecidos com <strong>dados oficiais</strong>, propostas
                        <strong> 100% personalizadas</strong>, <strong>assinatura digital integrada</strong> e
                        <strong> integrações sob medida</strong> com os sistemas que você já usa.
                    </p>

                    <ul>
                        <li>Interface simples e intuitiva para adoção rápida da equipe</li>
                        <li>Pipeline visual, tarefas e histórico centralizados</li>
                        <li>Relatórios e métricas para decisões mais rápidas</li>
                    </ul>

                    <S.SmallNote>Sem instalação. Navegue livremente e conheça os recursos.</S.SmallNote>


                    <S.CTA href={demoLink} target="_blank" rel="noopener noreferrer" aria-label="Abrir base de testes do CRM">
                        Acessar base de testes
                    </S.CTA>
                </S.TextCol>
            </S.Container>
        </S.Section>
    );
}
