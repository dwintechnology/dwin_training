function Map(props){
    let name = props.name.split(" ");
    let mass=name.map((anim)=>{
     return (
    <h1>{anim}</h1>
     )
    })
   return (
       <div>
           {mass}
       </div>

   )}
export default Map