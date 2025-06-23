// src/utils/lazyLoad.jsx
import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

/**
 * Default fallback UI using MUI components.
 * Displays a centered loading spinner.
 */
const DefaultFallback = () => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        width="100%"
    >
        <CircularProgress color="primary" size={40} thickness={4} />
    </Box>
);

/**
 * Reusable helper for lazy loading React components with a default fallback.
 *
 * @param {Function} importFunc - The dynamic import function that returns the component.
 * @returns {React.Component} A wrapped lazy-loaded component with fallback UI.
 */
const lazyLoad = (importFunc) => {
    const LazyComponent = lazy(importFunc);

    return (props) => (
        <Suspense fallback={<DefaultFallback />}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default lazyLoad;
