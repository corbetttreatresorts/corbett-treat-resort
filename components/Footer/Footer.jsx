import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiMapPinLine,
  RiPhoneLine,
  RiMailSendLine,
  RiYoutubeLine,
} from "react-icons/ri";
import {
  NAV_LINKS,
  RESORT_ADDRESS,
  CONTACT_PHONES,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  BRAND_DESCRIPTION,
} from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo">
              <Image
                src="/assets/images/resort-logo.png"
                alt="Corbett Treat Resort"
                width={200}
                height={75}
                style={{ width: "auto", height: "auto" }}
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-brand-desc">{BRAND_DESCRIPTION}</p>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((social) => {
                const getSocialIcon = (platform) => {
                  switch (platform) {
                    case "instagram":
                      return <RiInstagramLine />;
                    case "facebook":
                      return <RiFacebookCircleLine />;
                    case "twitter":
                      return <RiTwitterXLine />;
                    case "youtube":
                      return <RiYoutubeLine />;
                    default:
                      return null;
                  }
                };
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.slice(0, 5).map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Experiences</h4>
            <ul className="footer-links">
              {NAV_LINKS.slice(5, 10).map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="footer-contact-item">
              <RiMapPinLine className="contact-icon" />
              <p>{RESORT_ADDRESS}</p>
            </div>
            <div className="footer-contact-item">
              <RiPhoneLine className="contact-icon" />
              <div>
                {CONTACT_PHONES.map((phone, idx) => (
                  <p key={idx}>
                    <a href={phone.href}>{phone.label}</a>
                  </p>
                ))}
              </div>
            </div>
            <div className="footer-contact-item">
              <RiMailSendLine className="contact-icon" />
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-brand">
          Corbett
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Corbett Treat Resort. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
