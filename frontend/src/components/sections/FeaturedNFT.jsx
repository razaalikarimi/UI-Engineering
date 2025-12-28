import '../../styles/components/sections/FeaturedNFT.css'

const FeaturedNFT = () => {
  return (
    <section className="featured-nft">
      <div className="featured-container">
        <div className="featured-image">
          <img 
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=600&fit=crop&q=80" 
            alt="Bitcoin Art Work - Astronaut NFT"
            className="nft-image astronaut"
          />
        </div>
        <div className="featured-content">
          <h2 className="featured-title">Bitcoin Art Work</h2>
          <p className="featured-artist">By: Jone Mihaluk</p>
          <div className="featured-bid">
            <div className="bid-details">
              <span className="bid-label">Current Bid</span>
              <span className="bid-value">1.00 ETH</span>
            </div>
            <div className="bid-timer">
              <span className="timer-label">Time Left</span>
              <div className="timer-display">
                <span>25</span>
                <span className="timer-separator">:</span>
                <span>07</span>
                <span className="timer-separator">:</span>
                <span>14</span>
              </div>
            </div>
          </div>
          <button className="btn-place-bid">Place Bid</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedNFT

