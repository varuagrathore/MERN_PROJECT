import React from 'react'
import './categories.css'

export default function Categories() {
  return (
    <div className='side'>
   <span className='Cat'>CATEGORIES</span>
    <ul className='list'>
      <li className='catItem'>Motivational Quotes</li>
      <li className='catItem'>Life Quotes</li>
      <li className='catItem'>Inspirational Quotes </li>
    </ul>
    <div className='side'>
        <span className='Cat'>FOLLOW US</span>
        <div className='social'>
        <i className="sideIcon fa-brands fa-facebook"></i>
        <i className="sideIcon fa-brands fa-square-instagram"></i>
        <i className="sideIcon fa-brands fa-square-pinterest"></i>
        </div>

    </div>
    </div>
  )
}
