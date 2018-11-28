import React from 'react';
import TextField from '@material-ui/core/TextField';
  
const textField = ({ label, type, onChange }) => {
    
    return(
        <TextField
          type={type}
          label={label}
          onChange={onChange('name')}
          margin="dense"
        />
    )

}

export default textField;