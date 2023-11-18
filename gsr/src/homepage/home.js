import React from 'react'
import Thought from '../thought/thought'
// import Categories from '../category/categories'
import Quotes from '../quotes/quotes'
import './home.css'

export default function Home() {
  return (
    <>
      <Thought/>
      <div className='home'>
        <Quotes/>
        {/* <Categories/> */}
      </div>
    </>
  )
}
