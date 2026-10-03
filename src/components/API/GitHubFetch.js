import React, { useState, useEffect } from 'react';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

export default function GitHubFetch({ login }) {
  const [data, setData] = useState([]); //null or " "
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]); // If login changes, call this useEffect function

  if (loading) return <LoadingIndicator />;

  if (error) return <pre>{JSON.stringify(error, null, 2)} </pre>;

  if (!data) return null;

  if (data.message === 'Not Found') {
    return <div>{JSON.stringify(data)}</div>;
  } else {
    return (
      <div className="component">
        <header className="demo-header">
          <div className="demo-header__badge">fetch · useEffect</div>
          <h1 className="demo-header__title">GitHub Profile Fetch</h1>
          <p className="demo-header__desc">Fetches a GitHub user profile and repositories using the GitHub REST API.</p>
        </header>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} height={200} />
      </div>
    );
  }
}
