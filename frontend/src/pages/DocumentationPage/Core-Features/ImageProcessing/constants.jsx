import {
    Wand2,
    Sparkles,
    Palette,
    Camera,
    Brain,
    Image
} from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "Image Processing",
    description: "Transform and enhance your images with our advanced AI-powered image processing tools",
    backgroundImage: "/images/image-processing-hero.jpg"
};

export const FEATURES_SECTION_DATA = {
    title: "Key Features",
    description: "Discover the powerful capabilities of our image processing tools",
    features: [
        {
            title: "Image Generation",
            description: "Create stunning images from text descriptions using advanced AI models",
            icon: Wand2,
            color: "#4CAF50"
        },
        {
            title: "Image Enhancement",
            description: "Automatically improve image quality, remove noise, and enhance details",
            icon: Sparkles,
            color: "#2196F3"
        },
        {
            title: "Style Transfer",
            description: "Apply artistic styles to your images while preserving content",
            icon: Palette,
            color: "#9C27B0"
        },
        {
            title: "Object Detection",
            description: "Identify and analyze objects within images with high accuracy",
            icon: Camera,
            color: "#FF9800"
        }
    ]
};

export const OVERVIEW_SECTION_DATA = {
    title: "Advanced Image Processing",
    description: "Our image processing tools combine cutting-edge AI technology with powerful algorithms to help you create, enhance, and analyze images with unprecedented precision.",
    features: [
        {
            icon: Brain,
            title: "Advanced Image AI",
            description: "Our platform leverages state-of-the-art AI models to provide powerful image processing capabilities. From generating new images to enhancing existing ones, our technology ensures high-quality results for all your visual needs.",
            iconColor: "#4CAF50"
        },
        {
            icon: Image,
            title: "Comprehensive Image Tools",
            description: "Access a full suite of image processing tools including style transfer, object detection, and image enhancement. Our AI-powered solutions help you achieve professional-quality results with minimal effort.",
            iconColor: "#9C27B0"
        }
    ]
};