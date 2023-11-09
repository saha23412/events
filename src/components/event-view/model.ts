import EventCard from "global-model/event";

interface EventViewProps {
  events: EventCard[];
  itemTemplate:
    | ((
        item: never,
        layout: "list" | "grid" | (string & Record<string, unknown>)
      ) => React.ReactNode)
    | undefined;
}

export default EventViewProps;
