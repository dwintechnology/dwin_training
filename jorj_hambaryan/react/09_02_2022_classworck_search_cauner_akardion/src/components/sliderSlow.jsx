import { useEffect, useRef, useState } from 'react'
import './sliderSlow.css'

function SliderSlow() {
    const arrImgPath = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm15hivj8aPh-6SCtoMoMbn7hyn5UclMElg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHYndCfQIrzvrZJzk3ntJ9VOLhr2zTFGplg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKD6rfE-c4Sd8pK9ngHNI2Fub8-uSoJMdsg&usqp=CAU', 'https://res.cloudinary.com/jerrick/image/upload/v1621376301/60a43d2d1c5ed3001d3cbf98.jpg']
    const a = arrImgPath.map((el, i) => {
        return <img key={i} src={el} alt="#" />
    })
    const min = (arrImgPath.length * 500) * (-1);
    const [ml, setml] = useState(0)
    const main = useRef()
    useEffect(() => {
        main.current.style.marginLeft = `${ml}px`;
    }, [ml])
    function left() {
        ((ml - 500) > min) ? setml(ml - 500) : setml(ml)
        //pagination
        let index = paginationState.indexOf('#4074a9')
        let newArr = [...paginationState];
        if(index + 1 < arrImgPath.length){
            newArr.fill('rgb(105 105 105 / 15%)')[index + 1] = '#4074a9'
            setPaginationState(newArr)
        }
    }
    function right() {
        ((ml + 500) <= 0) ? setml(ml + 500) : setml(ml)

        //pagination
        let index = paginationState.indexOf('#4074a9')
        let newArr = [...paginationState];
        if(index > 0){
            newArr.fill('rgb(105 105 105 / 15%)')[index - 1] = '#4074a9'
            setPaginationState(newArr)
        }
    }

    //Pagination
    let pagArr = [];
    pagArr.length = arrImgPath.length;
    pagArr.fill('rgb(105 105 105 / 15%)');
    pagArr[0] = '#4074a9';
    const [paginationState, setPaginationState] = useState(pagArr);

    let paganAnim = [];
    paganAnim.length = arrImgPath.length;
    paganAnim.fill('');
    const [pagAnim, setPaganAnim] = useState(paganAnim);


    const circles = paginationState.map((el, index) => {
        return (
            <div className={pagAnim[index]} onClick={(e)=>{
                // PagAnim
                if(Math.abs((ml / 500)) === index - 1){
                    let a = [...paganAnim];
                    a[index - 1 ] = 'activate';
                    setPaganAnim(a)
                }
                else if(Math.abs((ml / 500)) === index + 1){
                    let b = [...paganAnim];
                    b[index + 1 ] = 'activate';
                    setPaganAnim(b)
                }
                setTimeout(()=>{
                    e.target.className = '';
                    let newArr = [...paginationState];
                    newArr.fill('rgb(105 105 105 / 15%)');
                    newArr[index] = '#4074a9';
                    setPaginationState(newArr)
                },1200)
                // PagAnim
                setml(((index + 1 ) * -500)+500);  
            }} style={{ backgroundColor: el ,cursor:"pointer"}} key={index}></div>
            )
    })
    //Pagination

    return (
        <>
            <div className='sliderSlowBody'>
                <button onClick={right}>←</button>
                <div className='main'>
                    <div ref={main} className='sliderImgMain'>
                        {a}
                    </div>
                </div>
                <button onClick={left}>→</button>
            </div>
            <div className='pagination'>
                {circles}
            </div>
        </>
    )
}

export default SliderSlow