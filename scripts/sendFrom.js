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
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            alert("welcome!");			
        };
    };
    
    
    console.log(JSON.stringify(obj))
}

let logIn = () => {
    let email, password, doc, obj;
    doc = document;
    obj = {
        email: doc.getElementById("email").value,
        password: doc.getElementById("password").value
    };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_in", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj));
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("welcome!");			
        }
    };
    console.log(JSON.stringify(obj));
}
