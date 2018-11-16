$( function(){

// Retrieving kudos from the database when the page loads

$.get('/api/kudos').then(function(data){
    console.log("working?")
    for(let i = 0; i < data.length; i++){
        let kudosCards = data[i]
        console.log(data);
        console.log("whats up");
    }

})







})



$('#kudosButton').on('click', function(event){
    event.preventDefault;

    $.ajax({
        url: './api/kudos',
        method: 'POST',
        data: req.body,
    }).then(function (response){
        console.log(response);
    })
})