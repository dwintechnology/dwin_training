import { useRef, useState } from 'react'
import './loginForm.css'

function LoginForm() {
    let [welcome, setWelcome] = useState(false)
    
    
    const form = useRef()
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const trueName = 'jorj';
    const trueEmail = 'jorj@mail';
    const truePassword = 'jorj';



    function getDates() {
        const getName = name.current.value;
        const getEmail = email.current.value;
        const getPassword = password.current.value;
        if ((getName == trueName) && (getEmail == trueEmail) && (getPassword == truePassword)) {
            setWelcome(`Welcome ${getName}`)
        }
    }


    return (
        <>
            <h1>{welcome}</h1>
            {!welcome && <div ref={form} className='formMain'>
                <form action="sbmit">
                    <h1>Login</h1>
                    <h3>Darails do not matches</h3>
                    <p>Name</p>
                    <input ref={name} type="text" placeholder='Name' />
                    <p>Email</p>
                    <input ref={email} type="email" placeholder='@mail' />
                    <p>Password</p>
                    <input ref={password} type="password" placeholder='********' /><br />
                    <button className='buttonForm' onClick={(e) => {
                        e.preventDefault()
                        getDates()
                    }}>Login</button>
                </form>
            </div>}
        </>
    )
}

export default LoginForm