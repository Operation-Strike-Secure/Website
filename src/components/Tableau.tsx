import React from 'react';
import IdenticalText from './IdenticalText';
import StatusBadge from './StatusBadge';
import './Tableau.css';

const data = [
  { objets: 'BUG AFFICHAGE', creation: '21/02/2024', derniereActivite: '23/02/2024', status: 'RÉPONDU' },
  { objets: 'REPORT JOUEUR', creation: '12/09/2024', derniereActivite: '19/09/2024', status: 'EN ATTENTE' },
  { objets: 'CAMÉRA BUG', creation: '02/12/2024', derniereActivite: '03/12/2024', status: 'FERME' },
  { objets: 'REPORT JOUEUR', creation: '12/09/2024', derniereActivite: '19/09/2024', status: 'FERME' },
  { objets: 'BUG AFFICHAGE', creation: '21/02/2024', derniereActivite: '23/02/2024', status: 'RÉPONDU' },
  { objets: 'BUG VOLUME', creation: '21/02/2024', derniereActivite: '23/02/2024', status: 'EN ATTENTE' },

];

const Tableau: React.FC = () => {
  return (
    <div className="table-container">
      <table className="table-wrapper">
        <thead>
          <tr>
            <th><IdenticalText text="OBJETS" color="#7C90AF" /></th>
            <th><IdenticalText text="CREATION" color="#7C90AF" /></th>
            <th><IdenticalText text="DERNIERE ACTIVITE" color="#7C90AF" /></th>
            <th><IdenticalText text="STATUS" color="#7C90AF" /></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
              <td><IdenticalText text={row.objets} color={row.status === 'FERME' ? '#4a5363' : 'white'} /></td>
              <td><IdenticalText text={row.creation} color={row.status === 'FERME' ? '#4a5363' : 'white'} /></td>
              <td><IdenticalText text={row.derniereActivite} color={row.status === 'FERME' ? '#4a5363' : 'white'} /></td>
              <td><StatusBadge status={row.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tableau;