export const HERO_SECTION_DATA = {
    title: "Image Processing",
    subtitle: "Transform and enhance your images with our advanced AI-powered image processing tools",
    backgroundImage: "/images/image-processing-hero.jpg"
};

import {
    Wand2,
    Sparkles,
    Palette,
    Camera,
} from 'lucide-react';

export const features = [
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
]; 