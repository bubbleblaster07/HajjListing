import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Divider,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import superSaver from "../assets/SUPER SAVER.png";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import PropTypes from "prop-types";

import * as React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import DraftsIcon from "@mui/icons-material/Drafts";
import MosqueIcon from "@mui/icons-material/Mosque";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import DiningIcon from "@mui/icons-material/Dining";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink, useNavigate } from "react-router-dom";

// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const searchPage = () => {
  const [value, setValue] = React.useState("1");
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAirplaneHovered, setIsAirplaneHovered] = React.useState(false);
  const [isCarHovered, setIsCarHovered] = React.useState(false);
  const [isCartHovered, setIsCartHovered] = React.useState(false);
  const navigation = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const formPage = () => {
    navigation("form");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAirplaneMouseEnter = () => {
    setIsAirplaneHovered(true);
  };

  const handleAirplaneMouseLeave = () => {
    setIsAirplaneHovered(false);
  };

  const handleCarMouseEnter = () => {
    setIsCarHovered(true);
  };

  const handleCarMouseLeave = () => {
    setIsCarHovered(false);
  };

  const handleCartMouseEnter = () => {
    setIsCartHovered(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartHovered(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          mt: 14,
          //   display: "flex",
          //   flexDirection: "column",
          //   flexGrow: 1,
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url('https://www.hajjumrahonline.com/public/mky-images/banners/70055_Banner_7.jpg')",
            backgroundColor: "#cccccc",
            height: "600px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // position: "relative",
          }}
        >
          <Typography
            variant="h4"
            color="white"
            sx={{
              textAlign: "center",
              //   position: "absolute",
              //   top: "15%",
              //   left: "30%",
              //   transform: "translate(-50%, -50%)",
              fontWeight: "bold",
            }}
          >
            Find Your Perfect Umrah Package
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",

              margin: "50px",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "white" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  textColor="primary"
                  color="white"
                  centered
                  indicatorColor="primary"
                >
                  <Tab
                    icon={<DraftsIcon />}
                    iconPosition="start"
                    label="Hajj"
                    value="1"
                    sx={{ color: "white" }}
                  />
                  <Tab
                    icon={<MosqueIcon />}
                    iconPosition="start"
                    label=" Umrah"
                    value="2"
                    sx={{ color: "white" }}
                  />
                  <Tab
                    icon={<AssuredWorkloadIcon />}
                    iconPosition="start"
                    label=" Visa"
                    value="3"
                    sx={{ color: "white" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ color: "white" }}>
                <Stack direction="row" spacing={2}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="country-label">Select Country</InputLabel>
                    <Select
                      labelId="country-label"
                      label="Select Country"
                      name="country"
                      // value={formData.country}
                      // onChange={handleCountryChange}
                      sx={{
                        backgroundColor: "white",
                      }}
                    >
                      <MenuItem value="country1">Country 1</MenuItem>
                      <MenuItem value="country2">Country 2</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="visa-label">Select Visa</InputLabel>
                    <Select
                      labelId="visa-label"
                      label="Select Visa"
                      name="visa"
                      // value={formData.visa}
                      // onChange={handleVisaChange}
                      sx={{
                        backgroundColor: "white",
                      }}
                    >
                      <MenuItem value="visa1">Visa 1</MenuItem>
                      <MenuItem value="visa2">Visa 2</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    fullWidth
                    variant="contained"
                    label="Select Visa"
                    type="submit"
                    name="package"
                    color="primary"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    onClick={formPage}
                  >
                    Search
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel value="2" sx={{ color: "white" }}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Select Country"
                    type="text"
                    name="package"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Select Visa"
                    type="text"
                    name="package"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    label="Select Visa"
                    type="submit"
                    name="package"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    color="primary"

                    // sx={{
                    //   backgroundColor: "white",
                    // }}
                  >
                    Search
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel value="3" sx={{ color: "white" }}>
                {" "}
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Select Country2"
                    type="text"
                    name="package"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Select Visa"
                    type="text"
                    name="package"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    label="Select Visa"
                    type="submit"
                    name="package"
                    //   value={formData.startDate}
                    //   onChange={handleChange}
                    size="small"
                    color="primary"

                    // sx={{
                    //   backgroundColor: "white",
                    // }}
                  >
                    Search
                  </Button>
                </Stack>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Box>
          <Box sx={{ border: "2px solid black" }}>
            <Typography
              variant="h4"
              color="black"
              sx={{
                textAlign: "center",
                textTransform: "uppercase ",
                fontWeight: "bold",
              }}
            >
              Our services
            </Typography>
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{
                margin: "0 auto",
                maxWidth: "300px",
                // height: "100px",
              }}
            />
            {/* <Stack direction="row" justifyContent="center" alignItems="center"> */}
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 2,
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="hexagon"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "orange",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DiningIcon
                      fontSize="large"
                      sx={{
                        color: isHovered ? "inherit" : "white",
                        height: 100,
                        width: 100,
                      }}
                    />
                  </div>
                </Box>
                <Typography variant="subtitle">Catering</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 2,
                  }}
                  onMouseEnter={handleAirplaneMouseEnter}
                  onMouseLeave={handleAirplaneMouseLeave}
                >
                  <div
                    className="hexagon"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "orange",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AirplaneTicketIcon
                      fontSize="large"
                      sx={{
                        color: isAirplaneHovered ? "inherit" : "white",
                        height: 100,
                        width: 100,
                      }}
                    />
                  </div>
                </Box>
                <Typography variant="subtitle">Tickets(Pnrs)</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",

                    alignItems: "center",
                    margin: 2,
                  }}
                  onMouseEnter={handleCarMouseEnter}
                  onMouseLeave={handleCarMouseLeave}
                >
                  <div
                    className="hexagon"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "orange",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DirectionsCarFilledIcon
                      fontSize="large"
                      sx={{
                        color: isCarHovered ? "inherit" : "white",
                        height: 100,
                        width: 100,
                      }}
                    />
                  </div>
                </Box>
                <Typography variant="subtitle">Transfer</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 2,
                  }}
                  onMouseEnter={handleCartMouseEnter}
                  onMouseLeave={handleCartMouseLeave}
                >
                  <div
                    className="hexagon"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "orange",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AddShoppingCartIcon
                      fontSize="large"
                      sx={{
                        color: isCartHovered ? "inherit" : "white",
                        height: 100,
                        width: 100,
                      }}
                    />
                  </div>
                </Box>
                <Typography variant="subtitle">Shopping</Typography>
              </Grid>
            </Grid>
            {/* </Stack> */}
          </Box>
          <Box
            sx={{
              marginTop: 2,
              // mx: 6,
              mb: 1,
              backgroundColor: "#f1f2f5",
              width: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={superSaver}
                    alt="Paella dish"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: red[500], fontSize: "16px" }}
                        aria-label="recipe"
                      >
                        50%
                      </Avatar>
                    }
                    title="15 days super saver package"
                    // subheader="September 14, 2016"
                    sx={{
                      backgroundColor: "#2c3040",
                      color: "white",
                      height: "100px",
                      // textTransform: "uppercase",
                      fontSize: "24px",
                    }}
                    action={
                      <Stack direction="column">
                        <Typography variant="subtitle2">Starts From</Typography>
                        <span style={{ color: "green", fontSize: "17px" }}>
                          Rs.68786
                        </span>
                        <Rating
                          name="text-feedback"
                          size="small"
                          defaultValue={3}
                          // value={value}
                          readOnly
                          // precision={0.5}
                          emptyIcon={
                            <StarOutlineOutlinedIcon
                              style={{ opacity: 0.55, color: "yellow" }}
                              fontSize="16px"
                            />
                          }
                        />
                      </Stack>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span style={{ marginRight: "8px" }}>
                        <CalendarMonthOutlinedIcon />
                      </span>
                      <span>Travel Date: 2024-04-15</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span style={{ marginRight: "8px" }}>
                        <LocationCityOutlinedIcon />
                      </span>
                      <span>Hyderabad</span>
                    </div>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        flexGrow: 1,
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Book Now
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        flexGrow: 1,
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Send Inquiry
                      </IconButton>
                    </Box>

                    {/* <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore> */}
                  </CardActions>
                  {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                  {/* </Collapse> */}
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={superSaver}
                    alt="Paella dish"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: red[500], fontSize: "16px" }}
                        aria-label="recipe"
                      >
                        50%
                      </Avatar>
                    }
                    title="15 days super saver package"
                    // subheader="September 14, 2016"
                    sx={{
                      backgroundColor: "#2c3040",
                      color: "white",
                      height: "100px",
                      // textTransform: "uppercase",
                      fontSize: "24px",
                    }}
                    action={
                      <Stack direction="column">
                        <Typography variant="subtitle2">Starts From</Typography>
                        <span style={{ color: "green", fontSize: "17px" }}>
                          Rs.68786
                        </span>
                        <Rating
                          name="text-feedback"
                          size="small"
                          defaultValue={3}
                          // value={value}
                          readOnly
                          // precision={0.5}
                          emptyIcon={
                            <StarOutlineOutlinedIcon
                              style={{ opacity: 0.55, color: "yellow" }}
                              fontSize="16px"
                            />
                          }
                        />
                      </Stack>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span style={{ marginRight: "8px" }}>
                        <CalendarMonthOutlinedIcon />
                      </span>
                      <span>Travel Date: 2024-04-15</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span style={{ marginRight: "8px" }}>
                        <LocationCityOutlinedIcon />
                      </span>
                      <span>Hyderabad</span>
                    </div>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        flexGrow: 1,
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Book Now
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        flexGrow: 1,
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Send Inquiry
                      </IconButton>
                    </Box>

                    {/* <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore> */}
                  </CardActions>
                  {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                  {/* </Collapse> */}
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={superSaver}
                    alt="Paella dish"
                    sx={{ objectFit: "contain" }}
                  />
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: red[500], fontSize: "16px" }}
                        aria-label="recipe"
                      >
                        50%
                      </Avatar>
                    }
                    title="15 days super saver package"
                    // subheader="September 14, 2016"
                    sx={{
                      backgroundColor: "#2c3040",
                      color: "white",
                      height: "100px",
                      // textTransform: "uppercase",
                      fontSize: "24px",
                    }}
                    action={
                      <Stack direction="column">
                        <Typography variant="subtitle2">Starts From</Typography>
                        <span style={{ color: "green", fontSize: "17px" }}>
                          Rs.68786
                        </span>
                        <Rating
                          name="text-feedback"
                          size="small"
                          defaultValue={3}
                          // value={value}
                          readOnly
                          // precision={0.5}
                          emptyIcon={
                            <StarOutlineOutlinedIcon
                              style={{ opacity: 0.55, color: "yellow" }}
                              fontSize="16px"
                            />
                          }
                        />
                      </Stack>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span style={{ marginRight: "8px" }}>
                        <CalendarMonthOutlinedIcon />
                      </span>
                      <span>Travel Date: 2024-04-15</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span style={{ marginRight: "8px" }}>
                        <LocationCityOutlinedIcon />
                      </span>
                      <span>Hyderabad</span>
                    </div>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        flexGrow: 1,
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Book Now
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        flexGrow: 1,
                        width: "100%",
                        height: "40px",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          fontSize: "18px",
                        }}
                      >
                        Send Inquiry
                      </IconButton>
                    </Box>

                    {/* <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore> */}
                  </CardActions>
                  {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                  {/* </Collapse> */}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default searchPage;
