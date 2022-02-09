import Component1 from "./component1"

function Level5(prop){
    return(
    <>
      <Component1 value1={prop.value1} setValue1={prop.setValue1}/>
      <Component1 value1={prop.value2} setValue1={prop.setValue2}/>
      <Component1 value1={prop.value3} setValue1={prop.setValue3}/>
      <Component1 value1={prop.value4} setValue1={prop.setValue4}/>
      <Component1 value1={prop.value5} setValue1={prop.setValue5}/>
    </>
    )
}

export default Level5