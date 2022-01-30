//user class created with class declaration.
class User{

    //constructor for the user class with params ...
    constructor(universities){
        this.universities = universities;
    }

    //method to add the university names to the html.
    initUniversities(){

        //adding the universities to the html using DOM methods.
        for (let i = 0; i < this.universities.length; i++){
            var tempUniButton = document.createElement("button"); //temporary button.
            tempUniButton.id = i; //setting new id for the button.
            var preTag = document.getElementById("university_section"); //the existing pre tag with id "university_section".
            tempUniButton.innerHTML = this.universities[i]; //setting the text inside the temporary button to the current university name at index i.
            preTag.appendChild(tempUniButton); //the empty pre tag, is accessed with university_section and appends the temporary button.
            preTag.innerHTML += "\n"; //the empty pre tag now appends a new line.
        }
    }
}


//an array of all canadian universities.
const universities = ["Acadia University", "Algoma University", "Ambrose University", "Aurora College",
"Bishop's University", "Brandon University", "British Columbia Institute of Technology", "Brock University", "Burman University", 
"Campion College at the University of Regina", "Canadian Mennonite University", "Cape Breton University", "Capilano University", 
"Carleton University", "College of the North Atlantic", "Collège Universitaire Dominicain", "Concordia University", "Concordia University of Edmonton",
"Crandall University", "Dalhousie University", "École de Technologie Supérieure", "École Nationale d'Administration Publique", "École Polytechnique de Montréal",
"Emily Carr University of Art and Design", "First Nations University of Canada", "HEC Montréal", "Kingswood University", "Kwantlen Polytechnic University",
"Lakehead University", "Laurentian University", "Luther College at the University of Regina", "MacEwan University", "McGill University", "McMaster University",
"Memorial University of Newfoundland", "Mount Allison University", "Mount Royal University", "Mount Saint Vincent University", "Nicola Valley Institute of Technology",
"Nipissing University", "Northern Alberta Institute of Technology", "NSCAD University", "OCAD University", "Ontario Tech University", "Queen's University", "Quest University Canada",
"Redeemer University College", "Royal Military College of Canada", "Royal Roads University", "Ryerson University", "Saint Mary's University",
"SAIT Polytechnic", "Simon Fraser University", "St Mary's University", "St. Francis Xavier University", "St. Stephen's University",
"St. Thomas More College", "St. Thomas University", "The King’s University", "The University of British Columbia", 
"The University of Winnipeg", "Thompson Rivers University", "Trent University", "Trinity Western University", "Université de Hearst",
"Université de Moncton", "Université de Montréal", "Université de Saint-Boniface", "Université de Sherbrooke", "Université du Québec",
"Université du Québec à Chicoutimi", "Université du Québec à Montréal", "Université du Québec à Rimouski", "Université du Québec à Trois-Rivières",
"Université du Québec en Abitibi-Témiscamingue", "Université du Québec en Outaouais", "Université Laval", "Université Sainte-Anne",
"University Canada West", "University of Alberta", "University of Calgary", "University of Guelph", "University of King's College",
"University of Lethbridge", "University of Manitoba", "University of New Brunswick", "University of Northern British Columbia", "University of Ottawa",
"University of Prince Edward Island", "University of Regina", "University of Saskatchewan", "University of the Fraser Valley", "University of Toronto",
"University of Victoria", "University of Waterloo", "University of Windsor", "Vancouver Island University", "Western University",
"Wilfrid Laurier University", "York University", "Yorkville University"];

const user = new User(universities); //user object.
user.initUniversities(); //adding all the universities to the html.
console.log(user); //console log user object.

//function which is executed upon clicking one of the universities.
function nextPage(){
    let index = event.target.id // event.srcElement is depreceated, event.target is recommended instead. Index is the button id from the onclick event. This id was made to correspond to universities[index].
    
    let uniChosen = universities[index]; //the university chosen.

    window.location.replace("university.html"); //switching to university.html file.

    localStorage.setItem("uniChosen", uniChosen); //key is the string "uniChosen" and value is the university chosen (uniChosen variable).
    
}