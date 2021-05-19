import React, {useEffect} from 'react';
import './css/Accueil.css';
import IMG from './img/imageTest.jpg';

import Aos from 'aos';
import "aos/dist/aos.css";


function App() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <body>
             <div className="body" >

                 <div className="title">
                    <div className= "first_title"> Bienvenue sur ma page</div>
                    <div className= "second_title">Decouvrez no site ou creez un compte</div>
                    <div>
                    <button className="insciption_btn">Inscription</button>
                    <input type="text" className="input_inscription"/>
                    </div>
                    
                 </div>
             </div>

             <div>
                 <div className="title_text">
                    Learn more About our society
                 </div>

                 <div className="title_text2" >
                    Culpa ut consequat non sit do deserunt. Non Lorem eu non enim ut consequat est 
                    voluptate reprehenderit aute id. Enim exercitation aliquip quis ut aliquip quis amet 
                    nulla excepteur nisi voluptate dolore do. Exercitation nostrud do laborum veniam occaecat 
                    sequat ad culpa non ex ex.

                    Pariatur magna ea occaecat adipisicing velit adipisicing minim laboris laborum est amet 
                    incididunt aliqua veniam. Qui voluptate sunt labore ut elit adipisicing tempor est
                     consequat occaecat ea.
                    Aliquip elit pariatur occaecat velit minim dolor et.
                    <br/>
                    <hr />
                 </div>
             </div>
           
           <div className="align">
                <div className="aligne1">
                    <div  className="para1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                    <div >
                        <img className="img1"  src={IMG} alt="no image"/>
                    </div>

            
                </div>
                
                <span className="vertical-line"></span>

                <div className="aligne2">
                    <div >
                        <img className="img2"  src={IMG} alt="no image"/>
                    </div>
                    <div className="para2" >
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
               

            </div>
            <hr />
        </body>
       

      
    );
}

export default App;