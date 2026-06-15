import "./Events.css";
import Image from "next/image";
import {
  RiHeartsLine,
  RiGobletLine,
  RiMusic2Line,
  RiArrowRightLine,
  RiPlantLine,
} from "react-icons/ri";
import Button from "../Button";
import { WHATSAPP } from "@/constants";

/**
 * Events Section — Social Weddings & Events Component
 *
 * Kya: Ek premium redesigned layout "Social Weddings & Events" ke liye.
 * Kyun: User screenshot me plain layout tha. Humne isko asymmetry design, gold accent,
 *       aur background micro-interactions ke saath revamp kiya hai.
 * Benefit: Visual design client ko wow karega aur conversion rate (WhatsApp lead) badhayega.
 */
export default function Events() {
  const whatsappUrl = `https://wa.me/${WHATSAPP.number}?text=Hello%20Corbett%20Treat%20Resort,%20I%20would%20like%20to%20inquire%20about%20hosting%20a%20wedding/event%20at%20your%20resort.`;

  return (
    <section className="events-section" id="wedding">
      {/* Decorative leaf background pattern */}
      <div className="events-decor-bg" aria-hidden="true" />
      
      <div className="events-container">
        <div className="events-wrapper">
          {/* Video / Gallery Side */}
          <div className="events-media-col">
            <div className="events-video-frame">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                className="events-video"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-wedding-reception-hall-decorations-and-tables-34282-large.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="events-video-badge">
                <span className="badge-icon"><RiHeartsLine /></span>
                <span className="badge-text">Unforgettable Celebrations</span>
              </div>
            </div>
          </div>

          {/* Content Description Side */}
          <div className="events-content-col">
            <span className="section-label">CELEBRATIONS</span>
            
            <h2 className="events-heading">
              Social Weddings and Events
            </h2>

            {/* Decorative Divider */}
            <div className="events-divider">
              <span className="divider-line" />
              <span className="divider-icon">
                <RiPlantLine />
              </span>
              <span className="divider-line" />
            </div>

            <p className="events-intro">
              Celebrate your special day in the heart of nature with the perfect blend of
              elegance and serenity. At Corbett Treat Resort, we create unforgettable
              social weddings surrounded by lush greenery, peaceful ambiance, and
              breathtaking views.
            </p>

            <p className="events-desc">
              Whether it’s an intimate ceremony or a grand celebration, our beautifully
              designed venues, personalized décor, and warm hospitality ensure your
              wedding feels truly magical. From curated menus to seamless arrangements,
              we take care of every detail so you can enjoy precious moments with your
              loved ones and make memories that last forever.
            </p>

            {/* Micro Highlights */}
            {/* <div className="events-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <RiHeartsLine />
                </span>
                <div>
                  <h4>Bespoke Settings</h4>
                  <p>Custom floral designs and forest themes</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">
                  <RiGobletLine />
                </span>
                <div>
                  <h4>Gourmet Catering</h4>
                  <p>Exquisite regional & international menus</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">
                  <RiMusic2Line />
                </span>
                <div>
                  <h4>Entertainment</h4>
                  <p>Cultural shows & live acoustic sets</p>
                </div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="events-action">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="large"
                className="events-cta-btn"
                icon={<RiArrowRightLine />}
              >
                Connect With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
