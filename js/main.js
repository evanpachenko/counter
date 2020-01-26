var tab;
var content;

window.onload = function () {
    content = document.getElementsByClassName('content');
    tab = document.getElementsByClassName('tab');

    hideTabsContent(1);
};


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

const COLOR_PRINT = "color";

const COLOR_VALUES = [64, 164, 264];
const MONOCHROME_VALUES = [30, 52, 100];

const LENGTH = "l";
const WIGHT = "w";

// це дозволить легко додавати ще один розмір паперу
const PAPERS = {
    A2: {"l": 420, "w": 590},
    A1: {"l": 840, "w": 590},
    A0: {"l": 840, "w": 1180}
};

function square(sizes) {
    return sizes[LENGTH] * sizes[WIGHT] / 1000000;
}

function findSquare() {
    var sizes = {};
    var tabChooser = document.getElementById('nonstadartTab');
    if (tabChooser.classList.contains('border')) {
        sizes[WIGHT] = document.getElementById('widthPaper').value;
        sizes[LENGTH] = document.getElementById('lenghtPaper').value;
    } else {
        var choosenPaper = document.getElementById('standartPaper').value;
        sizes = PAPERS[choosenPaper];
    }
    return square(sizes);
}


function findFill() {
    var colorChecked = $( "input[name$='color']:checked");
    var inkChecked = $( "input[name$='ink']:checked");
    var fillness;

    if (colorChecked.length !== 1 || inkChecked.length !== 1) {
        console.log("Only one of values should be selected!");
        return 0;
    }
    colorChecked = colorChecked[0].value;
    inkChecked = inkChecked[0].value;

    if (colorChecked === COLOR_PRINT) {
        fillness = COLOR_VALUES[inkChecked]
    } else {
        fillness = MONOCHROME_VALUES[inkChecked];
    }
    return fillness;

}

function selectPaper() {
    return document.getElementById('paperType').value;
}

var quantity = parseInt(document.getElementById('numberOf').value);


submitButton.onclick = function () {

    var square = findSquare();
    var fill = findFill();
    var paper = selectPaper();
    var sum = Math.round(((square * paper + square * fill) * quantity));

    document.getElementById('price').value = sum;
};