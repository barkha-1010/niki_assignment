//on load
$(".open-chat").css("display","block");

// binders
$( ".open-chat" ).click(function() {
	openChat();
});

$( ".close-chat" ).click(function() {
	closeChat();
});

$( ".send-sign" ).click(function() {
	sendMessage();
});

$('.message').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        sendMessage();  
    }
    event.stopPropagation();
});

$(".contact-item").click(function() {
	startChatWith();
});

// functions
function openChat()
{
	$(".open-chat").css("display","none");
	$(".close-chat").css("display","block");

	$(".contact-list").css("display","block");
	$(".chat-box").css("display","none");	
	$(".chat-wrapper").css("display","block");

	$(".overlay").css("display","block");
}

function closeChat()
{
	$(".close-chat").css("display","none");
	$(".open-chat").css("display","block");
	$(".chat-wrapper").css("display","none");
	$(".overlay").css("display","none");
}

function sendMessage()
{
	var msg = $(".message").val();
	if(msg.trim() != '')
	{
		var msgDivPart1 = "<div class='chat-bubble chat-client sent-msg pull-right'>";
		var msgDivPart2 = "</div><div class='clear'></div>";
		$(".message-box").append(msgDivPart1+msg+msgDivPart2);
		$(".message").val('');
		$('.message-box').animate({ scrollTop:  $(".message-box").prop("scrollHeight") }, 'slow');
	}
}

function startChatWith()
{
	$(".chat-box").css("display","block");
	$(".contact-list").css("display","none");
	$('.message-box').animate({ scrollTop:  $(".message-box").prop("scrollHeight") }, 'fast');
}

function receiveMessage()
{
	var msg = $(".message").val();
	if(msg.trim() != '')
	{
		var msgDivPart1 = "<div class='chat-bubble chat-client received-msg pull-left'>";
		var msgDivPart2 = "</div><div class='clear'></div>";
		$(".message-box").append(msgDivPart1+msg+msgDivPart2);
		$('.message-box').animate({ scrollTop:  $(".message-box").prop("scrollHeight") }, 'slow');
	}
}