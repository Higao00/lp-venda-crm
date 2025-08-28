export const defaultSEO = {
    title: "CRM Personalizado para sua Empresa | Aumente suas Vendas",
    description: "Transforme a gestão de clientes com nosso CRM sob medida. Automação de processos, gestão centralizada e relatórios estratégicos para impulsionar suas vendas.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://crm.zurke.com.br",
        site_name: "CRM Personalizado",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CRM Personalizado",
            },
        ],
    },
    twitter: {
        handle: "@seuhandle",
        site: "@site",
        cardType: "summary_large_image",
    },
    additionalMetaTags: [
        {
            name: "theme-color",
            content: "#4CAF50",
        },
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico",
        },
    ],
}

export const getStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CRM Personalizado",
    applicationCategory: "BusinessApplication",
    offers: {
        "@type": "Offer",
        price: "197.00",
        priceCurrency: "BRL",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "147",
    },
})
