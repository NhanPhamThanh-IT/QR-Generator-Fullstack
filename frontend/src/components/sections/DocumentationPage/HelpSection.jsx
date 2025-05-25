import {
    Button
} from '@mui/material';

// Icons
import { MessageCircle } from 'lucide-react';

// Components
import CTASection from '../CTASection';

// Hooks
import { useRouteNavigation } from '@hooks'

export const DocumentationHelpSection = () => {
    const { navigateTo } = useRouteNavigation();

    return (
        <CTASection
            Icon={MessageCircle}
            title="Need more help?"
            description="Can't find what you're looking for? Our dedicated support team is here to help you with any questions or concerns."
            buttonsChildren={
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                        px: 4,
                        borderRadius: 28,
                        boxShadow: '0 8px 20px rgba(131, 56, 236, 0.3)',
                    }}
                    onClick={() => navigateTo("/contact")}
                >
                    Contact To Support
                </Button>
            }
        />
    )
}

export default DocumentationHelpSection;