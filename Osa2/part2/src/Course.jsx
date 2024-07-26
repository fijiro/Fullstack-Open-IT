import Content from "./Content.jsx"
const Course = ({course}) => {
    console.log("COURSE:", course)

    return (
        <div>
            <Content course={course} />
        </div>
    )
}
export default Course