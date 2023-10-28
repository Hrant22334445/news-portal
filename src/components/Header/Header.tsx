import React from 'react';
import styles from './header.module.css'
import Logo from '../Logo';

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
                <Logo />
            </nav>
        </header>
    )
}

export default Header;