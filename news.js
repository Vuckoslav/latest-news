console.log=function(){}
$(function(){
function news(country,cat,publisher,q){

    $("#list").html("<ul><li>L</li><li>O</li><li>A</li><li>D</li><li>I</li><li>N</li><li>G</li></ul>");
    if(cat!=null){
        cat='&category='+cat
    }else{cat=""}
    var url="";
    if(q!=""){
       $("#search").val(q);
       url='everything?q='+q;
   $("#s").html("Keyword-"+$("#search").val());
        
    }else{
    $("#search").val("");
   if(publisher==""){var url='top-headlines?country='+country+cat;
   $("#s").html($("#country option:selected").html()+"/"+$("#cat option:selected").html());
   }else{
      $("#s").html($("#sources option:selected").html());
       url='top-headlines?sources='+publisher;
   }}
$.ajax({
        url:"https://newsapi.org/v2/"+url+"&apiKey=f6328c5209564494b19fe3a198a266e0",
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
        $("#list").html("");
            if(data["totalResults"]===0){
                $("#list").html("No News found related with '"+q+"'");
            }else{
            for(var i=0;i<data["articles"].length;i++){
           $("#list").append("<div class='zm'><img class='thmb' src="+data['articles'][i]['urlToImage']+"><br><b><a href="+data['articles'][i]['url']+" onclick='ah(this);return false;'>"+data['articles'][i]['title']+"</a></b><br><small>by "+data['articles'][i]['author']+"<br>"+data['articles'][i]['publishedAt']+"<br></small><div class='less' onclick=h(this)><div class='content'>"+data['articles'][i]['content']+"<br></div><small>Read more..</small></div></div>")
        }}}
        
})}
    $("#country").on("change",function(){
       
       news($("#country").val(),$("#cat").val(),"","") 
    })
    $("#sources").on("change",function(){
       news($("#country").val(),$("#cat").val(),$("#sources").val(),"") 
    })
    $("#cat").on("change",function(){
       news($("#country").val(),$("#cat").val(),"","") 
    })
    $("#sbt").on("click",function(){
       news($("#country").val(),$("#cat").val(),"",$("#search").val()) 
    })
    $(".less").click(function(){
        $(this).children().toggle(200);
    })
    news("us","technology","techcrunch","Donald Trump")
    $("iframe").on('load',function(){ 
    document.getElementById("ittl").innerHTML =
 document.getElementById("iframe").contentDocument.title; });
   
})
function ah(a){
       document.getElementById("iframe").src="";
       document.getElementById("iframe").src=a.href;
       $("#popup").toggle(390);
       return false;
}
function h(a){
    $(a).children().toggle(200);
}
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}