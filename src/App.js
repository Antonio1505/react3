import React, {useState, useEffect } from 'react';
import Axios from 'axios';
import './css/App.css';
import { useHistory } from 'react-router-dom'

export const App = () => {

  const [produitList, setProduitList] = useState([]);
  // const [idProduit, setIdProduit] = useState('');
  const [numProduit, setNumProduit] = useState('');
  const [design, setDesign] = useState('');
  const [stock, setStock] = useState('');

  
const history = useHistory();

  useEffect(() => {
    Axios.get('http://localhost:3001/api/list').then((response) => {
      setProduitList(response.data);
      console.log(produitList);
    })
  }, []);

  const addProduit = () => {
    Axios.post('http://localhost:3001/api/add', {
      numProduit: numProduit, Design: design, Stock: stock
    });

    setProduitList([...produitList,
    {numProduit: numProduit, Design: design, Stock: stock},]);
  };

  const deleteProduit = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);

  };

  return (
    <div className="App">
      <div>
        
        <div>
          <label>numProduit:</label>
          <input type="text" name="numProduit" onChange={(e) => {
            setNumProduit(e.target.value);
          }} />
        </div>

        <div>
          <label>Design:</label>
          <input type="text" name="design" onChange={(e) => {
            setDesign(e.target.value);
          }} />
        </div>

        <div>
          <label>Stock:</label>
          <input type="text" name="stock" onChange={(e) => {
            setStock(e.target.value);
          }} /> 
        </div>

        <button onClick = {addProduit}>ajouter</button>
        
        <button onClick = {() => {history.push('/profile');}}>redirect</button> 

        <table className="tableProd">
              
                <tr>
                    <th className="titre">Id</th>
                    <th className="titre">Num Prod</th>
                    <th className="titre">Design</th>
                    <th className="titre">Stocke</th>
                    <th className="titre">ACTION</th>

                </tr>
                {produitList.map((val) => {
                return (<tr className="card">
                
                        <td>{val.idProduit}</td>
                        <td>{val.numProduit}</td>
                        <td>{val.Design}</td>
                        <td>{val.Stock}</td>
                        <td>
                          <button onClick={() => {deleteProduit(val.idProduit)}}>Delete</button>
                          <button onClick={() => {deleteProduit(val.idProduit)}}>Edite</button>
                        </td>
                 
                </tr>)
                 
        })}
       
            </table>

      </div>
      


    </div>
  );
}

;
