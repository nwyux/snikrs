import React from 'react'
import {Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className='notfound-bg flex flex-col items-center justify-center h-screen text-blanc text-center'>
        <h1 className='text-xl sm:text-2xl font-bold text-polaire font-archivo after:content-["?"]'>Oops </h1>
        <h2 className='text-sm sm:text-xl font-bold text-polaire font-archivo max-w-md'>‎ It seems that the page you're looking for was not found 🧐</h2>
        <Link to='/' className='no-underline font-alata text-polaire hover:text-polaire transition-all duration-200 hover:underline before:content-["→"]'> Go back to home</Link>
    </div>
  )
}