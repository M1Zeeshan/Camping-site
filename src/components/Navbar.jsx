import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ mode, toggleMode }) {
  const [open, setOpen] = useState(false);

  const drawer = (
    <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
      <List>
        {sections.map((s) => (
          <ListItem key={s.id} button component="a" href={`#${s.id}`}>
            <ListItemText primary={s.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="default" elevation={0} className="navbar">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="a"
          href="#home"
          className="logo"
          sx={{ textDecoration: "none" }}
        >
          Camp &amp; Fire
        </Typography>

        <Box
          sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}
          className="all-links"
        >
          {sections.map((s) => (
            <Button key={s.id} href={`#${s.id}`} sx={{ fontWeight: 600 }}>
              {s.label}
            </Button>
          ))}
        </Box>

        <Box>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
