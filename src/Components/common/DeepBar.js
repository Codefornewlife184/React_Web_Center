/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const DeepBar = () => {
  return (
    <>
        <div className="mobile-nav__wrapper">
	        <div className="mobile-nav__overlay mobile-nav__toggler"></div>

	        <div className="mobile-nav__content">
	            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

	            <div className="logo-box">
	                <a href="index.html" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="logo drivschol"/></a>
	            </div>
	            <div className="mobile-nav__container"></div>

	            <ul className="mobile-nav__contact list-unstyled">
	                <li>
	                    <i className="fa fa-envelope"></i>
	                    <a href="mailto:needhelp@drivschol.com">needhelp@drivschol.com</a>
	                </li>
	                <li>
	                    <i className="fa fa-phone-alt"></i>
	                    <a href="tel:666-888-0000">666 888 0000</a>
	                </li>
	            </ul>
	            <div className="mobile-nav__social">

	                <a href="../index.htm"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
	                <a href="https://twitter.com"><i className="icon-twitter" aria-hidden="true"></i></a>
	                <a href="../index-1.htm"><i className="icon-pinterest" aria-hidden="true"></i></a>
	                <a href="../index-2.htm"><i className="icon-Instagram" aria-hidden="true"></i></a>
	            </div>
	        </div>

	    </div>

	    <div className="search-popup">
	        <div className="search-popup__overlay search-toggler"></div>
	        <div className="search-popup__content">
	            <form role="search" method="get" className="search-popup__form" action="#">
	                <input type="text" id="search" placeholder="Search Here..."/>
	                <button type="submit" aria-label="search submit" className="drivschol-btn drivschol-btn--base2">
	                    <span><i className="icon-search"></i></span>
	                </button>
	            </form>
	        </div>

	    </div>
    </>
  )
}

export default DeepBar