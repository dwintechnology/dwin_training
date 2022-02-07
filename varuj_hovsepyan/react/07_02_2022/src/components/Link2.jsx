import Link3 from "./Link3"

function Link2(props){
    return(
            <div  style={{padding:"10px", marginTop:"20px", textAlign:"center",  border:"2px solid green"}}>
                <h2>LEVEL 3</h2>
            <Link3 vali={props.valu} delete={props.delete}/>
            
            </div>
    )
}
export default Link2