// Portfolio.jsx
import { useState } from "react";
import { Box, Typography, Button, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const data = [
  {
    img: "images/camping-1.jpg",
    title: "Mountain Hiking",
    desc: "Embark on an exhilarating hiking adventure in breathtaking mountain ranges.",
    tags: ["Mountain", "Adventure"],
  },
  {
    img: "images/camping-2.jpg",
    title: "Lakeside Camping",
    desc: "Enjoy a tranquil camping experience by the serene shores of picturesque lakes.",
    tags: ["Lake", "Relax"],
  },
  {
    img: "images/camping-3.jpg",
    title: "Beach Camping",
    desc: "Escape to sandy beaches and camp under the starry sky by the crashing waves.",
    tags: ["Beach", "Adventure"],
  },
  //   {
  //     img: "images/camping-4.jpg",
  //     title: "Forest Exploration",
  //     desc: "Discover the wonders of lush forests and immerse yourself in nature's beauty.",
  //     tags: ["Forest", "Adventure"],
  //   },
  {
    img: "images/camping-5.jpg",
    title: "RV Camping",
    desc: "Experience the freedom of road trips and camping adventures with our RV rentals.",
    tags: ["Roadtrip", "Relax"],
  },
  {
    img: "images/camping-6.jpg",
    title: "Desert Camping",
    desc: "Embark on a unique desert camping experience and witness stunning landscapes.",
    tags: ["Desert", "Adventure"],
  },
];

// unique category list
const categories = ["All", ...Array.from(new Set(data.flatMap((d) => d.tags)))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // filter items
  const items =
    filter === "All" ? data : data.filter((d) => d.tags.includes(filter));

  // open modal
  const handleOpen = (i) => {
    setActiveIndex(i);
    setOpen(true);
  };

  return (
    <Box
      id="portfolio"
      sx={{ py: 10, textAlign: "center", background: "#f9f9f9" }}
    >
      <Typography variant="h3" gutterBottom>
        Our Portfolio
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Take a look at some of our memorable camping adventures.
      </Typography>

      {/* category buttons */}
      <Box
        sx={{
          mb: 5,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={cat === filter ? "contained" : "outlined"}
            color="error"
            size="small"
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* card grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {items.map(({ img, title, desc }, idx) => (
          <Box
            key={title}
            onClick={() => handleOpen(idx)}
            sx={{
              width: { xs: "100%", sm: "calc(50% - 32px)", md: 260 },
              height: 380,
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              cursor: "pointer",
              background: `url(${img}) center/cover`,
              transition: "transform .3s",
              "&:hover": { transform: "scale(1.03)" },
              "&:hover .hoverBox": { opacity: 1 },
            }}
          >
            {/* title strip */}
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

            {/* hover overlay */}
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

      {/* lightbox modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 16, right: 16, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          {/* keen slider */}
          <Box
            sx={{ width: { xs: "90vw", md: "70vw" }, maxWidth: 900 }}
            className="keen-slider"
            ref={useKeenSlider({
              initial: activeIndex,
              slideChanged(s) {
                setActiveIndex(s.details().relativeSlide);
              },
            })}
          >
            {items.map(({ img, title }) => (
              <Box
                key={title}
                className="keen-slider__slide"
                component="img"
                src={img}
                alt={title}
                sx={{ width: "100%", borderRadius: 2 }}
              />
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
