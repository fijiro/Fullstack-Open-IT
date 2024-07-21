import Header from "./Header"
import Content from "./Content"

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    const partList = [part1,part2,part3]
    return (
        <div>
            <Header course={course} />
            <Content parts={partList} />
        </div>
    )
}
export default App