let writeSomething = prompt("Write something if you want to!");
if (writeSomething) {
    console.log("TRUTHY");
    alert("TRUTHY");
} else {
    console.log("FALSY");
    alert("FALSY");
}

if (null) {
    console.log("null is TRUTHY");
} else {
    console.log("null is FALSY");
}

if (undefined) {
    console.log("undefined is TRUTHY");
} else {
    console.log("undefined is FALSY");
}

if (0) {
    console.log("0 is TRUTHY");
} else {
    console.log("0 is FALSY");
}

if (NaN) {
    console.log("NaN is TRUTHY");
} else {
    console.log("NaN is FALSY");
}