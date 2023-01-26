var button = $("#enter");
var nominput = $("#nominput");
var prenominput = $("#prenominput");
var ul = $("ul");

function isEmptyOrSpaces(str) {
  return $.trim(str).length == 0;
}

function nameExist(str) {
  var found = false;
  ul.each((id, el) => {
    console.log(el.innerText);
    if (el.innerText == str) {
      found = true;
    }
  });
  return found;
}

button.click(function () {
  if (isEmptyOrSpaces(nominput.val()) || isEmptyOrSpaces(prenominput.val())) {
    nominput.addClass("is-invalid");
    prenominput.addClass("is-invalid");
    console.log("is invalid");
  } else {
    if (nameExist(nominput.val()+" "+prenominput.val())) {
      nominput.addClass("is-invalid");
      prenominput.addClass("is-invalid");
      console.log("is invalid");
    } else {
      var li = $("<li></li>");
      $(li).appendTo("ul");
      nominput.removeClass("is-invalid");
      prenominput.removeClass("is-invalid");
      console.log("valid");
      var tag_input =  $("<input>", {
        class: "form-check-input",
        type: "checkbox",
        name: "personneSelect[]",
        value: nominput.val()+"|"+prenominput.val()
      });
      tag_input.attr('checked', 'checked'); 
      tag_input.appendTo(li);
      var label = $("<label></label>").text(nominput.val()+" "+prenominput.val())
      $(label).addClass("form-check-label")
      $(label).appendTo(li);
    }
  }
});

