import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/core/preview-courses';
const token =
  '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzZDJlMzMyMC01Y2I0LTRiMDEtODdiOC00MzVkMzFjMGIzZWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MjYwMDksImV4cCI6MTY3OTcyNjAwOX0.Ij4seua1vaPrlDMkodcNIfGjd4fXbKxHlkxHPj3ts1k';

export const getCourses = async () => {
  const response = await axios.get(`${token}`);
  return response.data.courses;
};
export const getCoursById = async courseId => {
  const response = await axios.get(`/${courseId}${token}`);
  return response.data;
};
