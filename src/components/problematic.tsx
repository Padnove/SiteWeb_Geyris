import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";


const ProblematiqueSection: React.FC = () => {
  return (
    <section id="problematic" className="problem-section">
      <div className="problem-container">

      <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{   duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true }}
      className="problem-title fade"
      >
        Gérer son commerce ne devrait pas être un casse-tête.
      </motion.h2>

        <p className="problem-subtitle fade">
          Pourtant aujourd’hui, la majorité des commerçants utilisent encore un
          cahier, leur mémoire ou des outils peu adaptés pour suivre leurs activités.
        </p>

        <div className="problem-grid">
          <div className="problem-card">
            <h3>Le constat</h3>
            <ul>
              <p>- Des erreurs dans les calculs</p>
              <p>- Des produits qui disparaissent sans explication</p>
              <p>- Des ruptures de stock imprévues</p>
              <p>- Une mauvaise visibilité sur les ventes et les bénéfices</p>
              <p>- De l’argent perdu sans explication claire</p>
            </ul>
          </div>

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 70,
    damping: 18
  }}
  className="problem-card highlight"
>
  <h3>Le problème</h3>
    <p>
      Les solutions existantes sont souvent trop complexes, trop chères ou pas adaptées à la réalité locale.
    </p>
</motion.div>

          <div className="problem-card">
            <h3>Le besoin</h3>
            <p>
              Les commerçants ont besoin d’un outil <strong>simple</strong>,{" "}
              <strong>fiable</strong> et conçu pour leur quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblematiqueSection;