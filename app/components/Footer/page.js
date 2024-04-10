'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../Icon/pages';
import '../../styles/footer.css';

const icons = [
  { icon: 'medium-blog', link: 'https://medium.com/boca-code' },
  { icon: 'youtube', link: 'https://www.youtube.com/@BocaCode' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/school/boca-code/' },
  { icon: 'facebook', link: 'https://www.facebook.com/bocacode/' },
  { icon: 'instagram', link: 'https://www.instagram.com/boca.code/' },
  { icon: 'x', link: 'https://twitter.com/bocacode' },
  { icon: 'github', link: 'https://github.com/bocacode' },
];
// const icons = ["medium-blog", "youtube", "linkedin"]

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-first-section maxwidth-1366 py-10 m-auto justify-beetwen align-items-center">
          <Link href="/">
            <Image
              src="/images/bocacode.png"
              width={200}
              height={64}
              alt="bocacode"
              style={{
                display: 'flex',
                verticalAlign: 'center',
                height: 'auto',
              }}
            />
          </Link>

          <ul className="icon-list ">
            {icons.map((item, index) => {
              return (
                <li className="icon-item" key={index}>
                  <Link style={{ padding: '0 0 8px 0' }} href={item.link}>
                    <Icon
                      icon={item.icon}
                      width="24"
                      style={{ margin: '0 0 0 0' }}
                      className=""
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row fs-12 footer-second-section maxwidth-1366 py-10 m-auto justify-beetwen align-items-center">
          <p>© 2024 Boca Code. All rights reserved.</p>

          <div className="row" style={{ gap: '0 20px' }}>
            <Link href="/terms-and-conditions">Terms & Conditions </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
