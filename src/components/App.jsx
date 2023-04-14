import { Route, Routes } from 'react-router';
import { ListCourses } from 'pages/ListCourses';
import { CurrentCourse } from 'pages/CurrentCourse';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListCourses />} />
      <Route path="/course/:courseId" element={<CurrentCourse />} />
    </Routes>
  );
};
