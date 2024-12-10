import React, { memo } from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
const MemoizedCard = memo(({ card }) => (
  <Card
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      padding: 2,
      height: card.height,
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)"
      }
    }}
  >
    <Typography 
      variant="h6" 
      sx={{ 
        fontWeight: "bold", 
        marginBottom: 1,
        color: card.color // Añade color del título basado en la card
      }}
    >
      {card.title}
    </Typography>
    <Typography variant="body2" sx={{ textAlign: "center" }}>
      {card.content}
    </Typography>
  </Card>
));
function Projects() {
  const cards = [
    {
      title: "Customization",
      content:
        "Use a pre-designed template or personalize with videos, stickers, fonts, and more.",
      color: "#D4C4F0",
      height: 250,
    },
    {
      title: "Scheduling",
      content:
        "Schedule all your cards and gifts now and we’ll send them later.",
      color: "#FFD7E2",
      height: 220,
    },
    {
      title: "Wallet",
      content: "Access all your gifts and manage your Givingli Cash.",
      color: "#D4F0C4",
      height: 300,
    },
    {
      title: "Inbox",
      content: "Track your gifts, group chats, and sent cards.",
      color: "#FFEFC4",
      height: 220,
    },
    {
      title: "Send Gifts",
      content: "Send as a group with friends or individually.",
      color: "#FFD1B2",
      height: 250,
    },
    {
      title: "Reminders",
      content: "Never miss a birthday or special occasion again.",
      color: "#C4E8F0",
      height: 250,
    },
    // Agregar más tarjetas para que coincida con el número original
    {
      title: "Custom Gifts",
      content: "Create personalized gifts for any occasion.",
      color: "#F0D4C4",
      height: 240,
    },
    {
      title: "Sharing",
      content: "Easily share your gifts with friends and family.",
      color: "#C4D4F0",
      height: 260,
    },
    {
      title: "History",
      content: "Review the history of all your past gifts.",
      color: "#F0C4C4",
      height: 230,
    },
    {
      title: "Favorites",
      content: "Save your favorite gifts for future use.",
      color: "#D4F0E8",
      height: 270,
    },
    {
      title: "Preview",
      content: "Preview your card and gift before sending it.",
      color: "#F4E0C4",
      height: 210,
    },
    {
      title: "Tracking",
      content: "Track the status of your sent gifts in real-time.",
      color: "#C4F0D4",
      height: 220,
    },
    {
      title: "Prueba",
      content: "Track the status of your sent gifts in real-time.",
      color: "#C4F0D4",
      height: 220,
    },{
      title: "Prueba2",
      content: "Track the status of your sent gifts in real-time.",
      color: "#C4F0D4",
      height: 220,
    },
  ];
 // Configuración de columnas con tarjetas
 const columnConfigurations = [
  [cards[3], cards[4]],
  [cards[0], cards[1], cards[2]],
  [cards[5], cards[6]],
  [cards[7], cards[8], cards[9]],
  [cards[10], cards[11]],
  [cards[12],cards[13]]
];

return (
  <Box 
    sx={{ 
      flexGrow: 1, 
      p: 4, 
      transform: 'rotate(-25deg)', 
      transformOrigin: 'center',
      overflow: 'hidden',
      perspective: 1000, 
      willChange: 'transform'
    }}
  >
    <Grid 
      container 
      spacing={2} 
      columns={12} 
      sx={{ 
        transform: 'rotate(5deg)',
        display: 'flex',
        alignItems: 'flex-start'
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
            gap: "2rem",
            marginTop: `${columnIndex * 2}rem`,
            willChange: 'transform'
          }}
        >
          {columnCards.map((card, cardIndex) => (
            <MemoizedCard 
              key={`card-${columnIndex}-${cardIndex}`} 
              card={card} 
            />
          ))}
        </Grid>
      ))}
    </Grid>
  </Box>
);
}

export default Projects;
