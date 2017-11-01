let getInfo = () => {
    let firstName, lastName, email, password, doc, obj;
    doc = document;
    obj = {
        user: {
            first_name: doc.getElementById("firstName").value,
            last_name: doc.getElementById("lastName").value,
            email: doc.getElementById("email").value,
            password: doc.getElementById("password").value,
            password_confirmation: doc.getElementById("password").value
        }
    }
    
//    var jsn = JSON.stringify(obj)
    
    var request = new XMLHttpRequest();
    request.open("POST", "https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_up", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(obj));
    
    
    console.log(JSON.stringify(obj))
}
