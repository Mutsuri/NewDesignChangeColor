import React, { useState } from "react";
import { useColorStore } from "../container/colorStore";
import ColorPickerTab from "../container/ColorPickerTab";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyNumber from "../container/KeyNumber";
import {
  Paper,
  Button,
  FormControl,
  MenuItem,
  Popover,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import styled from 'styled-components';

interface ColoredBoxProps {
  width?: string;
  height?: string;
  color?: string;
  clicked?: boolean;
}

const CustomButton = styled.div<ColoredBoxProps>`
&& {
  width: ${(props) => props.width || '200px'};
  height: ${(props) => props.height || '150px'};
  background-color: ${(props) => props.color || 'red'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => (props.clicked ? '0px solid red' : '2px solid red')};
}
`;

const ColorPicker: React.FC = () => {
  const store = useColorStore((state) => ({
    mainBackgroundColor: state.mainBackgroundColor,
    background: state.background,
    bottomBackgroundColor: state.bottomBackgroundColor,

    inComponent: state.inComponent,
    textOnMainBackground: state.textOnMainBackground,
    textOnBackground: state.textOnBackground,

    themeColorEnd: state.themeColorEnd,
    themeColorStart: state.themeColorStart,
    textButton: state.textButton,

    ideColorEnd: state.idelColorEnd,
    idelColorStart: state.idelColorStart,
    inUseColorStart: state.inUseColorStart,
    inUseColorEnd: state.inUseColorEnd,
    textInLangBtInUse: state.textInLangBtInUse,
    textInLangBtIdel: state.textInLangBtIdel,

    spinnerColor: state.spinnerColor,
    spinnerPopupColor: state.spinnerPopupColor,

    btPinColorEnd: state.btPinColorEnd,
    btPinColorStart: state.btPinColorStart,
    pinInputColor: state.pinInputColor,

    icLockerTint: state.icLockerTint,

    setMainBackgroundColor: state.setMainBackgroundColor,
    setBackground: state.setBackground,
    setBottomBackgroundColor: state.setBottomBackgroundColor,

    setInComponent: state.setInComponent,
    setTextOnMainBackground: state.setTextOnMainBackground,
    setTextOnBackground: state.setTextOnBackground,

    setThemeColorEnd: state.setThemeColorEnd,
    setThemeColorStart: state.setThemeColorStart,
    setTextButton: state.setTextButton,

    setIdeColorEnd: state.setIdelColorEnd,
    setIdelColorStart: state.setIdelColorStart,
    setInUseColorStart: state.setInUseColorStart,
    setInUseColorEnd: state.setInUseColorEnd,
    setTextInLangBtInUse: state.setTextInLangBtInUse,
    setTextInLangBtIdel: state.setTextInLangBtIdel,

    setSpinnerColor: state.setSpinnerColor,
    setSpinnerPopupColor: state.setSpinnerPopupColor,

    setBtPinColorEnd: state.setBtPinColorEnd,
    setBtPinColorStart: state.setBtPinColorStart,
    setPinInputColor: state.setPinInputColor,

    setIcLockerTint: state.setIcLockerTint,
  }));

  const [selectedFloor, setSelectedFloor] = useState<string>("");
  const handleFloorChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedFloor(value);
  };

  const [selectedResidence, setSelectedResidence] = useState<string>("");
  const handleResidenceChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedResidence(value);
  };

  const [selectedUser, setSelectedUser] = useState<string>("");
  const handleUserChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedUser(value);
  };

  // pop แรก
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorEl2, setAnchorEl2] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const id2 = open ? "simple-popover2" : undefined;

  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/png')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert('Please select a valid PNG file.');
    }
  };

  const [image2, setImage2] = useState<string | null>(null);

  const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile2 = event.target.files && event.target.files[0];

    if (selectedFile2 && selectedFile2.type.startsWith('image/png')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage2(reader.result as string);
      };
      reader.readAsDataURL(selectedFile2);
    } else {
      alert('Please select a valid PNG file.');
    }
  };

    const [clickedBox, setClickedBox] = useState<number | null>(null);

    const handleBoxClick = (boxIndex: number) => {
        if (clickedBox === boxIndex) {
          setClickedBox(null);
        } else {
          setClickedBox(boxIndex);
        }
    };

  return (
    <>
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs={5} style={{ height: '780px'}} >
            <Paper style={{height: '700px', padding: '20px', boxShadow: 'none', overflowY: 'auto'}} >
                <label>Main Background Color</label>
                <ColorPickerTab label="" color={store.mainBackgroundColor} onChange={store.setMainBackgroundColor} />
                <label>Background Color</label>
                <ColorPickerTab label="" color={store.background} onChange={store.setBackground} />
                <label>Bottom Background Color</label>
                <ColorPickerTab label="" color={store.bottomBackgroundColor} onChange={store.setBottomBackgroundColor} />
                
                <label>In Component Color</label>
                <ColorPickerTab label="" color={store.inComponent} onChange={store.setInComponent} />
                <label>Text On Main Background Color</label>
                <ColorPickerTab label="" color={store.textOnMainBackground} onChange={store.setTextOnMainBackground} />
                <label>Text On Background Color</label>
                <ColorPickerTab label="" color={store.textOnBackground} onChange={store.setTextOnBackground} />

                <label>Theme Color End</label>
                <ColorPickerTab label="" color={store.themeColorEnd} onChange={store.setThemeColorEnd} />
                <label>Theme Color Start</label>
                <ColorPickerTab label="" color={store.themeColorStart} onChange={store.setThemeColorStart} />
                <label>Text Button Color</label>
                <ColorPickerTab label="" color={store.textButton} onChange={store.setTextButton} />

                <label>Idel Color End</label>
                <ColorPickerTab label="" color={store.ideColorEnd} onChange={store.setIdeColorEnd} />
                <label>Idel Color Start</label>
                <ColorPickerTab label="" color={store.idelColorStart} onChange={store.setIdelColorStart} />
                <label>In Use Color Start</label>
                <ColorPickerTab label="" color={store.inUseColorStart} onChange={store.setInUseColorStart} />
                <label>In Use Color End</label>
                <ColorPickerTab label="" color={store.inUseColorEnd} onChange={store.setInUseColorEnd} />
                <label>Text In Lang Button In Use Color</label>
                <ColorPickerTab label="" color={store.textInLangBtInUse} onChange={store.setTextInLangBtInUse} />
                <label>Text In Lang Button Idel Color</label>
                <ColorPickerTab label="" color={store.textInLangBtIdel} onChange={store.setTextInLangBtIdel} />

                <label>Spinner Color</label>
                <ColorPickerTab label="" color={store.spinnerColor} onChange={store.setSpinnerColor} />
                <label>Spinner Popup Color</label>
                <ColorPickerTab label="" color={store.spinnerPopupColor} onChange={store.setSpinnerPopupColor} />

                <label>Button Pin Color End</label>
                <ColorPickerTab label="" color={store.btPinColorEnd} onChange={store.setBtPinColorEnd} />
                <label>Button Pin Color Start</label>
                <ColorPickerTab label="" color={store.btPinColorStart} onChange={store.setBtPinColorStart} />
                <label>Pin Input Color</label>
                <ColorPickerTab label="" color={store.pinInputColor} onChange={store.setPinInputColor} />

                <label>Ic Locker Tint Color</label>
                <ColorPickerTab label="" color={store.icLockerTint} onChange={store.setIcLockerTint} />
            </Paper>
          </Grid> */}

      <Paper
        style={{
          height: "760px",
          padding: "20px",
          boxShadow: "none",
          borderRadius: "10px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            height: "740px",
            width: "510px",
            backgroundColor: `rgba(${store.background.r}, ${store.background.g}, ${store.background.b}, ${store.background.a})`,
          }}
        >
          <div
            style={{
              height: "85px",
              width: "510px",
              backgroundColor: `rgba(${store.mainBackgroundColor.r}, ${store.mainBackgroundColor.g}, ${store.mainBackgroundColor.b}, ${store.mainBackgroundColor.a})`,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                // backgroundColor: 'red',
                height: "85px",
                width: "170px",
              }}
            ></div>

            <div
              style={{
                height: "85px",
                width: "170px",
              }}
            >
              <Button
                key={1}
                aria-describedby={id}
                variant="outlined"
                style={{
                  color: "inherit",
                  border: "3px solid red",
                  height: "100%",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: 'cover',
                  backgroundImage: image ? `url(${image})` : 'none',
                }}
                onClick={handleClick}
              ></Button>
              <Popover
                id={id}
                open={open}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div style={{
                  height: '50px',
                  width: '550px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <input style={{ marginLeft: '18px' }} type="file" accept=".png" onChange={handleFileChange} />
                </div>
              </Popover>
            </div>

            {/* Change Language */}
            <div
              style={{
                height: "85px",
                width: "170px",
                display: 'flex',
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "50px",
                  marginTop: "5px",
                  marginLeft: "60px",
                  borderRadius: "20px 0 0 20px",
                  backgroundColor: `rgba(${store.idelColorStart.r}, ${store.idelColorStart.g}, ${store.idelColorStart.b}, ${store.idelColorStart.a})`,
                }}
              ></div>
              <div
                style={{
                  height: "40px",
                  width: "50px",
                  marginTop: "5px",
                  marginLeft: "5px",
                  borderRadius: "0 20px 20px 0",
                  background: `linear-gradient(to top, rgba(${store.inUseColorStart.r}, ${store.inUseColorStart.g}, ${store.inUseColorStart.b}, ${store.inUseColorStart.a}), rgba(${store.inUseColorEnd.r}, ${store.inUseColorEnd.g}, ${store.inUseColorEnd.b}, ${store.inUseColorEnd.a}))`,
                }}
              ></div>
            </div>
          </div>

          <div style={{ width: '510px', height: '655px', position: 'relative' }} >
            <div style={{ position: 'absolute', width: '510px', height: '655px' }} >
              <Button
                aria-describedby={id2}
                variant="outlined"
                style={{
                  color: "inherit",
                  border: "3px solid red",
                  height: "655px",
                  width: "510px",
                  backgroundSize: 'cover',
                  backgroundImage: image2 ? `url(${image2})` : 'none',
                  backgroundPosition: "center",
                }}
                onClick={handleClick2}
              >
              </Button>
              <Popover
                id={id2}
                open={open2}
                anchorEl={anchorEl2}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 1260 }}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <div style={{
                  height: '380px',
                  width: '550px',
                  display: 'flex',
                  flexDirection: "column",
                }}>
                  <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <input type="file" accept=".png" onChange={handleFileChange2} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label>Background Color</label>
                    </div>
                    <div>
                      <ColorPickerTab label="" color={store.background} onChange={store.setBackground} />
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
            <div>
              <div
                style={{
                  width: "510px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <text
                  style={{
                    color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    fontSize: "24px",
                    marginTop: "10px",
                  }}
                >
                  Verify passcode
                </text>
                <br />
              </div>

              <div
                style={{
                  width: "510px",
                  height: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <text
                  style={{
                    color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    fontSize: "18px",
                  }}
                >
                  Select Floor
                </text>
                <FormControl sx={{ minWidth: "14rem" }}>
                  <Select
                    value={selectedFloor}
                    onChange={handleFloorChange}
                    style={{
                      backgroundColor: selectedFloor
                        ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                        : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "14rem",
                      borderRadius: "20px 20px 0 0",
                      overflow: "hidden",
                      marginTop: "10px",
                      height: "2rem",
                    }}
                  >
                    <MenuItem value="">
                      <em>⠀</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div
                style={{
                  width: "510px",
                  height: "80px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <text
                  style={{
                    color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    fontSize: "18px",
                  }}
                >
                  Select Residence
                </text>
                <FormControl sx={{ minWidth: "14rem" }}>
                  <Select
                    value={selectedResidence}
                    onChange={handleResidenceChange}
                    style={{
                      backgroundColor: selectedResidence
                        ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                        : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "14rem",
                      overflow: "hidden",
                      marginTop: "10px",
                      height: "2rem",
                    }}
                  >
                    <MenuItem value="">
                      <em>⠀</em>
                    </MenuItem>
                    <MenuItem value={"101"}>101</MenuItem>
                    <MenuItem value={"102"}>102</MenuItem>
                    <MenuItem value={"103"}>103</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div
                style={{
                  width: "510px",
                  height: "120px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <text
                  style={{
                    color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    fontSize: "18px",
                  }}
                >
                  Select User
                </text>
                <FormControl sx={{ minWidth: "14rem" }}>
                  <Select
                    value={selectedUser}
                    onChange={handleUserChange}
                    style={{
                      backgroundColor: selectedUser
                        ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                        : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: "14rem",
                      borderRadius: "0 0 20px 20px",
                      overflow: "hidden",
                      marginTop: "10px",
                      height: "80px",
                    }}
                    renderValue={(selected) => (
                      <div>
                        <div style={{ marginBottom: "10px" }}>RESIDENT</div>
                        <div>{selected}</div>
                      </div>
                    )}
                  >
                    <MenuItem value="">
                      <em>⠀</em>
                    </MenuItem>
                    <MenuItem value="member">member</MenuItem>
                    <MenuItem value="VIP">VIP</MenuItem>
                    <MenuItem value="admin">admin</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <KeyNumber />

              <div
                style={{
                  width: "510px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >

                <div
                  style={{
                    width: "180px",
                    height: "70px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "180px",
                      height: "50px",
                      fontSize: "14px",
                      background: "linear-gradient(to bottom, #331098, #946197)",
                      borderRadius: "40px",
                      textTransform: "none",
                    }}
                  >
                    Forget?
                  </Button>
                </div>


                <div
                  style={{
                    width: "53px",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <HomeIcon
                    style={{
                      fontSize: "30px",
                      color: "yellow",
                    }}
                  />
                </div>

                <div
                  style={{
                    width: "180px",
                    height: "70px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      borderRadius: "40px",
                      width: "180px",
                      height: "50px",
                      fontSize: "14px",
                      background: "linear-gradient(to bottom, #331098, #946197)",
                      textTransform: "none",
                    }}
                  >
                    Change passcode
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default ColorPicker;
