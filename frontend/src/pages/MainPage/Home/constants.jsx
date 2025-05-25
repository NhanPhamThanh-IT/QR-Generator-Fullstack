export const HERO_SECTION_DATA = {
    title: "Powerful AI Tools for Your Everyday Tasks",
    description: "Simplify complex tasks, boost productivity, and unlock new possibilities with our cutting-edge AI tools.",
    primaryButtonText: "Explore Tools",
    primaryButtonLink: "/tools",
    secondaryButtonText: "Learn More",
    secondaryButtonLink: "/docs",
    cardTitle: "AI-Powered Tools",
    cardDescription: "Unlock the power of artificial intelligence with our suite of tools designed to enhance productivity and creativity.",
    cardButtonText: "Get Started",
    cardButtonLink: "/tools"
}

import { Brain, Cpu, MessageSquare, Zap } from 'lucide-react';

export const featuresData = [
    {
        title: 'Advanced AI Algorithms',
        description: 'Our tools leverage state-of-the-art AI algorithms to deliver high-quality results and insights.',
        icon: Brain,
        accentColor: '#3a86ff',
    },
    {
        title: 'Fast Processing',
        description: 'Process large amounts of data in seconds with our optimized AI processing infrastructure.',
        icon: Zap,
        accentColor: '#ffbe0b',
    },
    {
        title: 'Smart Automation',
        description: 'Automate repetitive tasks and workflows with intelligent AI assistants and tools.',
        icon: Cpu,
        accentColor: '#8338ec',
    },
    {
        title: 'Natural Language Processing',
        description: 'Advanced NLP capabilities for text analysis, summarization, and content generation.',
        icon: MessageSquare,
        accentColor: '#2cb67d',
    },
];

export const popularToolsData = [
    {
        id: '1',
        title: 'Smart Document Analyzer',
        description: 'Extract key information from documents, contracts, and forms using intelligent AI processing.',
        imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Document AI',
        isNew: true,
    },
    {
        id: '2',
        title: 'AI Content Generator',
        description: 'Create high-quality content for blogs, social media, and marketing with advanced language models.',
        imageUrl: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Text Generation',
        isPremium: true,
    },
    {
        id: '3',
        title: 'Image Enhancer',
        description: 'Automatically enhance and upscale images using AI-powered image processing algorithms.',
        imageUrl: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Image Processing',
    },
];