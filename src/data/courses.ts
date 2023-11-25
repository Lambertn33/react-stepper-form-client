export interface Course {
  id: number;
  course: string;
  author: string;
}

export const courses: Course[] = [
  {
    id: 1,
    author: "Maximilian Schwazmuller",
    course: "Advanced React concept",
  },
  {
    id: 2,
    author: "Most Hamedani",
    course: "Typescript course",
  },
  {
    id: 3,
    author: "Traversy Media",
    course: "Laravel & Vue.js",
  },
  {
    id: 4,
    author: "The net ninja",
    course: "Advanced styling with tailwindcss",
  },
];
