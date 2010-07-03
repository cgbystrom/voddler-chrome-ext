$(document).ready(function () {
    $('.movie_browse_listing .rating').each(function () {
        var e = $(this);
        var titleLink = $('a.title', e.parent().parent()).first();
        var title = titleLink.attr('title'); 
        e.attr('style', 'padding-top: 4px');
        chrome.extension.sendRequest({action: 'getImdbRating', title: title}, function (data) {
            if (data.rating == null) data.rating = '?';
            e.html('<a href="' + data.url + '" style="color: #333">IMDB</a> ' + data.rating);
            //console.log("Title: " + data.title + " is rated " + data.rating + " with " + data.url);
        });
    });
});
