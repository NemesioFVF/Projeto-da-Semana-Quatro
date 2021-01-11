var CTtabela = document.getElementById('tabela');
var P = JSON.parse(localStorage.getItem('Produtos Cadastrados'));

if (P == null) { 
    P = []
}

// Tranformando em JSON e passando no Local Storge 
function SalvarP (i){
    P.push({
      'Número de Série': document.getElementById('NumeroS').value,
      'Nome do Produto' : document.getElementById('NomeP').value,
      'Tipo de Produto' : document.getElementById('TPpro').value,
      'Valor do Produto' : document.getElementById('ValorP').value,
      'Características do Produto' : document.getElementById('caracP').value,
      });
  const jsonPTS = JSON.stringify(P);
  localStorage.setItem("Produtos Cadastrados", jsonPTS);
  }

// pegando do JSON e passando para tabela
for (i = 0; i < P.length; i++) {

    var Ps = P[i]
    var NumeroDeSerie = Ps['Número de Série']
    var NomeDoProduto = Ps['Nome do Produto']
    var TipoDeEquipamento = Ps['Tipo de Produto']
    var ValorDoProduto = Ps['Valor do Produto']
    var Carac_DoProduto = Ps['Características do Produto']

    var th = CTtabela.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3), th.insertCell(4)]
    
    td[0].innerHTML = NumeroDeSerie
    td[1].innerHTML = NomeDoProduto
    td[2].innerHTML = TipoDeEquipamento
    td[3].innerHTML = ValorDoProduto
    td[4].innerHTML = Carac_DoProduto
    }

const NovoProduto = document.querySelector("#NovoPro");
const CadastroTP = document.querySelector("#btnCadastroP");
const Conteudos = document.querySelector(".conteudo");

// mudar de tela 'Produtos Cadastrados' e 'Lista de Produtos'
CadastroTP.addEventListener("click", () => {
    Conteudos.classList.add("muda");
  });
  
  NovoProduto.addEventListener("click", () => {
    Conteudos.classList.remove("muda");
  });

// Função que só aceita números e add '.' a cada 3 numeros digitados
function SomenteN(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    var serie = document.getElementById("NumeroS")
    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }

    if(serie.value.length == 3){
      serie.value += '.'
    }
}

// função moeda que adiciona 'R$', '.' no formato pt-BR
function Moeda(a, e, r, t) {
    let n = "" , h = j = 0 , u = tamanho2 = 0 , l = ajd2 = "" , o = window.Event ? t.which : t.keyCode;
      a.value = a.value.replace('R$ ','');            
    
      if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    
        for (u = a.value.replace('R$ ','').length,

        //método charAt() retorna o caractere especificado a partir de uma string
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++);
    
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n, 0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "R$ 0" + r + "0" + l),
    2 == u && (a.value = "R$ 0" + r + l),u > 2) {
        
        for (ajd2 = "", j = 0, h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e, j = 0),
            ajd2 += l.charAt(h),
            j++;
        
            for (a.value = "R$ ", tamanho2 = ajd2.length, h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
} 

function EXtudo (i) {
  localStorage.clear(i);
  CTtabela.clear(i);
}

