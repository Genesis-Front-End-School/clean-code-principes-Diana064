import { CourseById } from 'components/CourseById/CourseById';
import { useState, useEffect } from 'react';
import * as ImageService from '../components/services/api';
import { useParams } from 'react-router';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loading/Loading';
export const CurrentCourse = () => {
  const [course, setCourse] = useState([]);
  const [error, setError] = useState('');
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ImageService.getCoursById(courseId);
        setCourse(response);
      } catch (error) {
        setError(error);
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
    return;
  }

  return (
    <>
      {error ? (
        <>{error.message}</>
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
            <Loader />
          )}
        </>
      )}
    </>
  );
};
