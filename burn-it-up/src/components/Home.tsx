import ArticleSection from './Article'
import HeroSection from './HeroSection'
import HomePageEndSection from './HomePageEnd'
import SectionComponent1 from './Section1'
import SubHeroSection from './SubHeroSection'
import Testimonial from './Testimonial'
import UserFeedBack from './UserFeedBack.'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <SubHeroSection />
            <SectionComponent1 />
            <UserFeedBack />
            <Testimonial />
            <ArticleSection />
            <HomePageEndSection />
        </div>
    )
}

export default Home