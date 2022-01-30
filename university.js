class University{
    constructor(uniChosen){
        this.uniChosen = uniChosen;
        document.getElementById("university_chosen").innerHTML = this.uniChosen + " course review";
    }


}

let uniChosen = localStorage.getItem("uniChosen"); //the uniChosen obtained from the local storage key "uniChosen".

const university = new University(uniChosen);

function addReview(){
    let courseName = "Course Name: " + document.getElementById("course").value +"\n"; //using DOM method with .value to get the user entered course in the text area.
    console.log(courseName);
    let courseReview = "Review: " + document.getElementById("review").value + "\n\n\n"; //using DOM method with .value to get the user entered review in the text area.
    console.log(courseReview);
    let review = courseName + courseReview;

    document.getElementById("course_review").innerHTML += (review);

    document.getElementById("submit").disabled = true; //disable the button now that the user entered their course review.

}