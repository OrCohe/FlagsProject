class DrawCountry    {
    constructor(name, domain, capital, currency, flag, alpha3Code) {
        this.name = name;
        this.domain = domain;
        this.capital = capital;
        this.currency = currency;
        this.flag = flag;
        this.alpha3Code = alpha3Code;
        if(this.capital == "") {
            this.capital = "N/A";
        }
        if(this.flag == "") {
            this.capital = "N/A";
        }
    }

    draw() {
        const countryContainer = $('<div>').attr("id", "list");
        const secondContainer = $('<div>').attr("id", "cfl");
        const name = $('<h3>').html(`${this.name} <span class="badge badge-info">${this.alpha3Code}</span>`);
        const domain = $('<p>').html(`Top Level Domain: ${this.domain}`);
        const capital = $('<p>').html(`Capital: ${this.capital}`);
        const currency = $('<p>').html(`Currencies:</br>`);
        this.currency.forEach(element => {
            currency.html(`${currency.html()} ⚫ ${element.name}(${element.code})(${element.symbol})</br>`);
        });
        const flag = $('<p>').html(`<img src=${this.flag} height=50px width=100px>`);
        secondContainer.append(name);
        secondContainer.append(domain);
        secondContainer.append(capital);
        secondContainer.append(currency);
        secondContainer.append(flag);
        countryContainer.append(secondContainer);
        return countryContainer;
    }
}