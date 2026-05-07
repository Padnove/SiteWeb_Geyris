import React from "react";
import { motion } from "framer-motion";


const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="how">
      <h2>Comment ça marche ?</h2>

      <div className="steps">

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 18
                    }}
                    className="step"
                  >
                  
          <h3>1. Enregistrez votre activité</h3>
          <p>Ajoutez vos produits, ventes et achats en quelques secondes.</p>
        
                  </motion.div>


                          <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 18
                    }}
                    className="step"
                  >
                    
          <h3>2. Interagissez avec votre assistant</h3>
          <p>Donnez des instructions simples comme :
          “Ajoute 10 boissons” ou “Quel est mon stock ?”</p>
        
                  </motion.div>



                          <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 18
                    }}
                    className="step"
                  >
                    
          <h3>3. Suivez et pilotez votre activité</h3>
          <p>Consultez vos stocks, vos ventes, recevez des recommandations et prenez de meilleures décisions</p>
                  </motion.div>




        
      </div>
      <br/>
      <br/>
      <p style={{color: "black"}}>Simple, rapide et adapté à votre quotidien.</p>
    </section>
  );
};

export default HowItWorks;