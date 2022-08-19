const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countriesResult(data))
}
const countriesResult = countries => {
    const countriesShow = countries.map(country => countryResult(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesShow.join('');
}
const countryResult = country => {
    console.log(country);
    return `
    <div class="country">
        <img src="${country.flags.png}" alt="">
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
    </div>
    `;
}


loadCountries();