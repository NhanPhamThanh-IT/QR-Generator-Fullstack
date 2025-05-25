export const HERO_SECTION_DATA = {
    title: 'Welcome to Our AI Tools Platform',
    description: 'Our platform offers advanced AI capabilities designed to transform how you work, create, and interact with technology.',
    backgroundImage: '/images/documentation-hero.jpg',
    leftChildren: null,
    rightChildren: null
}

import {
    Rocket,
    Zap,
    Shield,
    Code,
} from 'lucide-react';

export const OVERVIEW_SECTION_DATA = {
    title: "Overview",
    description: "Our AI Tools Platform provides a comprehensive suite of tools designed to enhance productivity, creativity, and efficiency. Whether you\'re a developer, designer, or business professional, our platform has something for everyone.",
    features: [
        {
            icon: "BookOpen",
            iconColorKey: "primary.main",
            title: "What is AI Tools Platform?",
            description: "Our platform is a comprehensive suite of AI-powered tools designed to help you work smarter, not harder. From text generation to image processing, we provide the tools you need to enhance your productivity and creativity."
        },
        {
            icon: "Rocket",
            iconColorKey: "secondary.main",
            title: "Why Choose Our Platform?",
            description: "With state-of-the-art AI technology, intuitive interfaces, and comprehensive documentation, we make it easy for you to leverage the power of artificial intelligence in your projects."
        }
    ]
};

export const FEATURES_SECTION_DATA = {
    title: "Key Features",
    description: "Our platform offers a range of powerful AI tools designed to streamline your workflow and enhance productivity.",
    features: [
        {
            icon: Rocket,
            title: 'Powerful AI Tools',
            description: 'Access a suite of advanced AI tools designed to enhance your productivity and creativity.',
            color: '#6366F1',
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Experience rapid processing and real-time results with our optimized AI infrastructure.',
            color: '#F59E0B',
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Your data is protected with enterprise-grade security and reliable uptime.',
            color: '#10B981',
        },
        {
            icon: Code,
            title: 'Developer Friendly',
            description: 'Comprehensive API documentation and SDKs for seamless integration.',
            color: '#3B82F6',
        },
    ]
}

export const GETTING_STARTED_SECTION_DATA = {
    title: "Getting Started",
    description: "Follow these steps to begin your journey with our AI tools platform."
};