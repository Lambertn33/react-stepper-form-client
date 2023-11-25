import { useState } from "react";
import { Box } from "@mui/material";
import { AppCard, AppCheckbox, AppText } from "../components";
import { courses } from "../data/courses";

export const SecondStep = () => {
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

  const isCourseSelected = (id: number) => selectedCoursesIds.includes(id);

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
    </AppCard>
  );
};
