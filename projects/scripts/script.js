// button links
document.getElementById('title')
    .addEventListener('click', function () {
        window.location.href = '../';
    });

document.getElementById('footerhome')
    .addEventListener('click', function () {
        window.location.href = '../';
    });

// button links
document.getElementById('footerabout')
    .addEventListener('click', function () {
        window.location.href = '../#about';
    });

// button links
document.getElementById('footercontact')
    .addEventListener('click', function () {
        window.location.href = '../#contact';
    });

document.getElementById('footerinstagram')
    .addEventListener('click', function () {
        window.open('https://www.instagram.com/vincentmichiel/', '_blank');
    });

document.getElementById('footergithub')
    .addEventListener('click', function () {
        window.open('https://github.com/vincentmichiel', '_blank');
    });


// scroll buttons
$("#footerprojects").click(function () {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);
});