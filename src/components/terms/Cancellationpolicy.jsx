import React, { useEffect, useState } from 'react';

const Cancelpolicy = () => {
  const [policyContent, setPolicyContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch cancellation policy content
    const fetchCancellationPolicy = async () => {
      try {
        const response = await fetch('https://6ammart-admin.6amtech.com/cancelation'); // API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // Extract content from the HTML
        const content = doc.querySelector('.privacy-wrapper').innerHTML;
        setPolicyContent(content);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCancellationPolicy();
  }, []);

  // Inline styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '1.5em',
    margin: '20px 0',
  };

  const contentStyle = {
    color: '#555',
    fontSize: '1em',
    marginBottom: '10px',
  };

  const injectedStyles = `
    <style>
      h1, h2, h3, h4, h5, h6 {
        color: ${headingStyle.color};
        font-size: ${headingStyle.fontSize};
        margin: ${headingStyle.margin};
      }
      p, div, span, li, a {
        color: ${contentStyle.color};
        font-size: ${contentStyle.fontSize};
        margin-bottom: ${contentStyle.marginBottom};
      }
    </style>
  `;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={containerStyle}>
      <h1 className='font-bold'>Cancellation Policy</h1>
      <div dangerouslySetInnerHTML={{ __html: `${injectedStyles}${policyContent}` }} />
    </div>
  );
};

export default Cancelpolicy;
