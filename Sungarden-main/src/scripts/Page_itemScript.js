const imagem = document.getElementById("imagem")
const nome_flor = document.getElementById("nome_flor")
const descricao = document.getElementById("descrição")
const preco = document.getElementById("preco")


function fetchJSONData(id) {
console.log(id)
    fetch('./src/scripts/info.json')
        .then((res) => {
            if (!res.ok) {new Error
            (`Status: ${res.status}`);
            }
            return res.json();
            })
        .then((data) => {
            const flor = data.flores.find(flor => flor.id === id);
            
            if(flor){
                localStorage.setItem('florData', JSON.stringify(flor));
                window.location.href = 'page_item.html';
            }
        
        })
}

window.onload = function() {
    const florData = JSON.parse(localStorage.getItem('florData'));

    if (florData) {
        nome_flor.innerText = florData.nome;
        descricao.innerText = florData.descricao || "Descrição não disponível."; 
        preco.innerText = florData.preco;  
        imagem.src = `/src/imagens/${florData.id}.png`;
    } else {
        console.log("Dados da flor não encontrados.");
    }
}
