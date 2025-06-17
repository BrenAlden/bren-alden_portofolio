import React from 'react';
import '../styles/Profile.css';
import profileImage from '../assets/pp1.JPG'
import instagramIcon from '../assets/icon/instagram.png'; 
import linkedinIcon from '../assets/icon/linkedin (1).png';  
import discordIcon from '../assets/icon/logo.png';     
import whatsappIcon from '../assets/icon/whatsapp.png'; 

function Profile() {
  return (
    <main className="profile-section">
      <div className="profile-card">
        <div className="profile-image-container">

          <img src={profileImage} alt="Bren Alden" className="profile-image" />
          
        </div>
        <div className="profile-info">
          <div className="social-icons">
             <a href="https://www.instagram.com/brenalden10/profilecard/?igsh=MXhxd3V1b2RjdHdueQ==" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon-image" />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon-image" />
            </a>

            {/* Discord - Mungkin berupa link ke server atau username */}
            <a href="#discord-link-atau-info" target="_blank" rel="noopener noreferrer"> {/* Ganti # dengan link/info Discord */}
              <img src={discordIcon} alt="Discord" className="social-icon-image" />
            </a>

            {/* WhatsApp - Biasanya menggunakan link wa.me */}
            <a href="https://wa.me/NOMORWHATSAPP" target="_blank" rel="noopener noreferrer"> {/* Ganti NOMORWHATSAPP */}
              <img src={whatsappIcon} alt="WhatsApp" className="social-icon-image" />
            </a>
          </div>
          <h1>Bren Alden</h1>
          <p>
            Computer Science Major, with strong passion for Artificial Intelligence and
            Web Development & Design. Highly motivated to explore new knowledge.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Profile;