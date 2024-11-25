let submissions = [
    { name: "Jane", score: 95, passed: true },
    { name: "Joe", score: 77, passed: true },
    { name: "Jack", score: 59, passed: false },
    { name: "Jill", score: 88, passed: true },
  ];
  
function addSubmission(array, newName, newScore) {
  let newStudentSubmission = {
    name: newName,
    score: newScore,
    passed: newScore >= 60
  };
  array.push(newStudentSubmission);
}
addSubmission(submissions, "Imogen", 62);
console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submission) => submission.name === name);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

function editSubmission(array, index, score) {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
}
editSubmission(submissions, 2, 65);
console.log(submissions);

function findSubmissionByName(array, name) {
  return array.find((submission) => submission.name === name);
}
const result = findSubmissionByName(submissions, "Imogen");
console.log(result);

function findLowestScore(array) {
  return array.reduce((lowest, current) => {
    return current.score < lowest.score ? current : lowest;
  });
}
console.log(findLowestScore(submissions));

function findAverageScore(array) {
  const sumOfAll = array.reduce((sum, submission) => sum + submission.score, 0);
  return sumOfAll / array.length;
}
console.log(findAverageScore(submissions)); 

function filterPassing(array) {
  return array.filter((submission) => submission.passed === true);
}
console.log(filterPassing(submissions));

function filter90AndAbove(array) {
  return array.filter((submission) => submission.score >= 90);
}
console.log(filter90AndAbove(submissions));

