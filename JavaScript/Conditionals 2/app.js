// A Valid password must have
// 1. a length of more than six letters
// 2. no space between the letters

let password = prompt("ENTER A PASSWORD");
if (password.length >= 6) {
    // NOW TO CHECK THE SPACE BETWEEN THE LETTERS OF A PASSWORD
    if (password.indexOf(' ') === -1) {
        console.log("GOOD JOB! A VALID PASSWORD.");
        alert("GOOD JOB! A VALID PASSWORD.");
    } else {
        console.log("PASSWORD MUST NOT HAVE SPACES BETWEEN THE LETTERS!");
        alert("PASSWORD MUST NOT HAVE SPACES BETWEEN THE LETTERS!");
    }
} else {
    console.log("PASSWORD IS NOT LONG ENOUGH! REFRESH AND TRY AGAIN");
    alert("PASSWORD IS NOT LONG ENOUGH! REFRESH AND TRY AGAIN");
}