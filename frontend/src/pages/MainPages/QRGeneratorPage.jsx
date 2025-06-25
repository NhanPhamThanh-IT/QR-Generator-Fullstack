import { useState, useRef } from 'react';
import { Box, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import HeroSection from '../../components/pages/qrgenerator/HeroSection'
import QRForm from './components/QRForm';
import QRPreview from './components/QRPreview';
import { createQR } from '../../services/qrService';

const DEFAULT_COLOR = '#2575fc';
const DEFAULT_BG_COLOR = '#ffffff';

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
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const qrRef = useRef();
    const [wifi, setWifi] = useState({ ssid: '', password: '', encryption: '' });
    const [vcard, setVcard] = useState({ name: '', phone: '', email: '', address: '', org: '' });

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
            case 'eyeShape': setEyeShape(value); break;
            case 'gradient': setGradient(value); break;
            case 'dpi': setDpi(value); break;
            case 'watermark': setWatermark(value); break;
            case 'tag': setTag(value); break;
            case 'template': setTemplate(value); break;
            case 'wifi_ssid': setWifi(w => ({ ...w, ssid: value })); break;
            case 'wifi_password': setWifi(w => ({ ...w, password: value })); break;
            case 'wifi_encryption': setWifi(w => ({ ...w, encryption: value })); break;
            case 'vcard_name': setVcard(v => ({ ...v, name: value })); break;
            case 'vcard_phone': setVcard(v => ({ ...v, phone: value })); break;
            case 'vcard_email': setVcard(v => ({ ...v, email: value })); break;
            case 'vcard_address': setVcard(v => ({ ...v, address: value })); break;
            case 'vcard_org': setVcard(v => ({ ...v, org: value })); break;
            case 'gradientType': setGradientType(value); break;
            case 'gradientColor2': setGradientColor2(value); break;
            case 'gradientRotation': setGradientRotation(value); break;
            case 'advancedEnabled': setAdvancedEnabled(value); break;
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
        let qrData = input;
        if (dataType === 'wifi') {
            qrData = `WIFI:T:${wifi.encryption};S:${wifi.ssid};P:${wifi.password};;`;
        } else if (dataType === 'vcard') {
            qrData = `BEGIN:VCARD\nVERSION:3.0\nFN:${vcard.name}\nORG:${vcard.org}\nTEL:${vcard.phone}\nEMAIL:${vcard.email}\nADR:${vcard.address}\nEND:VCARD`;
        }
        if (!qrData) {
            setSnackbar({ open: true, message: 'Please enter data to encode.', severity: 'error' });
            return;
        }
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);
            setSnackbar({ open: true, message: 'QR code generated successfully!', severity: 'success' });
            // Save to backend
            const entry = {
                data_type: dataType,
                input: qrData,
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
                setSnackbar({ open: true, message: 'Failed to save QR history to server!', severity: 'error' });
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

    // Render input field based on data type
    const renderInputField = () => {
        switch (dataType) {
            case 'email':
                return <TextField label="Email" type="email" fullWidth value={input} onChange={e => handleFormChange('input', e.target.value)} />;
            case 'url':
                return <TextField label="URL" type="url" fullWidth value={input} onChange={e => handleFormChange('input', e.target.value)} />;
            case 'phone':
                return <TextField label="Phone Number" type="tel" fullWidth value={input} onChange={e => handleFormChange('input', e.target.value)} />;
            case 'sms':
                return <TextField label="SMS Number" type="tel" fullWidth value={input} onChange={e => handleFormChange('input', e.target.value)} />;
            case 'wifi':
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <TextField label="SSID" fullWidth value={wifi.ssid} onChange={e => handleFormChange('wifi_ssid', e.target.value)} />
                        <TextField label="Password" fullWidth value={wifi.password} onChange={e => handleFormChange('wifi_password', e.target.value)} />
                        <TextField label="Encryption" fullWidth value={wifi.encryption} onChange={e => handleFormChange('wifi_encryption', e.target.value)} />
                    </Box>
                );
            case 'vcard':
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <TextField label="Full Name" fullWidth value={vcard.name} onChange={e => handleFormChange('vcard_name', e.target.value)} />
                        <TextField label="Phone" fullWidth value={vcard.phone} onChange={e => handleFormChange('vcard_phone', e.target.value)} />
                        <TextField label="Email" fullWidth value={vcard.email} onChange={e => handleFormChange('vcard_email', e.target.value)} />
                        <TextField label="Address" fullWidth value={vcard.address} onChange={e => handleFormChange('vcard_address', e.target.value)} />
                        <TextField label="Organization" fullWidth value={vcard.org} onChange={e => handleFormChange('vcard_org', e.target.value)} />
                    </Box>
                );
            default:
                return <TextField label="Text" fullWidth value={input} onChange={e => handleFormChange('input', e.target.value)} />;
        }
    };

    return (
        <Box sx={{ background: '#f3f4ff', minHeight: '100vh' }}>
            {/* Hero Section */}
            <HeroSection />
            
            <Container maxWidth="xl">
                <Paper sx={{ borderRadius: 6, p: { xs: 2, md: 5 }, boxShadow: '0 8px 40px rgba(0, 0, 0, 0.10)', background: '#fff', minHeight: 500 }}>
                    <Grid container spacing={4} alignItems="stretch">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                background: '#f7f9fc',
                                borderRadius: 4,
                                boxShadow: '0 2px 12px rgba(37,117,252,0.07)',
                                p: { xs: 2, md: 3 },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                border: '1px solid #e3e8f0',
                            }}>
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: 'primary.main' }}>Create your QR code</Typography>
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
                                    wifi={wifi}
                                    vcard={vcard}
                                    onChange={handleFormChange}
                                    onLogoUpload={handleLogoUpload}
                                    onGenerate={handleGenerate}
                                    renderInputField={renderInputField}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                background: '#f8f9fa',
                                borderRadius: 4,
                                boxShadow: '0 4px 24px rgba(37,117,252,0.10)',
                                p: { xs: 2, md: 4 },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 400,
                                border: '2px solid #e3e8f0',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: '0 8px 32px rgba(37,117,252,0.18)',
                                },
                            }}>
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: 'primary.main' }}>Preview</Typography>
                                <QRPreview
                                    qrValue={input}
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
