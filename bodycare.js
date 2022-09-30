const movies=[
    {
        name:"",
        price: ,
        rating: ,
        img: ""
    },
    
];

localStorage.setItem("movies", JSON.stringify(movies));
let data=JSON.parse(localStorage.getItem("movies"));
function appendMovies(data){
    let data_div=document.getElementById("basic") || document.getElementById("movies");
    //data_div.innerHTML=null;
    data_div.id="movies";
    data.forEach(function(el){
        let div=document.createElement("div");
        
        let name=document.createElement("p");
        name.innerHTML=`Name: ${el.name}`;

        let year=document.createElement("p");
        year.innerHTML=`Year: ${el.year}`;

        let rating=document.createElement("p");
        rating.innerHTML=`Rating: ${el.rating}`;

        let img=document.createElement("img");
        img.id="poster";
        img.src=el.img;

        div.append(img,name,year,rating);
        data_div.append(div);
    })
}


function sortLH(){
    let data=JSON.parse(localStorage.getItem("movies"));
    data=data.sort((a, b) => a.rating-b.rating);
    appendMovies(data);
}

function sortHL(){
    let data=JSON.parse(localStorage.getItem("movies"));
    data=data.sort((a, b) => b.rating - a.rating);
    appendMovies(data);
}

function sortTopRating(){
    let data=JSON.parse(localStorage.getItem("movies"));
    data=data.sort((a, b) => b.rating - a.rating);
    appendMovies(data);
}