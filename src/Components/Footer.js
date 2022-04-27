import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div>
            <div className="container-flud my-5">
                <footer className="text-center text-white" style={{backgroundColor: 'rgb(33, 37, 41)'}}>
                    <div className="container">
                        <section className="mt-5">                        
                            <div className="row text-center d-flex justify-content-center pt-5">
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to="/" className="text-white">HOME</Link>
                                    </h6>
                                </div>  
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to="/staff" className="text-white">NHÂN VIÊN</Link>
                                    </h6>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to="/department" className="text-white">PHÒNG BAN</Link>
                                    </h6>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to="/salary" className="text-white">LƯƠNG</Link>
                                    </h6>
                                </div>
                            </div>                        
                        </section>       

                        <hr className="my-5" />
                                    
                            <section className="text-center mb-5">
                                <Link to="" className="text-white me-4">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </Link> 
                                <Link to="" className="text-white me-4">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </Link>
                                <Link to="" className="text-white me-4">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </Link> 
                                <Link to="" className="text-white me-4">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </Link> 
                            </section>
                    </div>                    
                </footer>
            </div> 
        </div>
    )
}

export default Footer;