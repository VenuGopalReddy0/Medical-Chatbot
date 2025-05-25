/*head_postion.js*/
import React from 'react';
import favicon from '../images/favicon.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../contents/head_position.css';
import PopUp from './PopUp'; 

function Head({ onClearChat }) {
  return (
    <div className='outerborder_head'>
      <div className='icon_pos_head'>
        <img className='icon_img_dim' src={favicon} alt='icon' />
      </div>
      <div className='heading_text_sty'>
        <h3 className='stle'>MEDICAL CHATBOT</h3>
        <p>Medical Help Care</p>
      </div>
      <div className='info_details'>
        <PopUp 
          buttonText="Contact us" 
          title="Contact Us" 
          body="You can reach us at medicalchatbot902@gmail.com" 
          className='contact_us_info' 
        />
        <PopUp 
          buttonText="About us" 
          title="About Us" 
          body={`We are MedChatbot team. Chatbot is dedicated to client in providing medical assistance and information.\nWe are here to help to solve clients problem easily.\n Chatbot will play key role in medical field.`} 
          className='abt_us_info' 
        />
        <button className='clear_chat_button' onClick={onClearChat}>Clear Chat</button>
      </div>
    </div>
  );
}




export default Head;
