import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { Check } from "./CheckboxClick";
import { data } from "./data";

const CheckBox = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  // console.log(list)
  useEffect(() => {
    setList(data);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(elem =>elem.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  console.log(list,isCheck);

  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Check
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    );
  });

  return (
    <div className='check'>
      <Check
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      Select All
      {catalog}
    </div>
  );
};
export { CheckBox }