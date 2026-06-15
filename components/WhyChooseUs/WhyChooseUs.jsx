import "./WhyChooseUs.css";
import Image from "next/image";
import { WHY_CHOOSE_US_STATS } from "@/constants";

/**
 * Why Choose Us Section — Static content, Server Component
 *
 * Kya: Ek naya "Why Choose Us" section layout design jisme stats aur brand info hai.
 * Kyun: Screenshot layout ki basis pe brand trust badhane ke liye add kiya gaya.
 * Benefit: Server-side rendering ke sath SEO-friendly aur visually rich section.
 */
export default function WhyChooseUs() {


  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="wcu-container">
        
        {/* Top Section: Content and Image */}
        <div className="wcu-top-grid">
          {/* Left Content */}
          <div className="wcu-content">
            <div className="wcu-header">
              <span className="wcu-subtitle">WHY CHOOSE CORBETT TREAT RESORT</span>
              <span className="wcu-divider-line" />
            </div>

            <h2 className="wcu-heading">
              We're Dedicated To Providing You Unforgettable Experience. Whether You're Here For Business Or Leisure
            </h2>

            <p className="wcu-description">
              At Corbett Treat Resort, we believe your stay should be much more than just accommodation — it should be an experience. From our warm hospitality and thoughtfully designed rooms to our serene location surrounded by nature, every moment here is crafted with care.
            </p>
          </div>

          {/* Right Image */}
          <div className="wcu-image-wrapper">
            <Image
              src="/assets/images/bedroom-suite-1.jpeg"
              alt="Corbett Treat Resort Bedroom Suite"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="wcu-image"
            />
            {/* Elegant Corner Decorative Accents */}
            <div className="wcu-corner-accent top-left" />
            <div className="wcu-corner-accent bottom-right" />
          </div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <div className="wcu-stats-grid">
          {WHY_CHOOSE_US_STATS.map((stat, index) => (
            <div className="wcu-stat-item" key={index}>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
