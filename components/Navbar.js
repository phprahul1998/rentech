'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'

import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

    const { t, i18n } = useTranslation('en', { useSuspense: false });

    const handleLangChange = (event) => i18n.changeLanguage(event.target.value)
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

                        <li className="nav-item">
                            <select className="p-2" onChange={handleLangChange}>
                                <option value='en' selected>EN</option>
                                <option value='fr'>DE</option>
                            </select>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? 'FaTimes' : 'FaBars'}>
                            {click ? <FaTimes /> : <FaBars />}
                        </i>
                    </div>
                </div>
            </nav>
        </div>
    )
}