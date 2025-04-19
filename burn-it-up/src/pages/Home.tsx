import ArticleSection from "../components/Article"
import HeroSection from "../components/HeroSection"
import HomePageEndSection from "../components/HomePageEnd"
import SectionComponent1 from "../components/Section1"
import SubHeroSection from "../components/SubHeroSection"
import Testimonial from "../components/Testimonial"
import UserFeedBack from "../components/UserFeedBack."


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