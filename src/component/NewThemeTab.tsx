import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ColorPicker from './ColorPicker';

function NewThemeTab() {
    const [rectangles, setRectangles] = useState<number[]>([]);
    const [selectedRectangle, setSelectedRectangle] = useState<number | null>(null);

    const handleRectangleClick = (id: number) => {
        setSelectedRectangle(id);
    };

    const handleCloseModal = () => {
        setSelectedRectangle(null);
    };

    const handleClick = () => {
        setRectangles((prevRectangles) => [...prevRectangles, prevRectangles.length + 1]);
    };

    return (
        <Grid container style={{ paddingLeft: '30px', paddingTop: '30px' }} spacing={2}>
            <Grid item xs={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ marginLeft: '20px' }}>Theme</h1>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        style={{
                            borderRadius: '50%',
                            fontSize: '20px',
                            padding: '10px',
                            backgroundColor: 'transparent',
                            transition: 'box-shadow 0.3s',
                            boxShadow: 'none',
                        }}
                    >
                        <ControlPointIcon style={{ fontSize: '40px', color: 'black' }} />
                    </Button>
                </div>
            </Grid>

            {rectangles.map((id) => (
                <Grid key={id} item style={{ paddingLeft: '55px', paddingBottom: '40px' }}>
                    <Box
                        onClick={() => handleRectangleClick(id)}
                        sx={{
                            cursor: 'pointer',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '10px',
                            width: '250px',
                            height: '270px',
                            textAlign: 'center',
                            bgcolor: 'rgba(235, 235, 235, 0.35)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Box>
                            <EditIcon style={{ fontSize: '50px', paddingBottom: '20px' }} />
                            <Typography style={{ fontSize: '25px', fontWeight: 'bold' }}> Theme #{id} </Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}

            <Modal
                open={selectedRectangle !== null}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        boxShadow: 24,
                        width: '1800px',
                        height: '800px',
                        borderRadius: 3
                    }}>

                    <ColorPicker />

                </Box>
            </Modal>
        </Grid>
    );
};

export default NewThemeTab;
