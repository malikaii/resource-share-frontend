import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>Oops, this page does not exist.</h1>
        <Link to={"/"}>Go back</Link>
    </div>
  );
}

export default Error