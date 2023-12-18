import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon/pages";
import '../../styles/footer.css'

const icons = ["medium-blog", "youtube", "linkedin", "facebook", "instagram", "x", "github"]
// const icons = ["medium-blog", "youtube", "linkedin"]

const Footer = () => {
    return (
        <>
            <footer className="footer-container">

                <div className="row footer-first-section">

                    <Link href="#home">
                        <Image
                            src="/images/bocacode.png"
                            width={200}
                            height={64}
                            alt="bocacode"
                            style={{
                                display: "flex",
                                verticalAlign: "center"
                            }}
                        />
                    </Link>


                    <ul className="navbar-list" >
                        {icons.map((item, index) => {
                            return (
                                <li className="navbar-item">
                                    <Link style={{ padding: "0 0 8px 0" }} href={""}>
                                        <Icon icon={item} width="24" style={{ margin: "0 0 0 0" }} />
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
                <div className="row footer-second-section">
                    <p>© 2023 Boca Code. All rights reserved.</p>

                    <div className="row" style={{ gap: "0 20px" }}>
                        <Link href="#home">Terms & Conditions </Link>
                        <Link href="#home">Privacy Policy</Link>
                    </div>

                </div>

            </footer>

        </>
    );
};

export default Footer;