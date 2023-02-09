import React, {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import plantify_logo from "../../assets/plantify-logo.png";
import styles from "../../components/NavBar/nav_bar.module.scss";

const NavBar = () => {

  const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<section className={styles.header__container}>
			<div className={styles.sect__container}>
				<div className={styles.header__flex}>
					<div className={styles.main__logoContainer}>
						<Link to="/">
							<img
								src={plantify_logo}
								alt="main plantify logo"
								className="plantify__logo"
							/>
						</Link>
					</div>
					<div className={styles.menu__content}>
						<MenuIcon className={styles.menu__icon} onClick={showMenu} />
					</div>
					<nav
						className={active ? `${styles.slider} ${styles.active}` : styles.slider}
					>
						<ul>
							<div className={styles.nav__middle}>
								<div className={styles.close__content}>
									<CloseIcon
										className={styles.close__icon}
										onClick={showMenu}
									/>
								</div>
								<li className={styles.nav__items}>
									<Link className={styles.nav__text} to="/">
										Home
									</Link>
								</li>
								<li className={styles.nav__items}>
									<Link className={styles.nav__text} to="/">
										About
									</Link>
								</li>
								<li className={styles.nav__items}>
									<Link className={styles.nav__text} to="/">
										Features
									</Link>
								</li>
							</div>
							<div className={styles.btn__container}>
								<li className={styles.nav__items}>
									<Link className={`${styles.nav__text} ${styles.nav__break}`} to="/">
										Sign In
									</Link>
								</li>
								<li className={styles.nav__items}>
									<Link to="/">
										<button className={styles.btn__connect}>Get Started</button>
									</Link>
								</li>
							</div>
						</ul>
					</nav>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
