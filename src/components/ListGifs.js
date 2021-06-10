import React, { useRef, useCallback, useEffect } from 'react';
import Gif from './Gif'
import Loader from '../components/Loader'
import useGifs from '../hooks/useGifs';
//import useNearScreen from '../hooks/useNearScreen';

export default function ListGifs() {

    const gifRef = useRef();

    const { gifs, loading, setPage } = useGifs();


    useEffect(() => {
        console.log(loading)
    },[loading])

    const lastGifRef = useCallback(node => {
        if(loading) return
        gifRef.current = new IntersectionObserver((entries, observe) =>{
            if(entries[0].isIntersecting){
                observe.unobserve(entries[0].target);
                setPage(prevPage => prevPage + 1);
            }
        })
        if(node) gifRef.current.observe(node)        
    }, [loading, setPage]);

    return (
        <div className="list-wrap">
            <h1>Infinite Scroll - giphy API</h1>
            <div className="list">
                {
                    gifs.map((gif, index) => {
                        if(gifs.length === index + 1)
                            return <Gif refLastGif={lastGifRef} key={gif.id} title={gif.title} images={gif.images}/>
                        else
                            return <Gif key={gif.id} title={gif.title} images={gif.images}/>
                    })
                }
            </div>
            
            { loading && <Loader/> }
        </div>
    )
}