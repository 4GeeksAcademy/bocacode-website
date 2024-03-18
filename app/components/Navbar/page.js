'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/navbar.css';
import Icon from '../Icon/pages';

const listLinks = ['Financing', 'Candidates', 'Alumni', 'Contact'];

const MiniBar = () => {
  return (
    <div className="minibar ">
      <p>
        {'Speak to an Admission Advisor' + ' '}
        <Link href="/contact" style={{ textDecoration: 'underline' }}>
          Schedule a Call
        </Link>
      </p>
    </div>
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <header>
        <nav className="navbar-container">
          <div className="flex align-items-center gap-32">
            <Link href="/">
              <Image
                src="/images/bocacode.png"
                width={124}
                height={40}
                alt="bocacode"
                style={{
                  display: 'flex',
                  verticalAlign: 'center',
                  maxWidth: '100%',
                }}
              />
            </Link>

            <ul className="navbar-list list-none">
              <li
                className="navbar-item dropdown"
                onClick={() => handleItemClick('courses')}
              >
                <Link
                  href="/courses/career/software-engineering"
                  className={`navbar-link dropdown-btn ${
                    activeItem === 'courses' ? 'active' : ''
                  }`}
                >
                  Courses
                </Link>

                <div
                  className="list-style-none bg-zinc dropdown-content rounded-4"
                  onClick={() => handleItemClick('courses')}
                >
                  <Link
                    href="/courses/career/software-engineering"
                    className="dropdown-item rounded-4"
                  >
                    Software Engineering Career Track
                  </Link>
                </div>
              </li>

              {listLinks.map((item, index) => {
                return (
                  <li
                    className="navbar-item"
                    key={index}
                    onClick={() => handleItemClick(item)}
                  >
                    <Link
                      style={{ padding: '0 0 8px 0' }}
                      className={`navbar-link ${
                        activeItem === item ? 'active' : ''
                      }`}
                      href={'/' + item.toLowerCase()}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* NAVBAR MOBILE*/}

          <div className="flex align-items-center ">
            <div className="button-nav">
              <Link href="/contact">Get Started</Link>
            </div>

            <button className="navbar-toogle">
              <Icon icon="navbar-toogle" />
              <ul className="navbar-list-mobile list-none">
                <li className="navbar-item-mobile">
                  <Link
                    href="/courses/career/software-engineering"
                    className="navbar-link-mobile"
                  >
                    Software Engineering Career Track
                  </Link>
                </li>

                {listLinks.map((item, index) => {
                  return (
                    <li className="navbar-item-mobile" key={index}>
                      <Link
                        style={{ padding: '0 0 8px 0' }}
                        className="navbar-link-mobile"
                        href={'/' + item.toLowerCase()}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </button>
          </div>
        </nav>

        <MiniBar />
      </header>
    </>
  );
};

export default Navbar;
