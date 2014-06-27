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
         connectWith:"#places,#names",
            update: function(event, ui) {
                   content = $(this).text();
                   $('#sort_status').text(content);
            }
        })
        $("#home").sortable({
            containment: 'document', 
            tolerance: 'pointer',
            cursor: 'pointer', 
            revert: true, 
            opacity: 0.60,
            connectWith:"#names,#places",
            update: function(event, ui) {
                     content = $(this).text();
                     $('#sort_status').text(content); 
                
                     
            }
        })




         $("#sale").sortable({
            containment: 'document', 
            tolerance: 'pointer',
            cursor: 'pointer', 
            revert: true, 
            opacity: 0.60,
            connectWith:"#sale,#names,#places",
            update: function(event, ui) {
                     content = $(this).text();
                     $('#sort_status').text(content);


     }
        })
});
 
 
 