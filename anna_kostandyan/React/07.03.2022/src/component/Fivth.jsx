import Sixth from "./Sixth"
function Fivth() {
    let animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    let manimals = animals.map((el) => {
        return (
            <li>{el}</li>
        )
    })
    return (
        <div>
        <div>{manimals}</div>

        <Sixth animal={manimals}/>
        </div>
    )
}

export default Fivth;