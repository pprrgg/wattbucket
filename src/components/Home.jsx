import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';

import EvStationIcon from '@mui/icons-material/EvStation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const HomePage = () => {
      const navigate = useNavigate();
  
  const theme = useTheme();
  const primaryColor = "#1976d2";

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cardsData = [
    {
      id: 1,
      title_es: "Certificados de Ahorro Energético (CAE)",
      title_en: "Energy Saving Certificates (CAE)",
      description_es: "Cálculo del ahorro de energía mediante fichas estandarizadas.",
      description_en: "Energy savings calculation through standardized measure sheets.",
      icon: <EnergySavingsLeafIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/certificados de ahorro energetico cae.jpeg",
      group: "",
      sector: "",
      searchtext: "pool",
    },
    {
      id: 2,
      title_es: "Comunidades Energéticas",
      title_en: "Energy Communities",
      description_es: "Creación, dinamización y gestión de comunidades locales de energía.",
      description_en: "Creation, activation, and management of local energy communities.",
      icon: <GroupsIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/comunidades-energeticas.jpeg",
      group: "Comunidades_energeticas",
      sector: "",
      searchtext: "",
    },
    {
      id: 4,
      title_es: "Autoconsumo",
      title_en: "Self-consumption",
      description_es: "Generación y uso de energía propia para reducir costos.",
      description_en: "Generation and use of own energy to reduce costs.",
      icon: <SolarPowerIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/autoconsumo.jpeg",
      group: "Autoconsumo",
      sector: "",
      searchtext: "",
    },
    {
      id: 5,
      title_es: "Auditorías Energéticas",
      title_en: "Energy Audits",
      description_es: "Evaluación detallada del consumo y eficiencia energética.",
      description_en: "Detailed assessment of energy consumption and efficiency.",
      icon: <SearchIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/auditorias-energeticas.jpeg",
      group: "Auditorias_energeticas",
      sector: "",
      searchtext: "",
    },
    {
      id: 6,
      title_es: "Optimización de Potencia Contratada",
      title_en: "Power Optimization",
      description_es: "Gestión para reducir costos y evitar penalizaciones.",
      description_en: "Management to reduce costs and avoid penalties.",
      icon: <BoltIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/optimizacion-de-potencia-contratada.jpeg",
      group: "Optimizacion_de_potencia_contratada",
      sector: "",
      searchtext: "",
    },
    {
      id: 7,
      title_es: "Gestión y Monitoreo Energético",
      title_en: "Energy Management & Monitoring",
      description_es: "Monitoreo y análisis continuo del consumo energético.",
      description_en: "Continuous monitoring and analysis of energy consumption.",
      icon: <LightbulbIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/gestion-y-monitoreo-energetico.jpeg",
      group: "Gestion_y_monitoreo_energetico",
      sector: "",
      searchtext: "",
    },
    {
      id: 9,
      title_es: "Almacenamiento en Baterías de Litio",
      title_en: "Lithium Battery Storage",
      description_es: "Sistemas para almacenar energía y optimizar su uso.",
      description_en: "Systems to store energy and optimize its use.",
      icon: <BatteryChargingFullIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "/img/Almacenamiento en Baterías de Litio.jpeg",
      group: "Almacenamiento_en_baterias_de_litio",
      sector: "",
      searchtext: "",
    },
    {
      id: 10,
      title_es: "Recarga de Coches Eléctricos",
      title_en: "Electric Vehicle Charging",
      description_es: "Soluciones para cargar vehículos eléctricos eficientemente.",
      description_en: "Solutions to efficiently charge electric vehicles.",
      icon: <EvStationIcon sx={{ fontSize: 60, color: primaryColor }} />,
      link: "/Docs",
      image: "public/img/recarga-de-coches-electricos.jpeg",
      group: "Recarga_de_coches_electricos",
      sector: "",
      searchtext: "",
    },
  ];
  
  
  const accordionData = [
    {
      title_es: "¿Qué es un CAE?",
      title_en: "What is a CAE?",
      content_es: "Un Certificado de Ahorro Energético cuantifica mejoras energéticas.",
      content_en: "An Energy Saving Certificate quantifies energy improvements.",
      link: "/Docs",
      group: "Asesoría_Energética",
      sector: "",
      searchtext: "pool",
    },
    {
      title_es: "¿Con quiénes se puede crear una comunidad energética?",
      title_en: "Who can create an energy community?",
      content_es:
        "Una comunidad energética puede estar formada por ciudadanos, pymes, ayuntamientos o entidades locales que colaboran para generar, consumir y gestionar energía de forma colectiva.",
      content_en:
        "An energy community can be formed by citizens, SMEs, municipalities or local entities collaborating to collectively generate, consume, and manage energy.",
      link: "/Docs",
      group: "Con_quienes_se_puede_crear_una_comunidad_energetica",
      sector: "",
      searchtext: "",
    },
    {
      title_es: "¿Qué es una auditoría energética?",
      title_en: "What is an energy audit?",
      content_es: "Evaluación completa del consumo energético para identificar mejoras.",
      content_en: "Comprehensive evaluation of energy consumption to identify improvements.",
      link: "/Docs",
      group: "Que_es_una_auditoria_energetica",
      sector: "",
      searchtext: "",
    },
    {
      title_es: "¿Cómo optimizar la potencia contratada?",
      title_en: "How to optimize contracted power?",
      content_es: "Análisis y ajustes para reducir costos y evitar penalizaciones.",
      content_en: "Analysis and adjustments to reduce costs and avoid penalties.",
      link: "/Docs",
      group: "Como_optimizar_la_potencia_contratada",
      sector: "",
      searchtext: "",
    },
    {
      title_es: "¿Qué tecnologías puedo implementar para ahorrar energía?",
      title_en: "What technologies can I implement to save energy?",
      content_es: "LED, HVAC eficiente, almacenamiento en baterías y más.",
      content_en: "LED, efficient HVAC, battery storage and more.",
      link: "/Docs",
      group: "Que_tecnologias_puedo_implementar_para_ahorrar_energia",
      sector: "",
      searchtext: "",
    },
    {
      title_es: "¿Cómo funciona la recarga de coches eléctricos?",
      title_en: "How does electric vehicle charging work?",
      content_es: "Sistemas y recomendaciones para cargar vehículos eléctricos de forma segura.",
      content_en: "Systems and recommendations to safely charge electric vehicles.",
      link: "/Docs",
      group: "Como_funciona_la_recarga_de_coches_electricos",
      sector: "",
      searchtext: "",
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

  const handleButtonClick = (group, sector, searchtext, link) => {
    setSelectedGroup(group);
    setSelectedSector(sector);
    setSearchText(searchtext);
    // window.location.href = link;
    navigate(link);

  };


  return (
    <div>
      <div id="carrusel">
        <Container
          sx={{
            py: 6,
            textAlign: "center",
            backgroundColor: "#f5f7ff",
            borderRadius: 2,
            position: "relative",
          }}
        >

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
                      // background: `linear-gradient(to right, ${primaryColor}, transparent)`,
                      background: primaryColor,
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
                    <Button variant="contained" color="secondary" 
                  onClick={() => handleButtonClick(card.group, card.sector, card.searchtext, card.link)}
                  >
                      Ver más / See more
                    </Button>
                  </div>
                  <div style={{ flex: 1, height: "100%", minWidth: "50%", minHeight: "100%", backgroundColor: "white" }}>
                    {card.image ? (
                      <CardMedia
                        component="img"
                        image={card.image}
                        alt={card.title_es}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",  // Llena el contenedor recortando si es necesario
                          display: "block",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
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
        </Container>
      </div>

      <div id="inicio">
        <Container
          sx={{
            py: 6,
            textAlign: "center",
            backgroundColor: "#f5f7fa",
            borderRadius: 2,
            position: "relative",
          }}
        >

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
            <Box component="span" sx={{ fontWeight: 900 }}>
              Soluciones energéticas
            </Box>{" "}
            que ahorran hoy y transforman el mañana.
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ fontWeight: 400, fontStyle: "italic" }}
          >
            <Box component="span" sx={{ fontWeight: 600 }}>
              Energy solutions
            </Box>{" "}
            that save today and transform tomorrow.
          </Typography>
        </Container>
      </div>

      <div id="servicios">
        {/* Cards principales con iconos grandes */}
        <Container
          sx={{
            py: 6,
            textAlign: "center",
            backgroundColor: "#f5f7fa",
            borderRadius: 2,
            position: "relative",
          }}
        >        <Grid container spacing={4}>
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
                  <Button variant="contained" color="secondary" 
                  onClick={() => handleButtonClick(card.group, card.sector, card.searchtext, card.link)}
                  >
                    Ver más / See more
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      <div id="faq">
        {/* Preguntas frecuentes bilingües */}
        <Container
          sx={{
            py: 6,
            textAlign: "center",
            backgroundColor: "#f5fffa",
            borderRadius: 2,
            position: "relative",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mb: 1, color: primaryColor }}
          >
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
      </div>

      <div id="informacion">
        {/* Sección informativa alternada bilingüe */}
        <Container
          sx={{
            py: 6,
            textAlign: "center",
            backgroundColor: "#fff7fa",
            borderRadius: 2,
            position: "relative",
          }}
        >

          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", mb: 1, color: primaryColor }}
          >
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

      <div id="contacto">
        <Container
          sx={{
            py: 6,
            backgroundColor: "#e3f2fd",
            borderRadius: 2,
            mt: 6,
          }}
        >
          <Typography variant="h4" sx={{ color: primaryColor, fontWeight: "bold", mb: 3 }} align="center">
            Contáctanos / Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Formulario enviado. ¡Gracias por contactar!");
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder="Nombre / Name"
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="email"
                      placeholder="Correo / Email"
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea
                      placeholder="Mensaje / Message"
                      rows={5}
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                      }}
                    ></textarea>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Enviar / Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Dirección / Address:
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  C. Moby Dick, 30. 29004, Málaga
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Teléfono / Phone:
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  +34 951 73 34 91
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Email:
                </Typography>
                <Typography variant="body1">
                  <a href="mailto:info@wattbucket.com" style={{ color: primaryColor }}>
                    info@wattbucket.com
                  </a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>





    </div>
  );
};

export default HomePage;
