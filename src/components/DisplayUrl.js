import React from 'react'
import { useUrlContext } from './UrlContext';
const DisplayUrl = () => {
  const {url} = useUrlContext();
  return (
    <div>
        <h1 className="text-white bg-black">{url}</h1>
    </div>
  )
}

export default DisplayUrl
