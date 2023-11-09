import { useContext, useState } from "react";
import { EventsContext } from "./../../context/events-context";
import EventView from "components/event-view/event-view";
import EventCardView from "components/event-view/event-card/event-card";
import ButtonCustom from "components/ui/button/button";
import InputCustom from "components/ui/input/input";

const EventLog: React.FC = () => {
  const { replenishEvents, onClickSearch, events } = useContext(EventsContext);
  const [search, setSearch] = useState<string>("");
  const onClickReset = () => {
    replenishEvents();
    setSearch("");
  };

  return (
    <div className="main">
      <div className="header flex justify-content-end flex-column sm:flex-column lg:flex-row xl:flex-row  mt-2 mr-2 mb-1">
        <div className="flex justify-content-center sm:justify-content-none lg:justify-content-none xl:justify-content-none  align-items-center ">
          <ButtonCustom
            className="mr-2"
            onClick={() => onClickSearch(search)}
            label="Поиск"
            type="button"
            disabled={!search.length}
          />

          <div className="p-input-icon-left mr-2">
            <i className="pi pi-search" />
            <InputCustom
              className="border-2 surface-border width-200"
              type="search"
              value={search}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(event.target.value)
              }
            />
          </div>
        </div>

        <ButtonCustom
          className="mt-2 sm:mt-2 lg:mt-0 xl:mt-0"
          onClick={onClickReset}
          disabled={!search.length}
          style={{ outline: "none" }}
          label="Очистить поиск"
          type="button"
        />
      </div>
      <div className="content">
        <EventView events={events} itemTemplate={EventCardView} />
      </div>
    </div>
  );
};

export default EventLog;
