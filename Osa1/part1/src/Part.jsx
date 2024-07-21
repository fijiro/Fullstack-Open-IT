import Total from "./Total.jsx"

const Part = (part) => {
    return (
        <div>
            <p>{part.partName} {<Total exercises={part.exercises} />}</p>
        </div>
    )
}
//
export default Part