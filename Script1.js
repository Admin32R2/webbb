

// JavaScript to change text when button is clicked
document.getElementById('change-text').addEventListener('click', function() {
    alert('Button clicked!');

});

// JavaScript for "Home" button functionality
document.getElementById('home-link').addEventListener('click', function() {
    
    //alert('Home button clicked! Navigating to Home...');
    
    window.location.href = 'home.html';
    
    window.scrollTo(0, 0);
});

document.getElementById('About-link').addEventListener('click', function(){
    
    //alert("About button clicked! Navigating to About page...");

    window.location.href = 'about.html';

});

document.getElementById('contact-link').addEventListener('click', function(){
    
    //alert("About button clicked! Navigating to Contact builders...");

    window.location.href = 'contact.html';
});


