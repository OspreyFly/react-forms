import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
    // Combine related states into a single state object
    const [box, setBox] = useState({
        width: 0,
        height: 0,
        backgroundColor: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(box); // Pass the entire box object
        // Reset the box state
        setBox({
            width: 0,
            height: 0,
            backgroundColor: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update the box state based on the input name
        setBox(prevBox => ({
            ...prevBox,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Width"
                value={box.width}
                onChange={handleChange}
                name="width"
            />
            <input
                type="number"
                placeholder="Height"
                value={box.height}
                onChange={handleChange}
                name="height"
            />
            <input
                type="text"
                placeholder="Background Color"
                value={box.backgroundColor}
                onChange={handleChange}
                name="backgroundColor"
            />
            <button type="submit">Add Box</button>
        </form>
    );
}

export default NewBoxForm;
