import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { airtelPricings, gloPricings, mobilePricings, mtnPricings, pricings1 } from "@/constants/clientSideBarLinks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Pricingui = () => {
  return (
    <Stack direction="column" spacing={4}>
      <Box
        component="div"
        width={{ xs: "100%", md: "50%" }}
        sx={{
          backgroundColor: "#ffff",
          padding: "30px",
        }}
        display="flex"
        flexDirection={"column"}
      >
        <Table sx={{ overflowX: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Services
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Smart Earner
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Api User
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          {pricings1.map((pricing) => (
            <TableBody>
              {pricing.title.map((price) => (
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.title}
                  </Box>
                </TableCell>
              ))}
            </TableBody>
          ))}
        </Table>
      </Box>
      {/* second */}
      <Box
        component="div"
        width={{ xs: "100%", md: "50%" }}
        sx={{
          backgroundColor: "#ffad46",
          padding: "30px",
        }}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
        display='flex'
        justifyContent={'center'}
        textAlign={'center'}
        width={'100%'}
        fontSize='17px'
        fontWeight={600}
        py='10px'
        >MTN DATA PLAN</Typography>
        <Table sx={{ overflowX: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Plan Size
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Smart User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Api User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Validity
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          {mtnPricings.map((pricing) => (
            <TableBody>
              {pricing.title.map((price) => (
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.title}
                  </Box>
                </TableCell>
              ))}
            </TableBody>
          ))}
        </Table>
      </Box>
      {/* Glo */}
      <Box
        component="div"
        width={{ xs: "100%", md: "50%" }}
        sx={{
          backgroundColor: "#31ce36",
          padding: "30px",
        }}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
        display='flex'
        justifyContent={'center'}
        textAlign={'center'}
        width={'100%'}
        fontSize='17px'
        fontWeight={600}
        py='10px'
        >GLO DATA PLAN</Typography>
        <Table sx={{ overflowX: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Plan Size
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Smart User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Api User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Validity
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          {gloPricings.map((pricing) => (
            <TableBody>
              {pricing.title.map((price) => (
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.title}
                  </Box>
                </TableCell>
              ))}
            </TableBody>
          ))}
        </Table>
      </Box>
      {/* airtel */}
      <Box
        component="div"
        width={{ xs: "100%", md: "50%" }}
        sx={{
          backgroundColor: "#f25961",
          padding: "30px",
        }}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
        display='flex'
        justifyContent={'center'}
        textAlign={'center'}
        width={'100%'}
        fontSize='17px'
        fontWeight={600}
        py='10px'
        >AIRTEL DATA PLAN</Typography>
        <Table sx={{ overflowX: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Plan Size
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Smart User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Api User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Validity
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          {airtelPricings.map((pricing) => (
            <TableBody>
              {pricing.title.map((price) => (
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.title}
                  </Box>
                </TableCell>
              ))}
            </TableBody>
          ))}
        </Table>
      </Box>
      {/* 9mobile */}
      <Box
        component="div"
        width={{ xs: "100%", md: "50%" }}
        sx={{
          backgroundColor: "#1f283e",
          padding: "30px",
        }}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
        display='flex'
        justifyContent={'center'}
        textAlign={'center'}
        width={'100%'}
        fontSize='17px'
        fontWeight={600}
        py='10px'
        >9MOBILE DATA PLAN</Typography>
        <Table sx={{ overflowX: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Plan Size
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Smart User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Api User
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  fontSize={{ md: "17px", xs: "13px" }}
                  fontWeight={500}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Validity
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          {mobilePricings.map((pricing) => (
            <TableBody>
              {pricing.title.map((price) => (
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {price.title}
                  </Box>
                </TableCell>
              ))}
            </TableBody>
          ))}
        </Table>
      </Box>
    </Stack>
  );
};

export default Pricingui;
