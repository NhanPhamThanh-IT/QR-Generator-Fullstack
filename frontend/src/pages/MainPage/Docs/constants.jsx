// Icons
import {
    Book,
    FileText,
    Layers,
    HelpCircle,
} from 'lucide-react';

// Constants
import { routePaths } from '@constants/routePaths';

// Build full route paths
const buildPath = (...paths) => paths.join('/').replace(/\/+/g, '/');
const baseRoute = routePaths.docs;
const gettingStartedRoutes = buildPath(baseRoute, '/', routePaths.docsGettingStarted);
const coreFeaturesRoutes = buildPath(baseRoute, '/', routePaths.docsCoreFeatures);
const advancedGuidesRoutes = buildPath(baseRoute, '/', routePaths.docsAdvancedGuides);
const troubleshootingRoutes = buildPath(baseRoute, '/', routePaths.docsTroubleshooting);

export const HERO_SECTION_DATA = {
    title: 'Documentation',
    description: 'Everything you need to know about our AI tools and how to use them effectively.',
    cardTitle: 'Documentation Guide',
    cardDescription: 'Access our comprehensive documentation to learn how to use our tools effectively, from basic tutorials to advanced features.', cardButtonText: 'Start Reading',
    cardButtonLink: buildPath(gettingStartedRoutes, '/', routePaths.docsIntroduction),
}

export const DOCUMENTS_SECTION_DATA = {
    title: 'Explore Our Documentation',
    description: 'Explore our extensive documentation to get the most out of our AI tools. Whether you are a beginner or an advanced user, we have resources to help you.',
    documents: [        {
            title: 'Getting Started',
            icon: Book,
            items: [
                { title: 'Introduction', path: buildPath(gettingStartedRoutes, '/', routePaths.docsIntroduction) },
                { title: 'Quick Start Guide', path: buildPath(gettingStartedRoutes, '/', routePaths.docsQuickStart) },
                { title: 'Installation', path: buildPath(gettingStartedRoutes, '/', routePaths.docsInstallation) },
            ],
        },        {
            title: 'Core Features',
            icon: FileText,
            items: [
                { title: 'AI Tools Overview', path: buildPath(coreFeaturesRoutes, '/', routePaths.docsAITools) },
                { title: 'Text Generation', path: buildPath(coreFeaturesRoutes, '/', routePaths.docsTextGeneration) },
                { title: 'Image Processing', path: buildPath(coreFeaturesRoutes, '/', routePaths.docsImageProcessing) },
            ],
        },        {
            title: 'Advanced Guides',
            icon: Layers,
            items: [
                {
                    title: 'Using Multiple Tools Together',
                    path: buildPath(advancedGuidesRoutes, '/', routePaths.docsToolCombinations),
                },
                {
                    title: 'Maximizing Accuracy',
                    path: buildPath(advancedGuidesRoutes, '/', routePaths.docsMaxAccuracy),
                },
                {
                    title: 'Personalized Settings',
                    path: buildPath(advancedGuidesRoutes, '/', routePaths.docsPersonalization),
                },
            ],
        },        {
            title: 'Troubleshooting',
            icon: HelpCircle,
            items: [
                { title: 'Common Issues', path: buildPath(troubleshootingRoutes, '/', routePaths.docsCommonIssues) },
                { title: 'Error Codes', path: buildPath(troubleshootingRoutes, '/', routePaths.docsErrorCodes) },
                { title: 'FAQ', path: buildPath(troubleshootingRoutes, '/', routePaths.docsFAQ) },
            ],
        },
    ]
};