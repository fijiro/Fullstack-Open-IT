import Part from "./Part.jsx"
const Content = ({ partList, exercises }) => {
    return (
        <div>
            <Part partName={partList[0]} exercises={exercises[0]} />
            <Part partName={partList[1]} exercises={exercises[1]} />
            <Part partName={partList[2]} exercises={exercises[2]} />
        </div>
    )
}
export default Content