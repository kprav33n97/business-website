import React from 'react'
import './Contact.css'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import msgIcon from '../../assets/msg-icon.png'
import whiteArrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93d97a76-c44f-432a-8182-88e04a9d8cca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msgIcon} alt="Message Icon" /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nulla veniam cum fugit, quo perspiciatis iste, quae minus voluptatem architecto corrupti magni tempora pariatur ea quisquam. Pariatur animi aliquid quos?</p>
        <ul>
            <li className='message-links'><span><FaEnvelope /></span>yourmail@gmail.com</li>
            <li className='message-links'><span><FaPhoneAlt /></span>+1 234 56987</li>
            <li className='message-links'><span><IoLocationSharp /></span>California, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name:' required/>
            <label htmlFor="">Phone number</label>
            <input type="tel" name="phone" placeholder='Enter your phone number:' required/>
            <label htmlFor="">Write your message here:</label>
            <textarea name="message" rows="6" placeholder='Enter your message:' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit now <img src={whiteArrow} alt="Arrow" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
