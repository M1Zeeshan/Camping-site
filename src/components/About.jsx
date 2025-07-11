// About.jsx
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";

import HikingIcon from "@mui/icons-material/Terrain";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";

export default function About() {
  const fadeInUp = (delay = 0) => ({
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1, transition: { delay, duration: 0.6 } },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <Box id="about" component="section" sx={{ pb: 10 }}>
      {/* Hero Banner with no background */}
      <Box
        sx={{
          position: "relative",
          minHeight: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          component={motion.div}
          variants={fadeInUp()}
          initial="initial"
          animate="whileInView"
          sx={{
            px: 4,
            py: 4,
            borderRadius: 3,
            width: { xs: "90%", md: "70%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, color: "#ca2c2c" }}
            gutterBottom
          >
            About Us
          </Typography>
          <Typography variant="body1">
            Your trusted partner for unforgettable outdoor experiences.
          </Typography>
        </Box>
      </Box>

      {/* Cards grid */}
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Our Story",
              icon: <HikingIcon />,
              text: "Serving campers since 2013 with premium gear and curated adventures.",
            },
            {
              title: "Our Mission",
              icon: <BuildIcon />,
              text: "Equip outdoor lovers with reliable, sustainable products that inspire exploration.",
            },
            {
              title: "Our Vision",
              icon: <StarIcon />,
              text: "Become the world‑class hub for nature enthusiasts seeking quality and community.",
            },
          ].map(({ title, icon, text }, i) => (
            <Grid item xs={12} md={4} key={title}>
              <Paper
                component={motion.div}
                whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,.25)" }}
                variants={fadeInUp(i * 0.15)}
                initial="initial"
                whileInView="whileInView"
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderTop: "8px solid #ca2c2c",
                  borderRadius: 2,
                  height: "100%",
                  background: "linear-gradient(135deg,#fff,#f7f7f7)",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#ca2c2c",
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {icon}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Timeline */}
      <Container sx={{ mt: 12 }}>
        <Typography
          component={motion.h3}
          variants={fadeInUp()}
          initial="initial"
          whileInView="whileInView"
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#ca2c2c", fontWeight: 600 }}
        >
          Milestones
        </Typography>

        <Timeline position="alternate">
          {[
            {
              year: "2013",
              title: "Founded",
              desc: "Opened first gear shop in Boulder, CO.",
            },
            {
              year: "2016",
              title: "10k Customers",
              desc: "Reached ten‑thousand happy campers worldwide.",
            },
            {
              year: "2024",
              title: "Climate‑Neutral Certified",
              desc: "Achieved 100 % carbon‑neutral operations.",
            },
          ].map(({ year, title, desc }, i) => (
            <TimelineItem
              key={year}
              component={motion.div}
              {...fadeInUp(i * 0.15)}
            >
              <TimelineSeparator>
                <TimelineDot color="error" />
                {i < 2 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ pb: 4 }}>
                <Typography variant="h6">
                  {year} • {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>

      {/* Team grid */}
      <Container sx={{ mt: 10 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          component={motion.h3}
          {...fadeInUp()}
          sx={{ color: "#ca2c2c", fontWeight: 600 }}
        >
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            "John Doe — Founder & CEO",
            "Jane Smith — Gear Specialist",
            "Mark Johnson — Customer Success",
            "Sarah Brown — Operations Manager",
          ].map((member, i) => (
            <Grid item xs={12} md={6} key={member}>
              <Paper
                component={motion.div}
                variants={fadeInUp(i * 0.1)}
                initial="initial"
                whileInView="whileInView"
                sx={{
                  p: 3,
                  borderLeft: "6px solid #ca2c2c",
                  background: "linear-gradient(135deg,#fff,#fafafa)",
                }}
              >
                {member}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
