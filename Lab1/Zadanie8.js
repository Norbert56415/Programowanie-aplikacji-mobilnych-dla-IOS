const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const zaliczenie = 3;

function studentGrades(grades){
//średnia
const avgGrades = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(avgGrades);

//check zaliczenia
const status = avgGrades >= zaliczenie ? "Zaliczone" : "Niezaliczone"; 
console.log(status);

let classification;
if (avgGrades >= 4.5){
    classification = "bardzo dobry";    
} else if ( avgGrades >= 4.0){
    classification = "dobry";
} else if ( avgGrades >= 3) {
    classification = "dostateczn";
} else {
    classification = " niedostateczny";
}


return {
    avgGrades,
    status,
    classification
};
}

console.log(studentGrades(grades));
