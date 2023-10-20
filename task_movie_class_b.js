class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    
    }

    getDetails(){
        return(`Movie ${this.title} from ${this.studio} has got ${this.rating} ratings`)
    }
}

let movie1 = new movie ("vikram","rajkamal studios")
let movie2 = new movie ("leo","7 screen studio","9.2")
console.log(movie1.getDetails());
console.log(movie2.getDetails());
