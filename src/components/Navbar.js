import { Link } from "react-router-dom";

const navmenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
        name: "Categories", sub: [
            { name: "Learning By Reading", path: "/readingexercises" },
            { name: "Language Exchange Reading", path: "/exchangereading" }
        ]
    }
]

const Navbar = () => {
    return (
        <header id="header" class="header d-flex align-items-center sticky-top">
            <div class="container position-relative d-flex align-items-center justify-content-between">
                <nav id="navmenu" class="navmenu">
                    <ul>
                        {navmenu.map(item => {
                            if (item.path) {
                                return (<li><Link to={item.path}>{item.name}</Link></li>)
                            } else {
                                return (
                                    <li class="dropdown"><a href="#"><span>{item.name}</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            {item.sub?.map(i => {
                                                return (<li><Link to={i.path}>{i.name}</Link></li>)
                                            })}
                                        </ul>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <div class="header-social-links">
                    <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        </header >
    )
}
export default Navbar;