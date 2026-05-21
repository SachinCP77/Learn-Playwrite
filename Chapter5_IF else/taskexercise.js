let statuscode = 803;

if ((statuscode >= 200 && statuscode <= 299)) {
    console.log("Success")
}
else if ((statuscode >= 300 && statuscode <= 399)) {
    console.log("Rediredirection")
}
else if ((statuscode >= 400 && statuscode <= 499)) {
    console.log("Client error")
}
else if ((statuscode >= 500 && statuscode <= 599)) {
    console.log("Server error")
}
else {
    console.log("Invalid")
}
