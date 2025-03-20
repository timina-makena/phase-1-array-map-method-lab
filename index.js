const tutorials = [
  'What does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'What is the difference between == and ===?',
  'What is the difference between event capturing and bubbling?',
  'What is JSONP?'
];

const titleCased = () => {
  return tutorials.map((element) => {
    return element
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
}
