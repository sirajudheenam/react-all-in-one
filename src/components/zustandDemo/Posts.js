import React, { useState, useEffect } from 'react';

function MyComponent() {
  // State to store fetched data
  const [data, setData] = useState([]);
  // State to manage loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the fetch function within useEffect to fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('your-api-endpoint-here');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{/* Render your fetched data here */}</div>;
}

export default MyComponent;
