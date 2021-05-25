import React, {useState} from 'react';
// import Axios from 'axios';
import './css/App.css';
// import { useHistory } from 'react-router-dom'
import './css/Profile.css';
import img1 from './img/construction_web.png';
import img2 from './img/web_01.png';
import text from './img/Social_Media_Marketing.png';

export const Profile = () => {

  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)
 
  return (
    <div className="App">
      <div className="zoom">
        <img src={img1} alt="" id="img1" 
        style={{width: (10 + offset * 0.3) + '%'}}
        />
        <img src={img2} alt="" id="img2" 
        style={{width: (10 + offset * 0.3) + '%'}}
        />
        <img src={text} alt="" id="text"
         style={{top: `-${10 + offset * 0.3 + '%'}`}}
        />
       
      </div>

    <div className="content" >
      <h2>Simple parallax effect with React</h2>
      <p>Et ut velit enim esse sunt nisi et aliquip enim enim est. Qui eiusmod ea minim pariatur veniam fugiat cupidatat irure. Et et exercitation ut officia sint commodo irure do nulla sunt excepteur est sunt. Eiusmod proident cupidatat enim sint et. Quis commodo qui labore officia reprehenderit laborum deserunt magna cillum nostrud amet.

Ullamco id enim in commodo ea cupidatat voluptate fugiat pariatur nisi aliquip duis. Non in velit elit veniam ex. Dolor ea culpa ut non nostrud veniam.

Sint irure cillum deserunt Lorem non non elit. Et exercitation exercitation sint dolor. Excepteur excepteur irure esse enim culpa tempor est amet incididunt. Do qui in culpa magna laboris velit irure amet et mollit. Nulla do irure enim exercitation labore aliqua.

Anim et minim ut commodo consectetur excepteur do exercitation cillum nisi sint magna pariatur. Anim nulla amet velit consequat minim amet ut qui ad. Exercitation dolore dolor esse deserunt aliqua sit cillum reprehenderit elit quis velit commodo.

Dolor deserunt Lorem amet occaecat aliquip exercitation sunt sint dolor laborum aute ad incididunt ad. Qui cillum proident ea exercitation consectetur dolore irure aliquip tempor excepteur amet. Pariatur magna est quis veniam dolore ut pariatur nisi officia quis anim deserunt esse. Culpa reprehenderit veniam enim pariatur cillum mollit do sunt velit magna. Amet incididunt labore ipsum nisi et laborum ex.

Anim consectetur dolore qui exercitation aute laborum mollit consectetur cupidatat irure. Tempor mollit fugiat mollit ullamco. Consequat sunt tempor amet anim ut culpa excepteur Lorem Lorem veniam. Elit ea minim cillum velit aliquip laborum sint dolore fugiat occaecat sit. Pariatur aliqua officia laborum aute.

Dolore deserunt qui ex exercitation pariatur qui aute ullamco irure tempor irure. Amet amet adipisicing nulla Lorem consequat qui ea eiusmod adipisicing non pariatur sint amet in. Magna ullamco sunt Lorem cupidatat. Magna minim eu elit magna exercitation duis. Sint esse nisi laboris nulla tempor nisi tempor. Nostrud ad nulla et in aute cupidatat sint ad laboris esse proident officia.

Laborum sint pariatur dolor minim deserunt qui laborum velit nulla sunt. Et duis laboris ipsum laborum laborum ut ut exercitation ullamco dolor proident magna. Aute excepteur in mollit eu cillum eiusmod Lorem irure. Adipisicing dolor ipsum enim voluptate fugiat. Ex eiusmod ut deserunt dolore cupidatat sit eu ea consectetur occaecat voluptate occaecat.

Sint incididunt dolor irure culpa duis pariatur anim commodo. Enim consequat laborum do amet. Cupidatat enim et do aliquip aliquip dolor anim ex exercitation fugiat. Quis velit esse ipsum cupidatat Lorem cupidatat elit pariatur exercitation. Qui cillum officia magna cupidatat ea non magna. Eiusmod elit duis ex mollit sit occaecat duis deserunt ea.</p>
    </div>
      
    </div>
  );
}
