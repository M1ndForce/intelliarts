import React from 'react';

const Input = ({value, name, onChange}) => {
        return <input type="text" value={value} name={name} onChange={onChange}/>
    }
;

export default Input;
