import '../../styles/components/sections/PopularArtists.css'

const PopularArtists = () => {
  const artists = [
    { 
      name: 'Farhan Garcia', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80'
    },
    { 
      name: 'Sebastian', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80'
    },
    { 
      name: 'Javier Miranda', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80'
    },
    { 
      name: 'Erick Fisher', 
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80'
    },
  ]

  return (
    <section className="popular-artists">
      <div className="artists-container">
        <div className="artists-header">
          <h2 className="artists-title">Popular Artists</h2>
          <button className="btn-view-all">View All</button>
        </div>
        <div className="artists-grid">
          {artists.map((artist, index) => (
            <div key={index} className="artist-card">
              <div className="artist-avatar">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  loading="lazy"
                />
              </div>
              <h3 className="artist-name">{artist.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularArtists

