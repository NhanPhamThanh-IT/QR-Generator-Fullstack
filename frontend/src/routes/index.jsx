import { Routes, Route } from 'react-router-dom';
import PageLayout from '@components/layout/PageLayout';

// Main Pages
import Home from '@pages/MainPage/Home';
import Tools from '@pages/MainPage/Tools';
import Contact from '@pages/MainPage/Contact';
import Docs from '@pages/MainPage/Docs';

// Documentation Pages
import Introduction from '@pages/DocumentationPage/Introduction';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageLayout title="Home">
                        <Home />
                    </PageLayout>
                }
            />
            <Route
                path="/tools"
                element={
                    <PageLayout title="Tools">
                        <Tools />
                    </PageLayout>
                }
            />
            <Route
                path="/docs"
                element={
                    <PageLayout title="Documentation">
                        <Docs />
                    </PageLayout>
                }
            />
            <Route
                path="/contact"
                element={
                    <PageLayout title="Contact Us">
                        <Contact />
                    </PageLayout>
                }
            />
            <Route
                path="/docs/introduction"
                element={
                    <PageLayout title="Introduction">
                        <Introduction />
                    </PageLayout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
