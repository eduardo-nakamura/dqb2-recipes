import { Button, MenuItem, Grid, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';

import { useState, useEffect } from 'react';
import { materialList } from "../assets/data"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';


interface Data {
    name: string;
    island: string;
    location: string;
    detail: string;
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'island',
        numeric: true,
        disablePadding: false,
        label: 'Island',
    },
    {
        id: 'location',
        numeric: true,
        disablePadding: false,
        label: 'Location / Description',
    },
];

const headCellsMobile: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'island',
        numeric: true,
        disablePadding: false,
        label: 'Island',
    },
    {
        id: 'detail',
        numeric: true,
        disablePadding: false,
        label: '',
    }
];

const filterOpt = ["Soggy Skerry", "Blossom Bay", "Iridescent Island", "Sunny Sands", "Rimey Reef", "laguna perfuma", "Coral Cay", "Defiled Isle", "Unholy Holm"]

export default function About() {
    const materialListInit = materialList
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState(materialListInit);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    // {name: "Humus", island: "Soggy Skerry", obt: "Yes", location: "Earth Hills"},
    const [{ dialogName, dialogIsland, dialogLocation }, setDialog] = useState({ dialogName: "", dialogIsland: "", dialogLocation: "" })


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function openDialog(row: { name: string; island: string; obt: string; location: string; }) {
        setDialog({ dialogName: row.name, dialogIsland: row.island, dialogLocation: row.location })
        handleClickOpen()
    }

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };

    const handleFilter = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    const clear = () => {
        setSearchTerm("");
        setFilter("")
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const results = materialListInit.filter((man) => man.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const results2 = results.filter((man) => man.island.toLowerCase().includes(filter.toLowerCase()));
        setRows(searchTerm ? results2 : materialListInit)
    }, [searchTerm]);

    useEffect(() => {
        // materialListInit
        const results = materialListInit.filter((man) => man.island.toLowerCase().includes(filter.toLowerCase()));
        const results2 = results.filter((man) => man.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setRows(results2)
    }, [filter]);

    return (
        <Container>

            <Box sx={{ margin: '0 auto', background: 'rgba(0,0,0,0.8)', textAlign: 'center', color: '#fff', borderRadius: '50px 50px 0 0', width: '50%' }}>
                <h1 style={{ padding: '10px', margin: 0 }}>Materials</h1>
            </Box>

            <Box sx={{ background: '#facc01', padding: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '10px 10px 0 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="outlined-required"
                            label="Search Material Name"
                            value={searchTerm}
                            onChange={handleChange}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            fullWidth
                            label="filter"
                            onChange={handleFilter}
                            size="small"
                        >
                            <MenuItem value={""}>All</MenuItem>
                            {filterOpt.map((opt) => (
                                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <Button onClick={() => clear()} fullWidth variant="contained" size="large" >
                            <DeleteIcon sx={{ mr: 1, p: 0 }} /> Clear

                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ background: 'rgba(0,0,0,0.8)', borderRadius: '0 0 10px 10px', padding: '0 20px', }}>
                {/* Desk */}
                <TableContainer sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        padding={headCell.disablePadding ? 'none' : 'normal'}
                                        sx={{ color: 'white' }}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow
                                    key={index + 'row'}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ color: 'white', border: 0 }} component="th" scope="row" padding="none">
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', border: 0 }} >{row.island}</TableCell>
                                    <TableCell sx={{ color: 'white', border: 0 }} >{row.location}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* Mobile */}
                <TableContainer sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {headCellsMobile.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        padding={headCell.disablePadding ? 'none' : 'normal'}
                                        sx={{ color: 'white' }}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow
                                    key={index + 'row'}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ color: 'white', border: 0 }} component="th" scope="row" padding="none">
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', border: 0 }} >
                                        {row.island}

                                    </TableCell>
                                    <TableCell sx={{ color: 'white', border: 0 }} >
                                        <IconButton onClick={() => openDialog(row)} color="primary" aria-label="upload picture" component="label">
                                            <InfoIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{ color: 'white', borderTop: '1px solid white', }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                    {dialogName}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Island: {dialogIsland}
                    </DialogContentText>
                    <DialogContentText >
                        Location / Description: {dialogLocation}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}