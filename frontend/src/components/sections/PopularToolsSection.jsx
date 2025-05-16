import { Box, Container, Grid, Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import ToolCard from '@components/ui/ToolCard';
import SectionHeading from '@components/ui/SectionHeading';

export const PopularToolsSection = ({ popularToolsData }) => {
    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexWrap: 'wrap' }}>
                    <SectionHeading
                        title="Popular Tools"
                        subtitle="Discover our most loved AI tools that are helping thousands of users everyday."
                        marginBottom={0}
                    />

                    <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowRight size={16} />}
                        sx={{
                            mt: { xs: 2, sm: 0 },
                            borderRadius: 28
                        }}
                    >
                        View All Tools
                    </Button>
                </Box>

                <Grid container spacing={4}>
                    {popularToolsData.map((tool) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tool.id}>
                            <ToolCard {...tool} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default PopularToolsSection;