import { useState } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';


function BoxList() {
    const [boxList, setBoxList] = useState([]);

    const addBox = (newBox) => {
        setBoxList([...boxList, newBox]);
    }

    const removeBox = (index) => {
        const newBoxes = boxList.filter((box, i) => i !== index);
        setBoxList(newBoxes);
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxList.map((box, index) => (
                <Box
                    key={index}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={() => removeBox(index)}
                />
            ))}
        </div>
    );
}

export default BoxList;