import Level4 from "./level4"

function Level3(prop){
    return(
        <Level4 value1={prop.value1} value2={prop.value2} value3={prop.value3} value4={prop.value4} value5={prop.value5}
        setValue1={prop.setValue1} setValue2={prop.setValue2} setValue3={prop.setValue3} setValue4={prop.setValue4} setValue5={prop.setValue5}
        />
    )
}

export default Level3