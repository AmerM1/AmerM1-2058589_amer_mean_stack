blogHtml="";
window.onload=codeRun;


function codeRun(){

    blogHtml=sessionStorage.getItem('blogKey');
    if(blogHtml==null){blogHtml="";}
    document.getElementById('blog').innerHTML=blogHtml;
    //console.log(blogHtml);
}
function AddBlog(){
    //window.sessionStorage;
    
  titleIs= document.getElementById('title');
  articleIs=document.getElementById('article');
 imageIs=document.getElementById('ImageLink');

if (titleIs.value.length == 0) {
    alert("Title is required.");
    return;
}
if (articleIs.value.length == 0) {
    alert("Article is required.");
    return;
}

if (imageIs.value.length == 0) {
    alert("Image Url is required.");
    return;
}


alert("Blog is Uploaded");


blogHtml+="<div class='col-4'><div class='blogItem'>"+titleIs.value+"<br>"+"<br><img src='"+imageIs.value+"' width='175'><br>"+articleIs.value+"</div></div>";
document.getElementById('blog').innerHTML=blogHtml;

console.log(blogHtml);




if(blogHtml!=null){
     sessionStorage.setItem('blogKey',blogHtml);
}

}

function clearSession(){
    sessionStorage.removeItem('blogKey');
    sessionStorage.clear();
    window.location.reload();

    document.getElementById('blog').innerHTML="";
}