import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();

    const navmenu = [
        { id: 1, name: t('Home.title'), path: "#/" },
        { id: 2, name: t('About.title'), path: "#/about" },
        { id: 3, name: t('ChatSimulation.title'), path: '#/chat-simulation'},
        {
            id: 4,
            name: t('Exercises'), sub: [
                { id: 1, name: "Learning By Reading", path: "#/readingexercises" },
                { id: 2, name: "Language Exchange Reading", path: "#/exchangereading" }
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
                                return (<Nav.Link key={item.id} href={item.path}>{item.name}</Nav.Link>)
                            } else {
                                return (
                                    <NavDropdown key={item.id} className="dropdown" title={item.name}>
                                        {item.sub?.map(i => {
                                            return (<NavDropdown.Item key={i.id} href={i.path}>{i.name}</NavDropdown.Item>)
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