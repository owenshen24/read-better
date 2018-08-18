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
  $("#sample-button").click(function() {
    let sampleTextArr = sampleText.split(/\r?\n/).filter(function(item) {
      return item !== "";
    });
    sampleTextArr = sampleTextArr.map(makeChunk);
    for (let i = 0; i < sampleTextArr.length; i++) {
      let htmlText = $.parseHTML(sampleTextArr[i]);
      $(".main-container").append(htmlText);
    }
    activateTriggers();
  });

});

// Create DOM element with the String as the text
function makeChunk(s) {
  return block1 + s + block2;
}

// Sets up the appropriate event listeners
function activateTriggers() {

  // Change opacity upon hover
  $(".minimize-button").mouseenter(function(){
    $(this).parent().prev().css("opacity", "0.5");
  });
  $(".minimize-button").mouseleave(function(){
    $(this).parent().prev().css("opacity", "1.0");
  });

  $(".minimize-button").html("-");

  // On hiding/showing the text:
  $(".minimize-button").click(function(){

    // Toggle + or -
    if ($(this).html() === "+") {
      $(this).html("-");
    }
    else {
      $(this).html("+");
    }

    // Toggle black or white magnify
    $(this).next().toggleClass("invert-colors");

    // Toggle written text and textarea
    $(this).parent().prev().children().first().toggleClass("hidden");
    $(this).parent().prev().children().eq(1).toggleClass("hidden");
  });

  $(".preview").mouseenter(function() {
    let paragraphDiv = $(this).parent().prev().children().first();
    let textareaDiv = $(this).parent().prev().children().eq(1).children().first();
      if(paragraphDiv.hasClass("hidden")) {
        $(this).attr("data-balloon", paragraphDiv.text());
      }
      else {
        $(this).attr("data-balloon", textareaDiv.val());
      }
  })

  // For auto-resizing textarea
  jQuery.each(jQuery('textarea[data-autoresize]'), function() {
      var offset = this.offsetHeight - this.clientHeight;

      var resizeTextarea = function(el) {
          jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
      };
      jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
  });
}
