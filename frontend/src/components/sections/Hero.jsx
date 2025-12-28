import '../../styles/components/sections/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Rare Collections Of Art & NFT's
          </h1>
          <p className="hero-subtitle">
            The world's first & largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
          </p>
          <button className="btn-explore">Explore Now</button>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">32K+</span>
              <span className="stat-label">Artworks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20K+</span>
              <span className="stat-label">Artists</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Auctions</span>
            </div>
          </div>
        </div>
        <div className="hero-artwork">
          <div className="artwork-stack">
            <div className="artwork-card artwork-front">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=500&fit=crop&q=80" 
                alt="Abstract NFT Artwork"
                className="artwork-image artwork-1"
              />
            </div>
            <div className="artwork-card artwork-back">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop&q=80" 
                alt="Digital Art Background"
                className="artwork-image artwork-2"
              />
            </div>
          </div>
          <div className="artwork-bid-card">
            <div className="bid-info">
              <span className="bid-label">Current Bid</span>
              <span className="bid-amount">0.005 ETH</span>
            </div>
            <button className="btn-bid">Place Bid</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

