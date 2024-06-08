// Form handling

$('.appForm').find('input').keyup(function () {
    var numberInput = $(this).val();
    if (numberInput != "") {
      var length = numberInput.length;
      if (length >= 4) {
        $(".details-handler").removeAttr("disabled");
        $(".details-handler").removeClass("disabled");
      } else {
        $(".details-handler").attr("disabled", "disabled");
        $(".details-handler").addClass("disabled");
      }
    } else {
      $(".details-handler").attr("disabled", "disabled");
      $(".details-handler").addClass("disabled");
    }
});