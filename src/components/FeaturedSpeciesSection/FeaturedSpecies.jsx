import React from 'react';
import './FeaturedSpecies.css'; // Import the styles

// FeaturedSpecies component
const FeaturedSpecies = () => {
  return (
    <section className="featured-species">
      <h2 className="title">Featured Species</h2>

      <div className="species-container">
        <div className="species-card">
          <img src="/tiger.jpg" alt="Tiger" className="species-image" />
          <div className="species-info">
            <h3>Tiger</h3>
            <p className="conservation-status">Endangered</p>
            <p className="species-description">
              The tiger is a large wild cat known for its strength and agility. Found in forests across Asia.
            </p>
          </div>
        </div>

        <div className="species-card">
          <img src="/panda.jpg" alt="Panda" className="species-image" />
          <div className="species-info">
            <h3>Panda</h3>
            <p className="conservation-status">Vulnerable</p>
            <p className="species-description">
              The panda is an iconic symbol of wildlife conservation, primarily found in China.
            </p>
          </div>
        </div>

          {/* Lion Species Card */}
          <div className="species-card">
          <img src="/lion.jpg" alt="Lion" className="species-image" />
          <div className="species-info">
            <h3>Lion</h3>
            <p className="conservation-status">Vulnerable</p>
            <p className="species-description">
              The lion is known as the king of the jungle, a powerful predator found in the savannas of Africa.
            </p>
          </div>
        </div>

        {/* Zebra Species Card */}
          <div className="species-card">
            <img src="/zebra.avif" alt="Zebra" className="species-image" />
            <div className="species-info">
              <h3>Zebra</h3>
              <p className="conservation-status">Least Concern</p>
              <p className="species-description">
              Zebras are herbivores with black and white stripes, found in African grasslands and savannas, often in herds.
              </p>
            </div>
          </div>

      </div>

    </section>
  );
};

export default FeaturedSpecies;
