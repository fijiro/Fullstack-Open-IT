import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    //Create array of 0's for anecdotes length and create states for each
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    //Find most voted anecdote
    const best = votes.indexOf(Math.max(...votes))

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <p>has {votes[selected]} votes</p>
            <p>
                <button onClick={() => { const copy = [...votes]; copy[selected] += 1; setVotes(copy) } }>Vote</button>
                <button onClick={() => { setSelected((selected + 1) % anecdotes.length) }}>next anecdote</button>
            </p>
            <h1>Anecdote with the most votes</h1>
            {anecdotes[best]}
        </div>
    )
}

export default App
/*
const Statistics = ({ good, neutral, bad }) => {
    const totalVotes = good + neutral + bad
    if (totalVotes == 0) return <div> No feedback given</div>
    return (
        <table>
            <tbody>
                <tr>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="all" value={totalVotes} />
                    <StatisticLine text="average" value={(good - bad) / (totalVotes)} />
                    <StatisticLine text="positive" value={good / totalVotes * 100} />
                </tr>
            </tbody>
        </table>
    )
}
const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text} </td>
            <td>{value}</td>
        </tr>
    )
}
const Button = ({ onClickAction, name }) => {
    return <button onClick={onClickAction}> {name} </button>
}
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
                <Button onClickAction={() => { setGood(good + 1) }} name="good" />
                <Button onClickAction={() => { setNeutral(neutral + 1) }} name="neutral" />
                <Button onClickAction={() => { setBad(bad + 1) }} name="bad" />
            </div>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
export default App
}*/