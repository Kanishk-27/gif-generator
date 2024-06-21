import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2 bg-green-400 border-2 border-gray-500 rounded-lg
    flex flex-col items-center gap-y-4'>
        <h1
        className=' text-xl font-bold uppercase underline mt-4'>a random gif</h1>

        {
          loading ? 
          (<Spinner></Spinner>) 
          : 
          (<img src={gif} width="450"></img>)
        }

        <button
        onClick={() => fetchData()}
        className='w-11/12 bg-white/70 mb-4 p-2 rounded-lg text-md uppercase font-semibold
        hover:bg-white transition-all'>
          Generate
        </button>
      </div>
  )
}

export default Random