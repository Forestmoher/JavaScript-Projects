var lis = document.querySelectorAll("li");

var lisArray = Array.from(lis);

lis.forEach(function(elem){
    elem.addEventListener("click", function(e) {
        if (elem.dataset.show === "true") {
            elem.innerHTML = elem.dataset.dinner;
        }
    })
});