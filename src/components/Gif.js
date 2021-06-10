import React from 'react'

export default function Gif({ title, images, refLastGif }) {
    
    return (
        <div className="gif" ref={refLastGif}>
            <p className="gif__title">{title}</p>
            <img className="gif__img" src={images.downsized_still.url} alt={title}/>
        </div>
    )
}
