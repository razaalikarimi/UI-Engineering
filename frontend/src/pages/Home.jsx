import Hero from '../components/sections/Hero'
import FeaturedNFT from '../components/sections/FeaturedNFT'
import TrendingSection from '../components/sections/TrendingSection'
import PopularArtists from '../components/sections/PopularArtists'
import CTABanner from '../components/sections/CTABanner'
import '../styles/pages/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedNFT />
      <TrendingSection />
      <PopularArtists />
      <CTABanner />
    </div>
  )
}

export default Home

