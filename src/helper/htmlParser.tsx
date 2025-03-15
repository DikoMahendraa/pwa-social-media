import React from "react";

/**
 * Utility function to safely parse and render HTML content in React using dangerouslySetInnerHTML.
 * @param {string} htmlString - The HTML string to parse.
 * @returns {JSX.Element} - Parsed HTML wrapped in a div.
 */

export const parseHtml = (htmlString: string) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Example usage:
// const parsedContent = parseHtml('<p>Hello <strong>World</strong>!</p>');
