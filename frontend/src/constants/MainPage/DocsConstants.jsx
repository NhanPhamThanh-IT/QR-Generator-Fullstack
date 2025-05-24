export const HERO_SECTION_DATA = {
    title: 'Documentation',
    description: 'Everything you need to know about our AI tools and how to use them effectively.',
    cardTitle: 'Documentation Guide',
    cardDescription: 'Access our comprehensive documentation to learn how to use our tools effectively, from basic tutorials to advanced features.',
    cardButtonText: 'Start Reading',
    cardButtonLink: '/docs/introduction',
}

import {
    Book,
    FileText,
    Code,
    HelpCircle,
} from 'lucide-react';

export const documentationSections = [
    {
        title: 'Getting Started',
        icon: Book,
        items: [
            { title: 'Introduction', path: '/docs/introduction' },
            { title: 'Quick Start Guide', path: '/docs/quick-start' },
            { title: 'Installation', path: '/docs/installation' },
        ],
    },
    {
        title: 'Core Features',
        icon: FileText,
        items: [
            { title: 'AI Tools Overview', path: '/docs/ai-tools' },
            { title: 'Text Generation', path: '/docs/text-generation' },
            { title: 'Image Processing', path: '/docs/image-processing' },
        ],
    },
    {
        title: 'API Reference',
        icon: Code,
        items: [
            { title: 'Authentication', path: '/docs/api/auth' },
            { title: 'Endpoints', path: '/docs/api/endpoints' },
            { title: 'Rate Limits', path: '/docs/api/rate-limits' },
        ],
    },
    {
        title: 'Troubleshooting',
        icon: HelpCircle,
        items: [
            { title: 'Common Issues', path: '/docs/troubleshooting/common-issues' },
            { title: 'Error Codes', path: '/docs/troubleshooting/errors-code' },
            { title: 'FAQ', path: '/docs/troubleshooting/faq' },
        ],
    },
];

export const CTA_SECTION_DATA = {
    title: "Need more help?",
    description: "Can't find what you're looking for? Our dedicated support team is here to help you with any questions or concerns.",
    buttonText: "Contact To Support",
    buttonLink: "/contact"
};