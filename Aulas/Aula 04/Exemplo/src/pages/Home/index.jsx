import React from 'react'

import CountProvider from '../../contexts/Count'

import { Count } from '../../components/Count'
import { MostrarCount } from '../../components/Count/mostrarCount'

const Home = () => {
  return <CountProvider>
    <Count/>

    <hr />

    <MostrarCount/>
  </CountProvider>
}

export { Home }