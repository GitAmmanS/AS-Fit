import React from 'react'
import {PuffLoader} from 'react-spinners'
const ShowLoading = () => {
  return (
    <div>
         <div>
            <div className="flex items-center justify-center h-screen bg-white">
                <PuffLoader color="#000" size={120} speedMultiplier={0.5}/>
            </div>
        </div>
    </div>
  )
}

export default ShowLoading