import React from 'react'
import HeaderTop from '../modals/header-top/HeaderTop'
import HeaderBody from './header-body/HeaderBody'

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <HeaderTop />
        <HeaderBody />
      </div>
    </header>
  )
}

export default Header