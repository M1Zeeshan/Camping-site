import { Box, Typography, Button } from "@mui/material";

// ✅ put your image in /public or /src/assets and adjust the path:
const heroBg = "images/c-2.jpg";

export default function Hero() {
  return (
    <Box
      id="home"
      className="homepage"
      // full‑viewport banner with background image + dark overlay
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* inner content box keeps original classes if you still rely on CSS */}
      <Box className="content">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Welcome to Camp &amp; Fire
        </Typography>

        <Typography variant="h6" sx={{ mb: 4, maxWidth: 750, mx: "auto" }}>
          Discover top‑quality camping gear for unforgettable outdoor
          adventures. Gear up and make lasting memories.
        </Typography>

        <Button href="#services" variant="contained" color="error" size="large">
          OUR SERVICES
        </Button>
      </Box>
    </Box>
  );
}
