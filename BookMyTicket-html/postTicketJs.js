function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'MovieData.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function PushTicket() {

    var ticket = {};
    loadJSON(function (response) {
// Parse JSON string into object
        var table = document.getElementById("userDetails");
        var json_array = JSON.parse(response);
        if(!localStorage.hasOwnProperty("jsonObject"))
        {
            localStorage.setItem("jsonObject", JSON.stringify(response));
        }
        else
        {
            json_array = JSON.parse(localStorage.getItem("jsonObject"));
        }
        console.log(json_array);


            ticket.movie_name = document.getElementById("movie_name").value;
            ticket.No_of_Tickets = document.getElementById("No_of_Tickets").value;
            ticket.Cost = document.getElementById("Cost").value;
            ticket.state = document.getElementById("state").value;
            ticket.District = document.getElementById("District").value;
            ticket.place = document.getElementById("place").value;
            ticket.image = document.getElementById("image").value;
            ticket.date = document.getElementById("date").value;
            json_array.push(ticket);

            localStorage.setItem("jsonObject",JSON.stringify(json_array));
            console.log(JSON.parse(localStorage.getItem("jsonObject")));

    });
}