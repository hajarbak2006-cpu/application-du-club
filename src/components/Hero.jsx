import React from "react";

function Hero() {
  return (
    <section
      className="text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/image/image7.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <h1 className="fw-bold display-3">
        Bienvenue au Club Aidev_communityfsbm
      </h1>

      <p
        className="mt-3"
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem"
        }}
      >
        Découvrez l'univers de l'Intelligence Artificielle, du Machine Learning
        et de la Data Analysis à travers des formations pratiques, des Tech Labs,
        des Meetups, des Hackathons et des événements innovants. Développez vos
        compétences, collaborez sur des projets passionnants et rejoignez une
        communauté technologique ambitieuse.
      </p>

      <a href="#join" className="btn btn-primary btn-lg mt-3">
        Rejoindre le club
      </a>
    </section>
  );
}

export default Hero;