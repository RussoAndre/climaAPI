const axios = require("axios");
//sua chave aqui
const appid = "94a5e85499f7fc9342e51a3d62ce43e9";
//cidade desejada
const q = "Itapecerica";
//unidade de medida de temperatura
const units = "metric";
//idioma
const lang = "pt_BR";
//quantidade de resultados
const cnt = "10";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;

//faz a requisição
axios.get(url).then((res) => {
  console.log(`${res.data.city.coord.lat}`);
});

//   .then((res) => {
//     //mostra o resultado e devolve somente a parte de interesse
//     console.log(res);
//     return res.data;
//   })
//   .then((res) => {
//     console.log(`${city}`);
//     console.log(
//       "-----------------------------------------------------------------------------"
//     );
//   })
//   .then((res) => {
//     //mostra o total e devolve o resultado
//     console.log(res.cnt);
//     return res;
//   })
//   .then((res) => {
//     //devolve somente a lista de previsões
//     console.log("aqui", res);
//     return res["list"];
//   })
//   .then((res) => {
//     //para cada resultado, mostra algumas informações
//     for (let previsao of res) {
//       console.log(`
//  ${new Date(+previsao.dt * 1000).toLocaleString()},
//  ${"Min: " + previsao.main.temp_min}\u00B0C,
//  ${"Max: " + previsao.main.temp_max}\u00B0C,
//  ${"Hum: " + previsao.main.humidity}%,
//  ${previsao.weather[0].description}

// `);
//     }
//     return res;
//   })
//   .then((res) => {
//     //verifica quantas previsões têm percepção humana de tempertura acima de 30 graus
//     const lista = res.filter((r) => r.main.feels_like >= 30);
//     console.log(`${lista.length} previsões têm
// percepção humana de temperatura acima de 30
// graus`);
//
