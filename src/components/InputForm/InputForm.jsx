import React from 'react'
import {Label, InputGroup, Input, ErrorAlert} from '../Checkout/Checkout.styled';

export default function InputForm( 
    {state, setState,label, placeholder, type, name,errorAlert,regex}
    ){
    const onChange = (e) => {
        setState({...state, campo: e.target.value});
    }
   const validate = () => {
    if(regex){
        if(regex.test(state.campo)){
            setState({...state, valid:'true'});
        } else {
            setState({...state, valid:'false'});
        }
    }
    }
    return (
      <div>
        <Label htmlFor={name} valid={state.valid}>{label}</Label>
        <InputGroup>
          <Input 
            type={type} 
            placeholder={placeholder} 
            id={name} 
            value={state.campo}
            onChange={onChange}
            onKeyUp={validate}
            onBlur={validate}
            valid={state.valid}
            />
        </InputGroup>
        <ErrorAlert valid={state.valid}>{errorAlert}</ErrorAlert>

      </div>
    );
}
