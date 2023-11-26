import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import { courses } from "../data/courses";
import { AppText } from "../components";

function createData(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  courseIds: string[]
) {
  const userCourses = courseIds.map((courseId) => {
    const course = courses.find((c) => c.id === parseInt(courseId));
    return course;
  });

  return {
    firstName,
    lastName,
    email,
    phone,
    courses: userCourses,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName}
        </TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Courses
              </Typography>
              <Table size="small" aria-label="">
                <TableHead>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>Author</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.courses.map((course) => (
                    <TableRow key={course?.course}>
                      <TableCell component="th" scope="row">
                        {course?.course}
                      </TableCell>
                      <TableCell>{course?.author}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const UsersList = () => {
  const { loading, users, error } = useContext(UsersContext);

  if (loading) return <AppText text="Please wait..." variant="h5" />;

  if (error)
    return (
      <AppText
        text="An error occured.... please refresh the page"
        variant="h5"
      />
    );

  if (!users.length) return <AppText text="No Users in the DB" variant="h5" />;

  const rows = users.map((user) => {
    return createData(
      user.firstName,
      user.lastName,
      user.email,
      user.phone,
      user.courses
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.email} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
