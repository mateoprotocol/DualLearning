import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();

    const navmenu = [
        { name: t('Home.title'), path: "#/" },
        { name: t('About.title'), path: "#/about" },
        {
            name: t('Exercises'), sub: [
                { name: "Learning By Reading", path: "#/readingexercises" },
                { name: "Language Exchange Reading", path: "#/exchangereading" }
            ]
        }
    ]

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="container justify-content-between">
                <Navbar.Brand href={navmenu[0].path}>Dual Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navmenu">
                        {navmenu.map(item => {
                            if (item.path) {
                                return (<Nav.Link href={item.path}>{item.name}</Nav.Link>)
                            } else {
                                return (
                                    <NavDropdown className="dropdown" title={item.name}>
                                        {item.sub?.map(i => {
                                            return (<NavDropdown.Item href={i.path}>{i.name}</NavDropdown.Item>)
                                        })}
                                    </NavDropdown>
                                )
                            }
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation;