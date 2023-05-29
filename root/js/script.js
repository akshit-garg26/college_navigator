const slideImages = document.querySelectorAll('.slideimg');
let count = 0
setInterval(() => {
    document.querySelector(".active").style.animation = "next1 1s ease-in backwards";
    document.querySelector(".active").classList.remove("active");
    count = (count+1)%(slideImages.length);
    slideImages[count].setAttribute("class", "active");
    document.querySelector(".active").style.animation = "next2 1s ease-out forwards";
   
}, 3000);




// searchbar javascript :
let search = document.getElementById("srch");
let btn=document.querySelector(".srch-item");
const iitarr = ["iit-delhi","iit-bombay","iit-guwahati","iit-kanpur","iit-kharagpur","iit-madras","iit-rorkee"];

const nitarr =  ["nit-allahabad","nit-calicut","nit-kkr","nit-nagpur","nit-rourkela","nit-trichy","nit-warangal","nit-surathkal"];

const iiitarr= ["iiit-allahabad","iiit-bangalore","iiit-bhubaneshwar","iiit-chennai","iiit-gwalior","iiit-hyderabad","iiit-jabalpur","iiit-lucknow"];

const pvtarr = ["bits-pilani","ict-mumbai","iist","mody","thapar","tolani","vit-vellore"];


function woo(){
    if (iitarr.includes(search.value)) {
        return "iit-pages/";
      } else if (nitarr.includes(search.value)) {
        return "nit-pages/";
      } else if (iiitarr.includes(search.value)) {
        return "iiit-pages/";
      } else if (pvtarr.includes(search.value)) {
        return "pvt-pages/";
      } else {
        return "";
      }
}
// const anchor = document.getElementById("elem");
//     anchor.setAttribute("href","#");
//     let str1 = valu + ".html";
//     let str2 = "/root/pages/" + woo() + str1;
//     anchor.setAttribute("href", str2);
btn.addEventListener('click', () => {
    // anchor.setAttribute("href","#");
    let str1 = search.value + ".html";
    let str2 = "/root/pages/" + woo() + str1;
    // anchor.setAttribute("href", str2);
    location.assign(str2);
  });
  setTimeout(() => {
    anchor.setAttribute("href","#");
    search.value='';
  }, 3000);

