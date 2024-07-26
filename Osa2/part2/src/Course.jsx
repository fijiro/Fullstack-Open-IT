import Content from "./Content.jsx"
const Course = ({courses}) => {
    console.log("COURSES:", courses)

    return (
        <div>
            {courses.map(course => (
                <Content course={course} />
            )) }
        </div>
    )
}
export default Course