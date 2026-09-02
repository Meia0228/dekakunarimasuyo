// スクロールでふわっと表示
const articles = document.querySelectorAll("article");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

articles.forEach(article=>{
    article.style.opacity="0";
    article.style.transform="translateY(50px)";
    article.style.transition="1s";
    observer.observe(article);
});

// 上へ戻るボタン
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

};

topBtn.onclick=function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};