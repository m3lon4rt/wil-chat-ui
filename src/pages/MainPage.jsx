import { useState, useRef } from 'react'
import { Box, Button } from "@mui/material";
import NavBar from '../components/Navbar';
import DisplayTable from "../components/DisplayTable";

function MainPage() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar />
            <Box
                position='fixed'
                sx={{
                    paddingTop: "64px",
                    flexGrow: 1,
                    height: "90%",
                    width: "90%",
                    mt: '2rem',
                }}>

                <h2>FILE TABLE</h2>
                <DisplayTable />
                <Button
                    sx={{
                        marginTop: '2rem',
                        backgroundColor: '#ffdd00',
                        color: 'black',
                        fontWeight: 'bold',
                        width: '240px',
                        height: '40px',
                        ml: '84%'
                    }}>

                    Upload

                </Button>

            </Box>
        </Box>
    )
}

export default MainPage