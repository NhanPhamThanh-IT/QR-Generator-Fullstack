import {
    Bell,
    Accessibility,
    UserCircle,
    Brush,
} from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "Personalization",
    description: "Unlock the full potential of our tools by tailoring them to your unique needs and preferences.",
};

export const OVERVIEW_SECTION_DATA = {
    title: "Overview of Personalization",
    description: "Discover how personalization enhances your workflow, increases productivity, and creates a more engaging user experience.",
    features: [
        {
            icon: "UserCog",
            title: "Custom Settings",
            description: "Adjust tool settings to fit your workflow and preferences.",
            iconColor: "#FFB300",
        },
        {
            icon: "Palette",
            title: "Theme Selection",
            description: "Choose from a variety of themes to match your style.",
            iconColor: "#7C4DFF",
        },
    ],
};

export const FEATURES_SECTION_DATA = {
    title: "Personalization Features",
    description: "Explore the features that allow you to customize your experience.",
    features: [
        {
            title: "Profile Management",
            description: "Easily manage your profile and preferences.",
            icon: UserCircle,
            color: "#42A5F5",
        },
        {
            title: "Theme Customization",
            description: "Switch between light and dark modes or create your own theme.",
            icon: Brush,
            color: "#FF7043",
        },
        {
            title: "Notification Settings",
            description: "Control how and when you receive notifications.",
            icon: Bell,
            color: "#66BB6A",
        },
        {
            title: "Accessibility Options",
            description: "Adjust font sizes, contrast, and more for better accessibility.",
            icon: Accessibility,
            color: "#AB47BC",
        },
    ],
};
