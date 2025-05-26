import {
    GitMerge,
    Split,
    Plug,
    Settings2,
} from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "Tool Combinations",
    description: "Discover how to combine AI tools to create powerful and efficient workflows.",
};

export const OVERVIEW_SECTION_DATA = {
    title: "Overview of Tool Combinations",
    description: "Learn why and how AI tools can be combined to solve complex problems.",
    features: [
        {
            icon: "Layers",
            title: "Benefits of Combining",
            description: "Increase efficiency, expand capabilities, and optimize your workflow by combining tools.",
            iconColor: "#4CAF50",
        },
        {
            icon: "Workflow",
            title: "Real-world Applications",
            description: "See examples of workflows that leverage multiple tools together.",
            iconColor: "#2196F3",
        },
    ],
};

export const FEATURES_SECTION_DATA = {
    title: "Popular Combination Patterns",
    description: "Explore common ways to combine tools and tips for optimization.",
    features: [
        {
            title: "Tool Pipelines",
            description: "Automate processes by connecting multiple tools in sequence.",
            icon: GitMerge,
            color: "#FF9800",
        },
        {
            title: "Parallel Combinations",
            description: "Run several tools simultaneously to save time.",
            icon: Split,
            color: "#9C27B0",
        },
        {
            title: "API Integrations",
            description: "Connect tools via APIs to extend their functionality.",
            icon: Plug,
            color: "#F44336",
        },
        {
            title: "Custom Workflows",
            description: "Design workflows tailored to your unique needs.",
            icon: Settings2,
            color: "#00BCD4",
        },
    ],
};
