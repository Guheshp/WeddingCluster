import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar bg-base-100 px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="navbar-start flex items-center">
                <img className='w-20 h-20 p-1' src="/WC_LOGO.png" alt="BrandLogo" />
                <a className="text-xl gap-0 flex items-center">
                    <p className='text-lg sm:text-2xl pe-2'>Wedding Cluster</p>
                </a>
            </div>
            <div className="navbar-center hidden md:flex space-x-2">
                <Link to={`/`}>
                    <NavItem label="Home" isActive={location.pathname === '/'} />
                </Link>
                <Link to={`/services`}>
                    <NavItem label="Services" isActive={location.pathname === '/services'} />
                </Link>
                <Link to={`/portfolio`}>
                    <NavItem label="Portfolio" isActive={location.pathname === '/portfolio'} />
                </Link>
                <Link to={`/blog`}>
                    <NavItem label="Blog" isActive={location.pathname === '/blog'} />
                </Link>
                <Link to={`/about-us`}>
                    <NavItem label="About Us" isActive={location.pathname === '/about-us'} />
                </Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <Link to={`/contact-us`}>
                    <NavItem label="Contact Us" isPrimary isActive={location.pathname === '/contact-us'} />
                </Link>
            </div>
            <div className="navbar-end md:hidden flex items-center">
                <button className="text-2xl p-2" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className='absolute top-16'>
                    {isMobileMenuOpen && (
                        <div className="navbar-center flex md:hidden flex-col space-y-2 p-2 bg-base-100">
                            <Link to="/">
                                <NavItem label="Home" isActive={location.pathname === '/'} />
                            </Link>
                            <Link to="/services">
                                <NavItem label="Services" isActive={location.pathname === '/services'} />
                            </Link>
                            <Link to="/portfolio">
                                <NavItem label="Portfolio" isActive={location.pathname === '/portfolio'} />
                            </Link>
                            <Link to="/blog">
                                <NavItem label="Blog" isActive={location.pathname === '/blog'} />
                            </Link>
                            <Link to="/about-us">
                                <NavItem label="About Us" isActive={location.pathname === '/about-us'} />
                            </Link>
                            <Link to="/contact-us">
                                <NavItem label="Contact Us" isPrimary isActive={location.pathname === '/contact-us'} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ label, isPrimary, isActive }) => {
    const buttonClass = `px-[5px] py-[10px] rounded-xl transition-all duration-600 group hover:bg-red-200 ${isPrimary ? 'bg-red-200 border-red-700' : ''} ${isActive ? 'bg-red-200 text-red-700 border-red-700' : 'border-transparent hover:border-red-700'}`;
    const linkClass = `rounded-lg p-2 px-4 text-md transition-all duration-300 group-hover:bg-red-200 group-hover:text-red-700 hover:bg-red-200 hover:text-red-700 border ${isActive ? 'bg-red-200 text-red-700 border-red-700' : 'border-transparent hover:border-red-700'}`;

    return (
        <div role='button' className={buttonClass}>
            <Link to={label === "Home" ? "/" : label.toLowerCase().replace(" ", "-")}>
                <span className={linkClass}>{label}</span>
            </Link>
        </div>
    );
};

export default Navbar;
