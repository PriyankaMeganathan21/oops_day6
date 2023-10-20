class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
     }
     setRadius(radius){
        this.radius = radius;
     }
     getColor(){
        return this.color;
     }
     setColor(color){
        this.color = color;
     }
     toString(){
        return `The circle with color ${this.color} has a radius of ${this.radius}`;
     }
     getArea(){
        return Math.PI*this.radius*this.radius;
     }
     getCircumference(){
        return 2 * Math.PI * this.radius;
     }
}


let circle1 = new circle(1.0,"red");
console.log (circle1)
console.log(circle1.getRadius());
console.log(circle1.getColor());
console.log(circle1.toString());
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());



