import React from 'react'

import ButtonBootstrap from 'react-bootstrap/Button';

export const Button = ({ texto }) => {
  return <ButtonBootstrap 
    style={{
      backgroundColor: 'green',
      color: '#fff'
    }}
  >
    {texto}
  </ButtonBootstrap>
}