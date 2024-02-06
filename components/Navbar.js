'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'

import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Navbar() {

    const { t, i18n } = useTranslation('en', { useSuspense: false });

    const [toggleOn, setToggleOn] = useState(false);

    const handleToggle = () => {
        setToggleOn((prevToggle) => !prevToggle);
        const newLang = toggleOn ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (

        <div>
            <div className={click ? 'main-container' : ''} onClick={() => Close()} />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container">
                    <Link href="/">
                        <div className="nav-logo">
                            <Image className="" src="/img/logo.png" alt="" width={200}
                                height={40} />
                        </div>
                    </Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link href="/" className={`nav-links ${click && 'active'}`}
                                onClick={click ? handleClick : null}>
                                {t('menu.home')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className={`nav-links ${click && 'active'}`}
                                onClick={click ? handleClick : null}>
                                {t('menu.about')}
                            </Link>
                        </li>



                    </ul>
                    <div className="langbtn">
                        <input
                            onClick={handleToggle}
                            value={toggleOn}
                            name="toggle"
                            type="checkbox"
                            id="toggle"
                            className="toggleCheckbox"
                        />
                        <label htmlFor="toggle" className="toggleContainer">
                            <div>EN</div>
                            <div>DE</div>
                        </label>
                    </div>
                    <div className="nav-icon" >
                        <div onClick={handleClick}>
                            <i className={click ? 'FaTimes' : 'FaBars'}>
                                {click ? <FaTimes /> : <FaBars />}
                            </i>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}