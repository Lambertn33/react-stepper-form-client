import { useContext, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import axios, { AxiosError } from "axios";

import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";

import { UsersContext } from "../context/UsersContext";
import { AppCard, AppButton, AppCheckbox, AppText } from "../components";
import { courses, Course } from "../data/courses";

import { POST } from "../api/api";
import { UserInterface } from "../interfaces";

export const Review = () => {
  const { userData, setStep, addUser, setUserData, setUserServerErrors } =
    useContext(UsersContext);
  const [isDataReady, setDataReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const selectedCourses: Course[] = [];

  userData["courses"].map((courseId) => {
    const selectedCourse = courses.filter((c) => c.id === parseInt(courseId));
    selectedCourses.push(selectedCourse[0]);
  });

  //save data to backend
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await POST(userData);
      if (response.status === 201) {
        const { newUser } = response.data as { newUser: UserInterface };
        addUser(newUser);
        setStep(1);
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          courses: [],
        });
        history.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setStep(1);
        const axiosError = error as AxiosError<{ errors?: { msg: string }[] }>;
        setUserServerErrors(
          axiosError?.response?.data?.errors as { msg: string }[]
        );
      }
    }
    setIsSubmitting(false);
  };

  const handleBack = () => setStep(2);

  return (
    <AppCard>
      <Box display="flex" flexDirection="column">
        <AppText variant="h5" text="User Information" />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
        >
          <AppText
            variant="subtitle1"
            text={`First name: ${userData["firstName"]}`}
          />
          <AppText
            variant="subtitle1"
            text={`Last name: ${userData["lastName"]}`}
          />
          <AppText variant="subtitle1" text={`Email: ${userData["email"]}`} />
          <AppText variant="subtitle1" text={`Phone: ${userData["phone"]}`} />
        </Box>
        <AppText variant="h5" text="Selected courses" />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
        >
          <List>
            {selectedCourses.map((course) => {
              return (
                <Fragment key={course.id}>
                  <ListItem>
                    <ListItemText>
                      {course.course} by <b>{course.author}</b>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </Fragment>
              );
            })}
          </List>
          <AppCheckbox
            checked={isDataReady}
            label="I agree to the terms and conditions"
            onChange={() => setDataReady(!isDataReady)}
            disabled={isSubmitting}
          />
        </Box>
        <Box display="flex" gap={2}>
          <AppButton
            color="error"
            disabled={false}
            label="Back"
            type="button"
            onClick={handleBack}
          />
          <AppButton
            color="primary"
            onClick={handleSubmit}
            disabled={!isDataReady || isSubmitting}
            label={isSubmitting ? "Please wait" : "Submit"}
            type="button"
          />
        </Box>
      </Box>
    </AppCard>
  );
};
