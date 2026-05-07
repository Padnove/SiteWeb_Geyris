// Pricing.jsx
import "../styles/Home.css";

const plans = [
  {
    name: "Starter",
    price: "3 000 FCFA",
    description: "Parfait pour démarrer",
    features: [
      "Gestion basique",
      "Facturation simple",
      "Support limité"
    ],
    highlight: false,
    cta: "Commencer"
  },
  {
    name: "Pro",
    price: "5 000 FCFA",
    description: "Pour les entreprises en croissance",
    features: [
      "Gestion avancée",
      "Facturation + stock",
      "Rapports détaillés",
      "Support prioritaire"
    ],
    highlight: true,
    cta: "Choisir Pro"
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    description: "Solution complète",
    features: [
      "Toutes les fonctionnalités",
      "Multi-utilisateurs",
      "Support dédié",
      "Personnalisation"
    ],
    highlight: false,
    cta: "Contact"
  }
];

export default function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Nos tarifs</h2>

      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card ${plan.highlight ? "card-highlight" : ""}`}
          >
            {plan.highlight && <div className="badge">Populaire</div>}

            <h3>{plan.name}</h3>
            <p className="desc">{plan.description}</p>

            <div className="price">{plan.price}</div>

            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button className="btn">{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}