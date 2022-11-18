import { Grid, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { combinationsList } from "../assets/data"

export default function About() {
    const combinationsListInit = combinationsList
    const [searchTerm, setSearchTerm] = useState("");
    const [rows, setRows] = useState(combinationsListInit);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = combinationsListInit.filter((man) =>
            man.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setRows(results)
    }, [searchTerm]);

    return (
        <Container>
            <Box sx={{ margin: '0 auto', background: 'rgba(0,0,0,0.8)', textAlign: 'center', color: '#fff', borderRadius: '50px 50px 0 0', width: '50%' }}>
                <h1 style={{ padding: '10px', margin: 0 }}>Room Combinations</h1>
            </Box>

            <Box sx={{ background: '#facc01', padding: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px 10px 0 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            id="outlined-required"
                            label="Search Combinations Name"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </Grid>
                 
                </Grid>
            </Box>

            <TableContainer sx={{background: 'rgba(0,0,0,0.8)', borderRadius: '0 0 10px 10px'}}>
                <Table aria-label="simple table" sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color:'white', fontSize: '16px'}}><b>Name</b></TableCell>
                         
                            <TableCell sx={{color:'white', fontSize: '16px'}}><b>Requirement</b></TableCell>
                            <TableCell sx={{color:'white', fontSize: '16px'}}><b>Effects</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{color:'white', border: 0}} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                
                                <TableCell sx={{color:'white', border: 0}} >{row.requirement}</TableCell>
                                <TableCell sx={{color:'white', border: 0}} >{row.effect}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}