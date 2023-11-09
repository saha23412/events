interface EventCard {
  id: number;
  importance: string;
  date: {
    formatYMD: string;
    formatHMS: string;
  };
  scanned: boolean;
  selected: boolean;
  machinery: string;
  message: string;
  FIO: string;
}

export default EventCard;
