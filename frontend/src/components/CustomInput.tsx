"use client";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import {
  Search,
  VisibilityOff,
  Visibility,
  LocationOn,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";
type CustomInputProps = {
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean | undefined;
  value?: string | number;
  name?: string;
  label?: string;
  placeHolder?: string;
  type: HTMLInputTypeAttribute;
  handleChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  adornment?: "end" | "start";
  size?: "small" | "medium";
  borderColor?: string;
  bgcolor?: string;
  id?: string;
  isError?: string;
  isTouched?: boolean;
  helperText?: string;
  select?: boolean;
  iconType?: "location" | "search" | "category" | "$" | "calendar";
  multiLine?: boolean;
} & TextFieldProps;

export const CustomInput = (props: CustomInputProps) => {
  const {
    onBlur,
    error,
    name,
    value,
    label,
    handleChange,
    type = "text",
    placeHolder,
    adornment,
    size,
    borderColor,
    id,
    isError,
    isTouched,
    helperText,
    children,
    select = false,
    iconType = "search",
    multiLine = false,
    bgcolor = "#ECEDF0",
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSearch = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack>
      <Typography color={"text.primary"}>{label}</Typography>
      <TextField
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={onBlur}
        error={error}
        helperText={isError && isTouched && helperText}
        type={type === "password" && showPassword ? "text" : type}
        select={select}
        multiline={multiLine}
        rows={multiLine ? 4 : 0}
        sx={{
          "& .MuiSelect-select": {
            padding: size === "small" ? "3px 8px" : "14px 16px",
          },
          "& fieldset": {
            borderColor: borderColor,
          },
          width: "100%",
          bgcolor: bgcolor,
        }}
        inputProps={{
          style: {
            padding: size === "small" ? "3px 8px" : "14px 16px",
          },
        }}
        InputProps={{
          endAdornment: adornment === "end" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: adornment === "start" && (
            <InputAdornment position="start">
              {
                <IconButton onClick={handleSearch}>
                  {iconType === "search" && <Search />}
                  {iconType === "location" && <LocationOn />}
                  {iconType === "category" && <CategoryOutlinedIcon />}
                  {iconType === "$" && <AttachMoneyIcon />}
                  {iconType === "calendar" && <CalendarTodayOutlinedIcon />}
                </IconButton>
              }
            </InputAdornment>
          ),
        }}
      >
        {children}
      </TextField>
      <Typography fontSize={12} color={"error"}>
        {error && helperText}
      </Typography>
    </Stack>
  );
};
