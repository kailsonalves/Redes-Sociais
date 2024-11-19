import { getCSS } from "./common.js"
async function visualizarInformacoesGlobais() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json' 
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados)
    const quantidadesdeUsuarios = Object.values(dados)

    console.log(dados)
    
    

    quantidadesdeUsuarios()

    constdata = [

    { 
        x:nomeDasRedes,
      y:quantidadesdeUsuarios,
      type: 'bar',
      marker: {
      color: getCSS('--primary-color')

    }
    
    }
    ]


const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlotly(grafico, data, layout)

const layout = {

    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color')
    }
}

quantidadesdeUsuarios()