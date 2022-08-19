const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countriesResult(data))
}
const countriesResult = countries => {
    const countriesShow = countries.map(country => countryResult(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesShow;
}
const countryResult = country => {
    return `
    
    `;
}


loadCountries();