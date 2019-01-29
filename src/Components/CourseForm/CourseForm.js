import React from "react";
import {
  TextField,
  MenuItem,
  Card,
  CardContent,
  Button,
  Grid,
  Divider,Paper
} from "@material-ui/core";
import { reqURL } from "../../util/reqURL";

const departments = [
  {
    label: "Computer Science & Engineering",
    value: "cse"
  },
  {
    label: "Electrical & Electronics Engineering",
    value: "eee"
  },
  {
    label: "Electronics & Communication Engineering",
    value: "ece"
  },
  {
    label: "Mechanical Engineering",
    value: "me"
  },
  {
    label: "Civil Engineering",
    value: "ce"
  }
];

const course = {
  cse: [
    {
      label: "15SE205J - JAVA",
      value: "java"
    },
    {
      label: "15CS205J - ADA",
      value: "ada"
    }
  ],
  ece: [
    {
      label: "15EC205J Signals",
      value: "Signals"
    },
    {
      label: "15EC205J POC",
      value: "POC"
    }
  ]
};

class CourseForm extends React.Component {
  state = {
    department: "",
    course: ""
  };

  dataValidation = () => {
    let { department, course } = this.state;
    if (!department && !course) {
      alert("Depratment & Course not selected");
      return false;
    } else if (!department) {
      alert("Please select department");
      return false;
    } else if (!course) {
      alert("Please select Course");
      return false;
    } else return true;
  };
  handleChangeDepartment = event => {
    this.setState({
      department: event.target.value
    });
  };
  handleChangeCourse = event => {
    this.setState({
      course: event.target.value
    });
  };
  OpenSlide = () => {
    if (this.dataValidation()) {
      const URL =
        reqURL +
        this.state.department +
        "/" +
        this.state.course +
        "/index.html";
      window.open(URL, "_blank");
    }
  };
  OpenSlidePDF = () => {
    const URL =
      reqURL +
      this.state.department +
      "/" +
      this.state.course +
      "/index.html?print-pdf";
    window.open(URL, "_blank");
  };
  OpenSlidePDFDownload = () => {
    const URL =
      reqURL +
      this.state.department +
      "/" +
      this.state.course +
      "/index.html?print-pdf?pdf-download";
    window.open(URL, "_blank");
  };
  render() {
    return (
      <Card>
        <CardContent>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-select-currency"
                select
                label="Select"
                value={this.state.department}
                onChange={e => this.handleChangeDepartment(e)}
                SelectProps={{
                  MenuProps: {}
                }}
                helperText="Select department"
                margin="normal"
              >
                {departments.map(option => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label.toUpperCase()}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>

            {/* COurse */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-select-currency"
                select
                label="Select"
                value={this.state.course}
                onChange={e => this.handleChangeCourse(e)}
                SelectProps={{
                  MenuProps: {}
                }}
                helperText="Select Course"
                margin="normal"
              >
                {this.state.department
                  ? course[this.state.department].map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))
                  : null}
              </TextField>
            </Grid>

            <Divider />
            <Grid item xs={12}>
              <Grid container justify="center" spacing={24}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.OpenSlide()}
                  >
                    View Online
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.OpenSlidePDF()}
                  >
                    View as PDF
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => this.OpenSlidePDFDownload()}
                  >
                    Download as PDF
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default CourseForm;
