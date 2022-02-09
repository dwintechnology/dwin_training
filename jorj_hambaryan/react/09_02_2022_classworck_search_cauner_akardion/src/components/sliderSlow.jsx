import { useEffect, useRef, useState } from 'react'
import './sliderSlow.css'

function SliderSlow() {
    const arrImgPath = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm15hivj8aPh-6SCtoMoMbn7hyn5UclMElg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHYndCfQIrzvrZJzk3ntJ9VOLhr2zTFGplg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKD6rfE-c4Sd8pK9ngHNI2Fub8-uSoJMdsg&usqp=CAU', 'https://res.cloudinary.com/jerrick/image/upload/v1621376301/60a43d2d1c5ed3001d3cbf98.jpg']
    const a = arrImgPath.map((el, i) => {
        return <img key={i} src={el} alt="#" />
    })
    // const max = arrImgPath.length * 500
    const min = (arrImgPath.length * 500) * (-1);
    const [ml, setml] = useState(0) 
    const main = useRef()
    useEffect(()=>{
        main.current.style.marginLeft = `${ml}px`
    },[ml])
    function left(){
        ((ml-500) > min) ? setml(ml - 500) : setml(ml)
    }
    function right(){
        ((ml+500) <= 0) ? setml(ml + 500) : setml(ml)
    }

    return (
        <div className='sliderSlowBody'>
        <button onClick={left}>→</button>
        <div className='main'>
            <div ref={main}  className='sliderImgMain'>
                {a}
            </div>   
        </div>
        <button onClick={right}>←</button>
        </div>
    )
}

export default SliderSlow