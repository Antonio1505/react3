import React, {useEffect} from 'react';
import './css/Accueil.css';
import IMG from './img/ordi.jpeg';
import business2 from './img/business2.jpg';
import ordi2 from './img/ordi2.jpg';
import focus from './img/focus.jpg';
import ensemble from './img/ensemble.jpg';
import digital from './img/digital.jpg';
import devAndroid from './img/devAndroid.jpg';
import web from './img/web.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from './img/1.jpg';
import appareil_architecte from './img/appareil-architecte.png';
import behance_site_internet_adobe from './img/behance-site-internet-adobe.png';
import best_website from './img/best-website.png';
import Best_Website_Design_Trends from './img/Best_Website_Design_Trends.png';
import conception from './img/conception.jpg';
import construction_web from './img/construction_web.png';
import Création_site_web from './img/Création_site_web.jpg';
import creation_site from './img/creation_site.jpg';
import digital_marketing from './img/digital_marketing.png';
import digital_marketing2 from './img/digital_marketing2.png';
import facebook_ads from './img/facebook_ads.jpg';
import graphic_library from './img/graphic_library.png';
import IT from './img/IT.jpg';
import site_web_responsive from './img/site_web_responsive.png';
import SITEWEB_coulontoiture from './img/SITEWEB_coulontoiture.jpg';
import Siteweb_Importance from './img/Siteweb_Importance.jpg';
import siteweb from './img/siteweb.jpg';
import Social_Media_Marketing from './img/Social_Media_Marketing.png';
import unnamed from './img/unnamed.jpg';
import unnamed2 from './img/unnamed.png';
import web_01 from './img/web_01.png';
import web_development from './img/web_development.jpg';

import website from './img/website.jpg';


import { FcServices } from "react-icons/fc";
import { BiDetail } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";


import Aos from 'aos';
import "aos/dist/aos.css";



