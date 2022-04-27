
import * as React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdCard, faUsersRectangle, faBuildingUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";


function NavbarPage() {
    library.add(faIdCard, faBuildingUser, faMoneyBill, faUsersRectangle);
    const handleActive = () => {
        document.querySelectorAll("nav a").forEach((el) => {
            el.classList.remove("active");
        });
        document.getElementById('staffLink').classList.add('active')
    }
    const handleActive2 = () => {
        document.querySelectorAll("nav a").forEach((el) => {
            el.classList.remove("active");
        });
        document.getElementById('departmentLink').classList.add('active')
    }
    const handleActive3 = () => {
        document.querySelectorAll("nav a").forEach((el) => {
            el.classList.remove("active");
        });
        document.getElementById('salaryLink').classList.add('active')
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container-fluid">
                    <Link to="/">
                        <h1 style={{color: 'white'}}><FontAwesomeIcon icon="fa-solid fa-id-card" /></h1>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={handleActive}>
                                <Link className="nav-link active" aria-current="page" to="/staff" id="staffLink">
                                    <FontAwesomeIcon icon="fa-solid fa-users-rectangle" /> Nhân viên
                                </Link>
                            </li>
                            <li className="nav-item" onClick={handleActive2}>
                                <Link className="nav-link" to="/department" id="departmentLink">
                                    <FontAwesomeIcon icon="fa-solid fa-building-user" /> Phòng ban
                                </Link>
                            </li>
                            <li className="nav-item" onClick={handleActive3}>
                                <Link className="nav-link" to="/salary" id="salaryLink">
                                    <FontAwesomeIcon icon="fa-solid fa-money-bill" /> Bảng lương
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarPage;