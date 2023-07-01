import { useSelector } from "react-redux";
import { InfoBox } from "../components/infoBox";
export const About = () => {
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1 className={theme && "whiteStory"}>Our Story</h1>
        <div className={`aboutText ${theme && "whiteAboutText"}`}>
          Chubbies was founded in 2011 by a group of friends who found the
          traditional world of men’s capital-F-”Fashion” completely unrelatable.
          We saw pictures of shirtless men with rippling ab muscles, some
          standing outside of storefronts coating you with cologne, with the
          message of “if only you buy our clothes you can try to be as cool as
          we are” - and we were absolutely repelled. At the same time, we saw
          that “shorts” in the marketplace were getting longer and longer, with
          more and more fabric/pocketing/zip-ties & whoseewhatsits all over
          them. Where were the proper length men’s shorts that defined
          generations of shortsmen? Not only were shorts becoming completely
          unrecognizable, but they were also losing their personality, their
          craftsmanship. No one was focusing on this forgotten category of men’s
          apparel, when it’s a product that’s so vital to get right. Finally, we
          founded the company in 2011, just 3 years after the financial crisis,
          4 years after the launch of the first iPhone, and in the wake of the
          rapid rise of Facebook, Linkedin and other social networking apps.
          People were more stressed, comparing their lives to others on social
          media, and allowing work to overtake more and more of the work-life
          balance. Enter Chubbies - our visceral and irreverent response to all
          of the above. We launched in September of 2011 and were sold out for
          2+ years of our core casual shorts product. In the subsequent years we
          launched swim trunks, aloha shirts, sport shorts, lounge shorts,
          performance polos, t-shirts, hoodies, jackets, and quarter to round
          out the year-round Weekend Wardrobe. Throughout, we maintained a
          consistent focus on building the perfect product for your Weekend, and
          wove every piece of fabric around that objective. Now, we are proud to
          say we have the most well-rounded, custom-built-for-the-weekend
          apparel on the planet and, not only that, a brand built by, and for,
          our community and 100% centered on that Friday at 5pm feeling.
        </div>
      </div>
      <div className="infoCardContainer">
        <InfoBox
          src="https://th.bing.com/th/id/OIP.EI-Jy-S9OBgC_Iuu1QtyOAHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          name="Yahiko"
          email="yahiko@gmail.com"
          num="09796788834"
        />
        <InfoBox
          src="https://th.bing.com/th/id/OIP.zuRYrrhu1rBw4ytp3EWWeAAAAA?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          name="Nagato"
          email="nagato@gmail.com"
          num="09798890334"
        />
        <InfoBox
          src="https://th.bing.com/th/id/OIP.WuibGoCVRgSCvToEbmxz4gHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          name="Konan"
          email="konan@gmail.com"
          num="0972476334"
        />
      </div>
    </div>
  );
};
