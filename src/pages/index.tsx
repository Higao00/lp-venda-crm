import Head from "next/head";
import Layout from "@/components/Layout";
import Home from "@/components/Pages/Home";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>CRM Personalizado para Gestão de Clientes | Zurke CRM</title>
                <meta
                    name="description"
                    content="Oferecemos soluções de CRM sob medida para empresas que desejam melhorar o relacionamento com clientes e aumentar suas vendas."
                />
                <meta name="canonical" content="https://crm-personalizado.zurke.com.br" />
                <meta
                    name="keywords"
                    content="CRM personalizado, gestão de clientes, automação de vendas, relacionamento com clientes, Zurke CRM, software de CRM, sistemas empresariais"
                />

                <meta property="og:title" content="CRM Personalizado para Gestão de Clientes | Zurke CRM" />
                <meta
                    property="og:description"
                    content="Soluções de CRM criadas para atender às necessidades específicas do seu negócio. Melhore o relacionamento com clientes e impulsione suas vendas."
                />
                <meta
                    property="og:url"
                    content="https://crm-personalizado.zurke.com.br"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-personalizado/og-image.webp"
                />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:site_name" content="Zurke Innovation" />

                <meta name="twitter:title" content="CRM Personalizado para Gestão de Clientes | Zurke CRM" />
                <meta
                    name="twitter:description"
                    content="Descubra como um CRM personalizado pode transformar a gestão de clientes e aumentar a eficiência do seu negócio."
                />
                <meta
                    name="twitter:image"
                    content="https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/crm-personalizado/og-image.webp"
                />
                <meta property="twitter:card" content="summary_large_image" />
            </Head>

            <Layout>
                <Home />
            </Layout>
        </>
    );
}
