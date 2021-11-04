const faq = document.querySelector(".faqs");


faq.addEventListener("click", function (e) {
    if (!e.target.classList.contains("faq-answer")) {
        e.target.classList.toggle("active-accordion")
        let content = e.target.parentElement.querySelector(".faq-answer-container");
        console.log(content)
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
})
