import "./Story.css";
import Image from "next/image";
import {
  RiLeafLine,
  RiPlantLine,
  RiServiceBellLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { BsBinoculars } from "react-icons/bs";
import Button from "../../Button";


const Story = () => {
  return (
    <section className="our-story-section" id="our-story">
      <div className="story-container">
        <div className="our-story-wrapper">
          
          <div className="story-gallery">
            <div className="story-main-image">
              <Image
                src="/assets/images/cottage-exterior-dusk.jpeg"
                alt="Corbett Treat Resort - Cottage Exterior at Dusk"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            
            <div className="nature-card">
              <span className="nature-card-icon">
                <RiPlantLine />
              </span>
              <div className="nature-card-content">
                <h6>Nestled in Nature</h6>
                <p>Where luxury meets the untamed wild.</p>
              </div>
            </div>

            
            <div className="story-floating-image">
              <Image
                src="/assets/images/cottage-exterior-1.jpeg"
                alt="Resort Cottage Exterior"
                fill
                sizes="(max-width: 768px) 180px, 280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          
          <div className="story-content">
            <span className="section-label">OUR STORY</span>

            <h2 className="story-heading">
              A Hidden Retreat Beside Jim Corbett National Park
            </h2>

            
            <div className="story-divider">
              <span className="divider-line" />
              <span className="divider-icon">
                <RiPlantLine />
              </span>
              <span className="divider-line" />
            </div>

            <div className="story-description">
              <p>
                Corbett Treat Resort, located in the serene Dhela Village and
                sharing a boundary with the renowned Corbett Tiger Reserve,
                offers 24 well-appointed rooms designed for pure comfort.
              </p>
              <p>
                Our resort provides an ideal escape for nature lovers, offering
                stunning opportunities for wildlife sightings and birdwatching
                right from the property. Wake up to the calls of the wild and
                immerse yourself in absolute tranquility.
              </p>
            </div>

            
            <div className="story-features">
              <div className="feature-card">
                <span className="feature-icon">
                  <RiLeafLine />
                </span>
                <h4>Enchanting Location</h4>
                <p>Surrounded by dense forests and natural beauty</p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">
                  <BsBinoculars />
                </span>
                <h4>Wildlife Experiences</h4>
                <p>Close encounters with nature and exotic wildlife</p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">
                  <RiServiceBellLine />
                </span>
                <h4>Warm Hospitality</h4>
                <p>Thoughtful service that makes every stay memorable</p>
              </div>
            </div>

            
            <div className="story-action">
              <Button
                href="#explore"
                variant="primary"
                size="large"
                className="story-cta-btn"
                icon={<RiArrowRightLine />}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
