import { useState } from "react";
import { accordionData } from './data/AccordionData'
import { Accordion } from './Accordion'

const AcordionApp = () => {
    return (
        <div>
            <h1> Accordion</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (<Accordion title={title} content={content} />))}
            </div>
        </div>
    );
};

export { AcordionApp };