import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    
  return (
    <div className='flex justify-center relative z-10'>
        <form onSubmit={e => e.preventDefault()} className='flex justify-center bg-white bg-opacity-50 rounded-lg p-4 w-1/2'>
            <input className='px-4 py-3 w-3/4 rounded-s-lg outline-red-600' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='bg-red-600 px-4 py-3 w-1/4  rounded-e-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar