function pesquisar() {
     // Exibe um console.log para fins de depuração.
     console.log("Clicado :O");

     // Obtém a seção onde os resultados serão exibidos.
     let section = document.getElementById("resultados-pesquisa");

     // Inicializa uma string vazia para armazenar os resultados.
     let resultados = "";

     // Itera sobre cada dado e constrói o HTML do resultado.
     for (let dado of dados) {
     resultados += `
          <div class="item-resultado">
               <h2>
                    <a href="">${dado.titulo}</a>
               </h2>
               <p class="descricao-meta">${dado.descricao}</p>
               <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>
     `;
     }

     // Atualiza o conteúdo HTML da seção com os resultados.
     section.innerHTML = resultados;
}