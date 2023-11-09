import { createContext, useEffect, useState } from "react";
import EventCard from "global-model/event";
import eventsData from "../../events.json";

interface EventsContext {
  events: EventCard[];
  selectedEvent: (id: number) => void;
  onClickSearch: (search: string) => void;
  replenishEvents: () => void;
  scannedEvent: (id: number) => void;
  onKeyDownScannedEvent: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  flagSearch: boolean;
}
interface EventsProvideProps {
  children: React.ReactNode;
}
export const EventsContext = createContext<EventsContext>({
  events: eventsData,
  selectedEvent: () => {},
  onClickSearch: () => {},
  replenishEvents: () => {},
  scannedEvent: () => {},
  onKeyDownScannedEvent: () => {},
  flagSearch: false,
});

export const EventsProvider = ({ children }: EventsProvideProps) => {
  const [events, setEvents] = useState<EventCard[]>(eventsData);
  const [copyEvents, setCopyEvents] = useState<EventCard[]>(eventsData);
  const [flagSearch, setFlagSearch] = useState<boolean>(false);

  //Добавление event каждые 6 секунд
  useEffect(() => {
    const intervalAddEvent = setInterval(() => {
      if (!flagSearch) {
        const date = new Date();
        const newEvent: EventCard = {
          id: Date.now(),
          date: {
            formatHMS: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            formatYMD: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
          },
          importance: "Высокая",
          scanned: false,
          selected: false,
          machinery: "Юпитер",
          message: "В рабочем состоянии",
          FIO: "Киприянов А.Р",
        };

        setEvents((prevEvents) => {
          const newArrEvent = [newEvent, ...prevEvents];
          setCopyEvents(newArrEvent);
          return newArrEvent;
        });
      }
    }, 6000);
    return () => clearInterval(intervalAddEvent);
  }, [flagSearch]);
  //Выделить карточку
  const selectedEvent = (id: number) => {
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) => {
        if (id === prevEvent.id) {
          prevEvent.selected = !prevEvent.selected;
        }
        return prevEvent;
      })
    );
  };
  //Поиск по сообщению
  const onClickSearch = (search: string) => {
    setFlagSearch(true);
    setCopyEvents(events);
    setEvents((prevEvents) =>
      prevEvents.filter((event) => {
        if (
          event.message.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return event;
        }
      })
    );
  };
  const replenishEvents = () => {
    setFlagSearch(false);
    setEvents(copyEvents);
  };
  //Просмотр карточки
  const scannedEvent = (id: number) => {
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) => {
        if (id === prevEvent.id) {
          prevEvent.scanned = true;
        }
        return prevEvent;
      })
    );
  };
  //Просмотр карточки по нажатию пробела
  const onKeyDownScannedEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) => {
        const scannedRule = !prevEvent.scanned && prevEvent.selected;
        if (scannedRule && event.key === " ") {
          prevEvent.scanned = true;
        }
        return prevEvent;
      })
    );
  };
  return (
    <EventsContext.Provider
      value={{
        events,
        selectedEvent,
        onClickSearch,
        replenishEvents,
        scannedEvent,
        onKeyDownScannedEvent,
        flagSearch,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
