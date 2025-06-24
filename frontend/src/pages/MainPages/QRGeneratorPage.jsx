import React, { useState, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    MenuItem,
    Slider,
    Snackbar,
    Alert,
    CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import QrCodeIcon from '@mui/icons-material/QrCode';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

const GradientButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 10,
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(59, 123, 213, 0.15)',
    '&:hover': {
        background: 'linear-gradient(120deg, #2575fc 0%, #6a11cb 100%)',
    },
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
    borderRadius: 16,
    padding: theme.spacing(4),
    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.10)',
    background: '#fff',
}));

const DATA_TYPES = [
    { value: 'text', label: 'Text' },
    { value: 'url', label: 'URL' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'sms', label: 'SMS' },
];

const OUTPUT_FORMATS = [
    { value: 'png', label: 'PNG' },
    { value: 'svg', label: 'SVG' },
];

const DEFAULT_COLOR = '#2575fc';
const DEFAULT_BG_COLOR = '#fff';

export default function QRGeneratorPage() {
    const [dataType, setDataType] = useState('text');
    const [input, setInput] = useState('');
    const [qrColor, setQrColor] = useState(DEFAULT_COLOR);
    const [bgColor, setBgColor] = useState(DEFAULT_BG_COLOR);
    const [size, setSize] = useState(256);
    const [cornerRadius, setCornerRadius] = useState(0);
    const [logo, setLogo] = useState(null);
    const [outputFormat, setOutputFormat] = useState('png');
    const [loading, setLoading] = useState(false);
    const [qrValue, setQrValue] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const qrRef = useRef();

    // Handle input changes
    const handleInputChange = (e) => setInput(e.target.value);
    const handleDataTypeChange = (e) => {
        setDataType(e.target.value);
        setInput('');
    };
    const handleQrColorChange = (e) => setQrColor(e.target.value);
    const handleBgColorChange = (e) => setBgColor(e.target.value);
    const handleSizeChange = (e, val) => setSize(val);
    const handleCornerRadiusChange = (e, val) => setCornerRadius(val);
    const handleOutputFormatChange = (e) => setOutputFormat(e.target.value);

    // Logo upload
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setLogo(ev.target.result);
            reader.readAsDataURL(file);
        }
    };

    // Generate QR code
    const handleGenerate = () => {
        if (!input) {
            setSnackbar({ open: true, message: 'Please enter data to encode.', severity: 'error' });
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setQrValue(input);
            setLoading(false);
            setSnackbar({ open: true, message: 'QR code generated!', severity: 'success' });
        }, 600);
    };

    // Download QR code
    const handleDownload = () => {
        if (!qrRef.current) return;
        const canvas = qrRef.current.querySelector('canvas');
        const svg = qrRef.current.querySelector('svg');
        if (outputFormat === 'png' && canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qr-code.png';
            link.click();
        } else if (outputFormat === 'svg' && svg) {
            const serializer = new XMLSerializer();
            const svgStr = serializer.serializeToString(svg);
            const blob = new Blob([svgStr], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qr-code.svg';
            link.click();
            URL.revokeObjectURL(url);
        }
    };

    // Copy QR code image to clipboard
    const handleCopy = async () => {
        if (!qrRef.current) return;
        const canvas = qrRef.current.querySelector('canvas');
        if (canvas) {
            canvas.toBlob(async (blob) => {
                try {
                    await navigator.clipboard.write([
                        new window.ClipboardItem({ 'image/png': blob })
                    ]);
                    setSnackbar({ open: true, message: 'QR code copied to clipboard!', severity: 'success' });
                } catch {
                    setSnackbar({ open: true, message: 'Copy failed. Try downloading instead.', severity: 'error' });
                }
            });
        } else {
            setSnackbar({ open: true, message: 'Copy only works for PNG format.', severity: 'info' });
        }
    };

    // Render input field based on data type
    const renderInputField = () => {
        switch (dataType) {
            case 'email':
                return <TextField label="Email" type="email" fullWidth value={input} onChange={handleInputChange} />;
            case 'url':
                return <TextField label="URL" type="url" fullWidth value={input} onChange={handleInputChange} />;
            case 'phone':
                return <TextField label="Phone Number" type="tel" fullWidth value={input} onChange={handleInputChange} />;
            case 'sms':
                return <TextField label="SMS Number" type="tel" fullWidth value={input} onChange={handleInputChange} />;
            default:
                return <TextField label="Text" fullWidth value={input} onChange={handleInputChange} />;
        }
    };

    return (
        <Box sx={{ background: '#f3f4ff', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
            <Container maxWidth="md">
                <CustomPaper>
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <QrCodeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            QR Code Generator
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Create, customize, and download your QR code instantly.
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ mb: 2 }}>
                                <TextField
                                    select
                                    label="Data Type"
                                    value={dataType}
                                    onChange={handleDataTypeChange}
                                    fullWidth
                                    sx={{ mb: 2 }}
                                >
                                    {DATA_TYPES.map((type) => (
                                        <MenuItem key={type.value} value={type.value}>
                                            {type.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {renderInputField()}
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <TextField
                                    label="QR Color"
                                    type="color"
                                    value={qrColor}
                                    onChange={handleQrColorChange}
                                    sx={{ width: 120 }}
                                    InputLabelProps={{ shrink: true }}
                                />
                                <TextField
                                    label="Background"
                                    type="color"
                                    value={bgColor}
                                    onChange={handleBgColorChange}
                                    sx={{ width: 120 }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Size: {size}px
                                    </Typography>
                                    <Slider
                                        value={size}
                                        min={128}
                                        max={512}
                                        step={16}
                                        onChange={handleSizeChange}
                                    />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Corner Radius: {cornerRadius}
                                    </Typography>
                                    <Slider
                                        value={cornerRadius}
                                        min={0}
                                        max={32}
                                        step={1}
                                        onChange={handleCornerRadiusChange}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    sx={{ borderRadius: 2, textTransform: 'none' }}
                                >
                                    Upload Logo
                                    <input
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={handleLogoUpload}
                                    />
                                </Button>
                                {logo && (
                                    <Typography variant="caption" sx={{ ml: 2 }}>
                                        Logo uploaded
                                    </Typography>
                                )}
                            </Box>
                            <TextField
                                select
                                label="Output Format"
                                value={outputFormat}
                                onChange={handleOutputFormatChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            >
                                {OUTPUT_FORMATS.map((fmt) => (
                                    <MenuItem key={fmt.value} value={fmt.value}>
                                        {fmt.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <GradientButton
                                fullWidth
                                size="large"
                                onClick={handleGenerate}
                                disabled={loading}
                                sx={{ mt: 2 }}
                                startIcon={loading && <CircularProgress size={20} color="inherit" />}
                            >
                                {loading ? 'Generating...' : 'Generate QR Code'}
                            </GradientButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                ref={qrRef}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: 320,
                                    background: '#f8f9fa',
                                    borderRadius: 4,
                                    boxShadow: '0 2px 12px rgba(106, 17, 203, 0.07)',
                                    p: 3,
                                }}
                            >
                                {qrValue ? (
                                    <>
                                        {outputFormat === 'png' ? (
                                            <QRCodeCanvas
                                                value={qrValue}
                                                size={size}
                                                fgColor={qrColor}
                                                bgColor={bgColor}
                                                level="Q"
                                                includeMargin={false}
                                                imageSettings={logo ? {
                                                    src: logo,
                                                    x: undefined,
                                                    y: undefined,
                                                    height: size * 0.2,
                                                    width: size * 0.2,
                                                    excavate: true,
                                                } : undefined}
                                                style={{ borderRadius: cornerRadius }}
                                            />
                                        ) : (
                                            <QRCodeSVG
                                                value={qrValue}
                                                size={size}
                                                fgColor={qrColor}
                                                bgColor={bgColor}
                                                level="Q"
                                                includeMargin={false}
                                                imageSettings={logo ? {
                                                    src: logo,
                                                    x: undefined,
                                                    y: undefined,
                                                    height: size * 0.2,
                                                    width: size * 0.2,
                                                    excavate: true,
                                                } : undefined}
                                                style={{ borderRadius: cornerRadius }}
                                            />
                                        )}
                                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                                            <GradientButton
                                                variant="contained"
                                                startIcon={<FileDownloadIcon />}
                                                onClick={handleDownload}
                                            >
                                                Download
                                            </GradientButton>
                                            <Button
                                                variant="outlined"
                                                startIcon={<ContentCopyIcon />}
                                                onClick={handleCopy}
                                                sx={{ borderRadius: 2, textTransform: 'none' }}
                                            >
                                                Copy
                                            </Button>
                                        </Box>
                                    </>
                                ) : (
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                        Your QR code preview will appear here after generation.
                                    </Typography>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </CustomPaper>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={3000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}
