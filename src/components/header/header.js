import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="blue" variant="blue" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/" style={{"color":'white'}}>
                    <FontAwesomeIcon icon ={faVideoSlash}/>Lynx
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
