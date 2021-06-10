import React, { useRef } from 'react';
import Gif from './Gif'
import Loader from '../components/Loader'
import useGifs from '../hooks/useGifs';
import useNearScreen from '../hooks/useNearScreen';

export default function ListGifs() {

    const refLastGif = useRef();
    const { gifs, loading, setPage } = useGifs();

    useNearScreen({ loading, setPage, refLastGif });

    return (
        <div className="list-wrap">
            <h1>Infinite Scroll - giphy API</h1>
            <div className="list">
                {
                    gifs.map((gif, index) => {
                        if(gifs.length === index + 1)
                            return <Gif refLastGif={refLastGif} key={gif.id} title={gif.title} images={gif.images}/>
                        else
                            return <Gif key={gif.id} title={gif.title} images={gif.images}/>
                    })
                }
            </div>
            
            { loading && <Loader/> }
        </div>
    )
}