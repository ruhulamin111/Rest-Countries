const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countriesResult(data))
}
const countriesResult = countries => {
    const countriesShow = countries.slice(0, 21).map(country => countryResult(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesShow.join('');
}
const countryResult = ({ flags, name, capital, area, region }) => {
    return `
    <div class="country">
        <img src="${flags.png}" alt="">
        <h3>Name: ${name.common}</h3>
        <p>Capital: ${capital}</p>
        <p>Area: ${area}</p>
        <p>Continets: ${region}</p>
    </div>
    `;
}


loadCountries();