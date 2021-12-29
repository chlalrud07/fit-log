import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import { Checkbox, DialogContent, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import React from "react";

export default function Create() {
    const [date, setDate] = React.useState<Date | null>(new Date());

    return (
        <>
          <Stack spacing={2}>
            <Typography>
              날짜
            </Typography>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }} />
            </LocalizationProvider>
            <Typography>
              운동부위
            </Typography>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="팔"
                  control={<Checkbox />}
                  label="팔"
                />
                <FormControlLabel
                  value="어깨"
                  control={<Checkbox />}
                  label="어깨"
                />
                <FormControlLabel
                  value="가슴"
                  control={<Checkbox />}
                  label="가슴"
                />
                <FormControlLabel
                  value="등"
                  control={<Checkbox />}
                  label="등"
                />
                <FormControlLabel
                  value="복부"
                  control={<Checkbox />}
                  label="복부"
                />
                <FormControlLabel
                  value="하체"
                  control={<Checkbox />}
                  label="하체"
                />
              </FormGroup>
            </FormControl>
          </Stack>
        </>
    );
}

