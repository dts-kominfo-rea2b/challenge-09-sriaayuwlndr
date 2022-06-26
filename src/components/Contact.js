// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {

    const {name, phone, email, photo} = props;
    return (
        <div>
        <img src={photo}></img>
        <h1>{name}</h1>
        <p>{phone}</p>
        <p>{email}</p>
        </div>
    )
}

export default Contact;