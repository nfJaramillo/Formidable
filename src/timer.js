import { useEffect, useState } from "react";
import * as React from 'react';
import moment from "moment/moment";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const starts = moment('2022-10-07 19:55:00')



function Timer() {
    const [years, setYears] = useState(Update('year'));
    const [months, setMonths] = useState(Update('month'));
    const [days, setMDays] = useState(Update('day'));
    const [hours, setHours] = useState(Update('hour'));
    const [minuts, setMinuts] = useState(Update('minut'));
    const [seconds, setSeconds] = useState(Update('second'));


    useEffect(() => {
        setTimeout(() => {
            setYears(Update('year'))
            setMonths(Update('month'))
            setMDays(Update('day'))
            setHours(Update('hour'))
            setMinuts(Update('minut'))
            setSeconds(Update('second'))
        }, 1000);
    });


    function Update(type) {
        var ends = moment()
        var diff = moment.duration(ends.diff(starts));

        if (type === 'year') {
            return diff.years()
        }
        else if (type === 'month') {
            return diff.months()
        }
        else if (type === 'day') {
            return diff.days()
        }
        else if (type === 'hour') {
            return diff.hours()
        }
        else if (type === 'minut') {
            return diff.minutes()
        }
        else if (type === 'second') {
            return diff.seconds()
        }

    }

    const cardYears = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h4" color="white" gutterBottom align="center">
                    Años
                </Typography>
                <Typography variant="h4" color="white" align="center">
                    {years}
                </Typography>
            </CardContent>
            
        </React.Fragment>
    );

    const cardMonths = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h4" color="white" gutterBottom align="center">
                    Meses
                </Typography>
                <Typography variant="h4" color="white" align="center">
                    {months}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardDays = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h4" color="white" gutterBottom align="center">
                    Días
                </Typography>
                <Typography variant="h4" color="white" align="center">
                    {days}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardHours = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h4"  color="white" gutterBottom align="center">
                    Horas
                </Typography>
                <Typography variant="h4" color="white" align="center">
                    {hours}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardMinuts = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h4" color="white" gutterBottom align="center">
                    Minutos
                </Typography>
                <Typography variant="h4" color="white" align="center">
                    {minuts}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardSeconds = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h4" color="white" gutterBottom align="center">
                    Segundos
                </Typography>
                <Typography variant="h4" color="white" align="center">
                    {seconds}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const theme = createTheme({
        palette: {
          background: {
            paper: '#1E1E1E', 
          },
        },
      });

    return (
        <ThemeProvider theme={theme}>
        <span>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={3}> <Card >{cardYears}</Card> </Grid>
            <Grid item xs={3}> <Card >{cardMonths}</Card> </Grid>
            <Grid item xs={3}><Card >{cardDays}</Card> </Grid>
            </Grid>
            <br/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={3}><Card >{cardHours}</Card> </Grid>
            <Grid item xs={3}><Card >{cardMinuts}</Card> </Grid>
            <Grid item xs={3}><Card >{cardSeconds}</Card> </Grid>
            </Grid>
        </span>
        </ThemeProvider>


    )
}


export default Timer;