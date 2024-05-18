import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { useNavigate } from "react-router-dom";

import "./StatPage.css";

import Logo from '../assets/Logo.svg';

Chart.register(...registerables);

export const StatPage: React.FC = () => {
  const navigate = useNavigate();

  const chart1Ref = useRef<HTMLCanvasElement>(null);
  const chart2Ref = useRef<HTMLCanvasElement>(null);
  const chart1Instance = useRef<Chart | null>(null);
  const chart2Instance = useRef<Chart | null>(null);

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const chartData1 = {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [{
        label: 'Nombre de parties',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }],
    };

    const chartData2 = {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [{
        label: 'Nouveaux joueurs',
        data: [3, 10, 5, 2, 20, 30, 45],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }],
    };

    if (chart1Ref.current) {
      if (chart1Instance.current) {
        chart1Instance.current.destroy();
      }
      chart1Instance.current = new Chart(chart1Ref.current, {
        type: 'line',
        data: chartData1,
        options: {
          responsive: true,
        },
      });
    }

        if (chart2Ref.current) {
            if (chart2Instance.current) {
                chart2Instance.current.destroy();
            }
            chart2Instance.current = new Chart(chart2Ref.current, {
                type: 'line',
                data: chartData2,
                options: {
                    responsive: true,
                },
            });
        }

        return () => {
            if (chart1Instance.current) {
                chart1Instance.current.destroy();
            }
            if (chart2Instance.current) {
                chart2Instance.current.destroy();
            }
        };
    }, []);

    return (
      <div className="stat-page">
        <div className="container">
          <div className="rectangle-gris">
            <button className="button-left-image" onClick={handleHomeClick}>
             <img src={Logo} alt="Logo" className="left-image" />
            </button>
            <div className="nom">O.S.S</div>
            <div className="titre-stats">Statistiques du jeu</div>
          </div>
          <div className="stats-container">
            <div className="carre">
              <canvas ref={chart1Ref} className="chart-container"></canvas>
            </div>
            <div className="carre">
              <div>
                <h2>Nombre total de parties</h2>
                  <p>12345</p>
              </div>
            </div>
            <div className="carre">
              <canvas ref={chart2Ref} className="chart-container"></canvas>
            </div>
            <div className="carre">
              <div>
                <h2>Nombre total de joueurs</h2>
                <p>6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default StatPage;