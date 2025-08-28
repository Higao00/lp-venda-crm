import Head from "next/head"
import dynamic from 'next/dynamic';
const NotFoundPage = dynamic(() => import('@/components/Pages/NotFoundPage'), { ssr: false });

export default function Page404() {
    return (
        <>
            <Head>
                <title>404 | Zurke Innovation</title>
                <meta
                    name="description"
                    content="Ops essa pagina não existe"
                />
                <meta name="canonical" content='https://www.crm.zurke.com.br/404' />
                <meta name="keywords" content='erro' />

                {/* Open Graph tags dinâmicas */}
                <meta property="og:title" content='404 | Zurke Innovation' />
                <meta property="og:description" content='Ops essa pagina não existe' />
                <meta property="og:url" content='https://www.crm.zurke.com.br/404' />
                <meta property="og:type" content='website' />
                <meta property="og:image" content='https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/desenvolvimento-de-software/og-image.webp' />
                <meta property="og:locale" content='pt_BR' />
                <meta property="og:site_name" content='Zurke Innovation' />

                {/* Outras tags para SEO */}
                <meta name="twitter:title" content='404 | Zurke Innovation' />
                <meta name="twitter:description" content='Ops essa pagina não existe' />
                <meta name="twitter:image" content='https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/desenvolvimento-de-software/og-image.webp' />
                <meta property="twitter:card" content='https://zurke-innovation.s3.us-east-1.amazonaws.com/LPs/desenvolvimento-de-software/og-image.webp' />

            </Head>

            <NotFoundPage />
        </>
    )
}