import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import Button from './components/Button/Button'

export default function Movies() {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const getData = useCallback(async () => {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://netflix54.p.rapidapi.com/search/',
            params: {
                query: 'stranger',
                offset: '0',
                limit_titles: '50',
                limit_suggestions: '20',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': 'a7b7c92fdbmsh8790aca57d51cd7p1a3296jsn3885cdbaeecb',
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };;
        const response = await axios.request(options)
            .then(res => {
                setData(res.data.titles)
            })
            .catch(error => {
                if (error?.response) {
                    alert('Serverdan Javob kelmadi')
                } else if (error?.response.status === 404) {
                    alert("So'rov bajarilmadi")
                } else {
                    alert("Server ishlamayapti")
                }
            })
        setLoading(false)
        return response
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div className="content">
            <Button className="contain-btn">View more</Button>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <div className='movies'>
                {loading ? <h1>Laoding ...</h1> : data.map(e => (
                    <Movie key={e.summary.id} {...e} />
                ))}
            </div>
        </div>
    )
}
