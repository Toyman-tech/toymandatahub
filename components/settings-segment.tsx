"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import PersonalInfo from "./personal-info";
import ChangePhone from "./change-phone";
import SnackbarComp, { useToast } from "./Toast";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface SettingsSegmentProps {
  handleMessage: (indicator: string, message: string) => void;
  
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SettingsSegment() {
  const [value, setValue] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { handleMessage, handleSnack, snackBarOpen, setSnackBarOpen } = useToast();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffff",
        borderRadius: "8px",
        border: "3px solid #EDF2F7",
      }}
    >
      <Box
        sx={{
          minHeight: { xs: "100%", lg: "700px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="start"
          sx={{
            borderRight: 2,
            borderColor: "#EDF2F7",
            width: { xs: "100%", sm: "21.3vw" },
          }}
        >
          <Tabs
            sx={{
              marginTop: "52px",
              alignItems: "flex-start",
            }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{
                marginLeft: { xs: "0px" },
                backgroundColor: value === 0 ? "#2a4f5542" : "transparent",
              }}
              label={
                <Stack
                  sx={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                    marginLeft: { xs: "-0.2rem" },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: value === 0 ? "#2A4F55" : "#FBFBFC",
                      color: value === 0 ? "#FBFBFC" : "#4B5563",
                      width: "45.55px",
                      height: "45.55px",
                    }}
                  >
                    <PersonOutlineIcon />
                  </Avatar>
                  <Box
                    width="100%"
                    style={{ textAlign: "left" }}
                  >
                    <Typography
                      color={value === 0 ? "#2A4F55" : "#374151"}
                      fontSize={13}
                      fontWeight={600}
                    >
                      Personal Info
                    </Typography>
                    <Typography
                      color="#374151"
                      textTransform={"none"}
                      fontSize={11}
                      mt="5px"
                    >
                      About all your personal data
                    </Typography>
                  </Box>
                </Stack>
              }
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                marginLeft: { xs: "0px" },
                backgroundColor: value === 1 || value === 2 ? "#2a4f5542"  : "transparent",
              }}
              label={
                <Stack
                  sx={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "16px",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: value === 1 || value === 2 ? "#2A4F55" : "#FBFBFC",
                      color: value === 1 || value === 2 ? "#FBFBFC" : "#4B5563",
                      width: "45.55px",
                      height: "45.55px",
                    }}
                  >
                    <GppGoodOutlinedIcon />
                  </Avatar>
                  <Box
                    style={{ textAlign: "left" }}
                  >
                    <Typography
                      color={value === 1 || value === 2 ? "#2A4F55" : "#374151"}
                      fontSize={13}
                      fontWeight={600}
                    >
                      Security
                    </Typography>
                    <Typography
                      color="#374151"
                      textTransform={"none"}
                      fontSize={11}
                      mt="5px"
                    >
                      Manage your account security
                    </Typography>
                  </Box>
                </Stack>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box sx={{ padding: { xs: "0px", sm: "20px" }, width: "100%" }}>
          <Box sx={{ padding: { xs: "0px", sm: "20px" }, width: "100%" }}>
            <CustomTabPanel value={value} index={0}>
              <PersonalInfo  handleMessage={handleMessage} setIsLoading={setIsLoading} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {step === 0 && (
                <ChangePhone setStep={setStep} handleMessage={handleMessage} setIsLoading={setIsLoading} />
              )}
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
      <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      />
    </Box>
  );
}
