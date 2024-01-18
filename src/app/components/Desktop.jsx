import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from "react-social-icons";

function Desktop() {
    const socialIconUrls = [
        "https://twitter.com/NoyceJoel",
        "https://www.linkedin.com/in/joel-noyce-16a034188",
        "https://github.com/Noyce-Joel",
      ];
  return (
    <>
    <div className='desktop'>
    <div className='desktop-heading'>Sorry, but this site is best viewed on a desktop...</div>
    
    <div className="desktop-socials">
          {socialIconUrls.map((icon, idx) => (
            <div key={idx}>
              <SocialIcon style={{width: '90px', height: '90px'}} url={icon} />
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Desktop