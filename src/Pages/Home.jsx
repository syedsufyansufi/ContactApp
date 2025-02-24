import React from "react";
import { Container, Typography, Button, Box, Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Welcome to Our Website 🚀
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            We build modern web applications using the latest technologies.
            Explore our features and services to learn more about what we offer.
          </Typography>
          
        </CardContent>
      </Card>
    </Container>
  );
}
