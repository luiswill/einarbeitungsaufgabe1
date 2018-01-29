var headlines = document.getElementsByClassName("accordion-headline");
var i = 0;

for(i = 0; i < headlines.length; i++){
    headlines[i].addEventListener('click', function () {

        var paragraph = this.nextElementSibling;

        console.log(paragraph.style.maxHeight);
        if(paragraph.style.maxHeight === '0px' || paragraph.style.maxHeight == ""){
            paragraph.style.maxHeight = 100 + '%';
            paragraph.style.opacity = 1;
        }else{
            paragraph.style.maxHeight = '0px';
            paragraph.style.opacity = 0;
        }
    });
}


function hideElement(id) {
    var doc = document.getElementById(id);

    if(doc.style.display === 'none'){
        doc.style.display = 'inline';
    }else{
        doc.style.display = 'none';
    }
}
