import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * A custom hook for navigating between routes with optional conditions.
 *
 * @returns {Object} An object containing the navigateTo function.
 */
export function useRouteNavigation() {
    const navigate = useNavigate();

    /**
     * Navigates to the specified path if the condition is met.
     *
     * @param {string} path - The target route path.
     * @param {Object} [options] - Optional navigation options.
     * @param {boolean} [options.replace=false] - Whether to replace the current history entry.
     * @param {boolean} [options.condition=true] - Whether to proceed with navigation.
     */
    const navigateTo = useCallback((path, options = {}) => {
        const shouldNavigate = options.condition ?? true;
        if (shouldNavigate) {
            navigate(path, { replace: options.replace ?? false });
        }
    }, [navigate]);

    return {
        navigateTo,
    };
}
