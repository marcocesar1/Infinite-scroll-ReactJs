
import URL from './settings'

export default function getGifs({ page = 0 } = {}){
    return fetch(URL + `&offset=${10 * page}`)
        .then(resp => resp.json())
}