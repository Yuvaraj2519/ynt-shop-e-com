import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import laptop from "../../assets/laptop.svg";

function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of product 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of product 3",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of product 4",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of product 5",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of product 6",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description of product 7",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description of product 8",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Product 9",
      description: "Description of product 9",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Product 10",
      description: "Description of product 10",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <Paper
      elevation={3}
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "left", width: 400 , marginLeft: "1rem"}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search products"
          inputProps={{ "aria-label": "Search products" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper
        elevation={0}
        style={{
          marginTop: "1rem",
          width: "80vw",
          maxHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "auto",
        }}
      >
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={2} key={product.id}>
              <Card elevation={3} style={{ margin: "1rem", cursor: "pointer",
               }}
               sx={{
                "&:hover": {
                  boxShadow: 2,
                  transform: "scale(1.03)",
                  transition: "0.3s",
                },
               }}
               >
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.imageUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    $99.99
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Home;
