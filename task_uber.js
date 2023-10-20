class Uber {
    constructor(distance,rate,waitingperiod,excedDistance){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod= waitingperiod;
        this.excedDistance=excedDistance;
    }
    setDistance(dist){
        this.distance=dist;
    }
    getRideDetails(){
        return(`Kindly find the Price split up: The distance of the ride is ${this.distance}Km with rate of ${this.rate} 
        with a waiting period of ${this.waitingperiod} and the distance exceeded is ${this.excedDistance}Km`)
}
getPrice(){
let price =(this.distance * this.rate) + (5*this.waitingperiod) + ((10+this.rate)*this.excedDistance)
return (`Total fare is ${price}`);
}
    }

let uber1 = new Uber (400, 20, 10,5);
console.log(uber1.getPrice())
console.log(uber1.getRideDetails())