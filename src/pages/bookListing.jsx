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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../component/imageslider/imageSlider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import LightModeIcon from "@mui/icons-material/LightMode";

import Select from "@mui/material/Select";
import CardCustom from "../component/card/customCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Slider from "@mui/material/Slider";
import MosqueIcon from "@mui/icons-material/Mosque";

import demo_img from "../assets/Aqsa.png";
import { green } from "@mui/material/colors";

const BookListing = () => {
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
  const images = [
    "https://www.hajjumrahonline.com/public/mky-images/hotel_img/66464_mayer%201.PNG",
    "https://www.hajjumrahonline.com/public/mky-images/hotel_img/98958_mayer%205.PNG",
    "https://www.hajjumrahonline.com/public/mky-images/hotel_img/98958_mayer%205.PNG",
  ];

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
      <Container maxWidth="lg" sx={{ mt: 20, minHeight: "200vh" }}>
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
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Packages Booking
          </Link>
          {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
        </Breadcrumbs>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              40 DAYS LONG PACKAGE
            </Typography>
            <Typography variant="string" sx={{ fontSize: "16px" }}>
              Madina :: Jood Al Marjaan (1500Mtrs) , Makka :: Mayaar Mayassar
              (1500Mtrs) , Azizia :: Mayaar Mayassar (10000Mtrs) ,
            </Typography>
          </Box>
          <Box margin={0}>
            <Typography variant="string" sx={{ fontSize: "10px" }}>
              Starting From
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginRight: "20px" }}
            >
              Rs.699000.00
            </Typography>
            <Typography variant="string" sx={{ fontSize: "10px" }}>
              per person
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8} md={8}>
            <Box
              //   border={1}
              borderRadius={1}
              //   borderColor="grey.500"
              p={0}
              sx={{
                flexGrow: 1,
                minHeight: "70vh",
                backgroundColor: "#fafafa",
              }}
            >
              <ImageSlider images={images} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
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
                  All fields are mandatory
                </Typography>
              </Box>
              {/* <Box sx={{ mt: 2, margin: "20px" }}>
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
              </Box> */}
              {/* <Divider orientation="horizontal" variant="middle" flexItem /> */}
              <Box component="div" sx={{ padding: 1 }}>
                <TextField
                  variant="outlined"
                  // label="Start Date"
                  fullWidth
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box sx={{ mt: 2, margin: "9px" }}>
                <TextField
                  variant="outlined"
                  label="Full Name "
                  fullWidth
                  type="text"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
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
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default BookListing;
