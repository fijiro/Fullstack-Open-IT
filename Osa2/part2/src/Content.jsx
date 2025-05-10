import Part from "./Part.jsx"
import Header from "./Header.jsx"
const Content = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            {course.parts.map(course => (
                <Part part={course} />
            ))}


            {/*  increase sum=0 by part.exercise amount for each {part} in {course.parts} */}
            <b>total of {course.parts.reduce((sum, { exercises }) => sum + exercises, 0)} exercises</b>
        </div>
    )
}
export default Content