import Header from "../components/Header";
import sanityClient from "../lib/sanityClient";
import {getEvents, getHomepage} from "../lib/queries";
import {EventWrapper} from '../components/Event';
import MailingList from '../components/MailingList';
import PageNavigation from '../components/PageNavigation';
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

function Home({events, homePage}): JSX.Element {
  console.log(events);

  const isMobile = useMediaQuery("(max-width: 740px)");
  const isDesktop = useMediaQuery("(min-width: 740px");

  return (
    <GridOuter>
      <Wrap justifySelf="start" gridArea="center" width="100%" pl={[0, 0, 4]} pr={[0, 0, 4]} pt={[0, 0, 4]} position={["static", "static", "relative"]}>
        <Header/> 
        <Video pt={[4, 4, 4]} />
        <MailingList />
        {isDesktop && 
          <Wrap position={["static", "static", "absolute"]} bottom={[0, 0 , 3]}>
            <About /> 
          </Wrap>
        }
      </Wrap>
      <PageNavigation />
      <BuyLinks />
      <Video title="view" borderTop="none" borderBottom="none" border="1px solid #888" />
      <Instagram />
      <Wrap justifySelf="start" gridArea="fb-tw" display={["block", "block", "flex"]} width="100%">
        <Facebook />
        <Twitter />
      </Wrap>
      <Spotify />
      <Wrap display={["block", "block", "flex"]} justifySelf="start" gridArea="bottom-right" width="100%">
        <EventWrapper events={events} />
        <SlideShow />
      </Wrap>
      {isMobile && 
        <Wrap>
          <About /> 
        </Wrap>
      }
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
