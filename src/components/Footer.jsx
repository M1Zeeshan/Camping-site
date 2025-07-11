import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "error.main", py: 2, mt: 6 }}>
      <Container>
        <Typography align="center" color="white">
          © 2025 Camp & Fire. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
