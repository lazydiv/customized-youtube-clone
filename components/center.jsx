import { data } from 'autoprefixer';
import {useState, useEffect} from 'react'

const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=eg&key=AIzaSyDXyYmFQRagjnlICfyLW9uyEc3-9rqZLpE`

const Center = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])
  
  if (isLoading) return <p className='absolute w-screen text-center animate-pulse mt-[50%]'>Loading...</p>
  if (!data) return <p className='absolute w-screen text-center mt-[50%]'>No profile data</p>
  return (
    <ul className='grid w-full max-w-[2160px] h-full mx-auto gap-10 mt-20
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:w-5/6 '>
   {data.items.map((item) => {
    const {id, snippet = {}} = item;
    const {title} = snippet;
    return (
      
      <li className='md:w-full w-5/6   mx-auto max-w-[400px] rounded-md'>
        <a href={`https://www.youtube.com/watch?v=${id}`}>
          <img src={snippet.thumbnails.medium.url} className="mb-5 w-full"  alt="" />
            <h1>{title}</h1>
            <p>{snippet.channelTitle}</p>
        </a>
      </li>
    )
  })}

    </ul>
  )
}

export default Center