import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed inset-0 -z-10'>
        <img className='h-screen w-full object-cover' src={BG_URL} alt="logo" />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className='mt-[150px] md:mt-0'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      
    </div>
  )
}

export default GptSearch
