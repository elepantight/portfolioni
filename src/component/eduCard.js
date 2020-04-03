import React from 'react'

function EDU ({studier, index, toggleEDU}) {
    return(
        <div 
            className={"studier " + (studier.open ? 'open' : '')}
            key={index}
            onClick={() => toggleEDU(index)}
            >
                
                <div className="edu-question">
                    {studier.question}

                </div>
                <div className="edu-answer">
                    {studier.answer}

                </div>
            </div>
            
    )
}

export default EDU