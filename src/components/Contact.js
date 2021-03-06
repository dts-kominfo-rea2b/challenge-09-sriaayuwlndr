// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({props}) => {

    const {name, phone, email, photo} = props;

    return (
        <div style={{background: "grey", width: "100%", padding: "20px", height: "auto"}}>
            <img src={photo} style={{background: "white", width: "10%", padding: "20px", height: "auto"}}/>
            <h1>{name}</h1>
            <p>{phone}</p>
            <p>{email}</p>
            <hr/>
        </div>
    )
}

export default Contact;