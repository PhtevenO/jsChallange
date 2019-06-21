const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let arr = [];

fetch(endpoint).then(data => data.json()).then(data => 
    {
        arr.push(...data);
        console.log(arr);
    });

    function findCity(name, arr){
        return arr.filter(place => {
            const regex = new RegExp(name, 'gi');
            return place.city.match(regex) || place.state.match(regex);
        })
    }

    function showMatch(){
       const find = findCity(this.value, arr);
       const html = find.map(place => {
           const regex = new RegExp(this.value, 'gi');
           const cityName = place.city.replace(regex,`
           <span class="hl">${this.value}</span>
           `);
           const stateName = place.state.replace(regex,`
           <span class="hl">${this.value}</span>
           `);

           return `
           <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
           </li>
           `
       }).join('');
       sugg.innerHTML = html;
    }

    const searchInp =document.querySelector('.search');
    const sugg = document.querySelector('.suggestions');

    searchInp.addEventListener('change',showMatch);
    searchInp.addEventListener('keyup',showMatch);

