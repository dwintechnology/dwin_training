import { useRef } from 'react'
import './Form.css'

function Form(){
    const textInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();

    return(
        <form className='form'>
            <textarea placeholder="text"  cols="30" rows="10" ref={textInput}></textarea>
            <input type="email" placeholder="email" ref={emailInput}/>
            <input type="password" placeholder="password" ref={passwordInput}/>
            <button 
                onClick={(e)=>{
                    e.preventDefault()
                    let obj = {
                        text: true,
                        email: true,
                        password: true,
                    }
                    if(textInput.current.value.length < 5){
                        obj.text = new Error('min length 5')
                    }
                    if(emailInput.current.value.length < 5){
                        obj.email = new Error('min length 5')
                    }
                    if(passwordInput.current.value.length < 5){
                        obj.password = new Error('min length 5')
                    }
                    
                    console.log(obj)

                    }}>
                
                
                
                
                click Me
                </button>
        </form>
    )
}

export {Form}