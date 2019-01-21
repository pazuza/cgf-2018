//Thanks to @flosommerfeld at https://stackoverflow.com/questions/44891771/bulma-css-tab-switcher?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

function sabado() {
  removeActive();
  hideAll();
  $("#sabado-tab").addClass("is-active");
  $("#sabado-tab-content").removeClass("hiddenTab");
}

function domingo() {
  removeActive();
  hideAll();
  $("#domingo-tab").addClass("is-active");
  $("#domingo-tab-content").removeClass("hiddenTab");
}

function removeActive() {
  $("li").each(function() {
    $(this).removeClass("is-active");
  });
}

function hideAll(){
  $("#sabado-tab-content").addClass("hiddenTab");
  $("#domingo-tab-content").addClass("hiddenTab");
}