function Accueil() {

    useEffect(() => {
        Aos.init({ duration: 500, once: true  });
    }, []);

    return(
        <body>
             <div className="body" >

                 <Carousel controls={false} fade={true} pause='hover'>
                     <Carousel.Item interval={4000}>
                         <img
                            className="d-block w-100 slide-img"
                            src={IMG}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                        <div className= "first_title"> Bienvenue sur ma page</div>
                        <div className= "second_title">Decouvrez no site ou creez un compte</div>
                        <div className="inscription">
                            <button className="insciption_btn1">Sign In</button><br/>
                            <button className="insciption_btn2">Log In</button>
                            
                        </div>
                        </Carousel.Caption>
                        
                     </Carousel.Item>

                     <Carousel.Item interval={2000}>
                         <img
                           className="block w-100 slide-img"
                            src={ensemble}
                            alt="second slide"
                        />
                        <Carousel.Caption>
                        <div className= "first_title"> Bienvenue sur ma page</div>
                        <div className= "second_title">Decouvrez no site ou creez un compte</div>
                        <div className="inscription">
                        <button className="insciption_btn1">Sign In</button> <br/>
                            <button className="insciption_btn2">Log In</button>
                        </div>
                        </Carousel.Caption>
                        
                     </Carousel.Item>

                     <Carousel.Item interval={2000}>
                         <img
                           className="block w-100 slide-img"
                            src={ordi2}
                            alt="first slide"
                        />
                        <Carousel.Caption>
                        <div className= "first_title"> Bienvenue sur ma page</div>
                        <div className= "second_title">Decouvrez no site ou creez un compte</div>
                        <div className="inscription">
                        <button className="insciption_btn1">Sign In</button><br/>
                            <button className="insciption_btn2">Log In</button>
                        </div>
                        </Carousel.Caption>
                        
                     </Carousel.Item>

                 </Carousel>
               
             </div>

      
                 <div className="title_text">
                   <FcServices/> SERVICES
                 </div>

               
                    {/* <hr /> */}
                
        
           
           <div className="align">
             
        
                    <div className="aligne1">

                        <div className="divis1" data-aos="fade-right">
                            <div data-aos="fade-left" className="para2">
                                Creation de site web
                            </div>

                        </div>

                        <div className="divis2" data-aos="fade-right">
                            <div className="para2" >
                                Creation Application mobile
                            </div>

                        </div>
                        

                    </div>

                    <span className="vertical-line"></span>
                    
                    <div className="aligne2">

                        <div className="divis3" data-aos="fade-left">
                            <div className="para2" >
                                Maintenance Informatique
                            </div>

                        </div>

                        
                        <div className="divis4" data-aos="fade-left">
                            <div className="para2" >
                                Maintenance site web
                            </div>

                        </div>

                    </div>
                
                </div>
                <hr />
                <div className="title_text">
                  <BiDetail/>  Details de nos action
                </div>
               

                <div className="detail">
                    <div className="detail1">
                        <div className="title_img">
                            <div className="detail_title" >MAINTENANCE</div>
                            <img src={construction_web} />
                        </div>
                        
                        <div className="detail_text">
                            <li><b>Framework :</b> React.js</li>
                            <li>Language : JavaScript, JQuery, HTML5</li>
                        </div>
                    </div>

                    <div className="detail2">
                        <div className="title_img">
                        <div className="detail_title" >CONCEPTION</div>
                        
                            <img src={conception} />
                        </div>
                            <div className="detail_text">
                                <li><b>Framework :</b> React.js</li>
                                <li>Language : JavaScript, JQuery, HTML5</li>
                            </div>
                    </div>
                      
                  

                    <div className="detail3">
                    <div className="title_img">
                    <div className="detail_title" >DIGITALISATION</div>
                    
                        <img src={digital_marketing} />
                    </div>
                        <div className="detail_text">
                            <li><b>Framework :</b> React.js</li>
                            <li>Language : JavaScript, JQuery, HTML5</li>
                        </div>
                    
                        
                    </div>

                    <div className="detail4">
                    <div className="title_img">
                    <div className="detail_title" >DEVELOPPEMENT MOBILE</div>
                        
                            <img src={site_web_responsive} />
                        </div>
                            <div className="detail_text">
                                <li><b>Framework :</b> React.js</li>
                                <li>Language : JavaScript, JQuery, HTML5</li>
                            </div>
                        </div>
                        
                    
                </div>




                <div className="detail">
                    <div className="detail1">
                        <div className="title_img">
                            <div className="detail_title" >DESIGN</div>
                            <img src={graphic_library} />
                        </div>
                        
                        <div className="detail_text">
                            <li><b>Framework :</b> React.js</li>
                            <li>Language : JavaScript, JQuery, HTML5</li>
                        </div>
                    </div>

                    <div className="detail2">
                    <div className="title_img">
                    <div className="detail_title" >PUBLICITAIRE</div>
                        
                            <img src={facebook_ads} />
                        </div>
                            <div className="detail_text">
                                <li><b>Framework :</b> React.js</li>
                                <li>Language : JavaScript, JQuery, HTML5</li>
                            </div>
                    </div>
                      
                  

                    <div className="detail3">
                    <div className="title_img">
                    <div className="detail_title" >LOGO</div>
                    
                        <img src={web_01} />
                    </div>
                        <div className="detail_text">
                            <li><b>Framework :</b> React.js</li>
                            <li>Language : JavaScript, JQuery, HTML5</li>
                        </div>
                    
                        
                    </div>

                    <div className="detail4">
                    <div className="title_img">
                    <div className="detail_title" >MAINTENANCE MOBILE</div>
                        
                            <img src={Social_Media_Marketing} />
                        </div>
                            <div className="detail_text">
                                <li><b>Framework :</b> React.js</li>
                                <li>Language : JavaScript, JQuery, HTML5</li>
                            </div>
                        </div>
                        
                    
                </div>


                <hr />

                <div className="title_text">
                   <RiTeamFill/> Nos Partenariat
                </div>

               

                <div>
                    <div className="partenaire">
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={img1} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={siteweb} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={SITEWEB_coulontoiture} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={Siteweb_Importance} /></div>
                    </div>

                    <div className="partenaire">
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={web_development} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={IT} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={unnamed} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={website} /></div>
                    </div>


                    <div className="partenaire">
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={behance_site_internet_adobe} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={best_website} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={appareil_architecte} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={Best_Website_Design_Trends} /></div>
                    </div>



                    <div className="partenaire">
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={creation_site} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={business2} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={ordi2} /></div>
                        <div className="partenaire_img" ><img data-aos="zoom-out" src={Création_site_web} /></div>
                    </div>


                    
                </div>
               
            <hr />
         
        </body>
      

      
    );
}

export default Accueil;