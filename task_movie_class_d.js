class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    
    }
}

let movie1 = new movie ("Casino Royale","Eon Productions","PG13")
console.log(movie1);