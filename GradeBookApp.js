function getAverage(testScores) {
  let totalScores = 0;
  for(let i=0; i < testScores.length; i++) {
    totalScores += testScores[i];
  }
  const result = totalScores / testScores.length;
  return result;
}



function getGrade(score) {
  if(score == 100) {
    return "A+";
  }
  else if(score <= 99 && score >= 90) {
    return "A";
  }
  else if(score <= 89 && score >= 80) {
    return "B";
  }
  else if(score <= 79 && score >= 70) {
    return "C";
  }
  else if(score <= 69 && score >= 60) {
    return "D";
  }
  else if(score <= 59 && score >= 0) {
    return "F"
  }
}


function hasPassingGrade(score) {
  if (getGrade(score) == "F"){
    return false;
  }else {
    return true;
  }
}



function studentMsg(testScores, score) {

  if(hasPassingGrade(score) == true) {
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(score)}. You passed the course.`
  }
  else if(hasPassingGrade(score) == false) {
    return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
}

const output = studentMsg([5, 5, 5], 67)
console.log(output)