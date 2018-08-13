$(document).ready(function(){

  activateTriggers();

  // Upload file and make the magic happen
  $("#upload-button").click(function() {
    let reader = new FileReader();
    reader.onload = function(e) {
      var textArr = reader.result.split(/\r?\n/).filter(function(item) {
        return item !== "";
      });
      textArr = textArr.map(makeChunk);
      for (let i = 0; i < textArr.length; i++) {
        let htmlText = $.parseHTML(textArr[i]);
        $(".main-container").append(htmlText);
      }
      activateTriggers();
    }
    reader.readAsText($(this).prev().get(0).files[0]);
  });

  // Test upload if the user does not supply one
  $("#test-button").click(function() {
    let testPath = "test.txt";
    $.get(testPath, function(data) {
      console.log(data);
    });
  });

});

var block1 = `
<div class="grid-container">
  <div>
    <div>
      <p>
`;
var block2 =`
</p>
</div>
<div class="summary-container hidden">
<textarea class="summary-input" data-autoresize rows="2"></textarea>
<button data-balloon-length="large"
  data-balloon=""
  data-balloon-pos="bottom"
  class="preview-button">O</button>
</div>
</div>
<div class="button-holder">
<button class="minimize-button">-</button>
</div>
</div>
`;

function makeChunk(s) {
  return block1 + s + block2;
}

function activateTriggers() {
$(".minimize-button").mouseenter(function(){
  $(this).parent().prev().css("opacity", "0.5");
});

$(".minimize-button").mouseleave(function(){
  $(this).parent().prev().css("opacity", "1.0");
});


$(".minimize-button").click(function(){
  if ($(this).html() === "-") {
    $(this).html("+");
  }
  else {
    $(this).html("-");
  }

  // Hide the written text
  $(this).parent().prev().children().first().toggle();

  // Show the textarea
  $(this).parent().prev().children().eq(1).toggle();
});


$(".preview-button").mouseenter(function(){
  // Set the tooltip to preview the text
  var paragraphText = $(this).parent().prev().children().first().text();
  $(this).attr("data-balloon", paragraphText);
});

// For auto-resizing textarea
jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;

    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
});
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}
