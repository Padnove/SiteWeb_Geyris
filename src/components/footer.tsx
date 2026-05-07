

function Footer() {
  return (
    <footer>
      <section className="pre_footer">
        <img style={{borderRadius: "0.5em"}} src="/1000608225.jpg" width={"120px"} height={"auto"}/>
        <div className="contact">
          <h4>Contact</h4>
          <a href="tel:+22879965258">(+228)79965258 / 92113189</a>
          <a className="support" href="mailto:support@geyris.com">support@geyris.com</a>
        </div>
        <div className="footer_logo">
          <p>Développé par</p>
          <img style={{borderRadius: "99999px"}} alt="Padnove Logo" width="120px" height="140px" src="/1000832303-removebg-preview.png"/>
        </div>
      </section>
        
      <div className="af_footer">
        <p style={{color: "black"}}>&copy; 2026 Geyris - Stock Management Solutions</p>
        
      </div>
      
    </footer>
  );
}

export default Footer;