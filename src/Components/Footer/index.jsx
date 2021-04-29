import React from 'react'
import './style.css'
export const Footer = () => {
    return (
        <footer>
        <a
          href="https://github.com/khiati-nour"
          target="_blank"
        >
          <img
            src={`${process.env.PUBLIC_URL}/github.png`}
            alt="GitHub-icon"
          />
        </a>
        <a href="https://www.facebook.com/silver.moon.31924" target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}/facebook.png`}
            alt="FaceBook-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/khiati-nourelhouda-ba5920b7/"
          target="_blank"
        >
          <img
            src={`${process.env.PUBLIC_URL}/linkedin.png`}
            alt="LinkIn-icon"
          />
        </a>
       
      </footer>
    )
}
export default Footer;