import styled from "styled-components";
import { Wrap } from "../styled";
import SectionHeader from "../SectionHeader";
import moment from "moment";

const ItemWrap = styled.div`
  font-size: 1.4rem;
  display: flex; 
  justify-content: space-between;
`;

interface EventProps {
  name: string;
  ctaLocation: string;
  ctaText: string;
  date: Date;
}

export interface EventsProps {
  events: []
}

export const EventItem: React.FC<EventProps> = ({name, date, ctaLocation, ctaText}) => {
  const formattedDate = moment(date).format("l");
  return (
    <ItemWrap>
      <div>{formattedDate}</div>
      <div>{name}</div>
      <div>{ctaLocation && ctaText &&       <a href={ctaLocation}>{ctaText}</a>}</div>
    </ItemWrap>
  )
}

export function EventWrapper({ events }): JSX.Element {
  console.log(events[1].date);
  return (
    <Wrap justifySelf="start" gridArea="events"  border={["none", "none", "1px solid #888"]} borderTop="none" borderRight="none" width={["100%", "100%", "50%"]} mt={[4, 4, 0]} mb={[4, 4, 0]}>
      <Wrap>
        <SectionHeader name="Live" />
      </Wrap>
      <Wrap pl={2} pr={2} pt={2} pb={3}>
        {events &&
          events
            .map((n) => (
              <EventItem
                key={n.name}
                name={n.name}
                date={n.date}
                ctaLocation={n.ctaLocation}
                ctaText={n.ctaText}
              />
        ))}
      </Wrap>
    </Wrap>
  )
}