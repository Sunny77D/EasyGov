function Form(name, birthday, address, city, state, ZIP, past_countries) {
    this.name = name;
    this.birthday = birthday;
    this.address = address;
    this.city = city;
    this.state = state;
    this.ZIP = ZIP;
    this.past_countries = past_countries;
}

$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault()
        name = $('#name').val();
        birthday = $('#birthday').val();
        address = $('#address').val();
        city = $('#city').val();
        state = $('#state').val();
        ZIP = $('#ZIP').val();
        past_countries = $('#past-countries').val();
        const form = new Form(name, birthday, address, city, state, ZIP, past_countries);
        console.log(form);
    });
});