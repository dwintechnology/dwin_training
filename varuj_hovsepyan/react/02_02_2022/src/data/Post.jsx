function Post (props){
    let b = props.obj
    let el = b.map((i)=>{
        return (
            <div style={{width:"300px", height:"auto", backgroundColor:"red"}}>
                <h1>{i.id}</h1>
                <h2>{i.title}</h2>
                <p>{i.text}</p>
            </div>
        )
    })
    return (
        <div>
            {el}
        </div>
    )
}
export default Post