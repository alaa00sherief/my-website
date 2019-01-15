




var lis  = $(".options-box ul li");



lis.eq(0).css("backgroundColor"," #e6ffff")
lis.eq(1).css("backgroundColor","#ffccdd")
lis.eq(2).css("backgroundColor"," #ff9999")
lis.eq(3).css("backgroundColor","#ffe6cc")
lis.eq(4).css("backgroundColor","#e6e6e6")

lis.click(function(){

	var bgColor = $(this).css("backgroundColor");
	$(".changeX").css("color", bgColor)
})


$("#plus").click(function(){
	$("body").css("fontSize","+=1px")
	$(".options-box").css("fontSize","16px")

})

$(".img-item").click(function(){
	console.log("sa")
	var imgSrc = $(this).attr("src");
	
	$("#home").css("backgroundImage","url("+imgSrc+")")
	
})
$("#minus").click(function(){
	if($("body").css("fontSize") < '12px' )
		{
	$("body").css("fontSize","12px")
			
		}
	else
		{
	$("body").css("fontSize","-=1px")
			
		}
	$(".options-box").css("fontSize","16px")

})


$("a").click(function(){


	var aHref = $(this).attr("href");
	$(this).css("color","#ec3237")
	var sectionOffset = $(aHref).offset().top;
	$("body").animate({scrollTop:sectionOffset},2000)
})



$("document").ready(function(){

	$("#loading-sc .spinner").fadeOut(1000 , function(){
		
		$("#loading-sc").fadeOut(1000 , function(){
			$("body").css("overflow","auto")
		})
	});
})

$(".options-box").click(function(){
    $(".options-colors").slideToggle(1000),
    function(){
    	$(".options-colors").fadeTo(1000 , 0.5)
    }
	
})

$(".header").click(function(){
    $(".cover_title").fadeTo(1000 ,2),
    function(){
    	$(".cover_subtitle").fadeTo(1000 , 0.5)
    }
	
})
