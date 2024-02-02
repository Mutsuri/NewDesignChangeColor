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
import '../styles/ColorPickerStyle.css'
import CurrentDate from "../container/DayTime";
import ImageHandler from "../container/ImageHandler";

interface ButtonStyle {
  border: string;
  color: string;
  background: string;
  marginRight: string;
  height?: string;
  width?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  fontSize: string;
  borderRadius: string;
  textTransform: "none",
  marginTop: string;
  marginLeft: string; 
}

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
  const [selectedResidence, setSelectedResidence] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("member");
  
  const handleSelectChange = (key: string) => (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    switch (key) {
      case 'floor':
        setSelectedFloor(value);
        break;
      case 'residence':
        setSelectedResidence(value);
        break;
      case 'user':
        setSelectedUser(value);
        break;
      default:
        break;
    }
  };

  const [buttonAStyle, setButtonAStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'inherit',
    height: "100%",
    width: "100%",
    background: 'transparent',
    marginRight: '10px',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    fontSize: "",
    borderRadius: "0px",
    textTransform: "none",
    marginTop: "1px",
    marginLeft: "0px",
  });

  const [buttonBStyle, setButtonBStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'inherit',
    height: "655px",
    width: "510px",
    background: 'transparent',
    marginRight: '10px',
    backgroundSize: 'cover',
    backgroundPosition: "center",
    fontSize: "",
    borderRadius: "0px",
    textTransform: "none",
    marginTop: "0px",
    marginLeft: "0px",
  });

  const [buttonCStyle, setButtonCStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'white',
    marginRight: '10px',
    width: "180px",
    height: "50px",
    fontSize: "14px",
    background: "linear-gradient(to bottom, #331098 2%, #FFB258 100%)",
    borderRadius: "40px",
    textTransform: "none",
    marginTop: "0px",
    marginLeft: "0px",
  });

  const [buttonDStyle, setButtonDStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'null',
    marginRight: '10px',
    fontSize: "14px",
    background: "null",
    textTransform: "none",
    height: "40px",
    width: "50px",
    marginTop: "5px",
    marginLeft: "30px",
    borderRadius: "20px 0 0 20px",
  });

  const [buttonEStyle, setButtonEStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'white',
    marginRight: '10px',
    fontSize: "14px",
    background: "null",
    textTransform: "none",
    height: "40px",
    width: "50px",
    marginTop: "5px",
    marginLeft: "-6px",
    borderRadius: "0 20px 20px 0",
  });

  const [buttonFStyle, setButtonFStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'null',
    marginRight: '0px',
    fontSize: "14px",
    background: "null",
    textTransform: "none",
    height: "45px",
    width: "126px",
    marginTop: "10px",
    marginLeft: "10px",
    borderRadius: "0px",
  });

  const [buttonGStyle, setButtonGStyle] = useState<ButtonStyle>({
    color: 'null',
    marginRight: '0px',
    fontSize: "14px",
    background: "null",
    textTransform: "none",
    marginTop: "0px",
    marginLeft: "0px",
    borderRadius: "0px",
    border: '2px solid red',
    width: '250px',
    height: '347px',
  });

  const [buttonHStyle, setButtonHStyle] = useState<ButtonStyle>({
    color: 'null',
    marginRight: '0px',
    fontSize: "14px",
    background: "null",
    textTransform: "none",
    marginTop: "20px",
    marginLeft: "0px",
    borderRadius: "0px",
    border: '2px solid red',
    width: "30px",
    height: "50px",

  });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorE2, setAnchorE2] = useState<HTMLButtonElement | null>(null);
  const [anchorE3, setAnchorE3] = useState<HTMLButtonElement | null>(null);
  const [anchorE4, setAnchorE4] = useState<HTMLButtonElement | null>(null);
  const [anchorE5, setAnchorE5] = useState<HTMLButtonElement | null>(null);
  const [anchorE6, setAnchorE6] = useState<HTMLButtonElement | null>(null);
  const [anchorE7, setAnchorE7] = useState<HTMLButtonElement | null>(null);
  const [anchorE8, setAnchorE8] = useState<HTMLButtonElement | null>(null);

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE4(event.currentTarget);
  };

  const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE5(event.currentTarget);
  };

  const handleClick6 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE6(event.currentTarget);
  };

  const handleClick7 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE7(event.currentTarget);
  };

  const handleClick8 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE8(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose2 = () => {
    setAnchorE2(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose3 = () => {
    setAnchorE3(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose4 = () => {
    setAnchorE4(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose5 = () => {
    setAnchorE5(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose6 = () => {
    setAnchorE6(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose7 = () => {
    setAnchorE7(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose8 = () => {
    setAnchorE8(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonDStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonEStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonFStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonGStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonHStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const open1 = Boolean(anchorEl);
  const id1 = open1 ? 'simple-popover' : undefined;

  const open2 = Boolean(anchorE2);
  const id2 = open2 ? 'simple-popover' : undefined;

  const open3 = Boolean(anchorE3);
  const id3 = open3 ? 'simple-popover' : undefined;

  const open4 = Boolean(anchorE4);
  const id4 = open4 ? 'simple-popover' : undefined;

  const open5 = Boolean(anchorE5);
  const id5 = open5 ? 'simple-popover' : undefined;

  const open6 = Boolean(anchorE6);
  const id6 = open6 ? 'simple-popover' : undefined;

  const open7 = Boolean(anchorE7);
  const id7 = open7 ? 'simple-popover' : undefined;

  const open8 = Boolean(anchorE8);
  const id8 = open8 ? 'simple-popover' : undefined;

  const handleButtonClick = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick1(event);
  };

  const handleButtonClick2 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick2(event);
  };

  const handleButtonClick3 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick3(event);
  };

  const handleButtonClick4 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick4(event);
  };

  const handleButtonClick5 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick5(event);
  };

  const handleButtonClick6 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick6(event);
  };

  const handleButtonClick7 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick7(event);
  };

  const handleButtonClick8 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick8(event);
  };

  const [LogoImage, setLogoImage] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleLogoImageChange = (image: string | null) => {
    setLogoImage(image);
  };

  const handleBackgroundImageChange = (image: string | null) => {
    setBackgroundImage(image);
  };

  return (
    <>
      <Paper className="paperContainer">
        <div style={{ backgroundColor: `rgba(${store.background.r}, ${store.background.g}, ${store.background.b}, ${store.background.a})` }}>
          <div className="header" style={{ backgroundColor: `rgba(${store.mainBackgroundColor.r}, ${store.mainBackgroundColor.g}, ${store.mainBackgroundColor.b}, ${store.mainBackgroundColor.a})` }}>
            {/* Date and Time */}
            <div className="timeBox">
              <div className="timeStyle" style={{ color: `rgba(${store.textOnMainBackground.r}, ${store.textOnMainBackground.g}, ${store.textOnMainBackground.b}, ${store.textOnMainBackground.a})` }}>
                <CurrentDate />
              </div>
              <Button
                aria-describedby={id7}
                variant="outlined"
                style={{
                  ...buttonFStyle
                }}
                onClick={(event) => handleButtonClick7(buttonFStyle, setButtonFStyle, [
                  { style: buttonAStyle, setter: setButtonAStyle },
                  { style: buttonBStyle, setter: setButtonBStyle },
                  { style: buttonCStyle, setter: setButtonCStyle },
                  { style: buttonDStyle, setter: setButtonDStyle },
                  { style: buttonEStyle, setter: setButtonEStyle },
                  { style: buttonGStyle, setter: setButtonGStyle },
                  { style: buttonHStyle, setter: setButtonHStyle },
                ], event)}
              >
              </Button>
              <Popover
                id={id7}
                open={open7}
                anchorEl={anchorE7}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                onClose={handleClose7}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <div className="popOverTextOnMainBackground">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>Text On Main Background Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.textOnMainBackground} onChange={store.setTextOnMainBackground} />
                  </div>
                </div>
              </Popover>
            </div>

            {/* Logo */}
            <div className="logoBox">
              <Button
                key={1}
                aria-describedby={id1}
                variant="outlined"
                style={{
                  ...buttonAStyle,
                  backgroundImage: `url(${LogoImage})`
                }}
                onClick={(event) => handleButtonClick(buttonAStyle, setButtonAStyle, [
                  { style: buttonBStyle, setter: setButtonBStyle },
                  { style: buttonCStyle, setter: setButtonCStyle },
                  { style: buttonDStyle, setter: setButtonDStyle },
                  { style: buttonEStyle, setter: setButtonEStyle },
                  { style: buttonFStyle, setter: setButtonFStyle },
                  { style: buttonGStyle, setter: setButtonGStyle },
                  { style: buttonHStyle, setter: setButtonHStyle },
                ], event)}>
              </Button>
              <Popover
                id={id1}
                open={open1}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                anchorEl={anchorEl}
                onClose={handleClose1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverLogo">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <ImageHandler onImageChange={handleLogoImageChange} />
                    </div>
                    <div className="popOverBetweenTag">
                      <label>Main Background Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.mainBackgroundColor} onChange={store.setMainBackgroundColor} />
                  </div>
                </div>
              </Popover>
            </div>

            {/* Change Language */}
            <div className="changeLanguageBox">
              <Button
                aria-describedby={id5}
                variant="outlined"
                style={{
                  ...buttonDStyle,
                  background: `linear-gradient(to top, rgba(${store.idelColorStart.r}, ${store.idelColorStart.g}, ${store.idelColorStart.b}, ${store.idelColorStart.a}), rgba(${store.ideColorEnd.r}, ${store.ideColorEnd.g}, ${store.ideColorEnd.b}, ${store.ideColorEnd.a}))`,
                  color: `rgba(${store.textInLangBtIdel.r}, ${store.textInLangBtIdel.g}, ${store.textInLangBtIdel.b}, ${store.textInLangBtIdel.a})`,
                }}
                onClick={(event) => handleButtonClick5(buttonDStyle, setButtonDStyle, [
                  { style: buttonAStyle, setter: setButtonAStyle },
                  { style: buttonBStyle, setter: setButtonBStyle },
                  { style: buttonCStyle, setter: setButtonCStyle },
                  { style: buttonEStyle, setter: setButtonEStyle },
                  { style: buttonFStyle, setter: setButtonFStyle },
                  { style: buttonGStyle, setter: setButtonGStyle },
                  { style: buttonHStyle, setter: setButtonHStyle },
                ], event)}
              >TH
              </Button>
              <Popover
                id={id5}
                open={open5}
                anchorEl={anchorE5}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                onClose={handleClose5}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <div className="popOverChangeLanguage">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>Idel Color End</label>
                    </div>
                    <ColorPickerTab label="" color={store.ideColorEnd} onChange={store.setIdeColorEnd} />
                    <div className="popOverBetweenTag">
                      <label>Idel Color Start</label>
                    </div>
                    <ColorPickerTab label="" color={store.idelColorStart} onChange={store.setIdelColorStart} />
                    <div className="popOverBetweenTag">
                      <label>Text In Lang Button Idel Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.textInLangBtIdel} onChange={store.setTextInLangBtIdel} />
                  </div>
                </div>
              </Popover>

              <Button
                aria-describedby={id6}
                variant="outlined"
                style={{
                  ...buttonEStyle,
                  background: `linear-gradient(to top, rgba(${store.inUseColorStart.r}, ${store.inUseColorStart.g}, ${store.inUseColorStart.b}, ${store.inUseColorStart.a}), rgba(${store.inUseColorEnd.r}, ${store.inUseColorEnd.g}, ${store.inUseColorEnd.b}, ${store.inUseColorEnd.a}))`,
                  color: `rgba(${store.textInLangBtInUse.r}, ${store.textInLangBtInUse.g}, ${store.textInLangBtInUse.b}, ${store.textInLangBtInUse.a})`,
                }}
                onClick={(event) => handleButtonClick6(buttonEStyle, setButtonEStyle, [
                  { style: buttonAStyle, setter: setButtonAStyle },
                  { style: buttonBStyle, setter: setButtonBStyle },
                  { style: buttonCStyle, setter: setButtonCStyle },
                  { style: buttonDStyle, setter: setButtonDStyle },
                  { style: buttonFStyle, setter: setButtonFStyle },
                  { style: buttonGStyle, setter: setButtonGStyle },
                  { style: buttonHStyle, setter: setButtonHStyle },
                ], event)}
              >EN
              </Button>
              <Popover
                id={id6}
                open={open6}
                anchorEl={anchorE6}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                onClose={handleClose6}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <div className="popOverChangeLanguage">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>In Use Color Start</label>
                    </div>
                    <ColorPickerTab label="" color={store.inUseColorStart} onChange={store.setInUseColorStart} />
                    <div className="popOverBetweenTag">
                      <label>In Use Color End</label>
                    </div>
                    <ColorPickerTab label="" color={store.inUseColorEnd} onChange={store.setInUseColorEnd} />
                    <div className="popOverBetweenTag">
                      <label>Text In Lang Button In Use Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.textInLangBtInUse} onChange={store.setTextInLangBtInUse} />
                  </div>
                </div>
              </Popover>
            </div>
          </div>
          
          {/* body */}
          <div className="body" >
            <div className="backgroundStyle" >
              <Button
                aria-describedby={id2}
                variant="outlined"
                style={{
                  ...buttonBStyle,
                  backgroundImage: `url(${backgroundImage})`
                }}
                onClick={(event) => handleButtonClick2(buttonBStyle, setButtonBStyle, [
                  { style: buttonAStyle, setter: setButtonAStyle },
                  { style: buttonCStyle, setter: setButtonCStyle },
                  { style: buttonDStyle, setter: setButtonDStyle },
                  { style: buttonEStyle, setter: setButtonEStyle },
                  { style: buttonFStyle, setter: setButtonFStyle },
                  { style: buttonGStyle, setter: setButtonGStyle },
                  { style: buttonHStyle, setter: setButtonHStyle },
                ], event)}
              >
              </Button>
              <Popover
                id={id2}
                open={open2}
                anchorEl={anchorE2}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 1260 }}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <div className="popOverBackground">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <ImageHandler onImageChange={handleBackgroundImageChange} />
                    </div>
                    <div className="popOverBetweenTag">
                      <label>Background Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.background} onChange={store.setBackground} />
                  </div>
                </div>
              </Popover>
            </div>
            {/* ครึ่งบน */}
            <div className="formControlBox">
              <Button
                aria-describedby={id2}
                variant="outlined"
                className="verifyPasscodeBox"
                style={{
                  ...buttonGStyle,
                }}
                onClick={(event) => handleButtonClick8(buttonGStyle, setButtonGStyle, [
                  { style: buttonAStyle, setter: setButtonAStyle },
                  { style: buttonBStyle, setter: setButtonBStyle },
                  { style: buttonCStyle, setter: setButtonCStyle },
                  { style: buttonDStyle, setter: setButtonDStyle },
                  { style: buttonEStyle, setter: setButtonEStyle },
                  { style: buttonFStyle, setter: setButtonFStyle },
                ], event)}>
                <div className="verifyPasscodeBox">
                  <text className="verifyPasscodeTextStyle" style={{ color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})` }}>
                    Verify passcode
                  </text>
                </div>

                <div className="selectFloorBox">
                  <text className="selectFloorTextStyle" style={{ color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})` }}>
                    Select Floor
                  </text>
                  <FormControl className="formControlStyle">
                    <Select
                      value={selectedFloor}
                      onChange={handleSelectChange('floor')}
                      className="selectedStyle selectedFloor"
                      style={{
                        fontWeight: 'bold',
                        borderRadius: '20px 20px 0 0',
                        backgroundColor: selectedFloor
                          ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                          : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                        color: `rgba(${store.inComponent.r}, ${store.inComponent.g}, ${store.inComponent.b}, ${store.inComponent.a})`
                      }}>
                      <MenuItem value="">
                        <em>⠀</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="selectResidentandUserBox">
                  <text className="selectUserTextStyle" style={{ color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})` }}>
                    Select Residence
                  </text>
                  <FormControl className="formControlStyle">
                    <Select
                      value={selectedResidence}
                      onChange={handleSelectChange('residence')}
                      className="selectedStyle selectedResidence"
                      style={{
                        fontWeight: 'bold',
                        backgroundColor: selectedResidence
                          ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                          : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                        color: `rgba(${store.inComponent.r}, ${store.inComponent.g}, ${store.inComponent.b}, ${store.inComponent.a})`
                      }}>
                      <MenuItem value=""><em>⠀</em></MenuItem>
                      <MenuItem value={"101"}>101</MenuItem>
                      <MenuItem value={"102"}>102</MenuItem>
                      <MenuItem value={"103"}>103</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="selectResidentandUserBox">
                  <text className="selectUserTextStyle"
                    style={{ color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})` }}>
                    Select User
                  </text>
                  <FormControl className="formControlStyle">
                    <Select
                      value={selectedUser}
                      onChange={handleSelectChange('user')}
                      className="selectedStyle selectedUser"
                      style={{
                        fontWeight: 'bold',
                        borderRadius: '0 0 20px 20px',
                        backgroundColor: selectedUser
                          ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                          : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                        color: `rgba(${store.inComponent.r}, ${store.inComponent.g}, ${store.inComponent.b}, ${store.inComponent.a})`,
                      }}
                      renderValue={(selected) => (
                        <div>
                          <div className="popOverBetweenTag">RESIDENT</div>
                          <div>{selected}</div>
                        </div>
                      )}>
                      <MenuItem value=""><em>⠀</em></MenuItem>
                      <MenuItem value="member">member</MenuItem>
                      <MenuItem value="VIP">VIP</MenuItem>
                      <MenuItem value="admin">admin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Button>
              <Popover
                id={id8}
                open={open8}
                anchorEl={anchorE8}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 1260 }}
                onClose={handleClose8}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <div className="popOverSelectFRU">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>Text On Background Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.textOnBackground} onChange={store.setTextOnBackground} />
                    <div className="popOverBetweenTag">
                      <label>Spinner Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.spinnerColor} onChange={store.setSpinnerColor} />
                    <div className="popOverBetweenTag">
                      <label>Spinner Popup Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.spinnerPopupColor} onChange={store.setSpinnerPopupColor} />
                    <div className="popOverBetweenTag">
                      <label>In Component Color</label>
                    </div>
                    <ColorPickerTab label="" color={store.inComponent} onChange={store.setInComponent} />
                  </div>
                </div>
              </Popover>
            </div>

            {/* ครึ่งล่าง */}
            <div className="keyNumberandBottomBox">
              <KeyNumber />
              <div className="bottomBox">
                {/* Forget? Button */}
                <div className="forgetButtonBox">
                  <div className="forgetButtonBoxStyle" >
                    <Button
                      variant="contained"
                      style={{
                        ...buttonCStyle,
                        background: `linear-gradient(to bottom, rgba(${store.themeColorStart.r}, ${store.themeColorStart.g}, ${store.themeColorStart.b}, ${store.themeColorStart.a}), rgba(${store.themeColorEnd.r}, ${store.themeColorEnd.g}, ${store.themeColorEnd.b}, ${store.themeColorEnd.a}))`,
                        color: `rgba(${store.textButton.r}, ${store.textButton.g}, ${store.textButton.b}, ${store.textButton.a})`,
                      }}
                      onClick={(event) => handleButtonClick3(buttonCStyle, setButtonCStyle, [
                        { style: buttonAStyle, setter: setButtonAStyle },
                        { style: buttonBStyle, setter: setButtonBStyle },
                        { style: buttonGStyle, setter: setButtonGStyle },
                        { style: buttonDStyle, setter: setButtonDStyle },
                        { style: buttonEStyle, setter: setButtonEStyle },
                        { style: buttonFStyle, setter: setButtonFStyle },
                        { style: buttonHStyle, setter: setButtonHStyle },
                      ], event)}
                    >
                      Forget?
                    </Button>
                    <Popover
                      id={id3}
                      open={open3}
                      anchorEl={anchorE3}
                      anchorReference="anchorPosition"
                      anchorPosition={{ top: 340, left: 110 }}
                      onClose={handleClose3}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}>
                      <div className="popOverChangePasscodeandForgetButton">
                        <div className="popOverMarginStyle">
                          <div className="popOverBetweenTag">
                            <label>Theme Color Start</label>
                          </div>
                          <ColorPickerTab label="" color={store.themeColorStart} onChange={store.setThemeColorStart} />
                          <div className="popOverBetweenTag">
                            <label>Theme Color End</label>
                          </div>
                          <ColorPickerTab label="" color={store.themeColorEnd} onChange={store.setThemeColorEnd} />
                          <div className="popOverBetweenTag">
                            <label>Text Button Color</label>
                          </div>
                          <ColorPickerTab label="" color={store.textButton} onChange={store.setTextButton} />
                        </div>
                      </div>
                    </Popover>
                  </div>
                </div>

                {/* Home Icon */}
                <div className="HomeIconBox">
                  <Button
                    aria-describedby={id2}
                    variant="outlined"
                    className="HomeIconButton"
                    style={{ ...buttonHStyle }}
                    onClick={(event) => handleButtonClick8(buttonGStyle, setButtonGStyle, [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                    ], event)}>
                    <HomeIcon className="homeIconStyle" style={{ color: "yellow", }} />
                  </Button>
                </div>

                {/* Change passcode Button */}
                <div className="changePasscodeButtonBoxStyle">
                  <Button
                    variant="contained"
                    style={{
                      ...buttonCStyle,
                      background: `linear-gradient(to bottom, rgba(${store.themeColorStart.r}, ${store.themeColorStart.g}, ${store.themeColorStart.b}, ${store.themeColorStart.a}), rgba(${store.themeColorEnd.r}, ${store.themeColorEnd.g}, ${store.themeColorEnd.b}, ${store.themeColorEnd.a}))`,
                      color: `rgba(${store.textButton.r}, ${store.textButton.g}, ${store.textButton.b}, ${store.textButton.a})`
                    }}
                    onClick={(event) => handleButtonClick4(buttonCStyle, setButtonCStyle, [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                      { style: buttonGStyle, setter: setButtonGStyle },
                      { style: buttonHStyle, setter: setButtonHStyle },
                    ], event)}>
                    Change passcode
                  </Button>
                  <Popover
                    id={id4}
                    open={open4}
                    anchorEl={anchorE4}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 340, left: 1260 }}
                    onClose={handleClose4}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}>
                    <div className="popOverChangePasscodeandForgetButton">
                      <div className="popOverMarginStyle">
                        <div className="popOverBetweenTag">
                          <label>Theme Color Start</label>
                        </div>
                        <ColorPickerTab label="" color={store.themeColorStart} onChange={store.setThemeColorStart} />
                        <div className="popOverBetweenTag">
                          <label>Theme Color End</label>
                        </div>
                        <ColorPickerTab label="" color={store.themeColorEnd} onChange={store.setThemeColorEnd} />
                        <div className="popOverBetweenTag">
                          <label>Text Button Color</label>
                        </div>
                        <ColorPickerTab label="" color={store.textButton} onChange={store.setTextButton} />
                      </div>
                    </div>
                  </Popover>
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