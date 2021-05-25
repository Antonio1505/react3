import React from 'react';
import "../css/footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import logo from "../img/logo/navira_black.jpg";

function Footer() {



    return(
        <div className="footer">
            <div >
            
                <p>
                  <TiContacts/>  Contacter nous :
                </p>

                <p>
                   <AiFillFacebook/> Facebook
                </p>

                <p>
                   <FiInstagram/> Instagram
                </p>

                <p>
                   <MdEmail/> Gmail
                </p>
               
            </div>

            <div className="div_logo">
                <img className="logo_img" src={logo} />
            </div>

            
               
           
        </div>
    )
}

export default Footer;