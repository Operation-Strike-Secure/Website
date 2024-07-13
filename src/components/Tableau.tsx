import React from 'react';
import IdenticalText from './IdenticalText';
import StatusBadge from './StatusBadge';
import './Tableau.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  { objets: 'Objet 1', creation: '2024-01-01', derniereActivite: '2024-01-05', status: 'repondu' },
  { objets: 'Objet 2', creation: '2024-01-02', derniereActivite: '2024-01-06', status: 'En attente' },
  { objets: 'Objet 3', creation: '2024-01-03', derniereActivite: '2024-01-07', status: 'FERME' },
  { objets: 'Objet 1', creation: '2024-01-01', derniereActivite: '2024-01-05', status: 'repondu' },
  { objets: 'Objet 2', creation: '2024-01-02', derniereActivite: '2024-01-06', status: 'En attente' },
  { objets: 'Objet 3', creation: '2024-01-03', derniereActivite: '2024-01-07', status: 'FERME' },
  { objets: 'Objet 1', creation: '2024-01-01', derniereActivite: '2024-01-05', status: 'repondu' },
  { objets: 'Objet 2', creation: '2024-01-02', derniereActivite: '2024-01-06', status: 'En attente' },
  { objets: 'Objet 3', creation: '2024-01-03', derniereActivite: '2024-01-07', status: 'FERME' },
  // Ajoutez plus de données si nécessaire
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
            <tr key={index} className={`${index % 2 === 0 ? 'even-row' : 'odd-row'} ${row.status === 'FERME' ? 'ferme-row' : ''}`}>
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