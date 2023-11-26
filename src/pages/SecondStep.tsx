import { useState, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { UsersContext } from "../context/UsersContext";
import { AppCard, AppButton, AppCheckbox, AppText } from "../components";
import { courses } from "../data/courses";

export const SecondStep = () => {
  const { setStep, setUserData, userData } = useContext(UsersContext);
  const [selectedCoursesIds, setSelectedCoursesIds] = useState<number[]>(
    userData.courses.map((courseId) => parseInt(courseId, 10)) || []
  );

  // adding course
  const addCourse = (id: number) => {
    setSelectedCoursesIds((prevState) => {
      const updatedCoursesIds = [...prevState, id];
      updateUserData(updatedCoursesIds);
      return updatedCoursesIds;
    });
  };

  // removing course
  const removeCourse = (id: number) => {
    const filteredCoursesIds = selectedCoursesIds.filter(
      (courseId) => courseId !== id
    );
    updateUserData(filteredCoursesIds);
    setSelectedCoursesIds(filteredCoursesIds);
  };

  // update user courses context
  const updateUserData = (courseIds: number[]) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      courses: courseIds.map((id) => id.toString()),
    }));
  };

  const isFormValid = selectedCoursesIds.length;

  const isCourseSelected = (id: number) => selectedCoursesIds.includes(id);

  const handleContinue = () => setStep(3);

  const handleBack = () => setStep(1);

  // Update selectedCoursesIds when userData.courses change
  useEffect(() => {
    setSelectedCoursesIds(
      userData.courses.map((courseId) => parseInt(courseId, 10)) || []
    );
  }, [userData.courses]);

  return (
    <AppCard>
      <Box display="flex" flexDirection="column">
        <AppText variant="subtitle1" text="Select favorite courses" />
        {courses.map((course) => (
          <AppCheckbox
            key={course.id}
            label={course.course}
            value={course.id}
            checked={isCourseSelected(course.id)}
            onChange={(courseId, checked) =>
              checked ? addCourse(courseId) : removeCourse(courseId)
            }
          />
        ))}
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
          disabled={!isFormValid}
          label="Continue"
          type="button"
        />
      </Box>
    </AppCard>
  );
};