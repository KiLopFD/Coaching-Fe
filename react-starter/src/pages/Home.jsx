import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
    const [state, setState] = useState(1);
    setTimeout(() => {
        console.log(state);
    }, 2000)
    return (
        <>
            <button className='btn' onClick={() => { setTimeout(() => {
                setState(state+1)
            }, 2000);
            }}>Cập nhật {state}</button>
        </>
    )
}

export default Home