class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

    let movie1 = new movie ("vikram","rajkamal studios","R")
    let movie2 = new movie ("Sarkar","Sun Productions","PG")
    let movie3 = new movie ("leo","7 screen studio","PG")
    let movie4 = new movie ("Ponniyin Selvan","Lyca Production","R")
    let movie5 = new movie ("Teddy","studio green","PG")

    let movieArray =[movie1,movie2,movie3,movie4,movie5]

    var result= movieArray.filter(getPG => getPG.rating == "PG");
    console.log(result)