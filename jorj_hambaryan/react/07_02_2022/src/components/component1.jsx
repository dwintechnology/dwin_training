function Component1(prop){
    return(
    <div style={{border:'2px solid black'}}>
        <h1>{prop.value1}</h1>
        <button onClick={()=>{prop.setValue1('')}}>asdsda</button>
    </div>
    )
    
}
export default Component1