import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    CardActions,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    IconButton,
    Pagination,
    InputAdornment,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Avatar,
    Divider,
    Skeleton,
    Alert,
    Snackbar
} from '@mui/material';
import {
    Search as SearchIcon,
    Download as DownloadIcon,
    Delete as DeleteIcon,
    QrCode as QrCodeIcon,
    Link as LinkIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    TextFields as TextIcon,
    Refresh as RefreshIcon
} from '@mui/icons-material';
import HeroSection from '../../components/pages/common/HeroSection';
import {
    getQRHistory,
} from "../../services/qrHistoryService";

const QRHistoryPage = () => {
    const [qrHistory, setQrHistory] = useState([]);
    const [filteredHistory, setFilteredHistory] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [deleteDialog, setDeleteDialog] = useState({ open: false, item: null });
    const [error, setError] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const itemsPerPage = 9;

    // Fetch QR History from backend
    useEffect(() => {
        fetchQRHistory();
    }, []);

    const fetchQRHistory = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await getQRHistory();

            if (response) {
                setQrHistory(response);
                setFilteredHistory(response);
            } else {
                setError('Failed to fetch QR history');
            }
        } catch (err) {
            console.error('Error fetching QR history:', err);
            setError(err.response?.data?.message || 'Failed to fetch QR history');
        } finally {
            setLoading(false);
        }
    };

    // Filter and search
    useEffect(() => {
        let filtered = qrHistory;

        if (filterType !== 'all') {
            filtered = filtered.filter(item => item.data_type.toLowerCase() === filterType.toLowerCase());
        }

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.input.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.data_type.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredHistory(filtered);
        setCurrentPage(1);
    }, [searchTerm, filterType, qrHistory]);

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredHistory.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);

    const getTypeIcon = (type) => {
        switch (type.toLowerCase()) {
            case 'url': return <LinkIcon />;
            case 'email': return <EmailIcon />;
            case 'phone': return <PhoneIcon />;
            case 'text': return <TextIcon />;
            default: return <QrCodeIcon />;
        }
    };

    const getTypeColor = (type) => {
        switch (type.toLowerCase()) {
            case 'url': return 'primary';
            case 'email': return 'warning';
            case 'phone': return 'success';
            case 'text': return 'info';
            default: return 'default';
        }
    };

    const handleDownload = async (qrCode, content, id) => {
        try {
            // If qrCode is a URL, fetch it first
            if (qrCode.startsWith('http')) {
                const response = await fetch(qrCode);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement('a');
                link.href = url;
                link.download = `qr-code-${id}-${Date.now()}.png`;
                link.click();

                window.URL.revokeObjectURL(url);
            } else {
                // Base64 image
                const link = document.createElement('a');
                link.href = qrCode;
                link.download = `qr-code-${id}-${Date.now()}.png`;
                link.click();
            }

            setSnackbar({
                open: true,
                message: 'QR code downloaded successfully!',
                severity: 'success'
            });
        } catch (error) {
            console.error('Error downloading QR code:', error);
            setSnackbar({
                open: true,
                message: 'Failed to download QR code',
                severity: 'error'
            });
        }
    };

    const handleDeleteClick = (item) => {
        setDeleteDialog({ open: true, item });
    };

    const handleDeleteConfirm = async () => {
        if (!deleteDialog.item) return;

        try {
            const response = await axios.delete(`${API_BASE_URL}/qr-history/${deleteDialog.item.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });

            if (response.data.success) {
                const updated = qrHistory.filter(item => item.id !== deleteDialog.item.id);
                setQrHistory(updated);
                setSnackbar({
                    open: true,
                    message: 'QR code deleted successfully!',
                    severity: 'success'
                });
            } else {
                throw new Error(response.data.message || 'Failed to delete QR code');
            }
        } catch (error) {
            console.error('Error deleting QR code:', error);
            setSnackbar({
                open: true,
                message: error.response?.data?.message || 'Failed to delete QR code',
                severity: 'error'
            });
        } finally {
            setDeleteDialog({ open: false, item: null });
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const truncateContent = (content, maxLength = 50) => {
        return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    };

    const handleRefresh = () => {
        fetchQRHistory();
    };

    return (
        <>
            <HeroSection />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Header */}
                <Box textAlign="center" mb={4}>
                    <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                        QR Code History
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Manage and download your previously generated QR codes
                    </Typography>
                </Box>

                {/* Error Alert */}
                {error && (
                    <Alert
                        severity="error"
                        sx={{ mb: 3 }}
                        action={
                            <Button color="inherit" size="small" onClick={handleRefresh}>
                                <RefreshIcon sx={{ mr: 1 }} />
                                Retry
                            </Button>
                        }
                    >
                        {error}
                    </Alert>
                )}

                {/* Controls */}
                <Box mb={4}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                placeholder="Search by content or type..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FormControl fullWidth>
                                <InputLabel>Filter by Type</InputLabel>
                                <Select
                                    value={filterType}
                                    label="Filter by Type"
                                    onChange={(e) => setFilterType(e.target.value)}
                                >
                                    <MenuItem value="all">All Types</MenuItem>
                                    <MenuItem value="url">URL</MenuItem>
                                    <MenuItem value="text">Text</MenuItem>
                                    <MenuItem value="email">Email</MenuItem>
                                    <MenuItem value="phone">Phone</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={handleRefresh}
                                disabled={loading}
                                startIcon={<RefreshIcon />}
                            >
                                Refresh
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* QR History Grid */}
                {loading ? (
                    <Grid container spacing={3}>
                        {[...Array(6)].map((_, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Card>
                                    <CardContent>
                                        <Box display="flex" flexDirection="column" alignItems="center">
                                            <Skeleton variant="rectangular" width={120} height={120} sx={{ mb: 2 }} />
                                            <Skeleton variant="text" width="80%" />
                                            <Skeleton variant="text" width="60%" />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : currentItems.length > 0 ? (
                    <Grid container spacing={3}>
                        {currentItems.map((item) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                                <Card
                                    elevation={3}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.2s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        {/* QR Code Image */}
                                        <Box display="flex" justifyContent="center" mb={2}>
                                            <Avatar
                                                src={item.qrCode}
                                                sx={{
                                                    width: 120,
                                                    height: 120,
                                                    border: '2px solid #f0f0f0'
                                                }}
                                                variant="rounded"
                                            />
                                        </Box>

                                        {/* Type Badge */}
                                        <Box display="flex" justifyContent="center" mb={2}>
                                            <Chip
                                                icon={getTypeIcon(item.data_type)}
                                                label={item.data_type}
                                                color={getTypeColor(item.data_type)}
                                                size="small"
                                            />
                                        </Box>

                                        {/* Content */}
                                        <Typography
                                            variant="body2"
                                            color="text.primary"
                                            textAlign="center"
                                            mb={1}
                                            sx={{
                                                fontWeight: 500,
                                                minHeight: '2.5em',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                            title={item.input}
                                        >
                                            {item.input}
                                        </Typography>

                                        <Divider sx={{ my: 1 }} />

                                        {/* Date */}
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            display="block"
                                            textAlign="center"
                                        >
                                            {formatDate(item.timestamp)}
                                        </Typography>
                                    </CardContent>

                                    <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleDownload(item.qrCode, item.input, item.id)}
                                            title="Download QR Code"
                                        >
                                            <DownloadIcon />
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDeleteClick(item)}
                                            title="Delete QR Code"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Box textAlign="center" py={8}>
                        <QrCodeIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
                        <Typography variant="h5" color="text.secondary" gutterBottom>
                            No QR Codes Found
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {qrHistory.length === 0
                                ? "You haven't created any QR codes yet. Create your first QR code!"
                                : 'No QR codes match your current filters.'
                            }
                        </Typography>
                    </Box>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={(event, value) => setCurrentPage(value)}
                            color="primary"
                            size="large"
                        />
                    </Box>
                )}

                {/* Delete Confirmation Dialog */}
                <Dialog
                    open={deleteDialog.open}
                    onClose={() => setDeleteDialog({ open: false, item: null })}
                >
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <Typography>
                            Are you sure you want to delete this QR code?
                        </Typography>
                        {deleteDialog.item && (
                            <Typography variant="body2" color="text.secondary" mt={1}>
                                Content: {truncateContent(deleteDialog.item.input)}
                            </Typography>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => setDeleteDialog({ open: false, item: null })}
                            color="inherit"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDeleteConfirm}
                            color="error"
                            variant="contained"
                        >
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Snackbar for notifications */}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert
                        onClose={() => setSnackbar({ ...snackbar, open: false })}
                        severity={snackbar.severity}
                        sx={{ width: '100%' }}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Container>
        </>
    );
};

export default QRHistoryPage;