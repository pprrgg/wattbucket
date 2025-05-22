import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BoltIcon from "@mui/icons-material/Bolt";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CropSquareIcon from "@mui/icons-material/CropSquare";
import FlashOnIcon from "@mui/icons-material/FlashOn"


import EvStationIcon from '@mui/icons-material/EvStation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  const primaryColor = "#5778fa";

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Datos para el slider y cards con iconos MUI grandes, ampliados con nuevos servicios
  const cardsData = [
    {
      id: 1,
      title_es: "Certificados de Ahorro Energético (CAE)",
      title_en: "Energy Saving Certificates (CAE)",
      description_es: "Cálculo del ahorro de energía mediante fichas estandarizadas.",
      description_en: "Energy savings calculation through standardized measure sheets.",
      icon: <EnergySavingsLeafIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
    },
    {
      id: 2,
      title_es: "Eficiencia Energética",
      title_en: "Energy Efficiency",
      description_es: "Optimización del consumo energético en instalaciones.",
      description_en: "Optimization of energy consumption in facilities.",
      icon: <BoltIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
    },
    {
      id: 3,
      title_es: "Autoconsumo",
      title_en: "Self-consumption",
      description_es: "Generación y uso de energía propia para reducir costos.",
      description_en: "Generation and use of own energy to reduce costs.",
      icon: <SolarPowerIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
    },
    {
      id: 4,
      title_es: "Auditorías Energéticas",
      title_en: "Energy Audits",
      description_es: "Evaluación detallada del consumo y eficiencia energética.",
      description_en: "Detailed assessment of energy consumption and efficiency.",
      icon: <EngineeringIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs/auditorias",
    },
    {
      id: 5,
      title_es: "Optimización de Potencia Contratada",
      title_en: "Power Optimization",
      description_es: "Gestión para reducir costos y evitar penalizaciones.",
      description_en: "Management to reduce costs and avoid penalties.",
      icon: <BoltIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs/optimizacion-potencia",
    },
    {
      id: 6,
      title_es: "Gestión y Monitoreo Energético",
      title_en: "Energy Management & Monitoring",
      description_es: "Monitoreo y análisis continuo del consumo energético.",
      description_en: "Continuous monitoring and analysis of energy consumption.",
      icon: <EnergySavingsLeafIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs/gestion-energia",
    },
    {
      id: 7,
      title_es: "Tecnologías de Ahorro Energético",
      title_en: "Energy Saving Technologies",
      description_es: "Implementación de LED, mejoras HVAC y otras tecnologías.",
      description_en: "Implementation of LED lighting, HVAC upgrades and more.",
      icon: <EngineeringIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs/tecnologias-ahorro",
    },
    {
      id: 8,
      title_es: "Almacenamiento en Baterías de Litio",
      title_en: "Lithium Battery Storage",
      description_es: "Sistemas para almacenar energía y optimizar su uso.",
      description_en: "Systems to store energy and optimize its use.",
      icon: <BatteryChargingFullIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs/almacenamiento-baterias",
    },
    {
      id: 9,
      title_es: "Recarga de Coches Eléctricos",
      title_en: "Electric Vehicle Charging",
      description_es: "Soluciones para cargar vehículos eléctricos eficientemente.",
      description_en: "Solutions to efficiently charge electric vehicles.",
      icon: <EvStationIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs/recarga-vehiculos",
    },
  ];

  // Preguntas frecuentes (FAQ) ampliadas
  const accordionData = [
    {
      title_es: "¿Qué es un CAE?",
      title_en: "What is a CAE?",
      content_es: "Un Certificado de Ahorro Energético cuantifica mejoras energéticas.",
      content_en: "An Energy Saving Certificate quantifies energy improvements.",
      link: "/docs/cae-info",
    },
    {
      title_es: "¿Qué incluye WattBucket.blog?",
      title_en: "What does WattBucket.blog include?",
      content_es: "Plantillas personalizables para informes técnicos y cálculos.",
      content_en: "Customizable templates for technical reports and calculations.",
      link: "/docs/contenido",
    },
    {
      title_es: "¿Qué es una auditoría energética?",
      title_en: "What is an energy audit?",
      content_es: "Evaluación completa del consumo energético para identificar mejoras.",
      content_en: "Comprehensive evaluation of energy consumption to identify improvements.",
      link: "/docs/auditorias",
    },
    {
      title_es: "¿Cómo optimizar la potencia contratada?",
      title_en: "How to optimize contracted power?",
      content_es: "Análisis y ajustes para reducir costos y evitar penalizaciones.",
      content_en: "Analysis and adjustments to reduce costs and avoid penalties.",
      link: "/docs/optimizacion-potencia",
    },
    {
      title_es: "¿Qué tecnologías puedo implementar para ahorrar energía?",
      title_en: "What technologies can I implement to save energy?",
      content_es: "LED, HVAC eficiente, almacenamiento en baterías y más.",
      content_en: "LED, efficient HVAC, battery storage and more.",
      link: "/docs/tecnologias-ahorro",
    },
    {
      title_es: "¿Cómo funciona la recarga de coches eléctricos?",
      title_en: "How does electric vehicle charging work?",
      content_es: "Sistemas y recomendaciones para cargar vehículos eléctricos de forma segura.",
      content_en: "Systems and recommendations to safely charge electric vehicles.",
      link: "/docs/recarga-vehiculos",
    },
  ];

  // Sección informativa alternada con más temas
  const alternatingData = [
    {
      title_es: "Instalaciones Eficientes",
      title_en: "Efficient Installations",
      text_es: "Mejora el rendimiento energético de tus sistemas eléctricos.",
      text_en: "Improve the energy performance of your electrical systems.",
      image: "/img/eie010.png",
      link: "/docs/instalaciones",
    },
    {
      title_es: "Ahorro Sostenible",
      title_en: "Sustainable Savings",
      text_es: "Calcula y documenta los ahorros con nuestras plantillas.",
      text_en: "Calculate and document savings with our templates.",
      image: "/img/cae.png",
      link: "/docs/ahorro",
    },
    {
      title_es: "Auditorías Energéticas",
      title_en: "Energy Audits",
      text_es: "Diagnóstico detallado para optimizar el consumo energético.",
      text_en: "Detailed diagnosis to optimize energy consumption.",
      image: "/img/auditoria.png",
      link: "/docs/auditorias",
    },
    {
      title_es: "Gestión y Monitoreo",
      title_en: "Management & Monitoring",
      text_es: "Supervisa y analiza el uso energético en tiempo real.",
      text_en: "Monitor and analyze energy usage in real-time.",
      image: "/img/monitoring.png",
      link: "/docs/gestion-energia",
    },
    {
      title_es: "Almacenamiento de Energía",
      title_en: "Energy Storage",
      text_es: "Baterías de litio para maximizar la eficiencia y ahorro.",
      text_en: "Lithium batteries to maximize efficiency and savings.",
      image: "/img/baterias.png",
      link: "/docs/almacenamiento-baterias",
    },
    {
      title_es: "Recarga de Vehículos Eléctricos",
      title_en: "Electric Vehicle Charging",
      text_es: "Infraestructura y soluciones para movilidad eléctrica.",
      text_en: "Infrastructure and solutions for electric mobility.",
      image: "/img/ev_charging.png",
      link: "/docs/recarga-vehiculos",
    },
  ];

  // Estado y almacenamiento local para filtros (sin cambio)
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    sessionStorage.setItem("selectedGroup", selectedGroup);
  }, [selectedGroup]);

  useEffect(() => {
    sessionStorage.setItem("selectedSector", selectedSector);
  }, [selectedSector]);

  useEffect(() => {
    sessionStorage.setItem("searchText", searchText);
  }, [searchText]);

  const handleButtonClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      {/* Espacio superior */}
      <Container sx={{ py: 4 }}></Container>

      {/* Slider principal */}
      <Slider {...carouselSettings}>
        {cardsData.map((card) => (
          <div key={card.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "400px",
                border: "1px solid",
                borderColor: primaryColor,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* Texto y botón */}
              <div
                style={{
                  flex: 1,
                  padding: "20px 40px",
                  height: "100%",
                  background: `linear-gradient(to right, ${primaryColor}, transparent)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  textAlign: "left",
                  color: "white",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                  {card.title_es}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: "italic", mb: 1, opacity: 0.7 }}>
                  {card.title_en}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {card.description_es}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 3, opacity: 0.7 }}>
                  {card.description_en}
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => handleButtonClick(card.link)}>
                  Ver más / See more
                </Button>
              </div>
              {/* Imagen */}
              <div style={{ flex: 1, height: "100%", minWidth: "50%", minHeight: "100%" }}>
                <CardMedia
                  component="img"
                  image={card.icon ? undefined : card.image}
                  alt={card.title_es}
                  sx={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "white" }}
                />
                {!card.image && (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                    }}
                  >
                    {card.icon}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>



      <Container
        sx={{
          py: 6,
          textAlign: "center",
          backgroundColor: "#f5f7fa",
          borderRadius: 2,
          position: "relative",
        }}
      >
        {/* Icono personalizado: Cubo + Rayo */}
        <Box
          sx={{
            position: "relative",
            width: 90,
            height: 90,
            margin: "0 auto",
            mb: 2,
          }}
        >
          <CropSquareIcon
            sx={{
              fontSize: 90,
              color: primaryColor,
              opacity: 0.8,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <FlashOnIcon
            sx={{
              fontSize: 60,
              color: "#f4b400",
              position: "absolute",
              top: 15,
              left: 15,
              zIndex: 2,
              filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.2))",
            }}
          />
        </Box>

        {/* Título y eslogan */}
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", mb: 1, color: primaryColor }}
        >
          Watt Bucket
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{ fontWeight: 500, mb: 0.5 }}
        >
          Soluciones energéticas que ahorran hoy y transforman el mañana.
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ fontWeight: 400, fontStyle: "italic" }}
        >
          Energy solutions that save today and transform tomorrow.
        </Typography>
      </Container>


      {/* Cards principales con iconos grandes */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {cardsData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  position: "relative",
                  height: "auto",       // altura flexible según contenido
                  minHeight: 320,       // para dar algo de estructura inicial
                  border: "1px solid",
                  borderColor: primaryColor,
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  py: 2,
                  px: 2,
                  textAlign: "center",
                  boxSizing: "border-box",
                }}




              >
                {card.icon && <div style={{ marginBottom: 16 }}>{card.icon}</div>}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {card.title_es}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontStyle: "italic", color: "text.secondary", mb: 2 }}>
                    {card.title_en}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {card.description_es}
                  </Typography>
                  <Typography variant="caption" sx={{ fontStyle: "italic", color: "text.secondary" }}>
                    {card.description_en}
                  </Typography>
                </CardContent>
                <Button variant="contained" color="secondary" onClick={() => handleButtonClick(card.link)}>
                  Ver más / See more
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Preguntas frecuentes bilingües */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Preguntas frecuentes / Frequently Asked Questions
        </Typography>
        {accordionData.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {item.title_es} / <em>{item.title_en}</em>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mb: 1 }}>{item.content_es}</Typography>
              <Typography sx={{ fontStyle: "italic", mb: 2 }}>{item.content_en}</Typography>
              {item.link && (
                <Button size="small" variant="outlined" href={item.link}>
                  Leer más / Read more
                </Button>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Sección informativa alternada bilingüe */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          ¿Qué puedes encontrar aquí? / What can you find here?
        </Typography>
        {alternatingData.map((item, index) => (
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            key={index}
            sx={{ mb: 4 }}
          >
            <Grid item xs={12} md={6}>
              <img
                src={item.image}
                alt={item.title_es}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
              <Typography variant="h5" gutterBottom>
                {item.title_es}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontStyle: "italic", mb: 2, color: "text.secondary" }}>
                {item.title_en}
              </Typography>
              <Typography variant="body1">{item.text_es}</Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic", mb: 2, color: "text.secondary" }}>
                {item.text_en}
              </Typography>
              {item.link && (
                <Button variant="contained" color="secondary" href={item.link}>
                  Saber más / Learn more
                </Button>
              )}
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
