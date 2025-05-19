import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';

const ErrorCodes = ({ isMobile }) => {
    const errorCodes = [
        {
            code: "E001",
            name: "Authentication Error",
            description: "User authentication error",
            solution: "Check your login information and try again"
        },
        {
            code: "E002",
            name: "Permission Denied",
            description: "Access denied",
            solution: "Contact admin to get access permission"
        },
        {
            code: "E003",
            name: "Invalid Input",
            description: "Invalid input data",
            solution: "Check the input data format"
        },
        {
            code: "E004",
            name: "Server Error",
            description: "Server error",
            solution: "Try again later or contact support"
        },
        {
            code: "E005",
            name: "Rate Limit Exceeded",
            description: "Request limit exceeded",
            solution: "Wait a moment and try again later"
        }
    ];

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: isMobile ? 2 : 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Error Codes & Solutions
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                List of common error codes and their solutions. If you encounter an error not listed here,
                please contact us through the Contact page.
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Error Code</TableCell>
                            <TableCell>Error Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Solution</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {errorCodes.map((error) => (
                            <TableRow key={error.code}>
                                <TableCell>
                                    <Chip
                                        label={error.code}
                                        color="error"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>{error.name}</TableCell>
                                <TableCell>{error.description}</TableCell>
                                <TableCell>{error.solution}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                    Need Additional Support?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    If you are still experiencing issues or need additional support, please contact our support team
                    via email support@example.com or use the contact form in the Contact section.
                </Typography>
            </Box>
        </Box>
    );
};

export default ErrorCodes; 