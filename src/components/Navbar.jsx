import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const LinkButtons = ({ closeDrawer = () => {} }) => (
    <>
      {navItems.map(({ id, label }) => (
        <Button
          key={id}
          component="a"
          href={`#${id}`}
          onClick={closeDrawer}
          sx={{
            color: "white",
            textTransform: "none",
            fontSize: "1rem", // slightly larger font
            fontWeight: 500,
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: -4,
              width: 0,
              height: 2,
              backgroundColor: "#ca2c2c",
              transition: "width .3s ease",
            },
            "&:hover": {
              color: "white",
              "&:after": { width: "100%" },
            },
          }}
        >
          {label}
        </Button>
      ))}
    </>
  );

  const drawer = (
    <Box sx={{ width: 250, p: 2 }} role="presentation">
      <List>
        {navItems.map(({ id, label }) => (
          <ListItem
            button
            key={id}
            component="a"
            href={`#${id}`}
            onClick={() => setOpen(false)}
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
          height: 80, // standard navbar height
          px: 3,
          zIndex: (t) => t.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ height: 80, justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="h5"
              component="a"
              href="#home"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
                fontSize: "1.6rem", // enhanced size
              }}
            >
              Camp & Fire
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LinkButtons />
          </Stack>

          {/* Mobile menu */}
          <IconButton
            sx={{ color: "white", display: { md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        {drawer}
      </Drawer>
    </>
  );
}
