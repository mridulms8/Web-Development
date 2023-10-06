// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function(){
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`
// }

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRgb() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        console.log(`rgb(${this.innerRgb()})`);
    }
    rgba(a = 1.0) {
        console.log(`rgb(${this.innerRgb()},${a})`);
    }
}
