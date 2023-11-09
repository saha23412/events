import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import EventLog from "pages/events-log/events-log";
import { EventsProvider } from "./context/events-context";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <EventsProvider>
      <EventLog />
    </EventsProvider>
  </PrimeReactProvider>
);
