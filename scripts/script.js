// button links
document.getElementById('projectsButton')
    .addEventListener('click', function () {
        window.location.href = './projects/';
    });

document.getElementById('projectsButton2')
.addEventListener('click', function () {
    window.location.href = './projects/';
});

document.getElementById('footerprojects')
.addEventListener('click', function () {
    window.location.href = './projects/';
});

document.getElementById('footerinstagram')
.addEventListener('click', function () {
    window.open('https://www.instagram.com/vincentmichiel/', '_blank');
});

document.getElementById('footerspotify')
    .addEventListener('click', function () {
        window.open('https://open.spotify.com/artist/0S03qL9gzGua5s03vIc6US?si=m1NaAgMZTcSYApNlKf2wAA', '_blank');
    });

document.getElementById('footergithub')
.addEventListener('click', function () {
    window.open('https://github.com/vincentmichiel', '_blank');
});

// scroll buttons
$("#title").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);
});

$("#explorebutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
});

$("#aboutButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
});

$("#contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);
});

$("#footerhome").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);
});

$("#footerabout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 800);
});

$("#footercontact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);
});

// contact form

$(document).ready(function () {
    $('.submit').click(function () {

        var name = $('.name').val()
        var email = $('.mail').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var nameinput = $('input.name')
        var mailinput = $('input.mail')
        var subjectinput = $('input.subject')
        var messageinput = $('textarea.message')

        if(name.length >= 1){
            nameinput.removeClass('notvalid')
        } else {
            event.preventDefault()
            nameinput.addClass('notvalid')
        }

        if(email.length >= 5 && email.includes('@') && email.includes('.')){
            mailinput.removeClass('notvalid')
        } else {
            event.preventDefault()
            mailinput.attr("placeholder", "")
            mailinput.addClass('notvalid')
        }

        if(subject.length > 2){
            subjectinput.removeClass('notvalid')
        } else {
            event.preventDefault()
            subjectinput.addClass('notvalid')
        }

        if(message.length > 5){
            messageinput.removeClass('notvalid')
        } else {
            event.preventDefault()
            messageinput.addClass('notvalid')
        }
    });
});

$('input.name').click(function () {
    $('input.name').removeClass('notvalid');
});

$('input.mail').click(function () {
    $('input.mail').removeClass('notvalid');
    $('input.mail').attr("placeholder", "")
});

$('input.subject').click(function () {
    $('input.subject').removeClass('notvalid');
});

$('textarea.message').click(function () {
    $('textarea.message').removeClass('notvalid');
});

$('.container.buttons.button3').click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1200);
});