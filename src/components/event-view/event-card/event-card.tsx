import { useContext } from "react";
import { EventsContext } from "./../../../context/events-context";
import EventCard from "global-model/event";
import ButtonCustom from "components/ui/button/button";

const EventCardView = (event: EventCard) => {
  const { selectedEvent, onKeyDownScannedEvent, scannedEvent } =
    useContext(EventsContext);
  return (
    <article
      className="col-12 sm:col-12 lg:col-4 xl:4 p-1"
      onKeyDownCapture={(ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.preventDefault();
        onKeyDownScannedEvent(ev);
      }}
    >
      {event.scanned ? <p>Просмотрено</p> : <p>Не просмотрено</p>}
      <button
        style={{
          width: "100%",
          border: "0px solid transparent",
          borderRadius: "10px",
        }}
        onClickCapture={() => {
          selectedEvent(event.id);
        }}
      >
        <div
          className={`p-2  surface-border ${
            event.selected ? "surface-card" : ""
          }   flex aligh-items-center justify-content-between`}
        >
          <div>
            <div className="flex align-items-center justify-content-start ">
              <i className="pi pi-user" style={{ fontSize: "1rem" }}></i>
              <span style={{ fontSize: "0.9rem" }}>{event.FIO}</span>
            </div>
            <div className="flex mt-4">
              <span
                className="mr-2"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Дата:
              </span>
              <span>
                <span style={{ fontSize: "0.9rem" }} className="mr-2">
                  {event.date.formatYMD}
                </span>
                <span style={{ fontSize: "0.9rem" }}>
                  {event.date.formatHMS}
                </span>
              </span>
            </div>
            <div className="flex mt-3">
              <span
                className="mr-2"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Важность:
              </span>
              <span style={{ fontSize: "0.9rem" }}>{event.importance}</span>
            </div>
            <div className="flex mt-3">
              <span
                className="mr-2"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Оборудование:
              </span>
              <span style={{ fontSize: "0.9rem" }}>{event.machinery}</span>
            </div>
            <div className="flex mt-3 mb-3">
              <span
                className="mr-2"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                Сообщение:
              </span>
              <span className="mr-3" style={{ fontSize: "0.85rem" }}>
                {event.message}
              </span>
            </div>
          </div>
        </div>
      </button>
      <ButtonCustom
        className="mt-2"
        onClickCapture={() => scannedEvent(event.id)}
        type="button"
        label="Просмотреть"
        disabled={event.scanned}
      />
    </article>
  );
};

export default EventCardView;
