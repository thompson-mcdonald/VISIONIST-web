import Header from "../components/Header";
import sanityClient from "../lib/sanityClient";
import { getEvents, getHomepage } from "../lib/queries";
import { EventWrapper } from "../components/Event";
import MailingList from "../components/MailingList";
import PageNavigation from "../components/PageNavigation";
import BuyLinks from "~/components/BuyLinks";
import Video from "~/components/Video";
import Instagram from "~/components/Instagram";
import Facebook from "~/components/Facebook";
import Twitter from "~/components/Twitter";
import Spotify from "~/components/Spotify";
import About from "~/components/About";
import { GridOuter } from "~/components/HomeGrid";
import { Wrap } from "~/components/styled";
import SlideShow from "~/components/SlideShow";
import useMediaQuery from "use-media-query-hook";

function Home({ events, homePage }): JSX.Element {
  console.log(events);

  const isMobile = useMediaQuery("(max-width: 950px)");
  const isDesktop = useMediaQuery("(min-width: 950px");

  return (
    <GridOuter>
      <Wrap
        justifySelf="start"
        gridArea="center"
        width="100%"
        pt={[0, 0, 4]}
        style={{ textAlign: "center" }}
        position={["static", "static"]}
        justifyContent={["unset", "unset", "space-evenly"]}
        display={["block", "block", "flex"]}
        flexDirection={["column"]}
      >
        <Header />
        <Video pt={[0, 4, 4]} id="view">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/utTditmR1vo?playlist=utTditmR1vo&controls=0&loop=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <MailingList />
        <PageNavigation />
      </Wrap>
      <BuyLinks />
      <Spotify />
      <Facebook />
      <SlideShow className="slideshow" />
      <Wrap
        justifySelf="start"
        display={["none", "block", "flex"]}
        width="100%"
      >
        <Instagram />
        <Twitter />
      </Wrap>
      <Wrap
        display={["block", "block", "flex"]}
        justifySelf="start"
        gridArea="bottom-right"
        width="100%"
      >
        <EventWrapper events={events} />
      </Wrap>
    </GridOuter>
  );
}

export const getStaticProps = async () => {
  const events = await sanityClient.fetch(getEvents);
  const homePage = await sanityClient.fetch(getHomepage);
  return {
    props: {
      events,
      homePage,
    },
  };
};

export default Home;
