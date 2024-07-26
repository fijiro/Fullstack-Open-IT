import Part from "./Part.jsx"
import Header from "./Header.jsx"
const Content = ({course}) => {
    console.log("CONTENT:", course)
    return (
        <div>
            <Header course={course.name} /> 
            <Part part={course.parts[0]} />
            <Part part={course.parts[1]} />
            <Part part={course.parts[2]} />
        </div>
    )
}
export default Content