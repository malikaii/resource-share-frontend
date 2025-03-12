import React from 'react'
import { useAuth } from '../Components/Auth'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const auth = useAuth();

  const styles = {
    
  }

  return (
    <>
      <div style={styles}>
        <h2>Welcome to Resource Share</h2>
        <p>The e-commerce app for students in need</p>
      </div>

    </>
  )
}

export default Home