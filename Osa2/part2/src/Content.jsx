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
            {/* increase sum=0 by part.exercise amount for each {part} in {course.parts} */ }
            <b>total of {course.parts.reduce((sum, { exercises }) => sum + exercises, 0)} exercises</b>
        </div>
    )
}
export default Content