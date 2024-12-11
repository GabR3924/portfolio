import React, { memo } from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import { cards } from "../dataCards"; // Asegúrate de usar la ruta correcta para el archivo

// Componente MemoizedCard para renderizar tarjetas individuales
const MemoizedCard = memo(({ card, index }) => {
  // Desplazamiento controlado de las tarjetas
  const offsets = [
    0, 20, -30, 10, -20, 15, -10, 25, -5, 30, 5, -25, 10, -15, 20
  ]; // Desplazamientos predefinidos en el eje Y

  const offset = offsets[index % offsets.length]; // Usamos el índice para alternar entre los desplazamientos

  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo transparente con algo de blanco para la visibilidad
        padding: 2,
        height: card.height,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        marginTop: `${offset}px`, // Aplicamos el desplazamiento controlado
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 1,
          color: "#333", // Contraste del texto del título
        }}
      >
        {card.title}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", color: "#555" }}>
        {card.content}
      </Typography>
    </Card>
  );
});

// Componente principal Projects
function Projects() {
  // Configuración de columnas con tarjetas
  const columnConfigurations = [
    [cards[3], cards[4]],
    [cards[0], cards[1], cards[2]],
    [cards[5], cards[6]],
    [cards[7], cards[8], cards[9]],
    [cards[10], cards[11]],
    [cards[12], cards[13]],
  ];

  return (
    <Box
      sx={{
        p: 5,
        transform: "rotate(-20deg)",
        transformOrigin: "center",
        perspective: 100,
        marginLeft: '2rem',
        willChange: "transform",
      }}
    >
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{
          transform: "rotate(5deg)",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {columnConfigurations.map((columnCards, columnIndex) => (
          <Grid
            item
            xs={2}
            key={`column-${columnIndex}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              willChange: "transform",
            }}
          >
            {columnCards.map((card, cardIndex) => (
              <MemoizedCard key={`card-${columnIndex}-${cardIndex}`} card={card} index={cardIndex} />
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
