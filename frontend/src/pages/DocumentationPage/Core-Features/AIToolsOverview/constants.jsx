import {
    MessageSquare,
    Image,
    Code2,
    FileText,
    Brain,
    Sparkles
} from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "AI Tools Overview",
    description: "Discover our comprehensive suite of AI-powered tools designed to enhance your productivity and creativity",
    backgroundImage: "/images/ai-tools-hero.jpg"
};

export const FEATURES_SECTION_DATA = {
    title: "Available AI Tools",
    description: "Explore our range of AI-powered tools designed to enhance your productivity and streamline your workflow",
    features: [
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
    ]
};

export const OVERVIEW_SECTION_DATA = {
    title: "AI Tools Platform",
    description: "Our platform offers a comprehensive suite of AI-powered tools designed to streamline your workflow and enhance productivity.",
    features: [
        {
            icon: Brain,
            title: "Advanced AI Capabilities",
            description: "Our platform leverages cutting-edge artificial intelligence to provide powerful tools for text generation, image processing, code assistance, and document analysis. Each tool is designed to enhance your productivity and creativity.",
            iconColor: "#4CAF50"
        },
        {
            icon: Sparkles,
            title: "State-of-the-Art Technology",
            description: "Our image processing tools leverage advanced AI models and neural networks to deliver exceptional results. From generating new images to enhancing existing ones, our technology ensures high-quality output for all your visual needs.",
            iconColor: "#9C27B0"
        }
    ]
}