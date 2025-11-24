// src/components/PageNotFound.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import "./PageNotFound.css"; // optional, for styling

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1 style={{ fontSize: "4rem", color: "#d9534f" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </Container>
  );
}
