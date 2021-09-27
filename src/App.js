import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';



const App = () => {
    const [advice, setAdvice] = useState('');

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const {advice} = response.data.slip;
                
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchAdvice();
    })
    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>Get some advice</span>
                </button>
            </div>
        </div>
    )
}

export default App
