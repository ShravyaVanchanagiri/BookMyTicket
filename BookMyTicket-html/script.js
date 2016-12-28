/**
 * Created by vanchanagiri shravya on 12/21/2016.
 */
(function($) {
    $(function(){ // ON DOM READY
        $.getJSON('MovieData.json', function(movies) {
            console.log("movies === "+movies[0].movie_name);

            var jsonObject =movies;

            if(!localStorage.hasOwnProperty("jsonObject"))
            {
                console.log("has not");
                localStorage.setItem("jsonObject",JSON.stringify(jsonObject));
            }
            else
            {
                console.log("has ");

                 jsonObject = JSON.parse(localStorage.getItem("jsonObject"));
            }
            console.log(jsonObject);
            $.each(jsonObject, function (key, val) {
                html = '<div class="image-list">';
                html += '<img src ="' + val.image + '" class="image-styles" />';
                html += '<p class="image-title">' + val.movie_name + '</p><br>  ';
                html +='<span id="costTimings"> Cost =Rs.'+val.Cost + '/- "<br>" Time '+val.date+"</span>";
                html += '</div>';

                $('.target').append(html);
            });
        });
    }); // end of on DOM READY
}(jQuery));
