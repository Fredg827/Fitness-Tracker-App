import { SelectedPage } from "@/shared/types";
import HomePageText from "/src/assets/HomePageText.png";
import HomePageGraphic from "/src/assets/HomePageGraphic.png";
import SponsorRedBull from "/src/assets/SponsorRedBull.png";
import SponsorForbes from "/src/assets/SponsorForbes.png";
import SponsorFortune from "/src/assets/SponsorFortune.png";

import ActionButton from "@/shared/actionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  //const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="Home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <div>
        {/* Main Header*/}
        <div></div>
        {/* Image */}
        <div>
          {/*Headings*/}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* Action Buttons */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* Image */}
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>

      {/* Sponsors */}
      <div className="md-hidden">
        <div>
          <div>
            <img alt="redbull-sponsor" src={SponsorRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="fortune-sponsor" src={SponsorFortune} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
