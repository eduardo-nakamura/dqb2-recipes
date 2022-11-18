
import { Typography, Card, CardContent, Grid, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { getLinks } from "../assets/data"
import { Link, NavLink } from "react-router-dom";

import { useState, useEffect } from 'react';
import logo from "../assets/logo.png"

export default function About() {
    let menuLinks = getLinks();
    useEffect(() => {

    }, [])

    return (
        <Container >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={logo} alt="Dragon Quest Builders 2 Companion App" style={{ maxWidth: '100%' }} />
            </Box>
            <Grid container sx={{ background: 'rgba(0,0,0,0.8)', margin: '10px 0' }}>
                {menuLinks.map((page, index) => (

                    <Grid item xs={6} sm={4} key={index}>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to={page.location}>

                            <Card variant="outlined" key={index} sx={{ margin: 1, textDecoration: 'none', textAlign: 'center' }}>
                                <CardContent>

                                    <Typography variant="h5" >
                                        {page.name}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </NavLink>
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
}