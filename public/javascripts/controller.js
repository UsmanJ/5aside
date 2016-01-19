// drWow.controller('5Aside', ['$scope', function() {
//   var self = this;


//   var picker = $input.pickadate('picker')
//   picker.methodName(argument1, argument2, ...)
//   picker.objectName

//   $('.datepicker').pickadate({
//     today: '',
//     clear: 'Clear selection',
//     close: 'Cancel'
//   })
// });

$(document).ready(function(){
  $("input").click(function(){
    $("#inputdate").pickadate();
  });
});
