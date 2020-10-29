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

function Home({events, homePage}): JSX.Element {
  console.log(events);
  return (
    <GridOuter>
      <Wrap justifySelf="start" gridArea="center" width="100%">
        <Header/> 
        <Video />
        <MailingList />
        <About /> 
      </Wrap>
      <PageNavigation />
      <BuyLinks />
      <Video title="view" borderTop="none" borderBottom="none" border="1px solid #888" />
      <Instagram />
      <Wrap justifySelf="start" gridArea="fb-tw" display={["block", "flex"]} width="100%">
        <Facebook />
        <Twitter />
      </Wrap>
      <Spotify />
      <Wrap display={["block", "flex"]} justifySelf="start" gridArea="bottom-right" width="100%">
        <EventWrapper events={events} />
        <SlideShow />
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
