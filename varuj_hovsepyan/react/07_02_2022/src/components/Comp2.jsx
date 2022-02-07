import Link2 from "./Link2";

function Comp2(props){
    return(
        <div  style={{padding:"10px", marginTop:"20px", textAlign:"center", border:"2px solid green"}}>
            <h2>LEVEL 2</h2>
            <Link2 valu={props.val} delete={props.delete}/>
        </div>
    )
}
export default Comp2