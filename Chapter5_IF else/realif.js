let isloggedin = true;
let role = "tditor";

if (isloggedin) {
    if (role === "Admin") {
        console.log("Admin role")
    }
    else if (role === "Editor") {
        console.log("Editor role")
    }
    else if (role === "user") {
        console.log("User role")
    }

    else {
        console.log("Role not defined")
    }
}