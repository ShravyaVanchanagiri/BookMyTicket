/**
 * Created by vanchanagiri shravya on 12/21/2016.
 */
(function($) {
    $(function(){ // ON DOM READY
        $.getJSON('MovieData.json', function(movies) {
            $.each(movies, function (key, val) {
                html = '<div class="image-list">';
                html += '<img src ="' + val.image + '" class="image-styles" />';
                html += '<p class="image-title">' + val.movie_name + '</p>';
                html += '</div>';
                $('#target').append(html);
            });
        });
    }); // end of on DOM READY
}(jQuery));
