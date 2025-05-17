import { useEffect } from 'react';

/**
 * A custom hook that manages the page title and favicon.
 * 
 * @param {string} [title] - The title to be displayed in the browser tab. If not provided, defaults to 'Tools Website'.
 * @param {string} [favicon] - The path to the favicon image. If not provided, defaults to '/favicon.ico'.
 * 
 * @example
 * // Basic usage with just a title
 * usePageTitle('Home');
 * 
 * @example
 * // Usage with both title and custom favicon
 * usePageTitle('Dashboard', '/images/dashboard-icon.ico');
 * 
 * @returns {void}
 */
export function usePageTitle(title, favicon) {
  useEffect(() => {
    const defaultTitle = 'Tools Website';
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;

    const defaultFavicon = '/favicon.ico';
    const existingFavicon = document.querySelector("link[rel*='icon']");
    const faviconElement = existingFavicon || document.createElement('link');

    faviconElement.type = 'image/x-icon';
    faviconElement.rel = 'shortcut icon';
    faviconElement.href = favicon || defaultFavicon;

    if (!existingFavicon) {
      document.head.appendChild(faviconElement);
    }

    return () => {
      document.title = defaultTitle;
      if (faviconElement) {
        faviconElement.href = defaultFavicon;
      }
    };
  }, [title, favicon]);
}
