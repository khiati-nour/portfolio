import React from 'react'
import DownloadLink from "react-download-link";
import { Link } from 'react-router-dom'
import './style.css'
function Home() {
    return (
        <div className="home">
             <div className="title">
             <h1>
             <p>Hi,</p>
             <p>I am Nour </p>
             <p> Web developer</p>

             </h1>
   < button>
   <a
     href="/cv.pdf"
     download
     >
    Download my Resume
  </a>
  </button>


             </div>
             <div className="person"> 
             <img
             src={`${process.env.PUBLIC_URL}/jenga.jpg`}
             alt="personel picture"
             
             
             
             />
             
             
               </div>
             
        </div>
    )
}

export default Home
