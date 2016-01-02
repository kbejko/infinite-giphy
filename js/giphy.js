$(document).ready(function(){
  // console.log('hi')
  $("form").on("submit", function(evt){
    evt.preventDefault()
    var term = $("#term").val().split(' ').join('+')
    this.reset()
    console.log(term)
    // console.log(term)
    var url = "http://api.giphy.com/v1/gifs/search?q="+term+"&api_key=dc6zaTOxFJmzC&limit=10"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json",
    }).done(function(response){
      var url = ""
      for (var i = 0; i < response.data.length; i++) {
        url += "<div><img src="+response.data[i].images.fixed_width.url+"></div>"
      }
      console.log(url)
      $("body").append(url)
    }).fail(function(){
      console.log("Fail")
    }).always(function(){
      // console.log("Always")
    })
  })

  $("body").on("click", "img", function(){
    $(this).toggleClass("big")
  })
})
