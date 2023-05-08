import MockAdapter from 'axios-mock-adapter';
import { getCourses, getCoursById } from './api';
const axios = require('axios');
describe('courses API', () => {
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  describe('getCourses', () => {
    it('returns a list of courses', async () => {
      const courses = [
        { id: 1, title: 'Course 1' },
        { id: 2, title: 'Course 2' },
      ];
      mock
        .onGet('https://api.wisey.app/api/v1/core/preview-courses?token=...')
        .reply(200, { courses });

      const result = await getCourses();

      expect(result).toEqual(courses);
    });
  });

  describe('getCoursById', () => {
    it('returns a course with the specified ID', async () => {
      const course = { id: 1, title: 'Course 1' };
      mock
        .onGet('https://api.wisey.app/api/v1/core/preview-courses/1?token=...')
        .reply(200, course);

      const result = await getCoursById('1');

      expect(result).toEqual(course);
    });
  });
});
