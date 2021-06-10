import { useEffect } from 'react'

export default function useNearScreen( { loading, setPage, refLastGif } ) {

    useEffect(() => {
        if(loading) return
        const observer = new IntersectionObserver((entries, observe) => {
            if(entries[0].isIntersecting){
                observe.unobserve(entries[0].target)
                setPage(prevPage => prevPage + 1)
            }
        })
        if(refLastGif.current) observer.observe(refLastGif.current)
    },[loading, setPage, refLastGif])
    
    return null
}