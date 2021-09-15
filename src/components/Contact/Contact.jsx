import { Mail, Map, Phone } from '@material-ui/icons';
import React, { useState } from 'react';
import './contact.scss'
import {Fade,Zoom }from 'react-reveal';



const Contact = () => {

    const [message, setMessage] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        setMessage(true)

    }


    return (
        <div className="contact" id="contact">
            <div className="left">
               
                <Fade className="info" left cascade>
                <div className="info">
                    <div className="email  ">
                        <div>  <Mail  className="icon" /> <span>md.alif10000@gmail.com</span></div>
                      
                    </div>
                    <div className="phone">
                        <div> <Phone  className="icon"/> <span>+880 1309677070</span> </div>
                    </div>
                    <div className="location">
                        <div> <Map   className="icon"/> <span>Dhaka,Bangladesh</span> </div>
                    </div>
                    </div>
                </Fade>

              
               
               
            </div>
            <div className="right">
                <fieldset>
                <Zoom bottom>
                <legend className="title" > Contact</legend>
        </Zoom>
                    
                    <Fade right cascade>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="example@example.com" />
                    <label htmlFor="">Your Message</label>
                    <textarea placeholder="write your message here..."  ></textarea>
                    <button type="submit" >Send</button>
                    {message && <span>Thanks,I'llreply ASAP :) </span> }
                </form>
                </Fade>
                </fieldset>
              
            </div>
            
        </div>
    );
}

export default Contact;
