import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const [tag, setTag] = useState('');

const {gif, loading, fetchData}= useGif(tag);

useEffect( () => {
  fetchData();
}, [])



  return (
    <div className='w-1/2 bg-blue-400 border-2 border-gray-500 rounded-lg
    flex flex-col items-center gap-y-4'>
        <h1
        className=' text-xl font-bold uppercase underline mt-4'>Random {tag} gif</h1>

        {
          loading ? 
          (<Spinner></Spinner>) 
          : 
          (<img src={gif} width="450"></img>)
        }

        <input
        className='w-10/12 p-2 rounded-md text-md text-center'
        onChange={(event) => {setTag(event.target.value)}}
        value={tag}
        placeholder='Search GIF'></input>

        <button
        onClick={() => fetchData()}
        className='w-10/12 bg-white/70 mb-4 p-2 rounded-lg text-md uppercase font-semibold
        hover:bg-white transition-all'>
          Generate
        </button>
      </div>
  )
}

export default Tag