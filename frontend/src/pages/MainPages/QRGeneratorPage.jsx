import { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import QRForm from './components/QRForm';
import QRPreview from './components/QRPreview';
import { createQR } from '../../services/qrService';

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

    // Handlers for form changes
    const handleFormChange = (field, value) => {
        switch (field) {
            case 'dataType': setDataType(value); setInput(''); break;
            case 'input': setInput(value); break;
            case 'qrColor': setQrColor(value); break;
            case 'bgColor': setBgColor(value); break;
            case 'size': setSize(value); break;
            case 'cornerRadius': setCornerRadius(value); break;
            case 'outputFormat': setOutputFormat(value); break;
            default: break;
        }
    };
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setLogo(ev.target.result);
            reader.readAsDataURL(file);
        }
    };

    // Generate QR code
    const handleGenerate = async () => {
        if (!input) {
            setSnackbar({ open: true, message: 'Please enter data to encode.', severity: 'error' });
            return;
        }
        setLoading(true);
        setTimeout(async () => {
            setQrValue(input);
            setLoading(false);
            setSnackbar({ open: true, message: 'QR code generated!', severity: 'success' });
            // Save to backend
            const entry = {
                data_type: dataType,
                input,
                qr_color: qrColor,
                bg_color: bgColor,
                size,
                corner_radius: cornerRadius,
                logo,
                output_format: outputFormat,
                timestamp: new Date().toISOString(),
            };
            try {
                await createQR(entry);
            } catch (e) {
                setSnackbar({ open: true, message: 'Lưu lịch sử QR lên server thất bại!', severity: 'error' });
            }
        }, 600);
    };

    // Download QR code (for preview)
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

    // Copy QR code (for preview)
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

    return (
        <Box sx={{ background: '#f3f4ff', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
            <Container maxWidth="md">
                <Paper sx={{ borderRadius: 16, p: 4, boxShadow: '0 8px 40px rgba(0, 0, 0, 0.10)', background: '#fff' }}>
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
                            <QRForm
                                dataType={dataType}
                                input={input}
                                qrColor={qrColor}
                                bgColor={bgColor}
                                size={size}
                                cornerRadius={cornerRadius}
                                logo={logo}
                                outputFormat={outputFormat}
                                loading={loading}
                                onChange={handleFormChange}
                                onLogoUpload={handleLogoUpload}
                                onGenerate={handleGenerate}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box ref={qrRef}>
                                <QRPreview
                                    qrValue={qrValue}
                                    size={size}
                                    qrColor={qrColor}
                                    bgColor={bgColor}
                                    cornerRadius={cornerRadius}
                                    logo={logo}
                                    outputFormat={outputFormat}
                                    onDownload={handleDownload}
                                    onCopy={handleCopy}
                                    snackbar={snackbar}
                                    setSnackbar={setSnackbar}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}
