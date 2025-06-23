// src/components/common/LazySection.jsx
import { useInView } from "react-intersection-observer";

/**
 * Wrapper that only renders children when in viewport
 */
const LazySection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Load when 10% of section is visible
    });

    return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazySection;
