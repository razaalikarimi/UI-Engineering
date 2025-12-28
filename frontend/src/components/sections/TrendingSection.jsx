import '../../styles/components/sections/TrendingSection.css'

const TrendingSection = () => {
  const trendingNFTs = [
    { 
      name: 'Solomon', 
      price: '1.09 ETH', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop&auto=format&q=90'
    },
    { 
      name: 'Kallie Smith', 
      price: '2.3 ETH', 
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=600&fit=crop&auto=format&q=90'
    },
    { 
      name: 'Jone Mihaluk', 
      price: '0.89 ETH', 
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=600&fit=crop&auto=format&q=90'
    },
    { 
      name: 'Robertunshannon', 
      price: '1.5 ETH', 
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=600&fit=crop&auto=format&q=90'
    },
    { 
      name: 'Mikel Fisher', 
      price: '3.2 ETH', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop&auto=format&q=90'
    },
    { 
      name: 'Erick Fisher', 
      price: '0.75 ETH', 
      image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=600&fit=crop&auto=format&q=90'
    },
  ]

  return (
    <section className="trending-section">
      <div className="trending-container">
        <div className="trending-header">
          <div className="trending-text">
            <h2 className="trending-title">Trending This Week</h2>
            <p className="trending-subtitle">
              The most popular NFTs that are trending this week, updated every hour.
            </p>
          </div>
          <button className="btn-view-all">View All</button>
        </div>
        <div className="trending-grid">
          {trendingNFTs.map((nft, index) => (
            <div key={index} className="trending-card">
              <div className="trending-image">
                <img 
                  src={nft.image} 
                  alt={nft.name}
                  loading="lazy"
                />
              </div>
              <div className="trending-info">
                <h3 className="trending-name">{nft.name}</h3>
                <span className="trending-price">{nft.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingSection

