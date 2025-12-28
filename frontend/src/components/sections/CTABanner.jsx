import '../../styles/components/sections/CTABanner.css'

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-container">
        <div className="cta-image">
          <img 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop&q=80" 
            alt="Abstract wave pattern"
            className="cta-pattern"
          />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Join The Community And Get The Best NFT Collection</h2>
          <button className="btn-join">Join Community</button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner

