import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Button,
    TextField,
    Container,
    Typography,
    Box,
    Paper,
    Grid,
    InputAdornment,
    IconButton,
    useMediaQuery,
    CircularProgress
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Cookies from "js-cookie";
import { register } from "../../services/authService";
import { ROUTES } from "../../routes/constants";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "97vh",
    padding: "20px"
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.12)",
}));

const ImageSection = styled(Box)(({ theme }) => ({
    background: "linear-gradient(135deg, #3a7bd5, #2b5876)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "40px",
    position: "relative",
}));

const FormSection = styled(Box)(({ theme }) => ({
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
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
        }
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
    }
}));

const PatternOverlay = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
}));

export default function RegisterPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const isMobile = useMediaQuery('(max-width:900px)');

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e?.preventDefault();

        if (!validate()) {
            return;
        }

        setIsLoading(true);

        try {
            const res = await register({ name: name, email: email, password: password });
            Cookies.set("access_token", res.data.access_token, { secure: true });
            navigate(ROUTES.HOMEPAGE, { replace: true });
        } catch (err) {
            setErrors({
                submit: err.response?.data?.message || "Registration failed. Please try again."
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleRegister(e);
        }
    };

    return (
        <StyledContainer maxWidth="lg">
            <StyledPaper elevation={0}>
                <Grid container>
                    {!isMobile && (
                        <Grid size={{ xs: 12, md: 5, lg: 6 }}>
                            <ImageSection>
                                <PatternOverlay />

                                {/* Logo image, same as LoginPage */}
                                <img src="/logo.png" alt="Logo" style={{ width: 350, marginBottom: 32 }} />

                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        position: "relative",
                                        maxWidth: "400px",
                                        textAlign: "center"
                                    }}
                                >
                                    Create Account
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        opacity: 0.8,
                                        maxWidth: "400px",
                                        textAlign: "center",
                                        position: "relative"
                                    }}
                                >
                                    Join our platform to access all tools and resources.
                                </Typography>
                            </ImageSection>
                        </Grid>
                    )}

                    <Grid size={{ xs: 12, md: 7, lg: 6 }}>
                        <FormSection>
                            {isMobile && (
                                <Typography
                                    variant="h5"
                                    component="h1"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 4,
                                        color: "#2b5876",
                                        textAlign: "center"
                                    }}
                                >
                                    Create Account
                                </Typography>
                            )}

                            <Typography
                                variant="h5"
                                component="h2"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                    color: "#333"
                                }}
                            >
                                Sign up
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 4,
                                    color: "#666"
                                }}
                            >
                                Fill in the details to create your account
                            </Typography>

                            <form onSubmit={handleRegister}>
                                <StyledTextField
                                    label="User Name"
                                    variant="outlined"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonOutlineOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <StyledTextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <StyledTextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    {showPassword ?
                                                        <VisibilityOffOutlinedIcon sx={{ color: "#9e9e9e" }} /> :
                                                        <VisibilityOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <StyledTextField
                                    label="Confirm Password"
                                    variant="outlined"
                                    fullWidth
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    {showConfirmPassword ?
                                                        <VisibilityOffOutlinedIcon sx={{ color: "#9e9e9e" }} /> :
                                                        <VisibilityOutlinedIcon sx={{ color: "#9e9e9e" }} />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {errors.submit && (
                                    <Typography
                                        color="error"
                                        variant="body2"
                                        sx={{ mb: 2 }}
                                    >
                                        {errors.submit}
                                    </Typography>
                                )}

                                <StyledButton
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                    disabled={isLoading}
                                    sx={{ mt: 1 }}
                                >
                                    {isLoading ?
                                        <CircularProgress size={24} sx={{ color: "#fff" }} /> :
                                        "Create Account"
                                    }
                                </StyledButton>

                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{ mt: 3, color: "#666" }}
                                >
                                    Already have an account?{" "}
                                    <Link
                                        to={ROUTES.LOGIN}
                                        style={{
                                            color: "#3a7bd5",
                                            fontWeight: 600,
                                            textDecoration: "none"
                                        }}
                                    >
                                        Sign in
                                    </Link>
                                </Typography>
                            </form>
                        </FormSection>
                    </Grid>
                </Grid>
            </StyledPaper>
        </StyledContainer>
    );
}