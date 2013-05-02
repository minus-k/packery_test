$(document).ready(function(){
  var $container = $('#container');
  $container.packery({
    itemSelector: '.item',
    columnWidth: 200,
    rowHeight: 100,
    gutter: 10
  });
  
  var $itemElems = $( $container.packery('getItemElements') );
  // $itemElems.draggable();
  // $container.packery( 'bindUIDraggableEvents', $itemElems );

   // for each item...
   for ( var i=0, le = $itemElems.length; i < le; i++ ) {
     var elem = $itemElems[i];
     // make element draggable with Draggabilly
     var draggie = new Draggabilly( elem );
     // bind Draggabilly events to Packery
     $container.packery('bindDraggabillyEvents', draggie);
   }

  var item = $('.small');
  for (i=0; i< item.length; i++){
    var color = get_random_color();
    $(item[i]).css('background-color', function() { return color; });
    $(item[i]).text(function() { return color; });
  }

  $('.small').click(function(){
    var elem = $(this);
    toggle_size(elem);
    $container.packery('fit', elem, 0, 0);
    $container.packery('layout');
  });

  function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  function toggle_size(elem) {
    if (elem.css('width') == '196px'){
      elem.css('width', '49%');
      elem.css('height', '210px');
    } else {
      elem.css('width', '196px');
      elem.css('height', '100px');
    }
  }
});
