const pow = (a,b) => {
    let res = 1;
    while(b){
       res *= a;
       b--; 
    }
    return res;
}
const sourcePath = () =>{
    return process.argv[1];
}
exports.pow = pow;
exports.sourcePath =sourcePath;