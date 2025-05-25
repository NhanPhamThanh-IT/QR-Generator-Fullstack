import {
    FileText,
    MessageSquare,
    Sparkles,
    Brain,
    Wand2,
    BookOpen
} from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "Text Generation",
    description: "Harness the power of advanced language models for content creation, summarization, and text analysis",
    backgroundImage: "/images/text-generation-hero.jpg",
};

export const OVERVIEW_SECTION_DATA = {
    title: "Advanced Text Generation",
    description: "Our text generation tools combine cutting-edge AI technology with powerful language models to help you create, analyze, and optimize text content with unprecedented precision.",
    features: [
        {
            icon: Wand2,
            title: "Advanced Language Models",
            description: "Our platform utilizes cutting-edge language models to provide powerful text generation and analysis capabilities. From content creation to translation, our AI ensures high-quality, contextually appropriate results.",
            iconColor: "#4CAF50"
        },
        {
            icon: BookOpen,
            title: "Comprehensive Text Tools",
            description: "Access a complete suite of text processing tools including summarization, translation, and analysis. Our AI-powered solutions help you create, optimize, and understand text content with ease.",
            iconColor: "#9C27B0"
        }
    ]
}

export const FEATURES_SECTION_DATA = {
    title: "Key Features",
    description: "Discover the powerful capabilities of our text generation tools",
    features: [
        {
            title: "Content Creation",
            description: "Generate high-quality articles, blog posts, and marketing copy with AI assistance",
            icon: FileText,
            color: "#4CAF50"
        },
        {
            title: "Text Summarization",
            description: "Automatically condense long documents while maintaining key information",
            icon: MessageSquare,
            color: "#2196F3"
        },
        {
            title: "Language Translation",
            description: "Accurate and natural-sounding translations across multiple languages",
            icon: Sparkles,
            color: "#9C27B0"
        },
        {
            title: "Text Analysis",
            description: "Advanced sentiment analysis and content optimization tools",
            icon: Brain,
            color: "#FF9800"
        }
    ]
};