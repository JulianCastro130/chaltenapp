function capture(){
    function User(user,country){
        this.user=user;
        this.country=country;
    }
    var userCapture = document.getElementById("user").value;
    var countryCapture = document.getElementById("country").value;

    newUser = new User(userCapture,countryCapture);
    console.log(newUser);
    addPlus()
    localStorage.setItem('nameUser', JSON.stringify(userCapture))
    localStorage.setItem('countryUser', JSON.stringify(countryCapture))
}
var dataBase=[];
function addPlus(){
    dataBase.push(newUser);
    console.log(dataBase);
};
// MODAL
$(document).ready(function(){
    setTimeout(function(){
        $("#myModal").modal("show");
    }, 2000);
});