import { MenuItem, Grid, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { foodList } from "../assets/data"
import Select, { SelectChangeEvent } from '@mui/material/Select';
const filterOpt = ["Kitchen", "Cask", "Miscellaneous"]

export default function About() {
    const foodListInit = foodList
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [rows, setRows] = useState(foodListInit);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    useEffect(() => {
        const results = foodListInit.filter((man) =>
            man.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setRows(results)
    }, [searchTerm]);

    useEffect(() => {
        const results = foodListInit.filter((man) =>
            man.type.toLowerCase().includes(filter.toLowerCase())
        );
        setRows(results)
    }, [filter]);

    return (
        <Container>
            <Box sx={{ margin: '0 auto', background: 'rgba(0,0,0,0.8)', textAlign: 'center', color: '#fff', borderRadius: '50px 50px 0 0', width: '50%' }}>
                <h1 style={{ padding: '10px', margin: 0 }}>Foods</h1>
            </Box>

            <Box sx={{ background: '#facc01', padding: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px 10px 0 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            fullWidth
                            id="outlined-required"
                            label="Search Food Name"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            fullWidth
                            label="filter"
                            onChange={handleFilter}
                        >
                            <MenuItem value={""}>All</MenuItem>
                            {filterOpt.map((opt) => (
                                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
            </Box>  
            
            <TableContainer sx={{ background: 'rgba(0,0,0,0.8)', borderRadius: '0 0 10px 10px' }}>
                <Table aria-label="simple table" sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Name</b></TableCell>
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Type</b></TableCell>
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Requirement</b></TableCell>
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Hunger / HP</b></TableCell>
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Effects</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index + 'row'}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ color: 'white', border: 0 }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ color: 'white', border: 0 }} >{row.type}</TableCell>
                                <TableCell sx={{ color: 'white', border: 0 }} >{row.requirement}</TableCell>
                                <TableCell sx={{ color: 'white', border: 0 }} >{row.hunger} Hunger / {row.hp} HP</TableCell>
                                <TableCell sx={{ color: 'white', border: 0 }} >{row.effect}</TableCell>
                            </TableRow>
                        ))}
                 
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}