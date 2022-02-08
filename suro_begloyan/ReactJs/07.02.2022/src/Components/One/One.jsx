import React, { useState } from 'react';
import './One.css';
import { Footer } from './Two/Two';
import { Header } from './Two/Header';

const list = [
    { id: 1, title: " Text 1" },
    { id: 2, title: " Text 2" },
    { id: 3, title: " Text 3" },
    { id: 4, title: " Text 4" },
    { id: 5, title: " Text 5" },
    { id: 6, title: " Text 6" }
];

function One() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [itemsList, setItemsList] = useState(list)
    function remove(id) {
        const current = [...itemsList.filter((elem) => elem.id !== id)];
        setItemsList(current)
    }
    return (
        <div className="one">
            <div className='headerBlock'>
                <Header  name={name} setName={setName} setValue={setValue} removeAll={() => setItemsList([])} undo={() => setItemsList(list)} />
            </div>
            <div><Footer value={value} remove={remove} itemsList={itemsList} /></div>
        </div>
    )
}

export { One };