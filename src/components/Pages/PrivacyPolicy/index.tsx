'use client';

import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

const Page = styled.main`
  min-height: 100vh;
  background: #0b1220;
  color: #e5e7eb;
  padding: 24px;
`;

const Wrapper = styled.div`
  max-width: 940px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  margin: 8px 0 16px;
  color: #ffffff;
`;

const Meta = styled.div`
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 24px;
`;

const Card = styled.article`
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(226,232,240,0.1);
  border-radius: 16px;
  padding: clamp(16px, 3vw, 28px);
  line-height: 1.7;
  box-shadow: 0 10px 26px rgba(14,165,166,0.08);
`;

const Section = styled.section`
  & + & { margin-top: 20px; }
  h2 {
    font-size: clamp(18px, 3.2vw, 22px);
    font-weight: 700;
    margin: 16px 0 8px;
    color: #e2e8f0;
  }
  p, li {
    color: #cbd5e1;
    font-size: clamp(15px, 2.6vw, 16px);
  }
  ul {
    padding-left: 18px;
    margin: 10px 0;
    list-style: disc;
  }
`;

const BackLink = styled.div`
  margin-top: 24px;
  a {
    color: #0ea5a6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Política de Privacidade</title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>

            <Page>
                <Wrapper>
                    <Title>Política de Privacidade</Title>
                    <Meta>Última atualização: 28/08/2025</Meta>

                    <Card>
                        <Section>
                            <h2>1. Introdução</h2>
                            <p>
                                Valorizamos sua privacidade. Este documento explica como coletamos, usamos,
                                armazenamos e protegemos suas informações pessoais quando você utiliza nossos sites,
                                produtos e serviços.
                            </p>
                        </Section>

                        <Section>
                            <h2>2. Dados que coletamos</h2>
                            <ul>
                                <li>Dados de contato: nome, e-mail, telefone, empresa.</li>
                                <li>Dados de navegação: endereço IP, dispositivo, páginas acessadas, cookies.</li>
                                <li>Dados fornecidos em formulários e atendimentos.</li>
                            </ul>
                        </Section>

                        <Section>
                            <h2>3. Como usamos seus dados</h2>
                            <ul>
                                <li>Prestar e melhorar nossos serviços e CRM.</li>
                                <li>Atendimento e comunicação de suporte.</li>
                                <li>Envio de informações sobre produtos e atualizações (quando autorizado).</li>
                                <li>Cumprir obrigações legais e solicitações regulatórias.</li>
                            </ul>
                        </Section>

                        <Section>
                            <h2>4. Cookies e tecnologias similares</h2>
                            <p>
                                Utilizamos cookies para lembrar preferências, medir audiência e personalizar
                                conteúdos. Você pode gerenciar suas preferências através da tarja de consentimento
                                e nas configurações do seu navegador.
                            </p>
                        </Section>

                        <Section>
                            <h2>5. Compartilhamento</h2>
                            <p>
                                Podemos compartilhar dados com provedores de infraestrutura, analytics, atendimento
                                e parceiros estritamente necessários para a operação, sempre sob contrato e
                                confidencialidade. Não vendemos seus dados.
                            </p>
                        </Section>

                        <Section>
                            <h2>6. Segurança e retenção</h2>
                            <p>
                                Adotamos medidas técnicas e organizacionais para proteger os dados. Mantemos as
                                informações pelo tempo necessário aos fins desta Política e conforme exigido por lei.
                            </p>
                        </Section>

                        <Section>
                            <h2>7. Seus direitos</h2>
                            <p>
                                Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados, bem
                                como revogar consentimentos. Entre em contato pelo e-mail{' '}
                                <a href="mailto:contato@projetive.com.br">contato@projetive.com.br</a>.
                            </p>
                        </Section>

                        <Section>
                            <h2>8. Contato e alterações</h2>
                            <p>
                                Podemos atualizar esta Política a qualquer momento. Mudanças relevantes serão
                                comunicadas. Em caso de dúvidas, fale com{' '}
                                <a href="mailto:contato@projetive.com.br">contato@projetive.com.br</a>.
                            </p>
                        </Section>

                        <BackLink>
                            <Link href="/">← Voltar para a Home</Link>
                        </BackLink>
                    </Card>
                </Wrapper>
            </Page>
        </>
    );
}
