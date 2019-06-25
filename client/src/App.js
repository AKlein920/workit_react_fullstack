import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "./App.scss";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

function App() {
  return (
    <div style={{ height: "400px" }} className="App">
      <DnDCalendar localizer={localizer} selectable events={[]} />
    </div>
  );
}

export default App;
