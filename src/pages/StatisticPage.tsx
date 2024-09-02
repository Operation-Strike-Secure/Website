// import React, { useState } from 'react';
// import HeaderData from '../components/Stats/HeaderData';
// import StatsGraph from '../components/Stats/StatsGraph';
// import StatsDetails from '../components/Stats/StatsDetails';
// import './StatisticPage.css';

// const StatisticPage: React.FC = () => {
//   const [filter, setFilter] = useState('SEMAINE');
//   const [periodType, setPeriodType] = useState('SEMAINE');

//   const handleFilterChange = (selectedFilter: string) => {
//     setFilter(selectedFilter);
//   };

//   const handlePeriodTypeChange = (type: string) => {
//     setPeriodType(type);
//   };

//   const getData = (filter: string) => {
//     switch (filter) {
//       case 'JOUR':
//         return {
//           graphData: {
//             labels: ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI'],
//             values: [5, 6000, 14000],
//           },
//           detailsData: {
//             joueurs: 625,
//             parties: 625,
//             heuresDeJeu: 625,
//           },
//         };
//       case 'SEMAINE':
//         return {
//           graphData: {
//             labels: ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4'],
//             values: [12000, 2000, 10000],
//           },
//           detailsData: {
//             joueurs: 4500,
//             parties: 4500,
//             heuresDeJeu: 4500,
//           },
//         };
//       case 'MOIS':
//         return {
//           graphData: {
//             labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
//             values: [10000, 16000, 1000],
//           },
//           detailsData: {
//             joueurs: 18000,
//             parties: 18000,
//             heuresDeJeu: 18000,
//           },
//         };
//       case 'fevrier':
//         return {
//           graphData: {
//             labels: ['1 FEV', '15 FEV', '28 FEV'],
//             values: [10000, 15000, 20000],
//           },
//           detailsData: {
//             joueurs: 25000,
//             parties: 25000,
//             heuresDeJeu: 25000,
//           },
//         };
//       case 'decembre':
//         return {
//           graphData: {
//             labels: ['1 DEC', '15 DEC', '31 DEC'],
//             values: [5000, 10000, 15000],
//           },
//           detailsData: {
//             joueurs: 30000,
//             parties: 30000,
//             heuresDeJeu: 30000,
//           },
//         };
//       default:
//         return {
//           graphData: {
//             labels: [],
//             values: [],
//           },
//           detailsData: {
//             joueurs: 0,
//             parties: 0,
//             heuresDeJeu: 0,
//           },
//         };
//     }
//   };

//   const data = getData(filter);

//   return (
//     <div className="statistic-container">
//       <HeaderData onFilterChange={handleFilterChange} onPeriodTypeChange={handlePeriodTypeChange} />
//       <div className="statistic-content">
//         <StatsGraph data={data.graphData} periodType={periodType} />
//         <StatsDetails data={data.detailsData} />
//       </div>
//     </div>
//   );
// };

// export default StatisticPage;

import React, { useState, useEffect } from 'react';
import HeaderData from '../components/Stats/HeaderData';
import StatsGraph from '../components/Stats/StatsGraph';
import StatsDetails from '../components/Stats/StatsDetails';
import './StatisticPage.css';

interface GraphData {
  labels: string[];
  values: number[];
}

interface DetailsData {
  joueurs: number;
  parties: number;
  heuresDeJeu: number;
}

const StatisticPage: React.FC = () => {
  const [filter, setFilter] = useState('SEMAINE');
  const [periodType, setPeriodType] = useState('SEMAINE');
  const [graphData, setGraphData] = useState<GraphData>({ labels: [], values: [] });
  const [detailsData, setDetailsData] = useState<DetailsData>({ joueurs: 0, parties: 0, heuresDeJeu: 0 });
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  const handlePeriodTypeChange = (type: string) => {
    setPeriodType(type);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let graphResponse, detailsResponse;

        switch (filter) {
          case 'JOUR':
            graphResponse = await fetch('https://www.wanderlab.fr/api/getNumberParty');
            detailsResponse = await fetch('https://www.wanderlab.fr/api/getUserId');
            break;
          case 'SEMAINE':
            graphResponse = await fetch('https://www.wanderlab.fr/api/getNumberParty');
            detailsResponse = await fetch('https://www.wanderlab.fr/api/getUserId');
            break;
          case 'MOIS':
            graphResponse = await fetch('https://www.wanderlab.fr/api/gethostlist');
            detailsResponse = await fetch('https://www.wanderlab.fr/api/getUserId');
            break;
          default:
            graphResponse = null;
            detailsResponse = null;
        }

        if (graphResponse && detailsResponse) {
          const graphDataJson = await graphResponse.json();
          const detailsDataJson = await detailsResponse.json();

          setGraphData({
            labels: graphDataJson.labels || [],
            values: graphDataJson.values || [],
          });

          setDetailsData({
            joueurs: detailsDataJson.joueurs || 0,
            parties: detailsDataJson.parties || 0,
            heuresDeJeu: detailsDataJson.heuresDeJeu || 0,
          });
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <div className="statistic-container">
      <HeaderData onFilterChange={handleFilterChange} onPeriodTypeChange={handlePeriodTypeChange} />
      <div className="statistic-content">
        {loading ? (
          <p>Chargement des données...</p>
        ) : (
          <>
            <StatsGraph data={graphData} periodType={periodType} />
            <StatsDetails data={detailsData} />
          </>
        )}
      </div>
    </div>
  );
};

export default StatisticPage;