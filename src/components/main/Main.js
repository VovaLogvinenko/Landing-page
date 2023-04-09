import React from 'react'
import BigData from './big-data/BigData'
import Stack from './stack/Stack'
import DataDriven from './data-driven/DataDriven'
import Author from './author/Author'
import MainBottom from './main-bottom/MainBottom'

function Main() {
  return (
    <main className='main container'>
        <BigData />
        <Stack />
        <DataDriven />
        <Author />
        <MainBottom />
    </main>
  )
}

export default Main