import Header from "../components/Header";
import Head from "next/head";
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
import { GridOuter } from "~/components/HomeGrid";
import { Wrap } from "~/components/styled";
import SlideShow from "~/components/SlideShow";
import useMediaQuery from "use-media-query-hook";
import { initGA, logPageView } from "../util/analytics";
import CookieConsent from "react-cookie-consent";
import { useState } from "react";

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

function Home({ events }): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 950px)");
  const isDesktop = useMediaQuery("(min-width: 950px");

  return (
    <>
      <Head>
        <title>Visionist</title>
        <meta name="description" content="VISIONIST" />
        <meta property="og:url" content="https://visionist.live" />
        <meta property="og:title" content="VISIONIST" />
        <meta property="og:description" content="VISIONIST.LIVE" />
        <meta property="og:image" content="/images/fb.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VISIONIST.LIVE" />
        <meta name="twitter:description" content="VISIONIST" />
        <meta name="twitter:image" content="/images/twitter.jpg" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WS6CRF59WT"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WS6CRF59WT', {
            page_path: window.location.pathname,
          });`,
          }}
        ></script>
      </Head>
      <GridOuter>
        <Wrap
          justifySelf="start"
          gridArea="center"
          width="100%"
          pt={[0, 0, 4]}
          pb={[0, 0, 4]}
          style={{ textAlign: "center" }}
          position={["static", "static"]}
          justifyContent={["unset", "unset", "unset"]}
          display={["block", "block", "flex"]}
          flexDirection={["column"]}
          overflowY={["visible", "visible", "scroll"]}
        >
          <Header />
          <Video pt={[0, 4, 4]} id="view">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/ducIhpBjrWs?playlist=ducIhpBjrWs&controls=0&loop=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Video>
          {isMobile && <MailingList />}
          <PageNavigation />
        </Wrap>
        <BuyLinks />
        <Spotify />
        <Wrap
          justifySelf="start"
          display={["flex", "block", "flex"]}
          flexDirection={["column", "column", "row"]}
          width="100%"
        >
          <Instagram />
          <Twitter />
        </Wrap>
        <SlideShow className="slideshow" />
        {isDesktop && (
          <Wrap
            display={["block", "block", "flex"]}
            justifySelf="start"
            gridArea="bottom-right"
            width="100%"
            borderLeft={["none", "none", "1px solid #888"]}
            borderTop={["none", "none", "1px solid #888"]}
            padding={[]}
            alignItems="center"
          >
            <MailingList />
            {/* <EventWrapper events={events} /> */}
          </Wrap>
        )}
        {/* <CookieConsent
          buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
          declineButtonStyle={{ fontSize: "14px" }}
          style={{
            background: "#eee",
            fontSize: "15px",
            color: "#111;",
            alignItems: "center",
          }}
          buttonText="I Accept"
          declineButtonText="I Decline"
          onAccept={handleAcceptance()}
          onDecline={handleRejection()}
          enableDeclineButton
        ></CookieConsent> */}
      </GridOuter>
    </>
  );
}

export const getStaticProps = async () => {
  const events = await sanityClient.fetch(getEvents);
  return {
    props: {
      events,
    },
  };
};

export default Home;
