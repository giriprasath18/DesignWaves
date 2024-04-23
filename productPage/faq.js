const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        faq.classList.toggle("active")
    })
})

// 

const faqstwoo = document.querySelectorAll(".faqtwo");
faqstwoo.forEach(faqtwo => {
    faqtwo.addEventListener("click",() => {
        faqtwo.classList.toggle("active")
    })
})

// const faqstwoo = document.querySelectorAll(".plustwo");
// faqstwoo.forEach(plustwo => {
//     plustwo.addEventListener("click",() => {
//         plustwo.classList.toggle("active")
//     })
// })


// 
//function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
  