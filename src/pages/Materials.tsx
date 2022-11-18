import { MenuItem, Grid, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { materialList } from "../assets/data"
import Select, { SelectChangeEvent } from '@mui/material/Select';
const filterOpt = ["Soggy Skerry", "Blossom Bay", "Iridescent Island", "Sunny Sands", "Rimey Reef", "laguna perfuma", "Coral Cay", "Defiled Isle", "Unholy Holm"]

export default function About() {
    const materialListInit = materialList
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");

    const [rows, setRows] = useState(materialListInit);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    useEffect(() => {     
        // materialListInit
       
        const results = rows.filter((man) =>
            man.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        setRows(searchTerm ? results : materialListInit)
    }, [searchTerm]);

    useEffect(() => {
        // materialListInit
        const results = materialListInit.filter((man) =>
            man.island.toLowerCase().includes(filter.toLowerCase())
        );
        setRows(results)
        setSearchTerm("")
    }, [filter]);

    return (
        <Container>

            <Box sx={{ margin: '0 auto', background: 'rgba(0,0,0,0.8)', textAlign: 'center', color: '#fff', borderRadius: '50px 50px 0 0', width: '50%' }}>
                <h1 style={{ padding: '10px', margin: 0 }}>Materials</h1>
            </Box>

            <Box sx={{ background: '#facc01', padding: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px 10px 0 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            fullWidth
                            id="outlined-required"
                            label="Search Material Name"
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
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Island</b></TableCell>
                            <TableCell sx={{ color: 'white', fontSize: '16px' }}><b>Location / Description</b></TableCell>
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
                                <TableCell sx={{ color: 'white', border: 0 }} >{row.island}</TableCell>
                                <TableCell sx={{ color: 'white', border: 0 }} >{row.location}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}