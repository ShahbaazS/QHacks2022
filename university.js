class University{
    constructor(uniChosen){
        this.uniChosen = uniChosen;
        document.getElementById("university_chosen").innerHTML = this.uniChosen;
    }
}

let uniChosen = localStorage.getItem("uniChosen"); //the uniChosen obtained from the local storage key "uniChosen".

const university = new University(uniChosen);
console.log(window.uniChosen);