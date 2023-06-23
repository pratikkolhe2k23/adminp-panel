import Button from "@mui/material/Button";
import './css/admission.css';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function admission() {

    return (
        <>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Admission For</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Teacher" control={<Radio />} label="Female" />
                    <FormControlLabel value="Student" control={<Radio />} label="Male" />
                </RadioGroup>

                <Button variant="contanied" color="warning"> submit </Button>


            </FormControl>
        </>
    )

}