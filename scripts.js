function mostrarAlerta() {
    alert("Bem-vindo a Feira de Livros!");
}

function listarLivros() {
    const livros = [
        { titulo: "Dom Casmurro", autor: "Machado de Assis", preco: 29.90 },
        { titulo: "O Guarani", autor: "José de Alencar", preco: 19.90 },
        { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", preco: 24.90 }
    ];

    const lista = document.getElementById("listaLivros");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

    livros.forEach(livro => {
        const item = document.createElement("li");
        item.textContent = `${livro.titulo} - ${livro.autor} - R$ ${livro.preco.toFixed(2)}`;
        lista.appendChild(item);
    });
}