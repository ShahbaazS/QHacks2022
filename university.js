class University{
    constructor(uniChosen){
        this.uniChosen = uniChosen;
        document.getElementById("university_chosen").innerHTML = this.uniChosen + " course review"; //setting the header of the page to be "uni name " + "course review"
    }

    setReview(courseReview){
        this.previousReview = courseReview;

        //putting the previous valid reviews on screen. 
        document.getElementById("course_review").innerHTML = this.previousReview;


    }

    //add review method.
    addReview(){
        let courseName = document.getElementById("course").value +"\n"; //using DOM method with .value to get the user entered course in the text area.
        console.log(courseName);
        let courseReview = document.getElementById("review").value + "\n\n\n"; //using DOM method with .value to get the user entered review in the text area.
        console.log(courseReview);
        const d = new Date();
        //let todaysDate = d.getDate() + "\"" + d.getMonth(); + "\"" + d.getYear(); + "\n";
        //"Date: " + todaysDate + 

        let review = "Course Name: " + courseName +  "Review: " +  courseReview;

        //splitting the periods into new lines in case the user does not enter periods.
        review = review.split(".");
        review = review.join('.</br>');

        if(this.previousReview !== null && this.previousReview !== undefined){

            //first -- checking to see if the course name and review entered are valid.
            if(courseName.trim() !== "" || courseReview.trim() !== ""){
                //there is an existing previous review for this university and the course entered is valid.
                document.getElementById("course_review").innerHTML += (review); //appending the new review.
                document.getElementById("submit").disabled = true; //disable the button now that the user entered their course review.

                console.log("review "+ review)
                console.log("prev review "+ this.previousReview)

                this.previousReview += review; //previous review is now contains the new review.
            }
            else{
                //otherwise the user is alerted to enter a valid course review.
                alert("Please enter a valid course review.")
            }
        }

        else{
            //there is no previous review for this university. This is the users first review of a course at this university.
            if(courseName.trim() !== "" || courseReview.trim() !== ""){
                //there is an no previous review for this university and the course entered is valid.
                document.getElementById("course_review").innerHTML += (review); //appending the new review.
                document.getElementById("submit").disabled = true; //disable the button now that the user entered their course review.

                console.log("review "+ review)

                this.previousReview = review; //previous review is now the new review.
            }
            else{               
                //otherwise the user is alerted to enter a valid course review.
                alert("Please enter a valid course review.")
            }
        }
        localStorage.setItem(uniChosen, this.previousReview); //set the course review locally to the user machine.

}//end of addReview() function.

}//end of class University.

let uniChosen = localStorage.getItem("uniChosen"); //the uniChosen obtained from the local storage key "uniChosen".

const university = new University(uniChosen);

const allReviews = [];

let previousReview = localStorage.getItem(uniChosen); //if there is a previous review done by this person then it is retrieved.
console.log(previousReview);

if(this.previousReview !== null){
    university.setReview(previousReview); //setting the valid previous review.
}

function addReview(){
    university.addReview(); //adding the course review.
    
}   