import {React, useState} from 'react'
import {
    FormWrapper, 
    Form, 
    Label, 
    TermsContainer, 
    ButtonContainer, 
    Button, 
    ErrorMessage, 
    SuccessComment } from '../Checkout/Checkout.styled';
import InputForm from '../InputForm/InputForm';

export default function Checkout() {
    const [name, setName] = useState({campo:'', valid: null});
    const [email, setEmail] = useState({campo:'', valid: null});
    const [zipCode, setZipCode] = useState({campo:'', valid: null});
    const [orderNote, setOrderNote] = useState({campo:'', valid: null}); 
    const expresions = {
        username: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        orderNote: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,// Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        zipcode: /^\d{5,8}$/, // 5 a 8 numeros.
    }


    return (
        <FormWrapper>
            <Form action="">
                <InputForm
                    state={name}
                    setState={setName}
                    type="text"
                    label="Name"
                    placeholder="John Doe"
                    name="name"
                    errorAlert="Should contain only letters"
                    regex={expresions.username}
                />
                <InputForm
                    state={email}
                    setState={setEmail}
                    type="text"
                    label="Email"
                    placeholder="name@mail.com"
                    name="email"
                    errorAlert="You must enter your email"
                    regex={expresions.email}
                />
                <InputForm
                    state={zipCode}
                    setState={setZipCode}
                    type="number"
                    label="Zip code"
                    placeholder="00000"
                    name="zipcode"
                    errorAlert="Should contain only numbers"
                    regex={expresions.zipcode}
                />
                <InputForm
                    state={orderNote}
                    setState={setOrderNote}
                    type="text"
                    label="Order Note"
                    placeholder="Notes for delivery"
                    name="orderNote"
                    errorAlert="Add also the possibility to write a note here."
                    regex={expresions.orderNote}
                />
                
                <TermsContainer>
                    <Label>
                        <input type="checkbox" name="terms" id="terms"/>
                        I accept the terms and conditions. 
                    </Label>
                </TermsContainer>
                { false && <ErrorMessage>
                    <p>
                        <b>Error:</b> Please fill the form with the requested information. 
                    </p>
                </ErrorMessage>}
                <ButtonContainer>
                    <Button type="submit">Send</Button>
                    <SuccessComment>The form was sent successfully!</SuccessComment>
                </ButtonContainer>
            </Form>
        </FormWrapper>
    )
}
