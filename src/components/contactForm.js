import React from 'react'

const divStyle = {
    backgroundColor: 'white',
};
//straight iframe drop in, no api call
export default function ContactForm() {
    return(
        <div className="border border-danger mb-5" style={divStyle}>
            <iframe title='contact form' src="http://ist.rit.edu/api/contactForm.php" frameBorder="0" width="100%" height="570px" id="contact-form"></iframe>
        </div>     
    )
}