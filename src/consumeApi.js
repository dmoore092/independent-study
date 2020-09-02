import { useEffect, useState } from 'react'
import axios from 'axios'
export default function ConsumeApi(path){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState({data: []})
    console.log(path);
    
    useEffect(() => {
        setLoading(true)
        setError(false)
        axios.get(path)
        .then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(e => {
            setError(true)
        })
    })
    return { loading, error, data }
}
// export default function ConsumeApi(path) {
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(false)
//     const [data, setData] = useState({data: []})

//     useEffect(() => {
//         setLoading(true)
//         setError(false)
//         axios({
//             method: 'GET',
//             // url: 'http://localhost:8888/proxy.php',
//             url: 'http://www.ist.rit.edu/api',
//             // params: { path: path }
//         }).then(res => {
//             setData(res.data)
//             setLoading(false)
//         }).catch(e => {
//             setError(true)
//         })
//     }, [path])
//     console.log(path);
//     return { loading, error, data }
// }