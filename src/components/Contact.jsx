import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "#f9f9f9" }}>
      <Container>
        {/* header row */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              CONTACT&nbsp;US
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ maxWidth: 500 }}>
              If you have any questions, please feel free to get in touch with
              us via phone, text, email, the form below, or even on social
              media!
            </Typography>
          </Grid>
        </Grid>

        {/* main two-column area */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          {/* left: form */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 4, borderRadius: 2, bgcolor: "#fff" }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                GET IN TOUCH
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  {" "}
                  {/* Name field, half width */}
                  <TextField
                    fullWidth
                    required
                    label="NAME" // Uppercase label
                    placeholder="Enter your name" // No asterisk
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {" "}
                  {/* Phone Number field, half width */}
                  <TextField
                    fullWidth
                    required
                    label="PHONE NUMBER" // Uppercase label
                    placeholder="Enter your phone number" // No asterisk
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  {/* Email field, full width */}
                  <TextField
                    fullWidth
                    required
                    label="EMAIL" // Uppercase label
                    placeholder="Enter your email" // No asterisk
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  {/* Your Message field, full width */}
                  <TextField
                    fullWidth
                    required
                    label="YOUR MESSAGE" // Uppercase label
                    placeholder="Your Message" // No asterisk
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{
                  mt: 3,
                  borderRadius: 2,
                  bgcolor: "#dc2626",
                  "&:hover": { bgcolor: "#b91c1c" },
                }}
              >
                SEND MESSAGE
              </Button>
            </Paper>
          </Grid>

          {/* right: contact info + business hours */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 4, borderRadius: 2, bgcolor: "#fff" }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                CONTACT INFORMATION
              </Typography>

              {/* Contact Info - Top Row */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <PhoneIcon sx={{ mr: 1, color: "#ca2c2c" }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          display: "block",
                          textTransform: "uppercase",
                        }}
                      >
                        PHONE
                      </Typography>{" "}
                      {/* Uppercase */}
                      <Typography variant="body2">773-365-1240</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, color: "#ca2c2c" }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          display: "block",
                          textTransform: "uppercase",
                        }}
                      >
                        ADDRESS
                      </Typography>{" "}
                      {/* Uppercase */}
                      <Typography variant="body2">
                        1425 N McLean Blvd, Elgin, IL
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* Contact Info - Email Row */}
              <Grid container sx={{ mb: 3 }}>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon sx={{ mr: 1, color: "#ca2c2c" }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          display: "block",
                          textTransform: "uppercase",
                        }}
                      >
                        EMAIL
                      </Typography>{" "}
                      {/* Uppercase */}
                      <Typography variant="body2">
                        office@steponetrans.com
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" fontWeight={700} gutterBottom>
                BUSINESS HOURS
              </Typography>

              <Grid container spacing={2}>
                {/* Monday - Friday */}
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      sx={{ mb: 0.5, textTransform: "uppercase" }}
                    >
                      MONDAY – FRIDAY
                    </Typography>
                    <Typography variant="body2">9:00 am – 8:00 pm</Typography>
                  </Box>
                </Grid>
                {/* Saturday */}
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      sx={{ mb: 0.5, textTransform: "uppercase" }}
                    >
                      SATURDAY
                    </Typography>
                    <Typography variant="body2">9:00 am – 6:00 pm</Typography>
                  </Box>
                </Grid>
                {/* Sunday */}
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      sx={{ mb: 0.5, textTransform: "uppercase" }}
                    >
                      SUNDAY
                    </Typography>
                    <Typography variant="body2">9:00 am – 5:00 pm</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Google map */}
        <Box sx={{ mt: 6 }}>
          <iframe
            title="Company Location"
            src="https://maps.google.com/maps?q=1425%20N%20McLean%20Blvd,%20Elgin,%20IL&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 12 }}
            loading="lazy"
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  );
}
