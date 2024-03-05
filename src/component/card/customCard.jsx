import React from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Divider,
  Button,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import MosqueIcon from "@mui/icons-material/Mosque";
import demo_img from "../../assets/Aqsa.png";
import demo_img1 from "../../assets/Umrah.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    image: demo_img,
    title: "GIFT UMRAH SUPER SAVER PACKAGE",
    location1: "Makka",
    mosque1: "Anwar Al-D.",
    distance1: "500mtrs",
    location2: "Madina",
    mosque2: "Karam Saad...",
    distance2: "500mtrs",
    price: "Rs.1450000",
  },
  {
    id: 2,
    image: demo_img1,
    title: "GIFT UMRAH SUPER SAVER PACKAGE",
    location1: "Makka",
    mosque1: "Anwar Al-D.",
    distance1: "500mtrs",
    location2: "Madina",
    mosque2: "Karam Saad...",
    distance2: "500mtrs",
    price: "Rs.1450000",
  },
];
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

const CustomCard = ({ card }) => {
  const navigate = useNavigate();
  const booked = () => {
    navigate("booklist");
  };
  return (
    <ThemeProvider theme={theme}>
      <Card
        key={card.id}
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "dotted",
          borderColor: "grey",
          borderWidth: 1,
          flexGrow: 1,
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 200, width: 200, objectFit: "contain" }}
          alt="image"
          image={card.image}
        />

        <CardContent>
          <Typography variant="h7" sx={{ textDecoration: "underline" }}>
            {card.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={6}>
              <Stack direction="column">
                <Typography variant="h7">{card.location1}</Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <MosqueIcon sx={{ fontSize: "small", marginRight: 1 }} />
                  <Typography variant="h7">{card.mosque1}</Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <LightModeIcon sx={{ fontSize: "small", marginRight: 1 }} />
                  <Typography>{card.distance1}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <Box>
                <Typography variant="h7">{card.location2}</Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <MosqueIcon sx={{ fontSize: "small", marginRight: 1 }} />
                  <Typography variant="h7">{card.mosque2}</Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <LightModeIcon sx={{ fontSize: "small", marginRight: 1 }} />
                  <Typography>{card.distance2}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <Divider orientation="vertical" variant="middle" flexItem />

        <CardActions>
          <Stack direction="column" spacing={3} sx={{ marginLeft: 1 }}>
            <Typography
              variant="h7"
              sx={{ fontSize: "16px", marginBottom: "200px" }}
            >
              Total Price:
              <span style={{ color: "#5cb85c" }}>{card.price}</span>
            </Typography>
            <Button variant="contained" size="small" onClick={booked}>
              BOOK NOW
            </Button>
            <Button variant="contained" size="small">
              VIEW
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default function CustomCardList() {
  return (
    <>
      {cardData.map((card) => (
        <Grid item key={card.id}>
          <CustomCard card={card} />
        </Grid>
      ))}
    </>
  );
}
