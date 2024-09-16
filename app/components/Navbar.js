'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  // Update active link based on current scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 80) {
          currentSection = section;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#05173F] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold underline text-[#F7D756]">Fintex</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className={`${activeLink === '' ? 'text-[#F7D756] underline' : 'hover:text-[#F7D756] hover:underline'}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#services" className={`${activeLink === 'services' ? 'text-[#F7D756] underline' : 'hover:text-[#F7D756] hover:underline'}`}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#about" className={`${activeLink === 'about' ? 'text-[#F7D756] underline' : 'hover:text-[#F7D756] hover:underline'}`}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
