import React from 'react'
import { useParams } from 'react-router'

function Watchvideo() {
    const {id} = useParams();

 



            return (
            <div className="p-4 py-50 ">
                <div className="aspect-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube Video Player"
                        className="w-full h-full rounded"
                        allowFullScreen
                    />
                </div>
                <div>
                    
                </div>
            </div>
            );


        
    
}

export default Watchvideo
