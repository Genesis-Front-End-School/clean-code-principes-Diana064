export type CourseType = {
  id: string;
  rating: number;
  meta: {
    skills: string[];
    courseVideoPreview: string;
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
