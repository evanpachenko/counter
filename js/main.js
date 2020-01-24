var tab;
var content;

window.onload = function () {
    content = document.getElementsByClassName('content');
    tab = document.getElementsByClassName('tab');

    hideTabsContent(1);
}


function hideTabsContent(a) {
    for (var i = a; i < content.length; i++) {
        content[i].classList.remove('show');
        content[i].classList.add('hide');
        tab[i].classList.remove('border');

    }
}


document.getElementById('tabs').onclick = function (event) {
    var target = event.target;
    if (target.className === 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};


function showTabsContent(b) {
    if (content[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('border');
        content[b].classList.remove('hide');
        content[b].classList.add('show');
    }
}


$(document).ready(function () {
    $('select').niceSelect();
});



var engeneerPaper = 12;
var vatmanPaper = 16;
var photoPaper = 70;

var fillFirstColor = 64;
var fillSecondColor = 164;
var fillThirdColor = 264;

var fillfirstBlack = 30;
var fillSecondBlack = 52;
var fillThirdBlack = 100;


function findSquare(l, w) {
    var tabChooser = document.getElementById('nonstadartTab');
    if (tabChooser.classList.contains('border')) {
        w = document.getElementById('widthPaper').value;
        l = document.getElementById('lenghtPaper').value;
    } else {
        var choosenPaper = document.getElementById('standartPaper').value;
        if (choosenPaper == 1) {
            l = 420;
            w = 590;
        } else if (choosenPaper == 2) {
            l = 840;
            w = 590;
        } else {
            l = 840;
            w = 1180;
        }

    };

    return l * w / 1000000;
}


function findFill(fill, color, fillness) {
    fill = document.getElementsByName('ink');
    color = document.getElementsByName('color');
    fillness;
    for (var j = 0; j < color.length; j++) {
        if (color[j].checked) {
            if (color[j].value == 5) {


                for (var k = 0; k < fill.length; k++) {
                    if (fill[k].checked) {
                        if (fill[k].value == 1) {
                            fillness = fillFirstColor;
                        } else if (fill[k].value == 2) {
                            fillness = fillSecondColor;
                        } else {
                            fillness = fillThirdColor;
                        }
                    }
                }


            } else {
                for (var m = 0; m < fill.length; m++) {
                    if (fill[m].checked) {
                        if (fill[m].value == 1) {
                            fillness = fillfirstBlack;
                        } else if (fill[m].value == 2) {
                            fillness = fillSecondBlack;
                        } else {
                            fillness = fillThirdBlack;
                        }
                    }
                }
            }
        }

    };
    return fillness;
};

function selectPaper(paper, paperValue) {
    paper = document.getElementById('select').value;
    if (paper == 1) {
        paperValue = engeneerPaper;
    } else if (paper == 2) {
        paperValue = vatmanPaper;
    } else {
        paperValue = photoPaper;
    };
    return paperValue;
}

var quantity = parseInt(document.getElementById('numberOf').value);


submitButton.onclick = function () {

    var square = findSquare();
    var fill = findFill();
    var paper = selectPaper();
    var sum = Math.round(((square * paper + square * fill) * quantity));

    document.getElementById('price').value = sum;

}