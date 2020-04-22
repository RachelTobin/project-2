// jshint esversion: 6

let main = function() {

  //let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
  let requestURL = "https://thejsway-server.herokuapp.com/api/articles";
  $.getJSON(requestURL, function(response) {

    console.log(response);

    let output = ``;
    let myDiv = '';
    let myH3 = '';

    // loop through items
    response.forEach(function(item) {

      let myDiv = document.createElement("div");
      myH3 = document.createElement("h3");
      myH3.textContent = 'Article ' + item.id;

      myPara = document.createElement("p");
      myPara.textContent = item.title;

      myContent = document.createElement("p");
      myContent.textContent = item.content;

      myDiv.appendChild(myH3);
      myDiv.appendChild(myPara);
      myDiv.appendChild(myContent);

      //console.log(myDiv);

      //document.getElementById("test").appendChild(myDiv);
      document.querySelector(".articles").appendChild(myDiv);

    });

  });


  /*
    let suffixURL = "&format=json&jsoncallback=?";
    //get value entered by user from textbox
    let flickrTag = $("input").???();
    let requestURL = prefixURL + flickrTag + suffixURL;

    //clear old photos
    $(".photos").???("");

  $.getJSON(requestURL, function(flickrResponse) {
    flickrResponse.items.forEach(function(item, index) {

      //Flickr returns 20 images by default
      //We need only six images for the Gallery
      if (index < 6) {
        // create a new JQuery element to hold the image
        // but hide it so we can fade it in
        let $img = $("<img>").hide();

        // set the attribute to the url
        // contained in the response
        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        // attach the img tag to the main
        // photos element and then fade it in
        $(".photos").append($img);
        $img.fadeIn();
      }
    });

  });
  */
};


$(document).ready(main);
