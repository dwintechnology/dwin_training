// randomly alerts student name

function randomName(){
    let studentsArray = ["Tigran", "AnnaK", "Jorj", "Sasun", "Artur", "Maria", "Varuzh", "Suro", "Arman", "Siranush", "AnnaM"];
    let i = Math.floor(Math.random() * 11);
    alert(studentsArray[i]);

}