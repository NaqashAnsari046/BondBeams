import React from 'react';
import Nav from './Nav';
import './Nav.css'

const MangNav = ({handleSignout}) => {
  return (
    <div id='mangeNav'>
      <Nav handleSignout={handleSignout} />
    </div>
  )
}

export default MangNav