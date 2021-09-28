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
}
var dataBase=[];
function addPlus(){
    dataBase.push(newUser);
    console.log(dataBase);
};