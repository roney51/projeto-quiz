import React from 'react';
import './Question.css';

const Question = (props) => {
    
    return (
        <div>
            <h1 className='img'>{props.imagem}</h1>
        <h1>{props.question}</h1>
        </div>
    );
}

export default Question;