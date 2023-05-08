export type CourseType = {
  id: number;
  rating: number;
  meta: {
    skills: string[];
    courseVideoPreview: {
      link: string;
    };
  };
  lessons: LessonType[];
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  tags: string[];
  lessonsCount: number;
  previewImageLink: string;
  containsLockedLessons: boolean;
};
export type LessonType = {
  id: number;
  title: string;
  description: string;
  steps: string[];
  status: 'locked' | 'unlocked';
  completed: boolean;
  duration: string;
  link: string;
  previewImageLink: string;
  order: string;
};
export type DetailedLessonState = { [key: number]: boolean };
