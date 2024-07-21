import Header from "./Header"
import Content from "./Content"

const App = () => {
    // const-m‰‰rittelyt
    const courseName = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const exerciseList = [ 10, 7, 14 ]
    const partList = ["Fundamentals of React", "Using props to pass data", "State of a component" ]
    return (
        <div>
            <Header course={courseName} />
            <Content partList={partList} exercises={exerciseList} />
        </div>
    )
}
export default App