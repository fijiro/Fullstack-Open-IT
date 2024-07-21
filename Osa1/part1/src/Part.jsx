import Total from "./Total.jsx"

const Part = (part) => {
    return (
        <div>
            <p>{part.part.name} {<Total exercises={part.part.exercises} />}</p>
        </div>
    )
}
//
export default Part