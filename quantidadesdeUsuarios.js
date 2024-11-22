import { getCSS, tickConfig } from "./common.js"
async function quantidadesdeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json' 
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados)
    const quantidadesdeUsuarios = Object.values(dados)

    console.log(dados)
    

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


const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
    text: 'Redes sociais com mais usuários no mundo',
    x: 0,
    font: {
    color: getCSS('--primary-color'),
    family: getCSS('--font'),
    size: 30
    
    }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
        text: 'nome das redes sociais',
        font: {
        color: getCSS('--secondary-color')
        }
        }
        },
        yaxis: {
        tickfont: tickConfig,
        title: {
        text: 'bilhões de usuários ativos',
        font: {
        color: getCSS('--secondary-color')
        }
        }
        }
}

const grafico = document.createElement('div')
grafico.className = 'grafico'

document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlotly(grafico, data, layout)
}
quantidadesdeUsuarios()