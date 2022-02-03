function Data(props){
    let a=props.obj
    let elem = a.map((i)=>{
        return (
            <div style={{width:"200px",height:"auto", backgroundColor:"blue"}}>
                <h1>{i.id}</h1>
                <h2>{i.title}</h2>
                <p> {i.text}</p>
            </div>
        )
    })

    return (<div>
        {elem}
    </div>
        
    )
}
export default Data






