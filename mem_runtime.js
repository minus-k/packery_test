$(document).ready(function(){
  var $container = $('#mem_container');
  $container.packery({
    itemSelector: '.item',
    columnWidth: 250,
    rowHeight: 200,
    gutter: 10
  });

  var $itemElems = $( $container.packery('getItemElements') );
  $itemElems.draggable();
  $container.packery( 'bindUIDraggableEvents', $itemElems );

  // for each item...
  // for ( var i=0, le = $itemElems.length; i < le; i++ ) {
  //   var elem = $itemElems[i];
    // make element draggable with Draggabilly
    // var draggie = new Draggabilly( elem );
    // bind Draggabilly events to Packery
    // $container.packery('bindDraggabillyEvents', draggie);
    // draggie.on( 'dragEnd', function(inst) {
    //   if (sort_it) { inst.disable() };
    // });
  // }
  
  var item = $('.item');
  var pos = [];
  for (i=0; i < 12; i++){ pos.push(i); }
  for (i=0; i< item.length; i++){
    var index = Math.floor(Math.random()*pos.length);
    var position = pos[index];
    pos.splice(index, 1);
    var it = item[i];
    $(it).attr('id', String(position));
    $(it).html('<p>' + String(position + 1) + '</p>');
  }

  var length = 0;
  $container.packery('on', 'dragItemPositioned', sort_it);
  function sort_it(){
    var itemElems = $container.packery('getItemElements');

    for ( var i=0, len = itemElems.length; i < len; i++ ) {
      var elem = $(itemElems[i]);
      if (elem.attr('id') == i) { 
        elem.css('background-color', '#648ad1');
        elem.draggable('disable');
        $container.packery('stamp', elem);
        elem.attr('id', 'set' + i);
        length++;
      }
    }
    if (length == itemElems.length){ clearInterval(val); }
  }

  var val = setInterval(function(){
    show_time() }, 1000
  );

  var sec = 0;
  function show_time(){
    $('.time').text('Time - ' + sec++);
  }
});
