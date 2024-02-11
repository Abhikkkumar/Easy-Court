import "./calendar.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function ResponsiveDatePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDatePicker"]}>
        <DemoItem>
          <StaticDatePicker
            // defaultValue={dayjs(value)}
            value={dayjs()}
            onChange={(selec) => {
              const date = {
                day: selec.$D,
                month: selec.$M + 1,
                year: selec.$y,
              };
              console.log(date);
              console.log(selec);
            }}
            orientation="portrait"
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
