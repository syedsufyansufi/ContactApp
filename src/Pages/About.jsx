import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to our website! We are passionate about building modern, 
            user-friendly applications using the latest web technologies. 
            Our mission is to create high-quality digital experiences for users around the world.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Stay connected with us for more updates and projects. 🚀
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
