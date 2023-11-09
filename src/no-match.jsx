import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go home instead</Link>
      </p>
    </div>
  );
}

export { NoMatch };
