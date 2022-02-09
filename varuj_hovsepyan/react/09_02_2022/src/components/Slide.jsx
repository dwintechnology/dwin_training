import { useState } from "react"

function Slide(){
    
    let arrImg = ['https://i.pinimg.com/originals/45/6a/83/456a83088fca1cec693124e0bd62543b.jpg',
    'https://i.pinimg.com/originals/62/f1/65/62f165cebd814ec81f1e5a324eecbdd1.jpg',
    'https://i.pinimg.com/originals/76/fe/2d/76fe2d008148631153a686f4e4b856d7.jpg'
    ,'https://i.pinimg.com/736x/78/e0/4c/78e04ca9b503401a58c5a036616de6a7.jpg']
    let [num, setNum] = useState(0) 
    return (
        <div>
            <button style={{position:"relative",  top:"-100px"}} onClick={
               ()=>{
                setNum(num-1)
               }
            }>Left</button>
               
                <img style={{width:"200px", height:"200px"}} src={arrImg[num]} alt=""/>
            
            <button style={{position:"relative",  top:"-100px", borderRadius:"100%"}}  onClick={
               ()=>{
                setNum(num+1)
               }
            }
            >Rigth</button>
        </div>
    )
}
export default Slide