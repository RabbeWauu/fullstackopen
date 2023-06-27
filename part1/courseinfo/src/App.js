const App = () => {
  const Header = (course) => {
    console.log(course);
    return (
      <header>
        <h1>Course name: {course.course}</h1>
      </header>
    );
  };

  const Content = (content) => {
    console.log(content);
    return (
      <div>
        <h2>Part: {content.part}</h2>
        <h3>Exercises amount: {content.amount}</h3>
      </div>
    );
  };

  const Total = (total) => {
    console.log(total);
    return (
      <div>
        <h2>Total amount of exercises: {total.total}</h2>
      </div>
    );
  };
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} amount={exercises1} />
      <Content part={part2} amount={exercises2} />
      <Content part={part3} amount={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
