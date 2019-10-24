$(function() {
  $("form#animalForm").submit(function(event) {
    var animal = $("input:radio[name=choice]:checked").val();
    $(".animal").hide();
    if (animal === "seal") {
      $("#seal").show()
    } else if (animal === 'orcas') {
      $("#orcas").show()
    } else {
      $("#walrus").show()
    }
      event.preventDefault();
  })
})
