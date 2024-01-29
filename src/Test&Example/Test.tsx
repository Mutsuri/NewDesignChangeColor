import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Test() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorEl2, setAnchorEl2] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const id = open ? 'simple-popover' : undefined;
  const id2 = open2 ? 'simple-popover2' : undefined;

  return (
    <>
      <Button
        key={1}
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        style={{
          color: "inherit",
          border: open ? "3px solid red" : "0px solid red",
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: 'cover',
        }}
      >
        Open Popover 1
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Content of Popover 1.</Typography>
      </Popover>

      <Button
        key={2}
        aria-describedby={id2}
        variant="outlined"
        onClick={handleClick2}
        style={{
          color: "inherit",
          border: open2 ? "0px solid red" : "3px solid red",
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: 'cover',
          marginTop: '10px'
        }}
      >
        Open Popover 2
      </Button>
      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Content of Popover 2.</Typography>
      </Popover>
    </>
  );
}

export default Test;