class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getDetails(){
        return(`Movie ${this.title} from ${this.studio} has got ${this.rating} ratings`)
    }
}
let movie1 = new movie ("vikram","rajkamal studios","9")
console.log(movie1.getDetails());


