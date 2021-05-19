import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function BonDE() {

    const [BEList, setBEList] = useState([]);
    const [numBonEntree, setNumBonEntree] = useState('');
    const [numProduit, setNumProduit] = useState('');
    const [qteEntree, setQteEntree] = useState('');

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:3001/api/listBonEntre").then((response) => {
            setBEList(response.data);
        })
    })

    return(
<div className="App">
      <div>
        
        <div>
          <label>num BE:</label>
          <input type="text" name="numProduit" onChange={(e) => {
            setNumBonEntree(e.target.value);
          }} />
        </div>

        <div>
          <label>numProd:</label>
          <input type="text" name="design" onChange={(e) => {
            setNumProduit(e.target.value);
          }} />
        </div>

        <div>
          <label>qteEntree:</label>
          <input type="text" name="stock" onChange={(e) => {
            setQteEntree(e.target.value);
          }} /> 
        </div>

        {/* <button onClick = {addProduit}>ajouter</button> */}
        
        <button onClick = {() => {history.push('/profile');}}>redirect</button> 

        <table className="tableProd">
              
                <tr>
                    <th className="titre">Id</th>
                    <th className="titre">Num BE</th>
                    <th className="titre">Num Prod</th>
                    <th className="titre">qte Entre</th>
                   
                </tr>
                {BEList.map((val) => {
                return (<tr className="card">
                
                        <td>{val.idBondeEntree}</td>
                        <td>{val.NumBonEntree}</td>
                        <td>{val.NumProduit}</td>
                        <td>{val.qteEntree}</td>
                        <td>
                          {/* <button onClick={() => {deleteProduit(val.idProduit)}}>Delete</button>
                          <button onClick={() => {deleteProduit(val.idProduit)}}>Edite</button> */}
                        </td>
                 
                </tr>)
                 
        })}
       
            </table>

      </div>
      


    </div>
    );
}

export default BonDE;