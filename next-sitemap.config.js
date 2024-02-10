const siteUrl = "https://repour.vercel.app/";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
  },
  transform: async (config, path) => {

    const priority = (() => {
      if (path === "/") {
        return 1;
      }

      return 0.8;
    })();

    return {
      loc: path,
      changefreq: "monthly",
      priority,
    };
  },
};
