import styled from "styled-components";
import { Wrap } from "../styled";
import SectionHeader from "../SectionHeader";
import moment from "moment";

const ItemWrap = styled.div`
  font-size: 2rem;
  display: flex;
  grid-gap: 2rem;
  line-height: 3rem;
  a:link,
  a:visited {
    text-decoration: underline;
  }
  @media (min-width: 950px) {
    font-size: 1.8rem;
  }
`;

const EventsWrap = styled(Wrap)`
  h2 {
    text-transform: uppercase;
  }
`;

interface EventProps {
  name: string;
  ctaLocation: string;
  ctaText: string;
  date: Date;
}

export interface EventsProps {
  events: [];
}

export const EventItem: React.FC<EventProps> = ({
  name,
  date,
  ctaLocation,
  ctaText,
}) => {
  const formattedDate = moment(date).format("l");
  return (
    <ItemWrap>
      <strong>{formattedDate}</strong>
      <div>
        {ctaLocation && <a href={ctaLocation}>{name}</a>}
        {!ctaLocation && name}
      </div>
      <div></div>
    </ItemWrap>
  );
};

export function EventWrapper({ events }): JSX.Element {
  if (!events) {
    return <></>;
  }

  return (
    <EventsWrap
      justifySelf="start"
      gridArea="events"
      border={["none", "none", "1px solid #888"]}
      borderTop="none"
      borderRight="none"
      borderBottom={["none", "none", "none"]}
      width={["100%", "100%", "100%"]}
      mt={[4, 4, 0]}
      mb={[4, 4, 0]}
    >
      <Wrap>
        <SectionHeader name="Live" />
      </Wrap>
      <Wrap pl={2} pr={2} pt={2} pb={3}>
        {events &&
          events.map((n) => (
            <EventItem
              key={n.name}
              name={n.name}
              date={n.date}
              ctaLocation={n.ctaLocation}
              ctaText={n.ctaText}
            />
          ))}
        {events.length < 1 && <h2>No events yet</h2>}
      </Wrap>
    </EventsWrap>
  );
}
