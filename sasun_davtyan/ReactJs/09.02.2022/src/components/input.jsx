import React, { useState, } from 'react';   

function Validate() {
    const [firstName, setfirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="Validate">
        <div>
            <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} />
            <input type="text" value={secondName} onChange={e => setSecondName(e.target.value)} />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={() => {
                if (firstName.length < 5) {
                    console.error(new Error("dlina fisrtName ne savpadayet"))
                } else {
                    console.log({ firstName })
                }
                if (secondName.length < 5) {
                    console.error(new Error("dlina  SecondNAme ne savpadayet"))
                } else {
                    console.log({ secondName })
                }
                if (email.length < 8) {
                    console.error(new Error("dlina email ne savpadayet"))
                } else {
                    console.log({ email })
                }

            }}>Submit</button>
        </div>
        </div>
    );
}

export { Validate };