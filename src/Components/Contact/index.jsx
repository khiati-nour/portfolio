import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
    
      <iframe title="My location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40166.55499022335!2d3.5880606647110884!3d51.0085797662868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c36d8ff5d3ff61%3A0x40099ab2f4d5c80!2sLaethem-Saint-Martin!5e0!3m2!1sfr!2sbe!4v1618563982570!5m2!1sfr!2sbe"
       
        loading="lazy"></iframe>
      <h4>Phone</h4>
      <p>04 66 64 43 14</p>

      <h4>Email</h4>
      <p>khiatihouda@gmail.com</p>

      <h4>Address</h4>
      <p>Gent, Belguim</p>
    </div>
  );
};

export default Contact;