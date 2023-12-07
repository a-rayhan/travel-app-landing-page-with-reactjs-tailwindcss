import Camp from "../Components/Camp";
import Guide from "../Components/Guide";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Camp />
            <Guide />
        </div>
    );
};

export default Home;