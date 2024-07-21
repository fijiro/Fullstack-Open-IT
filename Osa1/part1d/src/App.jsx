import { useState } from 'react'

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
}
export default App