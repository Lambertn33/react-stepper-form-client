import { useContext } from "react";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";
import { UsersContext } from "../context/UsersContext";
import { courses, Course } from "../data/courses";
import { AppCard, AppButton, AppCheckbox, AppText } from "../components";

export const Review = () => {
  const { userData, setStep } = useContext(UsersContext);
  const selectedCourses: Course[] = [];

  userData["courses"].map((courseId) => {
    const selectedCourse = courses.filter((c) => c.id === parseInt(courseId));
    selectedCourses.push(selectedCourse[0]);
  });

  const handleContinue = () => {};

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
                <>
                  <ListItem>
                    <ListItemText>
                      {course.course} by <b>{course.author}</b>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
          <AppCheckbox
            checked={false}
            label="I agree to the terms and conditions"
            onChange={() => null}
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
            onClick={handleContinue}
            disabled={false}
            label="Submit"
            type="button"
          />
        </Box>
      </Box>
    </AppCard>
  );
};
