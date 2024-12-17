import React, { useEffect, useState } from 'react';

const RefundPolicy = () => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the refund policy
    const fetchRefundPolicy = async () => {
      try {
        const response = await fetch('https://6ammart-admin.6amtech.com/refund'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // Extract the content from the HTML
        const policyContent = doc.querySelector('.privacy-wrapper').innerHTML;
        setPolicy(policyContent);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchRefundPolicy();
  }, []);

  // Inline styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '1.5em',
    margin: '20px 0 10px',
  };

  const contentStyle = {
    color: '#555',
    fontSize: '1em',
    marginBottom: '10px',
  };

  const styledPolicy = `
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
      <h1 className='font-bold'>Refund Policy</h1>
      {/* Render the policy content as HTML with injected styles */}
      <div dangerouslySetInnerHTML={{ __html: `${styledPolicy}${policy}` }} />
    </div>
  );
};

export default RefundPolicy;
