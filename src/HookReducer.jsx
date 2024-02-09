import { useState, useEffect } from 'react'; // Importando useEffect
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(true);

    useEffect(() => {
        // Esta função será chamada sempre que `count` mudar.
        if (count % 2 !== 0) {
            setText(true);
        } else {
            setText(false);
        }
    }, [count]); // Dependência: count

    function Counter() {
        setCount((count) => count + 1);
    }

    return (
        <>
            <h1>Contador</h1>
            <div className='card'>
                <button onClick={Counter}>A contagem é {count}</button>
                {text === true && <p> Olá </p>}
            </div>
        </>
    );
}

export default App;
