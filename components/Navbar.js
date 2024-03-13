'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'

import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

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
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

    return (

        <div>
            <div className="topbar-area fix hidden-xs">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-10 col-sm-9">
                            <div className="topbar-left">
                                <ul>
                                    <li><a href="#"><FaLocationDot />  House-4,2/3 avenew,Dubai</a></li>
                                    <li className="hidden-sm"><a href="#"><FaRegClock /> Mon - Fri: 10:00 - 18:00</a></li>
                                    <li><a href="#"><FaEnvelope /> info@tionscall3.com</a></li>
                                    <li><a href="#"><FaPhone /> +2112-6546654</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <div className="quote-button">
                                <a href="contact.html" className="quote-btn" title="Quick view" data-toggle="modal" data-target="#quoteModal">Get a quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={click ? 'main-container' : ''} onClick={() => Close()} />
            <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                <div className="container  nav-container">
                    <Link href="/">
                        <div className=" nav-logo">
                            <Image className="" src="/img/logo.png" alt="" width={200}
                                height={40} />
                        </div>
                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={`nav-item ${pathname === '/' && 'active'}`}>
                            <Link href="/" className={`nav-links ${click && 'active'}`}
                                onClick={click ? handleClick : null}>
                                {t('menu.home')}
                            </Link>
                        </li>
                        <li className={`nav-item ${pathname === '/about' && 'active'}`}>
                            <Link href="/about" className={`nav-links ${click && 'active'}`}
                                onClick={click ? handleClick : null}>
                                {t('menu.about')}
                            </Link>
                        </li>

                        <li className={`nav-item ${pathname === '/services' && 'active'}`}>
                            <Link href="/services" className={`nav-links ${click && 'active'}`}
                                onClick={click ? handleClick : null}>
                                {t('menu.service')}
                            </Link>
                        </li>

                        <li className={`nav-item ${pathname === '/contact' && 'active'}`}>
                            <Link href="/contact" className={`nav-links ${click && 'active'}`}
                                onClick={click ? handleClick : null}>
                                {t('menu.contact_us')}
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