import { Wrap } from "../styled";
import SectionHeader from "../SectionHeader";

interface EventProps {
  name: string;
  ctaLocation: string;
  ctaText: string;
}

export interface EventsProps {
  events: []
}

export const EventItem: React.FC<EventProps> = ({name, ctaLocation, ctaText}) => {
  return (
    <div>
      {name}
      {ctaLocation && ctaText &&       <a href={ctaLocation}>{ctaText}</a>}
    </div>
  )
}

export function EventWrapper({ events }): JSX.Element {
  return (
    <Wrap justifySelf="start" gridArea="events"  border={["none", "1px solid #888"]} borderTop="none" borderRight="none" width={["100%", "50%"]}>
      <Wrap>
        <SectionHeader name="Live" />
      </Wrap>
      <Wrap>
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
      </Wrap>
    </Wrap>
  )
}