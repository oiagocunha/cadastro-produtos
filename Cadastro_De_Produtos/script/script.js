let nomeProduto = document.getElementById('nome');
let valorProduto = document.getElementById('valor');
let quantidadeProduto = document.getElementById('qtd');
let imgProduto = document.getElementById('img');
let produtos = [];
let id = 1;


function validarDados() {
    event.preventDefault();

    const campos = [nomeProduto, valorProduto, quantidadeProduto, imgProduto];

    campos.forEach((campo) => {

        const valorCampo = campo.value.trim();

        if (valorCampo.length !== 0) { 
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
        } else {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
        }
    });
}

function cadastrarProdutor() {

    if (nomeProduto.value && valorProduto.value && quantidadeProduto.value && imgProduto.value) {
        produtos.push({
            id: id, 
            nome: nomeProduto.value, 
            valProduto: valorProduto.value, 
            qtdProduto: quantidadeProduto.value, 
            img: imgProduto.value
        })  
        
        id++

    } else {
        ''
    }
    
    renderProdutos();
}

function renderProdutos() {

    if (produtos.length === 0) {
        id = 1
        produtos = []
    }

    conteudoTabela.innerHTML = ``; 
    produtos.forEach((item) => { 
        conteudoTabela.innerHTML += `
        <tr id="linha-${item.id}">
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.valProduto}</td>
        <td>${item.qtdProduto}</td>
        <td><img style="width: 25px; height: 25px" src="${item.img}"></td>
        <td>
            <button onclick="editProduto(${item.id})" type="button" class="btn btn-warning">Update</button>
            <button onclick="excluirProduto(${item.id})" type="button" class="btn btn-danger">Excluir</button>
        </td>
       </tr>
    `;
    });

}

function editProduto(id) {
    
    produtos = produtos.map((item) => {
        if (item.id === id) {
            return {
                id: id,
                nome: nomeProduto.value,
                valProduto: valorProduto.value,
                qtdProduto: quantidadeProduto.value,
                img: imgProduto.value,
            };
        }
        return item; 
    });

    renderProdutos();

}

function excluirProduto(id) {

    window.alert("Deletando produto...")

    produtos = produtos.filter((item) => item.id !== id);

    const linha = document.getElementById(`linha-${id}`);
    if (linha) {
        linha.remove(); 
    }

    renderProdutos()
}

