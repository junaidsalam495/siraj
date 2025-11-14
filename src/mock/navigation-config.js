import { Book, Trees, Sunset, Zap } from "lucide-react";


export const navigationConfig = {
    logo: {
        url: "/",
        src: "/images/white-logo.png",
        alt: "logo",
        title: "Shadcnblocks.com",
    },
    headerMenu: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        {
            title: "Services",
            url: "#",
            items: [
                {
                    title: "SAAS DEVELOPMENT",
                    description: "Use insight to improve marketing strategy",
                    icon: "book",
                    url: "#",
                },
                {
                    title: "WEB DEVELOPMENT",
                    description: "Never miss calls with relevant routing",
                    icon: "trees",
                    url: "#",
                },
                {
                    title: "SEO",
                    description: "Combine virtual number types for various ads",
                    icon: "sunset",
                    url: "#",
                },
                {
                    title: "PR MARKETING",
                    description: "Analyze call data to boost conversion",
                    icon: "zap",
                    url: "#",
                },
            ],
        },
        { title: "Privacy Policy", url: "/privacy-policy" },
        { title: "Blog", url: "/blog" },
        { title: "CaseStudies", url: "/case-studies" },
    ],
    footer: {
        tagline:
            "Car Is Where Early Adopters And Innovation Seekers Find Get the latest SEO tips and software Lively Imaginative Tech.",

        menuItems: [
            {
                title: "Quick links",
                links: [
                    { text: "About Us", url: "#" },
                    { text: "Meet Our Team", url: "#" },
                    { text: "Our Projects", url: "#" },
                    { text: "Help & FAQs", url: "#" },
                    { text: "Contact Us", url: "#" },
                ],
            },
            {
                title: "Services",
                links: [
                    { text: "Web Development", url: "#" },
                    { text: "Business Development", url: "#" },
                    { text: "Cloud services", url: "#" },
                    { text: "Product Management", url: "#" },
                    { text: "UI/UX Design", url: "#" },
                ],
            },
            {
                title: "Contact Us",
                links: [
                    { text: "4140 Parker Rd. Allentown, New Mexico 31134", url: "#" },
                    { text: "(000) 000-0000", url: "#" },
                    { text: "info@gmail.com", url: "#" },
                ],
            },
        ],

        bottomLinks: [
            { text: "Terms and Conditions", url: "#" },
            { text: "Privacy Policy", url: "#" },
        ],
    },
    contact: { title: "Contact Us", url: "/contact" },
};


export const iconMap = {
    book: Book,
    trees: Trees,
    sunset: Sunset,
    zap: Zap,
};
