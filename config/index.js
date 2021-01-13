module.exports = {
    //-- SITE SETTINGS -----
    author: "Jeannie Torres",
    siteTitle: "JT's Gatsby Portfolio",
    siteShortTitle: "Gatsby", // Used as logo text in header, footer, and splash screen
    siteDescription:
        "A modern one-page portfolio.",
    siteUrl: "https://gatsby-portfolio.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "JT's Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    // -- THEME SETTINGS -----
    colors: {
        lightTheme: {
            primary: "#000000",
            secondary: "#FFF4D9",
            tertiary: "#F2F2F2",
            text: "#000000",
            subtext: "#555555",
            background: "#FFFFFF",
            card: "#FFFFFF",
            scrollBar: "rgba(0, 0, 0, 0.5)",
            boxShadow: "rgba(0, 0, 0, 0.16)",
            boxShadowHover: "rgba(0, 0, 0, 0.32)",
        },
        darkTheme: {
            primary: "#FAFAFA",
            secondary: "#2A2926",
            tertiary: "#252525",
            text: "rgba(255, 255, 255, 0.87)",
            subtext: "#AAAAAA",
            background: "#121212",
            card: "#1C1C1C",
            scrollBar: "rgba(255, 255, 255, 0.5)",
            boxShadow: "rgba(0, 0, 0, 0.16)",
            boxShadowHover: "rgba(0, 0, 0, 0.32)",
        },
    },
    fonts: {
        primary: "Roboto, Arial, sans-serif",
    },

    //-- SOCIAL MEDIA SETTINGS -----
    // There are icons available for the following platforms:
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/jeannie-torres/",
        },
        {
            name: "Github",
            url:
                "https://github.com/Jeanniet89/-gatsby-jtportfolio",
        }
    ],

    //-- NAVIGATION SETTINGS -----
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Features",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        },
    },
    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy",
        },
        {
            name: "Imprint",
            url: "/imprint",
        },
    ],
}