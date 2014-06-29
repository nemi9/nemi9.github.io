$(document).ready(function() {
    $(".btn").click(function (e) {
        e.preventDefault();
        var text = $("input[name='add1']").val();
        var $li = $("<li class='ui-state-default'/>").text(text);
        $("#names").append($li);
        $("#names").sortable('refresh');
    });



    $("#names").sortable({
        containment: 'document', 
        tolerance: 'pointer',
        cursor: 'pointer', 
        revert: true, 
        opacity: 0.60,
        connectWith:"#purchased,#home,#names",
        update: function(event, ui) {
            content = $(this).text();
            
        }
     }); 
     $("#home").sortable({
        containment: 'document', 
        tolerance: 'pointer',
        cursor: 'pointer', 
        revert: true, 
        opacity: 0.60,
        connectWith:"#names,#home,#purchased",
        update: function(event, ui) {
            content = $(this).text();
             
        }
     });


      




     $("#purchased").sortable({
         containment: 'document', 
         tolerance: 'pointer',
         cursor: 'pointer', 
         revert: true, 
         opacity: 0.60,
         connectWith:"#purchased,#names,#home",
         update: function(event, ui) {
         content = $(this).text();
         $('#sort_status').text(content);
         

          }
     
    });


});












