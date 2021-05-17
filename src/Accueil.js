import React from 'react';
import './css/Accueil.css';
// import IMG from './img/battlefield-4-screen-02-us-09jan15\ -\ Copie.jpg';

function Accueil() {


    return(
        <body>
             <div className="body" />
            
            <div className="aligne1">
                <div className="para1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div >
                    {/* <img className="img1" src={IMG} alt="no image"/> */}
                </div>

           
            </div>
               

            <div className="aligne2">
                <div >
                    {/* <img className="img2" src={IMG} alt="no image"/> */}
                </div>
                <div className="para2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <p>
                    
                </p>

            </div>
               
        </body>
       

      
    );
}

export default Accueil;