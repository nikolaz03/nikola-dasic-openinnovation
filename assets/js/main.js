// array with all ids inputs and their names
var idArray = [{id : "firstNameInput", name:"first name" },{id: "lastNameInput", name:"last name"},{id: "addressInput", name:"address"},{id: "cityInput", name:"city"}, {id: "countryInput", name:"country"}];

// adding on blur event for all input elements
idArray.forEach(element => {

    var id = element.id;

    var currentElement = $("#"+id)

    $(currentElement).on("blur", function() { // on blur field will be validate

        var value = $(currentElement).val().trim();
    
        var parent = $(currentElement).parent();
                
        if (value == "") {
            parent.children(".errorP").text("Please enter " + element.name);

            $(currentElement).val("");
            
            $(currentElement).addClass("errorInput")
        }
        else{
            parent.children(".errorP").text("");
            $(currentElement).removeClass("errorInput")
        }
    }) 
});

// on submit data from form will be sent to server via ajax
var submit = $("#submit")
$(submit).on("click", function(){

    var firstName = $("#firstNameInput").val();
    var lastName = $("#lastNameInput").val();
    var address = $("#addressInput").val();
    var city = $("#cityInput").val();
    var country = $("#countryInput").val();

    if(!validate()) return; // all data will be validated before sending request 

    $.ajax({
        url: 'controller/user-controller.php',
        method: 'POST', 
        data: {"firstName": firstName, "lastName": lastName, "address": address, "city":city, "country":country },
        success: function(response) { 

          $("#result").text("Successfuly registrated user")
           
          $("#result").css("color","green")

          clearForm(); // after successfuly creation of user, all values in inputs will be deleted 

        },
        error: function(xhr, status, error) {
          
          $("#result").text("There was a problem on server")
          
          $("#result").css("color","red")

        }
      });

})

// if one or more field in form is empty they will be marked red 
function validate(){
    var isValid = true;
    idArray.forEach(element => {

        var id = element.id;
        
        var currentElement = $("#"+id)
        
        var value = $(currentElement).val().trim();
        
        var parent = $(currentElement).parent();
        
        if (value == "") {
    
            isValid = false
    
            parent.children(".errorP").text("Please enter " + element.name);
    
            $(currentElement).val("");
            
            $(currentElement).addClass("errorInput")
    
        }
        else{
            parent.children(".errorP").text("");
            $(currentElement).removeClass("errorInput")
        }
    })
    return isValid;
}

// Set value of all form fields on default
function clearForm(){
    idArray.forEach(element => {
        
        $("#"+element.id).val("")

        var currentElement = $("#"+element.id)

        var parent = $(currentElement).parent();

        parent.children(".errorP").text("");

        $(currentElement).removeClass("errorInput")
    });
}


//Adding keyup event on address, city and country inputs, this will update google Map 
$("#addressInput").on("keyup",function(){
    updateMap();
})

$("#cityInput").on("keyup",function(){
    updateMap();
})

$("#countryInput").on("keyup",function(){
    updateMap();
})

var map;
var marker;

//Initial map 
function loadMap(){
    var DefaultLatLng = { lat: 44.8307249885284, lng: 20.460895972782925 }; 
    map = new google.maps.Map(document.getElementById('map'), {
      center: DefaultLatLng,
      zoom: 13
    });
    marker = new google.maps.Marker({
      position: DefaultLatLng,
      map: map,
      title: 'Belgrade Serbia!'
    });
}

// updating map with new data from inputs  
function updateMap(){
    var address = $("#addressInput").val();
    var city = $("#cityInput").val();
    var country = $("#countryInput").val();
    var position = address + "," + city + "," + country;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: position }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var latlng = results[0].geometry.location;
        map.setCenter(latlng);
        marker.setPosition(latlng);
      }
    });

}


