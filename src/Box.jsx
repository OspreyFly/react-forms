import React from 'react';

function Box({ width, height, backgroundColor, removeBox }) {
    return (
        <div style={{ width, height, backgroundColor, display: 'inline-block', margin: '10px' }}>
            <button onClick={removeBox}>X</button>
        </div>
    );
}

export default Box;
