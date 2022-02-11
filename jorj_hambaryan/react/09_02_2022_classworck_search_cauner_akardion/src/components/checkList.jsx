import { useState } from 'react'
import './checkList.css'

function CheckList (){
    const [citizen,setCitizen] = useState('NO')
    const [over21,setOver21] = useState('NO')

    return (
        <div className='checkList'> 
            <h2>Are you a Citizen: {citizen}</h2>
            <h2>Are you over 21: {over21}</h2>

            <div className="checkboxBody">
            <p>Are you a Citizen ?</p>
            <input type="checkbox" onClick={(e)=>{
                (e.target.checked) ? setCitizen('YES') : setCitizen('NO')
                }}/>
            </div>
            
            <div className="checkboxBody">
            <p>Are you over 21 ?</p>
            <input type="checkbox" onClick={(e)=>{
                (e.target.checked) ? setOver21('YES') : setOver21('NO')
                }}/>
            </div>
        </div>
    )
}

export default CheckList