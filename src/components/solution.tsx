import React from "react";
import "../styles/Home.css";
import { motion } from "motion/react";

const SolutionSection: React.FC = () => {

  const ctaText = "Geyris devient votre assistant de gestion. Il vous aide à mieux comprendre votre activité, éviter les pertes et prendre de meilleures décisions.";

  const word = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};




  return (
    <section className="solution-section">
      <div className="solution-container">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1],
        }}
        viewport={{ once: true, margin: "-80px" }}
        className="problem-title"
      >
        Geyris transforme votre gestion en un système simple et intelligent.
      </motion.h2>

        <p className="solution-subtitle">
          Geyris est un logiciel de gestion de stock et de mouvements, alimenté
          par l’intelligence artificielle, conçu spécialement pour les TPE, PME
          et commerces locaux en Afrique.
        </p>

        <div className="solution-grid">
          <div className="solution-card">
            <h3>Gestion simplifiée</h3>
            <p>
              Enregistrez facilement vos ventes, achats et mouvements sans
              complexité.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18
            }}
            className="solution-card highlight"
          >
          <h3>Intelligence artificielle</h3>
            <p>
              Parlez naturellement à Geyris : “J’ai vendu 2 sacs de riz”, et
              l’IA met à jour votre système automatiquement.
            </p>
          </motion.div>

          <div className="solution-card">
            <h3>Suivi en temps réel</h3>
            <p>
              Consultez votre stock et vos performances à tout moment, sans
              calcul manuel.
            </p>
          </div>

          <div className="solution-card">
            <h3>Alertes intelligentes</h3>
            <p>
              Recevez des recommandations pour éviter les ruptures et optimiser
              vos ventes.
            </p>
          </div>
        </div>

        <div className="solution-footer">
          <p>
            Plus besoin de cahier, de calculs compliqués ou d’outils
            difficiles.
          </p>

          <p className="bold">
            
          </p>

              <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      style={{
        textAlign: "center"
      }}
      className="bold"
    >

          {ctaText.split(" ").map((w, index) => (
            <motion.span
              key={index}
              variants={word}
              style={{     display: "inline-block", marginRight: "8px" }}
            >
              {w}
            </motion.span>

          ))}
</motion.p>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;