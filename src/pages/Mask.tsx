import { TextField, Box } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { useState } from 'react';

export default function Mask() {
    const [{num, numMask}, setNum] = useState({num:"", numMask:""});
    const handleChange = (e: { target: { value: string; }; }) => {
        setNum((prevState) => ({ ...prevState, num: e.target.value.replace(/[^A-Z0-9]/ig, ""), numMask:e.target.value }));
    };

    return (
        <Box sx={{ background: 'white' }}>

            <PatternFormat onChange={handleChange} format="+## (###) #### ####" allowEmptyFormatting mask="_" customInput={TextField} />
            <p>Num: {num}</p>
            <p>Mask: {numMask}</p>
            
            

        </Box>
    );
}