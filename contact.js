function Message(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        name = $('#name').val();
        email = $('#email').val();
        message = $('#message').val();
        const contact = new Message(name, email, message);
        console.log(contact);

        $('#sent').html('<p>Your message has been sent!</p>');
    });
});