import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import PageWrapper from "../components/PageWrapper";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GroupIcon from "@mui/icons-material/Group";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill?: boolean;
    }[];
}

const StatsPage: React.FC = () => {
    const [timeFrame, setTimeFrame] = useState<"day" | "month" | "year">("day");
    const [playerData, setPlayerData] = useState<ChartData | null>(null);
    const [gameData, setGameData] = useState<ChartData | null>(null); // Pour les parties lancées
    const [stats, setStats] = useState({
        playersToday: 0,
        gamesLaunched: 0,
        avgPlayersPerMonth: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            const mockPlayerData = generateMockPlayerData(timeFrame);
            const mockGameData = generateMockGameData(timeFrame);
            const mockStats = generateMockStats();
            setPlayerData(mockPlayerData);
            setGameData(mockGameData);
            setStats(mockStats);
        };

        fetchStats();
    }, [timeFrame]);

    // Générer des données mock pour les graphiques des joueurs
    const generateMockPlayerData = (timeFrame: string): ChartData => {
        const labels =
            timeFrame === "day"
                ? ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"]
                : timeFrame === "month"
                    ? ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"]
                    : ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

        return {
            labels,
            datasets: [
                {
                    label: "Joueurs actifs",
                    data: labels.map(() => Math.floor(Math.random() * 1000)),
                    borderColor: "rgba(54, 162, 235, 1)",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    fill: true,
                },
            ],
        };
    };

    // Générer des données mock pour les parties lancées
    const generateMockGameData = (timeFrame: string): ChartData => {
        const labels =
            timeFrame === "day"
                ? ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"]
                : timeFrame === "month"
                    ? ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"]
                    : ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

        return {
            labels,
            datasets: [
                {
                    label: "Parties lancées",
                    data: labels.map(() => Math.floor(Math.random() * 500)),
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                },
            ],
        };
    };

    // Générer des statistiques mock
    const generateMockStats = () => {
        return {
            playersToday: Math.floor(Math.random() * 2000),
            gamesLaunched: Math.floor(Math.random() * 500),
            avgPlayersPerMonth: Math.floor(Math.random() * 10000),
        };
    };

    // Modularité pour les cartes de statistiques
    const renderStatCard = (title: string, value: number, icon: React.ReactElement, color: string) => {
        return (
            <Grid item xs={12} md={4}>
                <Card sx={{ backgroundColor: "#343a40" }}>
                    <CardContent>
                        <div className="flex items-center">
                            <IconButton>{icon}</IconButton>
                            <Typography variant="h5" color="white" sx={{ ml: 2 }}>
                                {title}
                            </Typography>
                        </div>
                        <Typography variant="h4" color={color} sx={{ mt: 2 }}>
                            {value}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <PageWrapper>
            <Typography variant="h3" color="white" align="center" gutterBottom>
                Tableau de bord des statistiques
            </Typography>

            {/* Cartes de statistiques principales */}
            <Grid container spacing={3} className="mb-6">
                {renderStatCard("Nombre de joueurs aujourd'hui", stats.playersToday, <PeopleIcon sx={{ color: "#E8A382" }} />, "#4CAF50")}
                {renderStatCard("Nombre de parties lancées", stats.gamesLaunched, <SportsEsportsIcon sx={{ color: "#FF6384" }} />, "#FF6384")}
                {renderStatCard("Nombre moyen de joueurs par mois", stats.avgPlayersPerMonth, <GroupIcon sx={{ color: "#36A2EB" }} />, "#36A2EB")}
            </Grid>

            {/* Sélection du cadre temporel */}
            <div className="flex justify-center mb-6">
                <Button
                    onClick={() => setTimeFrame("day")}
                    variant={timeFrame === "day" ? "contained" : "outlined"}
                    sx={{ margin: "0 10px", backgroundColor: timeFrame === "day" ? "#E8A382" : "#455165" }}
                >
                    Jour
                </Button>
                <Button
                    onClick={() => setTimeFrame("month")}
                    variant={timeFrame === "month" ? "contained" : "outlined"}
                    sx={{ margin: "0 10px", backgroundColor: timeFrame === "month" ? "#E8A382" : "#455165" }}
                >
                    Mois
                </Button>
                <Button
                    onClick={() => setTimeFrame("year")}
                    variant={timeFrame === "year" ? "contained" : "outlined"}
                    sx={{ margin: "0 10px", backgroundColor: timeFrame === "year" ? "#E8A382" : "#455165" }}
                >
                    Année
                </Button>
            </div>

            {/* Graphique des joueurs actifs */}
            <Grid container justifyContent="center" className="mb-6">
                <Grid item xs={12} md={8}>
                    <Card sx={{ backgroundColor: "#343a40", padding: "20px" }}>
                        <Typography variant="h6" color="white" align="center" gutterBottom>
                            Nombre de joueurs actifs
                        </Typography>
                        {playerData && (
                            <Line
                                data={playerData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: "top",
                                        },
                                    },
                                }}
                            />
                        )}
                    </Card>
                </Grid>
            </Grid>

            {/* Graphique des parties lancées */}
            <Grid container justifyContent="center" className="mb-6">
                <Grid item xs={12} md={8}>
                    <Card sx={{ backgroundColor: "#343a40", padding: "20px" }}>
                        <Typography variant="h6" color="white" align="center" gutterBottom>
                            Nombre de parties lancées
                        </Typography>
                        {gameData && (
                            <Bar
                                data={gameData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: "top",
                                        },
                                    },
                                }}
                            />
                        )}
                    </Card>
                </Grid>
            </Grid>
        </PageWrapper>
    );
};

export default StatsPage;