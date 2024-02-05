import React,{useState} from 'react';


function Home() {
    const [contact,setContactHide] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [messages,setMessages] = useState("");
  function nameHandle(e){
    setName(e.target.value);
  }
  function emailHandle(e){
    setEmail(e.target.value);
  }
  function subjectHandle(e){
    setSubject(e.target.value);
  }
  function messagesHandle(e){
    setMessages(e.target.value);
  }
  const handleContact = () => {
    const mailtoLink = `mailto:${"waiyanminkhaing0690@gmail.com"}?subject=Inquiry%20from%20${encodeURIComponent(name)}%20about%20${encodeURIComponent(subject)}&body=${encodeURIComponent(messages)}`;
    window.open(mailtoLink, '_blank');
  };
  const handleHide = (e) =>{
    setContactHide(!contact);
    if(contact===false){
      e.target.innerText = "Close";
        }else{
          e.target.innerText = "Contact Me"
    }
  }
  return (
    <div className="portfolio">
      {/* nav */}
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid flex-nowrap">
          <a className="navbar-brand" href="#home">
            <h1>Portfolio</h1>
          </a>
          <ul className=" d-flex flex-wrap d-none d-md-flex justify-content-evenly align-items-center mt-2 gap-5 fs-5 me-5">
            <li className="bottomborder">
              <a className="text-decoration-none text-white fs-5" href="#home">
                Home
              </a>
            </li>
            <li className="bottomborder">
              <a
                className="text-decoration-none text-white fs-5"
                href="#project"
              >
                Project
              </a>
            </li>
            <li className="bottomborder">
              <a className="text-decoration-none text-white fs-5" href="#about">
                About
              </a>
            </li>
            <li className="bottomborder">
              <a
                className="text-decoration-none text-white fs-5"
                href="#contact"
                onClick={handleHide}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler d-flex d-md-none "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                My Portfolio
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" onClick={handleHide}>
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#skill">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#about">
                        Send Email
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#member">
                        members
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/*home*/}
      <section style={{ marginTop: "40px" }} id="home">
        <div className="container bg-light rounded-2">
          <div className="row min-vh-100 d-flex justify-content-center  align-content-center align-content-center m-auto p-5">
            <div className="col-md-5 m-auto d-flex justify-content-center align-items-center ">
              <img
                style={{ width: "80%" }}
                className="rounded-circle shadow-sm"
                src="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.15752-9/420280950_2105569953123347_461180833702926352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=sz_HQrWxL88AX9YZm72&_nc_ht=scontent-nrt1-2.xx&oh=03_AdRySXwByfWXEVZVF-QNabnwFvdAkWhAjBtUFrWARPNo6g&oe=65E6B0C9"
                alt="user"
              />
            </div>
            <div className=" text-md-start text-center  offset-2 mt-5 mt-md-0 col-md-5 order-md-first m-auto flex-nowrap ">
              <p>Hello,</p>
              <h4>I'm Wai Yan Min Khaing</h4>
              <h1 className="text-danger">Web Developer</h1>
              <br />
              <br />
              <p>
                I did my best to create this portfolio on my own but I do know I
                am still lacking a lot.So,I would like to join an internship and
                hond my skills and want to know different kinds of people to
                exchange with their different views and knowledge.
              </p>
              <br />
              <a href="https://drive.google.com/file/d/1--utqIXYsjCAs9Vi9QYaRW5PckPggKC3/view?usp=drivesdk" className=" btn btn-danger">My CV Form</a>
            </div>
          </div>
        </div>
      </section>
      {/*about*/}
      <div id="about" className="container text-center mt-3 mb-3">
        <h1>About Me</h1>
      </div>
      <section>
        <div className="container">
          <div style={{ minHeight: "70vh" }} className="row m-auto p-5 mt-md-5">
            <div className="col-md-6 text-start mb-3">
              <h2 className="fs-3">Freelancer</h2>
              <br />
              <p>
                I am still looking for an internship in order to enhance my
                ability of coding skills and want to meet with many different
                kinds of people. So,for that even if I have a chance to meet the
                requirement for your project please let me know.I will do with
                my best of ability that I can offer.
              </p>
              <div className="row mt-5">
                <div className="col-sm-4 text-center ">
                  <h1 className=" fw-bolder ">10+</h1>
                  <h6>Project Completed</h6>
                </div>
                <div className="col-sm-4 text-center ">
                  <h1 className=" fw-bolder ">4+</h1>
                  <h6>Happy Clients</h6>
                </div>
                <div className="col-sm-4 text-center ">
                  <h1 className=" fw-bolder ">1+</h1>
                  <h6>Positive Reviews</h6>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                <div>
                  <a
                    href="mailto:waiyanminkhaing0690@gmail.com?subject=Hi&body=How are you?"
                    className="btn btn-danger"
                  >
                    Send Email
                  </a>
                </div>
                <div className="d-flex gap-3 ">
                  <a href="https://www.facebook.com/profile.php?id=61556026926013">
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    style={{ color: "aqua" }}
                    href="https://twitter.com/MFukato"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="mailto:waiyanminkhaing0690@gmail.com?subject=Subject%20Here&body=Body%20Text%20Here">
                    <i className="bx bxl-gmail text-danger"></i>
                  </a>
                  <a
                    style={{ color: "blueviolet" }}
                    href="https://discord.com/channels/@me"
                  >
                    <i className="bx bxl-discord-alt "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className=" offset-md-1 col-md-5 col-12 mt-3">
              <div>
                <h6>HTML</h6>
                <div
                  style={{ height: "10px" }}
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <br />
              <div>
                <h6>CSS</h6>
                <div
                  style={{ height: "10px" }}
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <br />
              <div>
                <h6>JAVA SCRIPT</h6>
                <div
                  style={{ height: "10px" }}
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <br />
              <div>
                <h6>BOOTSTRAP</h6>
                <div
                  style={{ height: "10px" }}
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <br />
              <div>
                <h6>REACT</h6>
                <div
                  style={{ height: "10px" }}
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skill */}
      <div id="skill">
        <h1 className="text-center">What I Do?</h1>
      </div>
      <section>
        <div className="container">
          <div className="row p-3 gap-4 d-flex justify-content-center text-center mt-3 mb-4">
            <div className="col-md-3 bg-light rounded-1">
              <h1>
                <i className="bx bx-code-alt mt-5 text-danger"></i>
              </h1>
              <h5>Web Development</h5>
              <br />
              <p>
                I am still doing my best to create new contents and interfaces
                to make users enjoy and don't waste much time cuz of loading and
                error.
              </p>
            </div>
            <div className="col-md-3 bg-light rounded-1">
              <h1>
                <i className="bx bxs-bulb mt-5 text-danger"></i>
              </h1>
              <h5>Creative Idea</h5>
              <br />
              <p>
                I try to surf in browser for new ideas or from p-interest. Since
                IT is developing days by days bcoz of many intelligent people
                are leading the way for brighter futures.So,I have to approach
                to their ideas if it is necessary.
              </p>
            </div>
            <div className="col-md-3 bg-light rounded-1">
              <h1>
                <i className="bx bxs-image mt-5 text-danger"></i>
              </h1>
              <h5>Web Designs</h5>
              <br />
              <p>I can pretty handle well like normal usages.</p>
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      <div className="mt-4">
        <h1 id="project" className="text-center">
          FEATURED PROJECTS
        </h1>
      </div>
      <section>
        <div className="container">
          <div className="row d-flex justify-content-center p-5 gap-5 bg-light mb-3 rounded-4 ">
            <div className="col-md-5">
              <div
                style={{ width: "100%" }}
                className="py-md-4 py-2 bg-black rounded-5 m-auto"
              >
                <a
                  className="d-flex justify-content-center align-items-center "
                  href="/portfolio/#todolist"
                >
                  <img
                    style={{ width: "70%" }}
                    className="rounded-5 projectHover"
                    src="https://th.bing.com/th/id/OIP.sl7nYjNIfPCoDuKqmWVi9gHaFj?rs=1&pid=ImgDetMain"
                    alt="project"
                  />
                </a>
              </div>
              <div>
                <h4 className="mt-3 fw-bold">TO DO LISTS</h4>
                <a className=" text-decoration-none" href="/portfolio/#todolist">
                  <h6 className="d-flex align-items-center text-danger text-start">
                    Show More<i className="bx bx-right-arrow-alt mt-2"></i>
                  </h6>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div
                style={{ width: "100%" }}
                className="py-md-4 py-2 bg-black rounded-5 m-auto"
              >
                <a
                  className="d-flex justify-content-center align-items-center"
                  href=""
                >
                  <img
                    style={{ width: "78%" }}
                    className="rounded-5 projectHover"
                    src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX14992232.jpg"
                    alt="project"
                  />
                </a>
              </div>
              <div>
                <h4 className="mt-3 fw-bold">Image Designs</h4>
                <a className=" text-decoration-none" href="">
                  <h6 className="d-flex align-items-center text-danger text-start">
                    Show More<i className="bx bx-right-arrow-alt mt-2"></i>
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team members */}
      <div>
        <h1 id="member" className="text-center mb-3 fw-bolder">
          Our team members
        </h1>
      </div>
      <section>
        <div className="container">
          <div className="row bg-light p-md-5 mb-5 rounded-4 p-0">
            <div className="d-flex justify-content-md-start justify-content-center align-items-center gap-5">
              <img
                className="rounded-circle"
                style={{ width: "120px" }}
                src="https://scontent-hkg1-2.xx.fbcdn.net/v/t1.6435-9/70807399_607678026430118_1459141209543933952_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=jxG7eZDEolwAX9crYTk&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBklioxQPLhGbOSN630d_8SvXV8WuGcUw7Gxktr4nHcJw&oe=65DAADC5"
                alt="member"
              />
              <div className="col-md-12">
                <h4>Aung Aung Oo</h4>
                <h4 style={{ color: "grey" }}>
                  Senior Mobile Frontend Developer
                </h4>
              </div>
            </div>
            <div className="mt-5">
              <h5 style={{ color: "grey" }}>
                He is still at junior level but still trying hard to get over it.
              </h5>
              <br />
              <div className="d-flex">
                <h5 className="text-danger">
                  <i className="bx bxs-star"></i>
                </h5>
                <h5 className="text-danger">
                  <i className="bx bxs-star"></i>
                </h5>
                <h5 className="text-danger">
                  <i className="bx bxs-star"></i>
                </h5>
                <h5>
                  <i className="bx bx-star text-danger"></i>
                </h5>
                <h5>
                  <i className="bx bx-star text-danger"></i>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* notice */}
      <section>
        <div
          style={{ backgroundColor: "slategray" }}
          className="container-fluid p-5 text-center mb-3"
        >
          <h5 className="text-white">Do you have any Projects ?</h5>
          <h1>I'm Avaliable for Internship</h1>
          <a href="#contact" type="button" onClick={handleHide} className="btn btn-danger">Contact Me</a>
        </div>
      </section>
      {/* contact */}
      <div>
        <h1 id="contact" className={contact?" text-center ":" d-none "}>Contact Me</h1>
      </div>
      <section className={contact? "displayed" :" d-none "}>
        <div className="container">
          <div className="row mt-3 mb-3 p-0 p-md-5 bg-light rounded-5 m-auto text-wrap">
            <div className="col-md-4 text-wrap">
              <div className="d-flex justify-content-start align-items-center gap-3">
                <h1>
                  <i className="bx bxs-phone text-danger"></i>
                </h1>
                <div>
                  <h5 className="fw-bold">Phone</h5>
                  <h6 style={{ color: "grey" }}>09-760472034/09-969426163</h6>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center gap-3 text-break">
                <h1>
                  <i className="bx bxs-envelope text-danger"></i>
                </h1>
                <div className="mt-2">
                  <h5 className="fw-bold">Mail</h5>
                  <h6 style={{ color: "grey" }}>
                    meikakifukatocctlt@gmail.com
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center gap-3">
                <h1>
                  <i className="bx bx-map text-danger"></i>
                </h1>
                <div className="mt-2">
                  <h5 className="fw-bold">Location</h5>
                  <h6 style={{ color: "grey" }}>
                    South-Okkalapa,Township. Yangon
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-7 offset-1 col-8 mt-4 mt-md-1 mt-lg-0">
              <div className="row">
                <div className="col-lg-6" >
                  <input
                  value={name}
                  onChange={nameHandle}
                    type="text"
                    className=" form-control form-control-lg fs-6 border-0 "
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-lg-6 mt-3 mt-md-3 mt-lg-0">
                  <input
                  value={email}
                  onChange={emailHandle}
                    type="email"
                    className=" form-control form-control-lg fs-6 border-0 "
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mt-3">
                  <input
                    value={subject}
                    onChange={subjectHandle}
                    type="text"
                    className=" form-control form-control-lg fs-6 border-0 "
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mt-3 mb-3">
                  <textarea value={messages} onChange={messagesHandle} rows={5} cols={30} placeholder="Your Message" className=" form-control  form-control-lg fs-6"/>
                </div>
              </div>
              <div className="row mb-2">
                <div>
                <button onClick={handleContact} className="btn btn-danger">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className={contact?"row":"d-none"}>
          <h4 className="p-3 bg-danger text-white text-center fs-6">Wai Yan Min Khaing's Portfolio || 2024/1/26</h4>
        </div>
      </footer>
    </div>
  );
}

export default Home;
