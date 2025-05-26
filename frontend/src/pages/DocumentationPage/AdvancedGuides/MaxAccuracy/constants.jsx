import {
    Settings,
    Database,
    CheckCircle,
    Lightbulb,
} from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "Max Accuracy",
    description: "Learn how to achieve maximum accuracy with our tools.",
};

export const OVERVIEW_SECTION_DATA = {
    title: "Overview of Max Accuracy",
    description: "Understand the principles and importance of achieving maximum accuracy.",
    features: [
        {
            icon: "Microscope",
            title: "Key Principles",
            description: "Explore the fundamental concepts that contribute to high accuracy.",
            iconColor: "#4CAF50",
        },
        {
            icon: "LineChart",
            title: "Importance",
            description: "Learn why maximizing accuracy is crucial for reliable results.",
            iconColor: "#2196F3",
        },
    ],
};

export const FEATURES_SECTION_DATA = {
    title: "Tools and Techniques",
    description: "Discover the tools and techniques available to enhance accuracy.",
    features: [
        {
            title: "Advanced Configuration",
            description: "Details on configuring settings for optimal performance.",
            icon: Settings,
            color: "#FF9800",
        },
        {
            title: "Data Preparation",
            description: "Best practices for preparing data to improve accuracy.",
            icon: Database,
            color: "#9C27B0",
        },
        {
            title: "Validation Methods",
            description: "Techniques for validating your results.",
            icon: CheckCircle,
            color: "#F44336",
        },
        {
            title: "Troubleshooting",
            description: "Tips for identifying and resolving accuracy issues.",
            icon: Lightbulb,
            color: "#00BCD4",
        },
    ],
};
