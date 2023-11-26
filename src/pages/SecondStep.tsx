import { useState, useContext } from "react";
import { Box } from "@mui/material";
import { UsersContext } from "../context/UsersContext";
import { AppCard, AppButton, AppCheckbox, AppText } from "../components";
import { courses } from "../data/courses";

export const SecondStep = () => {
  const { setStep } = useContext(UsersContext);
  const [selectedCoursesIds, setSelectedCoursesIds] = useState<number[]>([]);

  const addCourse = (id: number) => {
    setSelectedCoursesIds((prevState) => {
      return [...prevState, id];
    });
  };

  const removeCourse = (id: number) => {
    const filteredCoursesIds = selectedCoursesIds.filter(
      (courseId) => courseId !== id
    );
    setSelectedCoursesIds(filteredCoursesIds);
  };

  const isFormValid = selectedCoursesIds.length;

  const isCourseSelected = (id: number) => selectedCoursesIds.includes(id);

  const handleContinue = () => setStep(3);

  const handleBack = () => setStep(1);

  return (
    <AppCard>
      <Box display="flex" flexDirection="column">
        <AppText variant="subtitle1" text="select favourite courses" />
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
