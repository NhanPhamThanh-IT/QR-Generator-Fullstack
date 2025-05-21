export const HERO_SECTION_DATA = {
    title: "AI Tools Overview",
    subtitle: "Discover our comprehensive suite of AI-powered tools designed to enhance your productivity and creativity",
    backgroundImage: "/images/ai-tools-hero.jpg"
};

import {
    MessageSquare,
    Image,
    Code2,
    FileText,
} from 'lucide-react';

export const aiTools = [
    {
        title: "Text Generation",
        description: "Advanced language models for content creation, summarization, and text analysis",
        icon: MessageSquare,
        color: "#4CAF50"
    },
    {
        title: "Image Processing",
        description: "AI-powered image generation, enhancement, and manipulation tools",
        icon: Image,
        color: "#2196F3"
    },
    {
        title: "Code Assistant",
        description: "Intelligent code completion, debugging, and documentation generation",
        icon: Code2,
        color: "#9C27B0"
    },
    {
        title: "Document Analysis",
        description: "Automated document processing, extraction, and analysis capabilities",
        icon: FileText,
        color: "#FF9800"
    }
]; 