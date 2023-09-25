import { useEffect, useState } from 'react'
import axios from "axios"

const NewsList = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <p>{news}</p>
        </div>
    )
}

export default NewsList