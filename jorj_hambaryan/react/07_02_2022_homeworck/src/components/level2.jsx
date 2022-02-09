import Level3 from "./level3"

function Level2(props){
    return (
        <div className="Level2" style={{border:'1px solid black', margin: '50px',display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: '10px'}}>
            <Level3 inputValue={props.inputValue} del={props.del}/>
        </div>
    )
}

export default Level2