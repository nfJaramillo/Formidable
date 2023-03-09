import { useEffect, useState } from "react";
import * as React from 'react';
import moment from "moment/moment";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


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

        var starts = moment('2022-10-07 19:55:00')

        var ends = moment()


        if (type === 'year') {
            return ends.diff(starts, 'y')
        }
        else if (type === 'month') {
            starts.add(ends.diff(starts, 'y'), 'y')
            return ends.diff(starts, 'M')
        }
        else if (type === 'day') {
            starts.add(ends.diff(starts, 'M'), 'M')
            return ends.diff(starts, 'd')
        }
        else if (type === 'hour') {
            starts.add(ends.diff(starts, 'd'), 'd')
            return ends.diff(starts, 'h')
        }
        else if (type === 'minut') {
            starts.add(ends.diff(starts, 'h'), 'h')
            return ends.diff(starts, 'm')
        }
        else if (type === 'second') {
            starts.add(ends.diff(starts, 'm'), 'm')
            return ends.diff(starts, 's')
        }

    }

    const cardYears = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" gutterBottom align="center">
                    Años
                </Typography>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" align="center">
                    {years}
                </Typography>
            </CardContent>

        </React.Fragment>
    );

    const cardMonths = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" gutterBottom align="center">
                    Meses
                </Typography>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" align="center">
                    {months}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardDays = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" gutterBottom align="center">
                    Días
                </Typography>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" align="center">
                    {days}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardHours = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" gutterBottom align="center">
                    Horas
                </Typography>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" align="center">
                    {hours}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardMinuts = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" gutterBottom align="center">
                    Minutos
                </Typography>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" align="center">
                    {minuts}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    const cardSeconds = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ typography: {xs:'h7', sm: 'h7', md:'h5', lg:'h4'  }}} color="white" gutterBottom align="center">
                    Segundos
                </Typography>
                <Typography sx={{ typography: {xs:'h7', sm: 'h6', md:'h5', lg:'h4'  }}} color="white" align="center">
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
                <Grid container rowSpacing={1} alignItems="center" justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item sm={4}> <Card >{cardYears}</Card> </Grid>
                    <Grid item sm={4}> <Card >{cardMonths}</Card> </Grid>
                    <Grid item sm={4}><Card >{cardDays}</Card> </Grid>
                </Grid>
                <br />
                <Grid container rowSpacing={1} alignItems="center" justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item sm={4}><Card >{cardHours}</Card> </Grid>
                    <Grid item sm={4}><Card >{cardMinuts}</Card> </Grid>
                    <Grid item sm={4}><Card >{cardSeconds}</Card> </Grid>
                </Grid>
            </span>
        </ThemeProvider>


    )
}


export default Timer;
