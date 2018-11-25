
function searchFun(num) {
    if(num == 1) {
        let search = $("#searchIn").val();
        var link = `https://restcountries.eu/rest/v2/name/${search}?fields=name;capital;topLevelDomain;capital;currencies;flag;alpha3Code`;
    } else {
        var link = `https://restcountries.eu/rest/v2/all?fields=name;capital;topLevelDomain;capital;currencies;flag;alpha3Code`;
    }
    $.ajax({
        methos: 'get',
        url: link,
        success: function(result){
            drawAll(result);
        },
        error: function(){
            drawError();
        }
    })  
}

function drawAll(result) {
    cleanContainer();
    const cont = $('.container');
    for(i = 0; i < result.length ; i++) {
        cont.append(drawCountry(result[i].name, result[i].topLevelDomain, result[i].capital, result[i].currencies, result[i].flag, result[i].alpha3Code)); 
    }
}

function drawCountry (name, domain, capital, currency, flag, alpha3Code) {
    let country = new DrawCountry(name, domain, capital, currency, flag, alpha3Code);
    return country.draw();
}

function drawError() {
    cleanContainer();
    const imgLink = "https://legacymuaythaibogor.com/themes/yellow/img/ic_notfound.png";
    const cont = $('.container');
    const err = $('<div>').html("<h3>Country not found!</h3>");
    const img = $('<p>').html(`<img src=${imgLink}>`);
    err.attr("id", "errD")
    err.append(img);
    cont.append(err);
}


function cleanContainer() {
    $('.container').html("");
}