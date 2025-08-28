/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://zurke.com.br",
    generateRobotsTxt: false, // Gera o arquivo robots.txt
    sitemapSize: 7000, // Garante que todas as páginas cabem em um único arquivo (ajuste conforme necessário)
    autoLastmod: true, // Adiciona automaticamente a tag 'lastmod' com a data de última modificação
    transform: async (config, path) => {
        return {
            loc: path, // URL da página
            lastmod: new Date().toISOString(), // Data de última modificação
            changefreq: "daily", // Frequência de atualização (ajuste conforme necessário)
            priority: 0.7, // Prioridade da página (ajuste conforme necessário)
        }
    },
}
