import { useState } from "react";
import { accordionData } from './data/AccordionData'
import { Accordion } from './Accordion'

const AcordionList = () => {
    const [clickedIndex, setClickedIndex] = useState(false);

    return (
        <div>
            <h1> Accordion</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }, index) => (
                    <Accordion
                        title={title}
                        content={content}
                        index={index}
                        clickedIndex={clickedIndex}
                        setClickedIndex={setClickedIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export { AcordionList };