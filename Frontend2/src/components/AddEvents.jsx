import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { createTheme, ThemeProvider } from "@mui/material";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UploadFileIcon from '@mui/icons-material/UploadFile';


// const today = new Date()

const Events = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  function incrementCount() {
    // count = count + 1;
    setCount(count + 1);
  }

  function decrementCount() {
    // count = count - 1;
    setCount(count - 1);
  }

  function handleValueChange(e) {
    const x = Number(e.target.value);

    if (isNaN(x) || x < 1) {
      setError("Input not valid");
    } else {
      setCount(x);
      setError("Qty updated");
    }
    // console.log(x);
  }

  const [valueDate, setValueDate] = useState(new Date());

  const handleChange = (newValue) => {
    setValueDate(newValue);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div>
      <div className="text-[30px] text-white font-bold pb-10">
        Event Details
      </div>
      <div className="flex flex-col space-y-5">
        <div>
          <p className="text-white text-[18px]">Event Name</p>
          <input
            type="text"
            className="w-[600px] h-[60px] bg-white/20 rounded-lg hover:border-white/90 border border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Enter event name"
          ></input>
        </div>

        <div>
          <p className="text-white text-[18px]">Details</p>
          <input
            type="text"
            className="w-[600px] h-[60px] bg-white/20 rounded-lg hover:border-white/90 border border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Enter event details"
          ></input>
        </div>

        <div className="flex space-x-10">
          <div>
            <p className="text-white text-[18px]">Date</p>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ThemeProvider theme={darkTheme}>
                <DesktopDatePicker
                  inputFormat="MM/dd/yyyy"
                  value={valueDate}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </ThemeProvider>
            </LocalizationProvider>
          </div>

          <div className="flex space-y-5 flex-col">
            <div>
              <p className="text-white text-[18px]">Start Time</p>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={darkTheme}>
                  <TimePicker
                    inputFormat="hh:mm"
                    value={valueDate}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </ThemeProvider>
              </LocalizationProvider>
            </div>
          </div>
          <div>
            <p className="text-white text-[18px]">End Time</p>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ThemeProvider theme={darkTheme}>
                <TimePicker
                  inputFormat="hh:mm"
                  value={valueDate}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </ThemeProvider>
            </LocalizationProvider>
          </div>
        </div>

        <div>
          <p className="text-white text-[18px]">Location</p>
          <input
            type="text"
            className="w-[400px] h-[60px] bg-white/20 hover:border-white/90 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Enter event location"
          ></input>
        </div>

        <div>
          <p className="text-white text-[18px]">Seats</p>

          <div className="flex space-x-5 text-white">
            <input
              type="text"
              min="0"
              className="w-[400px] h-[60px] bg-white/20 hover:border-white/90 rounded-lg border border-[#D3D3D3]/10 placeholder:text-white/50 p-3 text-lg flex justify-center items-center"
              value={count}
              onClick={() => setCount(0)}
              onChange={handleValueChange}
            />
            <button
              className="w-[60px] h-[60px] flex justify-center items-center bg-white/20 hover:border-white/90 rounded-lg border border-[#D3D3D3]/10 text-3xl"
              onClick={decrementCount}
            >
              -
            </button>

            <button
              className="w-[60px] h-[60px] flex justify-center items-center bg-white/20 hover:border-white/90 rounded-lg border border-[#D3D3D3]/10  text-3xl"
              onClick={incrementCount}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <p className="text-white text-[18px]">Topics</p>
          <input
            type="text"
            className="w-[600px] h-[60px] bg-white/20 rounded-lg hover:border-white/90 border border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Enter event topics"
          ></input>
        </div>

        <div>
          <p className="text-white text-[18px]">Cost</p>
          <input
            type="text"
            className="w-[600px] h-[60px] bg-white/20 rounded-lg border hover:border-white/90 border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Enter event cost"
          ></input>
        </div>

        <div>
          <p className="text-white text-[18px] mb-3">Speaker/s</p>
          <p className="text-white/50 text-[14px]">Speaker Name</p>
          <input
            type="text"
            className="w-[600px] h-[60px] mb-3 bg-white/20 rounded-lg border hover:border-white/90 border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Enter speaker details"
          ></input>
          <button className='w-[200px] h-[40px] bg-[#3DD598] rounded-lg text-lg font-bold flex justify-center items-center space-x-2 text-white'>
      <AddCircleOutlineIcon /> <p>Add Speaker</p>
    </button>
        </div>

        <div>
          <p className="text-white text-[18px]">Add Poster</p>
          <div className="flex space-x-3">
          <input
            type="text"
            className="w-[300px] h-[60px] bg-white/20 rounded-lg border hover:border-white/90 border-[#D3D3D3]/10 placeholder:text-white/50 p-3"
            placeholder="Upload Poster"
          ></input>
          <button className='w-[200px] h-[60px] bg-[#3DD598] rounded-lg text-lg font-bold flex justify-center items-center space-x-2 text-white'>
      <UploadFileIcon /> <p>Upload</p>
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
