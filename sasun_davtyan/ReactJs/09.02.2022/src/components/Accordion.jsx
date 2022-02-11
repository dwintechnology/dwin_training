import React, { useState } from 'react';

const Accordion = ({ title, content, index, clickedIndex, setClickedIndex }) => {
    const toggle = index => {
        if (clickedIndex === index) {
            return setClickedIndex(null);
        }
        setClickedIndex(index);
    };
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => toggle(index)} key={index}>
                <div>{title}</div>
                <div>{clickedIndex === index ? '-' : '+'}</div>
            </div>
            {clickedIndex === index && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export { Accordion };