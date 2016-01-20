// drWow.controller('5Aside', ['$scope', function() {
//   var self = this;


//   var picker = $input.pickadate('picker')
//   picker.methodName(argument1, argument2, ...)
//   picker.objectName

  // $('#inputdate').pickadate({
  //   today: '',
  //   clear: 'Clear selection',
  //   close: 'Cancel'
  // })

// $(document).ready(function(){
//   $("input").click(function(){
//     $("#inputdate").pickadate();
//   });
// });

$(function() {
  $( "#datepicker" ).datepicker();
});

$(function() {
  $('#timepicker').pickatime({
    clear: ''
  });
});


// $('#inputdate').pickadate();
