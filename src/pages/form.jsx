import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  Divider,
  CardMedia,
  CardActions,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import LightModeIcon from "@mui/icons-material/LightMode";

import Select from "@mui/material/Select";
import CardCustom from "../component/card/customCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { styled, alpha } from "@mui/material/styles";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import MosqueIcon from "@mui/icons-material/Mosque";

import demo_img from "../assets/Aqsa.png";
import { green } from "@mui/material/colors";

const TravelForm = () => {
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [formData, setFormData] = useState({
    duration: "",
    priceRange: [5000, 10000],
    name: "",
    phoneNumber: "",
    email: "",
    // age: "",
  });

  const handleChange = (e) => {
    setAge(e.target.value);
    setPrice(e.target.value);
    setRating(e.target.value);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const theme = createTheme({
    typography: {
      h7: {
        fontSize: "1.2rem",
      },
    },
    "@media (max-width: 960px)": {
      typography: {
        h7: {
          fontSize: "1rem",
        },
      },
    },
    "@media (max-width: 460px)": {
      typography: {
        h7: {
          fontSize: "0.6rem",
        },
      },
    },
  });

  const isLargeScreen = useMediaQuery("(min-width: 960px)");
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:960px)"
  );

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 20, minHeight: "200vh" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ backgroundColor: "#eceeef", mb: 2, padding: 1 }}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Packages
          </Link>
          {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
        </Breadcrumbs>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={3} md={3}>
            <Box
              border={1}
              borderRadius={1}
              borderColor="grey.500"
              p={0}
              sx={{
                flexGrow: 1,
                minHeight: "90vh",
                backgroundColor: "#fafafa",
              }}
            >
              <Box
                sx={{
                  Height: 40,
                  width: "100%",
                  backgroundColor: "#f8a02b",
                  padding: 1,
                  color: "#ffffff",
                  fontSize: "16px",
                  margin: "0px",
                  fontWeight: "bold",
                }}
              >
                <Typography variant="h8" component="div">
                  Filter By (Packages)
                </Typography>
              </Box>
              <Box sx={{ mt: 2, margin: "20px" }}>
                <Typography
                  variant="h8"
                  component="div"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "16px",
                    fontFamily: "'Montserrat Bold', Arial, sans-serif",
                  }}
                >
                  Departure city
                </Typography>
              </Box>
              <Divider orientation="horizontal" variant="middle" flexItem />
              <Box component="div" sx={{ padding: 1 }}>
                <FormControl
                  fullWidth
                  // sx={{ marginLeft: "5px", marginRight: "5px" }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="city"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ mt: 2, margin: "20px" }}>
                <Typography
                  variant="h8"
                  component="div"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "16px",
                    fontFamily: "'Montserrat Bold', Arial, sans-serif",
                  }}
                >
                  Sort Packages
                </Typography>
              </Box>
              <Divider orientation="horizontal" variant="middle" flexItem />
              <Stack component="div" direction="column" sx={{ padding: 1 }}>
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label1">Price</InputLabel>
                  <Select
                    labelId="demo-simple-select-label1"
                    id="demo-simple-select"
                    value={price}
                    label="Price"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating}
                    label="Rating"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">Date</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="city"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Divider orientation="horizontal" variant="middle" flexItem />
              <Box sx={{ mt: 2, margin: "20px" }}>
                <Typography
                  variant="h8"
                  component="div"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "16px",
                    fontFamily: "'Montserrat Bold', Arial, sans-serif",
                  }}
                >
                  Package Price
                </Typography>
              </Box>
              <Box component="div">
                <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.option1}
                          onChange={handleChange}
                          name="option1"
                        />
                      }
                      label="Rs. 30,000 to Rs. 40,000"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.option2}
                          onChange={handleChange}
                          name="option2"
                        />
                      }
                      label="Rs. 30,000 to Rs. 40,000"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.option3}
                          onChange={handleChange}
                          name="option3"
                        />
                      }
                      label="Rs. 30,000 to Rs. 40,000"
                    />
                    {/* Add more FormControlLabel components for additional options */}
                  </FormGroup>
                </FormControl>
              </Box>
              <Divider orientation="horizontal" variant="middle" flexItem />
              <Box sx={{ mt: 2, margin: "20px" }}>
                <Typography
                  variant="h8"
                  component="div"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "800",
                    fontSize: "16px",
                    fontFamily: "'Montserrat Bold', Arial, sans-serif",
                  }}
                >
                  Package Flight
                </Typography>
              </Box>

              <Box component="div">
                <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.option1}
                          onChange={handleChange}
                          name="option1"
                        />
                      }
                      label="Indigo"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.option2}
                          onChange={handleChange}
                          name="option2"
                        />
                      }
                      label="Emirates"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={state.option3}
                          onChange={handleChange}
                          name="option3"
                        />
                      }
                      label="flynas"
                    />
                    {/* Add more FormControlLabel components for additional options */}
                  </FormGroup>
                </FormControl>
              </Box>
              {/* </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} lg={9} md={9}>
            <Box
              border={1}
              borderRadius={1}
              borderColor="grey.500"
              p={0}
              sx={{ flexGrow: 1, minHeight: "128vh" }}
            >
              <Box
                sx={{
                  Height: 100,
                  width: "100%",
                  backgroundColor: "#f8a02b",
                  padding: 1,
                  color: "#ffffff",
                  fontSize: "16px",
                  margin: "0px",
                  fontWeight: "bold",
                }}
              >
                <Box>
                  <Typography variant="h8">Packages Found</Typography>
                </Box>
                <Stack
                  // direction="row"
                  sx={{ mt: 1 }}
                  // justifyContent="space-evenly"
                  direction={isSmallScreen || isMediumScreen ? "column" : "row"}
                  justifyContent={
                    isSmallScreen || isMediumScreen ? "center" : "space-evenly"
                  }
                  // sx={{ mt: 1 }}
                >
                  <Box>
                    <TextField
                      variant="outlined"
                      // label="Start Date"
                      fullWidth
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        width:
                          isSmallScreen || isMediumScreen ? "100%" : "200px",
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      variant="outlined"
                      fullWidth
                      // label="Start Date"
                      type="date"
                      name="endDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        width:
                          isSmallScreen || isMediumScreen ? "100%" : "200px",
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Select package"
                      type="text"
                      name="package"
                      value={formData.startDate}
                      onChange={handleChange}
                      size="small"
                      sx={{
                        backgroundColor: "white",
                        width:
                          isSmallScreen || isMediumScreen ? "100%" : "200px",
                      }}
                    />
                  </Box>
                </Stack>
              </Box>

              <CardCustom />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default TravelForm;
