import { Box, Typography } from "@mui/material";

const items = [
  {
    img: "images/tents.jpg",
    title: "Tents",
    desc: "Experience comfort and protection with our high‑quality camping tents.",
  },
  {
    img: "images/bags.jpg",
    title: "Sleeping Bags",
    desc: "Stay cozy and warm during your camping trips with our premium sleeping bags.",
  },
  {
    img: "images/stoves.jpg",
    title: "Camp Stoves",
    desc: "Cook delicious meals in the great outdoors with our reliable camp stoves.",
  },
  //   {
  //     img: "images/light.jpg",
  //     title: "Lanterns",
  //     desc: "Light up the campsite with our durable lanterns.",
  //   },
  {
    img: "images/chair.jpg",
    title: "Camp Chairs",
    desc: "Relax comfortably with our sturdy camp chairs.",
  },
  {
    img: "images/backpacks.jpg",
    title: "Backpacks",
    desc: "Carry gear with ease using our ergonomic backpacks.",
  },
];

export default function Services() {
  return (
    <Box id="services" sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>
      <Typography sx={{ mb: 5 }}>
        Explore our wide range of camping gear services.
      </Typography>

      {/* flex grid: 3‑per‑row desktop, 2 tablet, 1 phone */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {items.map(({ img, title, desc }) => (
          <Box
            key={title}
            sx={{
              /* vertical poster look */
              width: { xs: "100%", sm: "calc(50% - 32px)", md: 260 },
              height: 380,
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              cursor: "pointer",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&:hover .hoverBox": { opacity: 1 },
            }}
          >
            {/* always‑visible title strip */}
            <Typography
              variant="subtitle1"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                py: 1,
                textAlign: "center",
                bgcolor: "rgba(0,0,0,.55)",
                color: "white",
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>

            {/* hidden overlay with description */}
            <Box
              className="hoverBox"
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                bgcolor: "rgba(0,0,0,.7)",
                color: "white",
                px: 2,
                opacity: 0,
                transition: "opacity .3s",
              }}
            >
              <Typography variant="body2">{desc}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
