import Head from "next/head"
import dynamic from "next/dynamic";
import { defaultSEO, getStructuredData } from "@/config/seo";

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { 
    ssr: false,
    loading: () => <div className="whatsapp-button-placeholder" />
});

interface LayoutProps {
    children: React.ReactNode;
    customSEO?: {
        title?: string;
        description?: string;
    };
}

const Layout = ({ children, customSEO }: LayoutProps) => {
    const seo = {
        ...defaultSEO,
        ...(customSEO || {}),
    };

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content={seo.description} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content={seo.openGraph.type} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={seo.openGraph.url} />
                <meta property="og:site_name" content={seo.openGraph.site_name} />
                <meta property="og:locale" content={seo.openGraph.locale} />
                <meta property="og:image" content={seo.openGraph.images[0].url} />
                <meta property="og:image:width" content={String(seo.openGraph.images[0].width)} />
                <meta property="og:image:height" content={String(seo.openGraph.images[0].height)} />
                
                {/* Twitter */}
                <meta name="twitter:card" content={seo.twitter.cardType} />
                <meta name="twitter:site" content={seo.twitter.site} />
                <meta name="twitter:creator" content={seo.twitter.handle} />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content={seo.openGraph.images[0].url} />
                
                {/* Outros meta tags */}
                {seo.additionalMetaTags.map((tag, index) => (
                    <meta key={index} name={tag.name} content={tag.content} />
                ))}
                
                {/* Links adicionais */}
                {seo.additionalLinkTags.map((tag, index) => (
                    <link key={index} rel={tag.rel} href={tag.href} />
                ))}
                
                {/* Structured Data */}
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
                />
            </Head>

            <main>{children}</main>
            
            <WhatsAppButton />
            <Footer />
        </>
    );
};

export default Layout;
