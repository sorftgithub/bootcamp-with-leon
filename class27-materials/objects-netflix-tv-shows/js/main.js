//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow{
    constructor(title,genre,rating,numOfEpisodes){
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEpisodes = numOfEpisodes
    }
    start(){
        console.log("Startingggg")
    }
    stop(){
        console.log("stopingggg")
    }
    skip(){
        console.log("Skip Intro!")
    }
}

let from = new NetflixShow("from","action", "99%", 20)