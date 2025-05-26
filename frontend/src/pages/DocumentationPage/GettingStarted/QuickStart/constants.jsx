export const HERO_SECTION_DATA = {
    title: 'Quick Start Guide',
    description: 'Get up and running with our platform in just a few steps. This guide will help you set up your environment and start using our features quickly.',
};

import {
    Terminal,
    Package,
    Play,
} from 'lucide-react';

export const steps = [
    {
        title: "Installation",
        description: "Install our package using npm or yarn",
        icon: Package,
        code: "npm install ai-tools-platform\n# or\nyarn add ai-tools-platform"
    },
    {
        title: "Configuration",
        description: "Set up your API key and configuration",
        icon: Terminal,
        code: "import { AITools } from 'ai-tools-platform';\n\nconst aiTools = new AITools({\n  apiKey: 'your-api-key'\n});"
    },
    {
        title: "Start Using",
        description: "Begin using our tools in your project",
        icon: Play,
        code: "// Example usage\nconst result = await aiTools.text.generate({\n  prompt: 'Hello, world!'\n});"
    }
];