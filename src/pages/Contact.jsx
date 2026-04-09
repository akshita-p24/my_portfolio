function Contact() {
  return (
    <div className="contact-section"> 
      <h1 className="contact-heading">Contact Me</h1>             {/* outer wrapper */}
      <div className="contact-card">          
        <p>Email: example@gmail.com</p>
        <p>Facebook: <a href="https://facebook.com/dummy" target="_blank" rel="noreferrer"> facebook.com/dummy</a></p>
        <p>Instagram: <a href="https://instagram.com/dummy" target="_blank" rel="noreferrer">instagram.com/dummy</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/dummy" target="_blank" rel="noreferrer">linkedin.com/in/dummy</a></p>
      </div>
    </div>
  );
}

export default Contact;