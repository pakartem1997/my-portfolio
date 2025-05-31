import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router";
import { MdQuestionMark } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import styles from "./Header.module.scss";
import { clsx } from "clsx";
import { ROUTES } from "@/constants/routes";
import { DropdownTheme } from "../DropdownTheme";
import { LanguageSwitch } from "../LanguageSwitch";


export const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar className="bg-body-secondary">
        <Container>
          <Navbar.Brand>
            <NavLink className={clsx("nav-link", styles.logo)} to={ROUTES.HOME}>
              Артем Пак
            </NavLink>
          </Navbar.Brand>

          <Nav className={clsx("mx-auto align-items-center", styles.navbarNav)}>
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) =>
                isActive
                  ? clsx(styles.navLink, styles.active)
                  : clsx(styles.navLink)
              }
            >
              Главная
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? clsx(styles.navLink, styles.active)
                  : clsx(styles.navLink)
              }
              to={ROUTES.PROJECT}
            >
              Проекты
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? clsx(styles.navLink, styles.active)
                  : clsx(styles.navLink)
              }
              to={ROUTES.SITESTACK}
            >
              О сайте
            </NavLink>

            <span className={styles.slider}></span>
          </Nav>

          <div className="d-flex align-items-center gap-1">
            <LanguageDropdown />
            <DropdownTheme/>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
