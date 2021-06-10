import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export default function useGifs() {

    const [ gifs, setGifs ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true)
        getGifs({page}).then(resp => {
            const { data } = resp;
            setGifs(prevGifs => [...prevGifs, ...data].map((gif, index) => ({...gif, id : index }) ));
            setLoading(false)
        })
    },[ page ])

    return {
        gifs,
        loading,
        setPage
    }
}