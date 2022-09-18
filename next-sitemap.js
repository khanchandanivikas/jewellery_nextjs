module.exports = {
    siteUrl: "https://jewellery-nextjs.vercel.app",
    generateRobotsTxt: true,
    priority: 0.7,
    changefreq: 'weekly',
    sitemapSize: 8000,
    // exclude: ["/server-sitemap.xml", "/admin", "/aviso-legal", "/calcular", "/cuenta", "/cuenta-activada", "/recovery-password", "/noticias/*", "/vehiculos/*"],
    robotsTxtOptions: {
        additionalSitemaps: ['https://jewellery-nextjs.vercel.app/server-sitemap.xml']
    },
    transform: async (config, path) => {
        const paths = ['/', '/shop'];
        if(paths.includes(path)) {
            return {
                loc: path,
                changefreq: 'daily',
                priority: 0.9,
                lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            }
        }
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    },    
    additionalSitemaps: [
        'https://jewellery-nextjs.vercel.app/sitemap.xml',
        'https://jewellery-nextjs.vercel.app/server-sitemap.xml'     
    ],
}