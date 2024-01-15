import Contact from "../components/Contactform";


function Contacts() {
  return (
    <div className="ContactMeClass" id="ContactMe" >
      <h2 className="title">
        Contact Me
      </h2>
      <nav id="contactme-nav">
        <a href="tel:678-472-2265">
          678-472-2265
        </a>
        <a href="josephokivie@hotmail.com">
          josephokivie@hotmail.com
        </a>
        <a href="https://github.com/Joeokivie" >
          GitHub
        </a>
      </nav>
    </div>
  );
}

export default Contacts;