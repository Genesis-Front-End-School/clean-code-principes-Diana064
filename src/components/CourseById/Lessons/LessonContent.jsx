export const LessonContent = ({ lesson }) => {
  return (
    <div>
      <h4>{lesson.title}</h4>
      <p>{lesson.description}</p>
      <ul>
        {lesson.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </div>
  );
};
