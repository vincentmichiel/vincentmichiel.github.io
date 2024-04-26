// button links
document.getElementById('title')
    .addEventListener('click', function () {
        window.location.href = '../index.html';
    });

document.getElementById('footerhome')
    .addEventListener('click', function () {
        window.location.href = '../index.html';
    });

// button links
document.getElementById('footerabout')
    .addEventListener('click', function () {
        window.location.href = '../index.html#about';
    });

// button links
document.getElementById('footercontact')
    .addEventListener('click', function () {
        window.location.href = '../index.html#contact';
    });


// scroll buttons
$("#footerprojects").click(function () {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);
});

document.getElementById('instagramlogo')
.addEventListener('click', function () {
    window.open('https://www.instagram.com/vincentmichiel/', '_blank');
});

document.getElementById('instagramtext')
.addEventListener('click', function () {
    window.open('https://www.instagram.com/vincentmichiel/', '_blank');
});

// instagram text color
$(document).ready(function(){
    $("#instagramtext").mouseover(function(){
        $("#instagramlogo").css("color", "#748D92");
        $("#instagramtext").css("color", "#748D92");
    });
    $("#instagramtext").mouseout(function(){
        $("#instagramlogo").css("color", "#bbc4bd");
        $("#instagramtext").css("color", "#bbc4bd");
    });
    $("#instagramlogo").mouseover(function(){
        $("#instagramlogo").css("color", "#748D92");
        $("#instagramtext").css("color", "#748D92");
    });
    $("#instagramlogo").mouseout(function(){
        $("#instagramlogo").css("color", "#bbc4bd");
        $("#instagramtext").css("color", "#bbc4bd");
    });
});