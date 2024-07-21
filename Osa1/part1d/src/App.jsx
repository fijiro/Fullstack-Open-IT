import { useState } from 'react'

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const totalVotes = good + neutral + bad
    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <button onClick={() => { setGood(good + 1) }}> good </button>
                <button onClick={() => { setNeutral(neutral + 1) }}> neutral </button>
                <button onClick={() => { setBad(bad + 1) }}> bad </button>
            </div>
            <h1>statistics</h1>
            <div>
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {totalVotes}</div>
                <div>average {(good - bad) / (totalVotes)}</div >
                <div>positive {good / totalVotes * 100} %</div>
            </div>
        </div>
    )
}
export default App