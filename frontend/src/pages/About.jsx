import '../styles/pages/About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About NFTree</h1>
          <p className="about-subtitle">
            The world's first & largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              At NFTree, we're revolutionizing the way digital art and collectibles are bought, sold, and discovered. 
              Our platform connects artists, collectors, and enthusiasts in a vibrant ecosystem built on blockchain technology.
            </p>
            <p className="section-text">
              We believe in empowering creators and making digital ownership accessible to everyone. Through our 
              innovative marketplace, we're shaping the future of digital art and collectibles.
            </p>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="about-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎨</div>
              <h3 className="stat-title">32K+ Artworks</h3>
              <p className="stat-description">Curated collection of unique digital art</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <h3 className="stat-title">20K+ Artists</h3>
              <p className="stat-description">Talented creators from around the world</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <h3 className="stat-title">10K+ Auctions</h3>
              <p className="stat-description">Active auctions happening daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">Innovation</h3>
              <p className="value-text">
                We continuously push the boundaries of what's possible in the NFT space, 
                introducing new features and technologies.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Community</h3>
              <p className="value-text">
                Our community is at the heart of everything we do. We foster connections 
                between artists, collectors, and enthusiasts.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Transparency</h3>
              <p className="value-text">
                Built on blockchain technology, every transaction is transparent, secure, 
                and verifiable on the public ledger.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

