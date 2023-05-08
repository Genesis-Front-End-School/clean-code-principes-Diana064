import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import * as ImageService from '../components/services/api';
import { CourseById } from 'components/CourseById/CourseById';
import { Loader } from 'components/Loading/Loading';
import { CourseType } from '../types/ComponentsType';

const CurrentCourse = () => {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [error, setError] = useState('');
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ImageService.getCoursById(courseId);
        setCourse(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [courseId]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!course) {
    return null;
  }

  return (
    <>
      {error ? (
        <>{error}</>
      ) : (
        <>
          {!isLoading ? (
            <>
              <CourseById
                course={course}
                handleGoBack={handleGoBack}
                isLoading={isLoading}
              />
            </>
          ) : (
            <Loader height="80" width="80" radius="9" visible={true} />
          )}
        </>
      )}
    </>
  );
};

export default CurrentCourse;
