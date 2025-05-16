import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    InputAdornment,
    Chip,
    useTheme,
    Paper,
    Tabs,
    Tab,
    Button,
    Pagination,
} from '@mui/material';
import {
    Search,
    FileSearch,
    MessageSquare,
    Image,
    FileText,
    BarChart3,
    Highlighter,
    ArrowUpDown,
    Bookmark,
    Star,
} from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import ToolCard from '../components/ui/ToolCard';

// Mock data
const toolsData = [
    {
        id: '1',
        title: 'Smart Document Analyzer',
        description: 'Extract key information from documents...',
        imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Document AI',
        isNew: true,
    },
    {
        id: '2',
        title: 'AI Content Generator',
        description: 'Create high-quality content...',
        imageUrl: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Text Generation',
        isPremium: true,
    },
    // ... (các tool còn lại giữ nguyên như cũ)
];

const categories = [
    { name: 'All', icon: FileSearch },
    { name: 'Text Generation', icon: MessageSquare },
    { name: 'Image Processing', icon: Image },
    { name: 'Document AI', icon: FileText },
    { name: 'Data Analysis', icon: BarChart3 },
    { name: 'Text Analysis', icon: Highlighter },
    { name: 'Audio Processing', icon: ArrowUpDown },
];

const Tools = () => {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeTab, setActiveTab] = useState(0);
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    const filteredTools = toolsData.filter((tool) => {
        const matchesSearch =
            tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        if (activeTab === 1) return matchesSearch && matchesCategory && tool.isNew;
        if (activeTab === 2) return matchesSearch && matchesCategory && tool.isPremium;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
    const displayedTools = filteredTools.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setPage(1);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setPage(1);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setPage(1);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box>
            <Box
                sx={{
                    pt: { xs: 6, md: 10 },
                    pb: { xs: 6, md: 8 },
                    background: `linear-gradient(to right, ${theme.palette.primary.main}10, ${theme.palette.primary.light}20)`,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                                AI Tools Library
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                                Explore our collection of AI-powered tools...
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Box>
                                    <Chip
                                        icon={<Star size={16} />}
                                        label="15+ AI Tools"
                                        color="primary"
                                        sx={{
                                            mr: 1.5,
                                            bgcolor: theme.palette.primary.main + '20',
                                            color: theme.palette.primary.main,
                                            border: 'none',
                                        }}
                                    />
                                    <Chip
                                        icon={<Bookmark size={16} />}
                                        label="Free & Premium"
                                        sx={{
                                            bgcolor: theme.palette.secondary.main + '20',
                                            color: theme.palette.secondary.main,
                                            border: 'none',
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h6" gutterBottom fontWeight={600}>
                                    Find the perfect tool
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    Search our collection of AI tools...
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Search tools..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search size={20} color={theme.palette.text.secondary} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '12px',
                                        },
                                    }}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    position: 'sticky',
                                    top: 100,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h6" gutterBottom fontWeight={600}>
                                    Categories
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                                    {categories.map((category) => {
                                        const Icon = category.icon;
                                        return (
                                            <Button
                                                key={category.name}
                                                startIcon={<Icon size={18} />}
                                                variant={selectedCategory === category.name ? 'contained' : 'text'}
                                                color={selectedCategory === category.name ? 'primary' : 'inherit'}
                                                onClick={() => handleCategoryChange(category.name)}
                                                sx={{
                                                    justifyContent: 'flex-start',
                                                    px: 2,
                                                    py: 1,
                                                    borderRadius: '12px',
                                                    '&.MuiButton-text': {
                                                        color: theme.palette.text.primary,
                                                    },
                                                    '&.MuiButton-contained': {
                                                        boxShadow: 'none',
                                                    },
                                                }}
                                            >
                                                {category.name}
                                            </Button>
                                        );
                                    })}
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={9}>
                            <Box sx={{ mb: 4 }}>
                                <Tabs value={activeTab} onChange={handleTabChange}>
                                    <Tab label="All Tools" />
                                    <Tab label="New" />
                                    <Tab label="Premium" />
                                </Tabs>
                            </Box>

                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1">
                                    Showing <strong>{displayedTools.length}</strong> of <strong>{filteredTools.length}</strong> tools
                                </Typography>
                            </Box>

                            {displayedTools.length > 0 ? (
                                <>
                                    <Grid container spacing={4}>
                                        {displayedTools.map((tool) => (
                                            <Grid item xs={12} sm={6} key={tool.id}>
                                                <ToolCard {...tool} />
                                            </Grid>
                                        ))}
                                    </Grid>

                                    {totalPages > 1 && (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                                            <Pagination
                                                count={totalPages}
                                                page={page}
                                                onChange={handlePageChange}
                                                color="primary"
                                                size="large"
                                                sx={{
                                                    '& .MuiPaginationItem-root': {
                                                        borderRadius: '8px',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    )}
                                </>
                            ) : (
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        border: '1px dashed',
                                        borderColor: 'divider',
                                    }}
                                >
                                    <Search size={48} color={theme.palette.text.secondary} style={{ opacity: 0.5, marginBottom: 16 }} />
                                    <Typography variant="h6" gutterBottom>
                                        No tools found
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Try adjusting your search or filter.
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        sx={{ mt: 2, borderRadius: 28 }}
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedCategory('All');
                                            setActiveTab(0);
                                        }}
                                    >
                                        Clear filters
                                    </Button>
                                </Paper>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Tools;
