import React, { useState, useEffect } from 'react'



const Home = () => {
    const [count, setcount] = useState([])
    const [theme, settheme] = useState('light')
    const [data, setdata] = useState(null)


    const handleTheme = () => {
        settheme(theme === 'light' ? 'dark' : 'light')
    }
    // mặc định chạy 1 lần
    // Xử lí bất đồng bộ
    const getData = async (setdata, url) => {
        const response = await fetch(url)
        const _data = await response.json()
        console.log(_data);
        setdata(_data)
    }


    useEffect(() => {
        setTimeout(() => {
            getData(setdata, 'https://pokeapi.co/api/v2/pokemon/ditto')
            // {...}
        }, 2000)
    }, [])

    console.log(count);

    return (
        <>
            {data === null
                ?
                <>
                    <p>Loading...</p>
                </>
                :
                <>
                    {data.game_indices.map((value, index) => {
                        return <div>
                            <p>{value.game_index}</p>
                            <p>{value.version.name}</p>
                        </div>
                    })}
                </>
            }
        </>
    )
}


export default Home
