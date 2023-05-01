import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as ImageService from '../services/api';
import Pagination from 'components/Pagination/Pagination';
import { CoursesItem } from './CoursesItem/CoursesItem';
import { Loader } from 'components/Loading/Loading';
import {
  CoursesList,
  CourseItemWrapper,
  StyledLink,
  Title,
  CourseListWrapper,
} from './Courses.module';
import { CourseType } from 'types/ComponentsType';

export const Courses: React.FC = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  // Variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const totalPages = Math.ceil(courses.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, courses.length);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await ImageService.getCourses();
        setCourses(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <>{error.message}</>
      ) : (
        <>
          <CourseListWrapper>
            {!loading && courses ? (
              <>
                <Title>List of courses</Title>
                <CoursesList>
                  {courses.slice(startIndex, endIndex).map(course => (
                    <CourseItemWrapper key={course.id}>
                      <StyledLink
                        to={`/course/${course.id}`}
                        state={{ from: location }}
                      >
                        <CoursesItem course={course} />
                      </StyledLink>
                    </CourseItemWrapper>
                  ))}
                </CoursesList>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                  pageSize={pageSize}
                />
              </>
            ) : (
              <Loader height="80" width="80" radius="9" visible={true} />
            )}
          </CourseListWrapper>
        </>
      )}
    </>
  );
};
