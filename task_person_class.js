class person {
    constructor(name,age,location,qualification){
        this.name = name;
        this.age = age;
        this.location = location;
        this.qualification = qualification;
    
    }
    getDetails(){
        return(`${this.name} of age ${this.age} from ${this.location} have completed ${this.qualification}`)
    }
}
let profile = new person ("Priyanka","25","Pondicherry","B.Tech")
console.log(profile.getDetails());