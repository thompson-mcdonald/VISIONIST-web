import Hero from "../components/Hero";
import sanityClient from "../lib/sanityClient";
import {getEvents, getHomepage} from "../lib/queries";
import EventItem from '../components/Event';

function Home({events, homePage}): JSX.Element {
  console.log(events);
  return (
    <div className="container">
      <Hero title="Verlay app" subtitle="build your next banger" />
      {events &&
          events
            .map((n) => (
              <EventItem
                key={n.name}
                name={n.name}
                ctaLocation={n.ctaLocation}
                ctaText={n.ctaText}
              />
            ))}
    </div>
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
