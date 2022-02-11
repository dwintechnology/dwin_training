import { useState } from 'react'
import './slider.css'

function Slider(){

    const arrImgPath = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm15hivj8aPh-6SCtoMoMbn7hyn5UclMElg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHYndCfQIrzvrZJzk3ntJ9VOLhr2zTFGplg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKD6rfE-c4Sd8pK9ngHNI2Fub8-uSoJMdsg&usqp=CAU','https://res.cloudinary.com/jerrick/image/upload/v1621376301/60a43d2d1c5ed3001d3cbf98.jpg']
    const [index,setIndex] = useState(0);
    function left(){
        (index+1 == arrImgPath.length) ?  setIndex(0) : setIndex(index + 1)
    }
    function right(){
        (index-1 < 0) ?  setIndex(arrImgPath.length - 1) : setIndex(index - 1)
    }

    return(
        <div className='mainSlider'>
            <button onClick={left}>←</button>
            <img src={arrImgPath[index]} alt="#" />
            <button onClick={right}>→</button>
        </div>
    )
}

export default Slider