import React from 'react';
import Button from '@material-ui/core/Button';


const button = ({ onClick, label }) => {
    return(
        <Button variant="contained" onClick={onClick} color="primary">{label}</Button>
    )
}

export default button;