import React, { useEffect, useState } from 'react';

const Privacypolicy = () => {
  const [policy, setPolicy] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await fetch('https://6ammart-admin.6amtech.com/privacy-policy');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const policyContent = doc.querySelector('.privacy-wrapper')?.innerHTML || '';
        setPolicy(policyContent);
      } catch (error) {
        console.error('Error fetching privacy policy:', error);
        setError('Failed to load privacy policy. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    maxWidth: '800px',
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
    ${policy}
  `;

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={containerStyle} dangerouslySetInnerHTML={{ __html: styledPolicy }} />
  );
};

export default Privacypolicy;
