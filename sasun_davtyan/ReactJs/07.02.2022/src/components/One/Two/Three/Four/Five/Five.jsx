import React, { useState } from 'react';
import { Items } from './Items/Items';

function Five(props) {
    
    return (

        <div className="Five">
            {
                props.itemsList.map((elem) => <Items key={elem.id} item={elem}  value={props.value} remove={props.remove} />)

            }
        </div>
    )   
}
export { Five };