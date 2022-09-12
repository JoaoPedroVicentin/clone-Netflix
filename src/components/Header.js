import React from "react";
import './Header.css'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';

export default ({black}) => {


    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix"/>
                </a>
            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
                <div className="nav-list">
                    <a href="/">
                        <p>Início</p>
                    </a>
                    <a href="/">
                        <p>Séries</p>
                    </a>
                    <a href="/">
                        <p>Filmes</p>
                    </a>
                    <a href="/">
                        <p>Bombando</p>
                    </a>
                    <a href="/">
                        <p>Minha lista</p>
                    </a>
                </div>
            </div>
            <div className="header--user">
                <a className="icon" href="/">
                    <SearchIcon style={{fontSize: 27}}/>
                </a>
                <a className="infantil" href="/">
                    <p>Infantil</p>
                </a>
                <a className="icon" href="/">
                    <NotificationsActiveIcon style={{fontSize: 27}}/>
                </a>
                <a className="icon" href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario"/>
                </a>
            </div>
        </header>
    )
}