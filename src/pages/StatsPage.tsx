import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import PageWrapper from "../components/PageWrapper";

function StatsPage() {
    const [appState, setAppState] = useState<{ loading: boolean; data: [number, number][] | null }>({
        loading: false,
        data: null,
    });
    const [totalPlayers, setTotalPlayers] = useState<number>(0);
    const [peakPlayers, setPeakPlayers] = useState<number>(0);
    const [activeSessions, setActiveSessions] = useState<number>(0);

    useEffect(() => {
        setAppState((prevState) => ({ ...prevState, loading: true }));
        let arr: [number, number][] = [];

        // Simulate fetching time-series data
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                let time = new Date().getTime() - i * 3600 * 1000;
                let value = Math.random() * 100;
                arr.push([time, value]);
            }
            setAppState({ loading: false, data: arr });
            setTotalPlayers(124567);
            setPeakPlayers(1230);
            setActiveSessions(3);
        }, 1000);
    }, []);

    let data = appState.data;

    const copperColor = "#E8A382";

    const gradientFill = {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
            [0, copperColor],
            [1, Highcharts.color(copperColor).setOpacity(0).get("rgba")],
        ],
    };

    const options = {
        chart: {
            backgroundColor: "#343a40",
            type: "area",
            height: "400px",
        },
        title: {
            text: `<h1 id="chart-title" style="color: #FFFFFF">Number of players</h1>`,
            align: "left",
        },
        xAxis: {
            labels: {
                style: {
                    color: '#FFFFFF',
                },
            },
            gridLineColor: '#455165',
        },
        yAxis: {
            labels: {
                style: {
                    color: '#FFFFFF',
                },
            },
            gridLineColor: '#455165',
        },
        plotOptions: {
            series: {
                fillColor: gradientFill,
                lineWidth: 3,
            },
        },
        series: [
            {
                name: "Players",
                data: data || [],
                color: copperColor,
                tooltip: {
                    valueDecimals: 0,
                },
            },
        ],
        legend: {
            itemStyle: {
                color: '#FFFFFF',
            },
        },
        tooltip: {
            backgroundColor: '#343a40',
            style: {
                color: '#FFFFFF',
            },
            borderColor: '#455165',
        },
        credits: {
            enabled: false,
        },
    };


    return (
        <PageWrapper>
            <div className="flex flex-col items-center p-4 mt-4 mt-md-0">
                <Grid container spacing={4} className="mb-4 w-full">
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: "#455165", color: "white" }}>
                            <CardContent>
                                <Typography variant="h6" color="white">Joueurs Total</Typography>
                                <Typography variant="h4" color="white">{totalPlayers}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: "#455165", color: "white" }}>
                            <CardContent>
                                <Typography variant="h6" color="white">Pic Joueurs</Typography>
                                <Typography variant="h4" color="white">{peakPlayers}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: "#455165", color: "white" }}>
                            <CardContent>
                                <Typography variant="h6" color="white">Sessions Actives</Typography>
                                <Typography variant="h4" color="white">{activeSessions}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <div id="container" className="w-full">
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={"stockChart"}
                        options={options}
                    />
                </div>
            </div>
        </PageWrapper>
    );
}

export default StatsPage;