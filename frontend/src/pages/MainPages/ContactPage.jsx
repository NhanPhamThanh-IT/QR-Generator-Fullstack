import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    Snackbar,
    Alert,
    CircularProgress,
    useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useForm } from "react-hook-form";
import { sendContactMessage } from "../../services/contactService";

const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "97vh",
    padding: "20px",
    marginTop: "70px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.12)",
    width: "100%",
    maxWidth: 1100,
    margin: "auto",
}));

const FormSection = styled(Box)(({ theme }) => ({
    padding: "40px 32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        padding: "24px 8px",
    },
}));

const InfoSection = styled(Box)(({ theme }) => ({
    background: "linear-gradient(135deg, #3a7bd5, #2b5876)",
    color: "#fff",
    padding: "40px 32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
        padding: "24px 8px",
        alignItems: "center",
    },
}));

const StyledTextField = styled(TextField)(() => ({
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        "& fieldset": {
            borderColor: "#e0e0e0",
        },
        "&:hover fieldset": {
            borderColor: "#3a7bd5",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#3a7bd5",
        },
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#3a7bd5",
    },
}));

const StyledButton = styled(Button)(() => ({
    borderRadius: "10px",
    padding: "12px",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "16px",
    background: "linear-gradient(90deg, #3a7bd5, #2b5876)",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(59, 123, 213, 0.3)",
    "&:hover": {
        background: "linear-gradient(90deg, #3583e9, #356cb1)",
        boxShadow: "0 6px 18px rgba(59, 123, 213, 0.4)",
        transform: "translateY(-2px)",
    },
}));

const contactInfo = [
    {
        icon: <LocationOnIcon sx={{ mr: 2 }} />, label: "Address", value: "123 Main St, City, Country"
    },
    {
        icon: <PhoneIcon sx={{ mr: 2 }} />, label: "Phone", value: "+1 234 567 890"
    },
    {
        icon: <EmailOutlinedIcon sx={{ mr: 2 }} />, label: "Email", value: "info@example.com"
    },
];

const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f6e7fb%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1680000000000!5m2!1sen!2sau";

export default function ContactPage() {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await sendContactMessage(data);
            setSnackbar({ open: true, message: "Message sent successfully!", severity: "success" });
            reset();
        } catch (err) {
            setSnackbar({ open: true, message: err.response?.data?.message || "Failed to send message.", severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Pattern */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10%), radial-gradient(circle, #ffffff 10%, transparent 10%)',
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px',
            }} />
            <StyledContainer maxWidth="xl">

                <StyledPaper elevation={0}>
                    <Grid container spacing={0}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <FormSection>
                                <Typography variant="h4" fontWeight={700} mb={2} color="#2b5876">
                                    Contact Us
                                </Typography>
                                <Typography variant="body1" mb={4} color="#666">
                                    Have a question or want to work with us? Fill out the form below and we'll get back to you soon.
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <StyledTextField
                                        label="Subject"
                                        fullWidth
                                        {...register("subject", { required: "Subject is required" })}
                                        error={!!errors.subject}
                                        helperText={errors.subject?.message}
                                    />
                                    <StyledTextField
                                        label="Message"
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        {...register("message", { required: "Message is required" })}
                                        error={!!errors.message}
                                        helperText={errors.message?.message}
                                    />
                                    <Box sx={{ position: "relative", mt: 2 }}>
                                        <StyledButton
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            disabled={loading}
                                        >
                                            {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                                        </StyledButton>
                                    </Box>
                                </form>
                            </FormSection>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <InfoSection>
                                <Typography variant="h5" fontWeight={600} mb={3}>
                                    Contact Information
                                </Typography>
                                {contactInfo.map((info, idx) => (
                                    <Box key={info.label} display="flex" alignItems="center" mb={2}>
                                        {info.icon}
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {info.value}
                                        </Typography>
                                    </Box>
                                ))}
                                <Box mt={4} width="100%">
                                    <iframe
                                        title="Google Maps"
                                        src={GOOGLE_MAPS_EMBED}
                                        width="100%"
                                        height={isMobile ? 200 : 220}
                                        style={{ border: 0, borderRadius: 12 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </Box>
                            </InfoSection>
                        </Grid>
                    </Grid>
                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={4000}
                        onClose={() => setSnackbar({ ...snackbar, open: false })}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    >
                        <Alert
                            onClose={() => setSnackbar({ ...snackbar, open: false })}
                            severity={snackbar.severity}
                            sx={{ width: "100%" }}
                        >
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
                </StyledPaper>
            </StyledContainer>
        </Box>
    );
}
