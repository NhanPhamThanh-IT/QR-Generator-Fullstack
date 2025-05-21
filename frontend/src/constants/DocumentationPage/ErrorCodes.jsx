import { AlertTriangle } from 'lucide-react';

export const HERO_SECTION_DATA = {
    title: "Error Codes & Troubleshooting",
    description: "Find solutions to common errors and issues you might encounter while using our AI tools platform.",
    icon: AlertTriangle,
};

export const errorCodes = [
    {
        code: "AUTH_001",
        title: "Authentication Error",
        description: "Unable to authenticate with the API",
        solution: "Check your API key and ensure it's properly configured in your environment variables.",
        severity: "error"
    },
    {
        code: "API_002",
        title: "Rate Limit Exceeded",
        description: "You've exceeded the API rate limit",
        solution: "Implement rate limiting in your application or upgrade your plan for higher limits.",
        severity: "warning"
    },
    {
        code: "REQ_003",
        title: "Invalid Request Format",
        description: "The request body format is incorrect",
        solution: "Verify that your request follows the API documentation format and includes all required fields.",
        severity: "warning"
    },
    {
        code: "SYS_004",
        title: "Service Unavailable",
        description: "The AI service is temporarily unavailable",
        solution: "Please try again later or check our status page for updates.",
        severity: "error"
    }
];