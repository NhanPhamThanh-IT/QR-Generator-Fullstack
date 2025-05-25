export const REQUIREMENTS_SECTION_DATA = {
    title: "Quick Tips for Web Interface",
    requirements: [
        'Keep your browser updated to the latest version',
        'Clear browser cache regularly for optimal performance',
        'Ensure JavaScript is enabled in your browser',
        'Use a modern, supported browser (Chrome, Firefox, Safari, Edge)',
    ]
};

export const HERO_SECTION_DATA = {
    title: "Common Web Interface Issues",
    description: "Find quick solutions to common issues you might encounter while using our web interface",
}

export const ISSUES_SECTION_DATA = {
    issues: [
        {
            category: "Interface Issues",
            issues: [
                {
                    title: "Page Not Loading",
                    description: "Website interface fails to load or displays blank screen",
                    solution: "Check your browser compatibility and clear cache. Ensure you have a stable internet connection.",
                    steps: [
                        "Clear browser cache and cookies",
                        "Try a different browser",
                        "Check internet connection",
                        "Disable browser extensions temporarily"
                    ]
                },
                {
                    title: "UI Elements Not Responding",
                    description: "Buttons, forms, or interactive elements not working properly",
                    solution: "Ensure JavaScript is enabled and check for any console errors.",
                    steps: [
                        "Enable JavaScript in your browser",
                        "Check browser console for errors",
                        "Refresh the page",
                        "Try in incognito/private mode"
                    ]
                }
            ]
        },
        {
            category: "Display Issues",
            issues: [
                {
                    title: "Layout Problems",
                    description: "Website layout appears broken or misaligned",
                    solution: "Check your browser zoom level and screen resolution settings.",
                    steps: [
                        "Reset browser zoom to 100%",
                        "Check screen resolution",
                        "Clear browser cache",
                        "Try different browser window size"
                    ]
                },
                {
                    title: "Images Not Loading",
                    description: "Images or media content fails to display properly",
                    solution: "Check your internet connection and browser settings for media content.",
                    steps: [
                        "Check internet connection",
                        "Clear browser cache",
                        "Disable ad blockers",
                        "Check browser media settings"
                    ]
                }
            ]
        },
        {
            category: "Functionality Issues",
            issues: [
                {
                    title: "Form Submission Errors",
                    description: "Unable to submit forms or process user input",
                    solution: "Check form validation and ensure all required fields are filled correctly.",
                    steps: [
                        "Fill all required fields",
                        "Check input format",
                        "Clear form and try again",
                        "Check browser console for errors"
                    ]
                },
                {
                    title: "Search Not Working",
                    description: "Search functionality returns no results or errors",
                    solution: "Check your search query and ensure proper input format.",
                    steps: [
                        "Verify search terms",
                        "Check for special characters",
                        "Try different keywords",
                        "Clear search history"
                    ]
                }
            ]
        }
    ]
}

export const HELPS_SECTION_DATA = {
    link: "/contact",
    title: "Need More Help?",
    description: "If you're still experiencing issues with our web interface, our support team is here to help. Contact us through our support portal or check our detailed documentation for more information.",
};