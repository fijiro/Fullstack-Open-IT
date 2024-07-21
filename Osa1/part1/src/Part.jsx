import Total from "./Total.jsx"

const Part = (props) => {
    return (
        <div>
            <p>{props.part.name} {<Total exercises={props.part.exercises} />}</p>
        </div>
    )
}
//
export default Part