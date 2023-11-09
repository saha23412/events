import { DataView } from "primereact/dataview";
import EventViewProps from "./model";
import useWindowDimensions from "../../hooks/use-window-dimensions";

const EventView: React.FC<EventViewProps> = ({ events, itemTemplate }) => {
  const { width } = useWindowDimensions();
  const rows = width <= 990 ? 1 : 6;
  return (
    <div className="card">
      <DataView
        value={events}
        itemTemplate={itemTemplate}
        layout="grid"
        paginator
        currentPageReportTemplate={" {currentPage} из {totalPages}"}
        paginatorTemplate="RowsPerPageDropdown  PrevPageLink CurrentPageReport NextPageLink "
        rows={rows}
      />
    </div>
  );
};

export default EventView;
