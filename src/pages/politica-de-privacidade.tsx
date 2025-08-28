import Head from "next/head";
import PrivacyPolicy from "@/components/Pages/PrivacyPolicy";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Politica de privacidade | Zurke CRM</title>
                <meta
                    name="description"
                    content="Conheça nossa política de privacidade."
                />
                <meta name="canonical" content="https://www.crm.zurke.com.br/politica-de-privacidade" />
                <meta
                    name="keywords"
                    content="politica de privacidade, CRM personalizado, gestão de clientes, automação de vendas, relacionamento com clientes, Zurke CRM, software de CRM, sistemas empresariais"
                />

                <meta property="og:title" content="Politica de privacidade" />
                <meta
                    property="og:description"
                    content="Soluções de CRM criadas para atender às necessidades específicas do seu negócio. Melhore o relacionamento com clientes e impulsione suas vendas."
                />
                <meta
                    property="og:url"
                    content="https://www.crm.zurke.com.br/politica-de-privacidade"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/og-image.webp"
                />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:site_name" content="Zurke Innovation" />

                <meta name="twitter:title" content="Politica de privacidade" />
                <meta
                    name="twitter:description"
                    content="Conheça nossa política de privacidade."
                />
                <meta
                    name="twitter:image"
                    content="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-vendas/og-image.webp"
                />
                <meta property="twitter:card" content="summary_large_image" />
            </Head>

            <PrivacyPolicy />
        </>
    );
}
