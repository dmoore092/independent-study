import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ConsumeApi(path) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState({data: []})

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'http://localhost:8888/proxy.php',
            params: { path: path }
        }).then(res => {
            setData(res.data)
            setLoading(false)
            //TODO delete this console log
            console.log(res.data)
        }).catch(e => {
            setError(true)
        })
    }, [path])
    return { loading, error, data }
}