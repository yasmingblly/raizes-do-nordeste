const produtos = [
    {
        id: "tapioca",
        nome: "Tapioca Nordestina",
        descricao: "Frango, queijo coalho e catupiry.",
        preco: 14.90,
        categoria: "Comidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "cuscuz",
        nome: "Cuscuz Completo",
        descricao: "Ovo, queijo coalho e carne seca.",
        preco: 17.90,
        categoria: "Comidas",
        unidades: ["recife", "salvador"],
        indisponivelEm: ["salvador"],
        disponivel: true
    },
    {
        id: "bolo",
        nome: "Bolo de Macaxeira",
        descricao: "Receita tradicional com coco.",
        preco: 9.90,
        categoria: "Sobremesas",
        unidades: ["fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "suco",
        nome: "Suco de Cajá",
        descricao: "Bebida gelada feita com fruta regional.",
        preco: 8.50,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza"],
        indisponivelEm: ["recife"],
        disponivel: true
    },
    {
        id: "combo-cuscuz-suco",
        nome: "Cuscuz + Suco",
        descricao: "Cuscuz completo acompanhado de suco regional.",
        preco: 22.90,
        categoria: "Combos",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "acaraje-com-pimenta",
        nome: "Acarajé c/ pimenta",
        descricao: "Bolinho de feijão-fradinho com vatapá, salada e pimenta.",
        preco: 16.90,
        categoria: "Comidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "acaraje-sem-pimenta",
        nome: "Acarajé s/ pimenta",
        descricao: "Bolinho de feijão-fradinho com vatapá e salada, sem pimenta.",
        preco: 16.90,
        categoria: "Comidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "baiao-de-dois",
        nome: "Baião de dois",
        descricao: "Arroz, feijão verde, queijo coalho e temperos regionais.",
        preco: 24.90,
        categoria: "Comidas",
        unidades: ["recife", "fortaleza", "salvador"],
        indisponivelEm: ["recife"],
        disponivel: true
    },
    {
        id: "moqueca",
        nome: "Moqueca",
        descricao: "Ensopado regional com peixe, leite de coco e coentro.",
        preco: 32.90,
        categoria: "Comidas",
        unidades: ["recife", "salvador"],
        indisponivelEm: ["recife"],
        disponivel: true
    },
    {
        id: "tapioca-carne-seca-banana",
        nome: "Tapioca de carne seca e banana frita",
        descricao: "Tapioca recheada com carne seca desfiada e banana frita.",
        preco: 21.90,
        categoria: "Comidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "vatapa",
        nome: "Vatapá",
        descricao: "Creme típico com camarão, leite de coco, dendê e amendoim.",
        preco: 19.90,
        categoria: "Comidas",
        unidades: ["recife", "salvador"],
        indisponivelEm: ["fortaleza"],
        disponivel: true
    },
    {
        id: "cajuina",
        nome: "Cajuína",
        descricao: "Bebida nordestina feita a partir do caju.",
        preco: 7.90,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        indisponivelEm: ["fortaleza"],
        disponivel: true
    },
    {
        id: "suco-laranja",
        nome: "Suco de laranja",
        descricao: "Suco natural de laranja.",
        preco: 8.90,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "suco-maracuja",
        nome: "Suco de maracujá",
        descricao: "Suco natural de maracujá.",
        preco: 8.90,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "suco-goiaba",
        nome: "Suco de goiaba",
        descricao: "Suco natural de goiaba.",
        preco: 8.90,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "suco-acerola",
        nome: "Suco de acerola",
        descricao: "Suco natural de acerola.",
        preco: 8.90,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "guarana",
        nome: "Guaraná",
        descricao: "Refrigerante de guaraná gelado.",
        preco: 6.90,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        indisponivelEm: ["salvador"],
        disponivel: true
    },
    {
        id: "coca-cola-normal",
        nome: "Coca-Cola normal",
        descricao: "Refrigerante Coca-Cola tradicional.",
        preco: 7.50,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "coca-cola-zero",
        nome: "Coca-Cola Zero",
        descricao: "Refrigerante Coca-Cola sem açúcar.",
        preco: 7.50,
        categoria: "Bebidas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "munguza",
        nome: "Mugunzá",
        descricao: "Sobremesa cremosa de milho com leite e especiarias.",
        preco: 10.90,
        categoria: "Sobremesas",
        unidades: ["recife", "fortaleza", "salvador"],
        indisponivelEm: ["fortaleza"],
        disponivel: true
    },
    {
        id: "bolo-de-rolo",
        nome: "Bolo de rolo",
        descricao: "Bolo em camadas finas com recheio de goiabada.",
        preco: 12.90,
        categoria: "Sobremesas",
        unidades: ["recife", "fortaleza", "salvador"],
        indisponivelEm: ["salvador"],
        disponivel: true
    },
    {
        id: "cocada",
        nome: "Cocada",
        descricao: "Doce tradicional de coco.",
        preco: 7.90,
        categoria: "Sobremesas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    },
    {
        id: "tapioca-doce",
        nome: "Tapioca doce",
        descricao: "Tapioca com coco, leite condensado e canela.",
        preco: 13.90,
        categoria: "Sobremesas",
        unidades: ["recife", "fortaleza", "salvador"],
        disponivel: true
    }
];

const moeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

function obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function unidadeAtual() {
    return localStorage.getItem("unidadeSelecionada") || "recife";
}

function produtoApareceNaUnidade(produto, unidade) {
    return produto.unidades.includes(unidade) || (produto.indisponivelEm || []).includes(unidade);
}

function produtoDisponivelNaUnidade(produto, unidade) {
    return produto.disponivel && produto.unidades.includes(unidade) && !(produto.indisponivelEm || []).includes(unidade);
}

function adicionarCarrinho(id) {
    const produto = produtoPorId(id);
    const unidade = unidadeAtual();

    if (!produto || !produtoDisponivelNaUnidade(produto, unidade)) {
        alert("Este produto está indisponível nesta unidade.");
        return;
    }

    const carrinho = obterCarrinho();
    const item = carrinho.find((produto) => produto.id === id);

    if (item) {
        item.quantidade += 1;
    } else {
        carrinho.push({ id, quantidade: 1 });
    }

    salvarCarrinho(carrinho);
    alert("Produto adicionado à sacola.");
}

function produtoPorId(id) {
    return produtos.find((produto) => produto.id === id);
}

function totalCarrinho() {
    return obterCarrinho().reduce((total, item) => {
        const produto = produtoPorId(item.id);
        if (!produto) {
            return total;
        }

        return total + produto.preco * item.quantidade;
    }, 0);
}

function configurarUnidade() {
    const select = document.getElementById("unidade");

    if (!select) {
        return;
    }

    select.value = localStorage.getItem("unidadeSelecionada") || "";
    select.addEventListener("change", () => {
        localStorage.setItem("unidadeSelecionada", select.value);
    });
}

function criarCardProduto(produto, unidade) {
    const disponivel = produtoDisponivelNaUnidade(produto, unidade);

    return `
        <article class="card">
            <span class="badge">${produto.categoria}</span>
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="muted">${disponivel ? "Disponível" : "Indisponível nesta unidade"}</p>
            <strong class="price">${moeda.format(produto.preco)}</strong>
            <div class="actions">
                <a class="btn light" href="produto.html?id=${produto.id}">Detalhes</a>
                <button class="btn gold" type="button" onclick="adicionarCarrinho('${produto.id}')" ${disponivel ? "" : "disabled"}>
                    Adicionar à sacola
                </button>
            </div>
        </article>
    `;
}

function criarCardPromocao(promocao, unidade) {
    if (promocao.tipo === "link") {
        return `
            <article class="card">
                <span class="badge">${promocao.selo}</span>
                <h3>${promocao.titulo}</h3>
                <p>${promocao.descricao}</p>
                <div class="actions">
                    <a class="btn gold" href="${promocao.href}">${promocao.botao}</a>
                </div>
            </article>
        `;
    }

    const produto = produtoPorId(promocao.produtoId);
    const disponivel = produto && produtoDisponivelNaUnidade(produto, unidade);

    return `
        <article class="card">
            <span class="badge">${promocao.selo}</span>
            <h3>${promocao.titulo}</h3>
            <p>${promocao.descricao}</p>
            <p class="muted">${disponivel ? "Disponível" : "Indisponível nesta unidade"}</p>
            <strong class="price">${produto ? moeda.format(produto.preco) : ""}</strong>
            <div class="actions">
                <button class="btn gold" type="button" onclick="adicionarCarrinho('${promocao.produtoId}')" ${disponivel ? "" : "disabled"}>
                    Adicionar à sacola
                </button>
            </div>
        </article>
    `;
}

function renderizarSecaoCategoria(idElemento, categoria, unidade) {
    const area = document.getElementById(idElemento);

    if (!area) {
        return;
    }

    const itens = produtos.filter((produto) => (
        produto.categoria === categoria &&
        produtoApareceNaUnidade(produto, unidade)
    ));

    area.innerHTML = itens.map((produto) => criarCardProduto(produto, unidade)).join("");
}

function renderizarPromocoesCardapio(unidade) {
    const area = document.getElementById("promocoesCardapio");

    if (!area) {
        return;
    }

    const promocoes = [
        {
            tipo: "produto",
            selo: "Promoção do dia",
            titulo: "Tapioca Nordestina",
            descricao: "Frango, queijo coalho e catupiry com preço especial.",
            produtoId: "tapioca"
        },
        {
            tipo: "produto",
            selo: "Combo",
            titulo: "Cuscuz + Suco",
            descricao: "Cuscuz completo acompanhado de suco regional.",
            produtoId: "combo-cuscuz-suco"
        },
        {
            tipo: "link",
            selo: "Clube Raízes",
            titulo: "Ver meus pontos",
            descricao: "Acompanhe seu saldo e resgate benefícios do programa de fidelidade.",
            href: "fidelidade.html",
            botao: "Ver meus pontos"
        }
    ];

    area.innerHTML = promocoes.map((promocao) => criarCardPromocao(promocao, unidade)).join("");
}

function renderizarCardapio() {
    const unidade = unidadeAtual();

    renderizarPromocoesCardapio(unidade);
    renderizarSecaoCategoria("listaComidas", "Comidas", unidade);
    renderizarSecaoCategoria("listaBebidas", "Bebidas", unidade);
    renderizarSecaoCategoria("listaSobremesas", "Sobremesas", unidade);
}

function renderizarDetalhesProduto() {
    const area = document.getElementById("detalheProduto");

    if (!area) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const produto = produtoPorId(params.get("id")) || produtos[0];
    const disponivel = produtoDisponivelNaUnidade(produto, unidadeAtual());

    area.innerHTML = `
        <div class="card">
            <span class="badge">Produto regional</span>
            <h1>${produto.nome}</h1>
            <p>${produto.descricao}</p>
            <p class="muted">${disponivel ? "Disponível" : "Indisponível nesta unidade"}</p>
            <strong class="price">${moeda.format(produto.preco)}</strong>
            <form class="form">
                <label>
                    Quantidade
                    <input id="quantidadeDetalhe" type="number" min="1" value="1">
                </label>
                <label>
                    Observações
                    <textarea placeholder="Ex.: sem cebola, mais queijo coalho"></textarea>
                </label>
                <button class="btn gold" type="button" onclick="adicionarCarrinho('${produto.id}')" ${disponivel ? "" : "disabled"}>
                    Adicionar à sacola
                </button>
            </form>
        </div>
    `;
}

function renderizarCarrinho() {
    const area = document.getElementById("itensCarrinho");
    const total = document.getElementById("totalCarrinho");
    const finalizar = document.getElementById("finalizarPedido");

    if (!area || !total) {
        return;
    }

    const carrinho = obterCarrinho();

    if (!carrinho.length) {
        area.innerHTML = '<p class="muted">Sua sacola está vazia.</p>';
        total.textContent = moeda.format(0);
        if (finalizar) {
            finalizar.disabled = true;
        }
        return;
    }

    area.innerHTML = carrinho.map((item) => {
        const produto = produtoPorId(item.id);
        if (!produto) {
            return "";
        }

        return `
            <div class="summary-row">
                <span>${item.quantidade}x ${produto.nome}</span>
                <span>
                    <button class="btn light" type="button" onclick="alterarQuantidade('${item.id}', -1)">-</button>
                    <button class="btn light" type="button" onclick="alterarQuantidade('${item.id}', 1)">+</button>
                    <button class="btn danger" type="button" onclick="removerItem('${item.id}')">Remover</button>
                    <strong>${moeda.format(produto.preco * item.quantidade)}</strong>
                </span>
            </div>
        `;
    }).join("");

    total.textContent = moeda.format(totalCarrinho());
    if (finalizar) {
        finalizar.disabled = false;
    }
}

function alterarQuantidade(id, quantidade) {
    const carrinho = obterCarrinho().map((item) => {
        if (item.id === id) {
            return { ...item, quantidade: item.quantidade + quantidade };
        }

        return item;
    }).filter((item) => item.quantidade > 0);

    salvarCarrinho(carrinho);
    renderizarCarrinho();
}

function removerItem(id) {
    salvarCarrinho(obterCarrinho().filter((item) => item.id !== id));
    renderizarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    renderizarCarrinho();
}

function tentarFinalizarCarrinho() {
    if (!obterCarrinho().length) {
        alert("Adicione pelo menos um item à sacola antes de finalizar o pedido.");
        return;
    }

    window.location.href = "checkout.html";
}

function finalizarPedido() {
    if (!obterCarrinho().length) {
        alert("Adicione pelo menos um item à sacola antes de finalizar o pedido.");
        window.location.href = "carrinho.html";
        return;
    }

    const numero = Math.floor(1000 + Math.random() * 9000);
    const pedido = {
        numero,
        unidade: localStorage.getItem("unidadeSelecionada") || "recife",
        total: totalCarrinho(),
        status: "Recebido"
    };

    localStorage.setItem("pedidoAtual", JSON.stringify(pedido));
    localStorage.removeItem("carrinho");
    window.location.href = "confirmacao.html";
}

function renderizarPedido() {
    const area = document.getElementById("pedidoResumo");

    if (!area) {
        return;
    }

    const pedido = JSON.parse(localStorage.getItem("pedidoAtual")) || {
        numero: 1024,
        unidade: "recife",
        total: 0,
        status: "Recebido"
    };

    area.innerHTML = `
        <div class="summary-row"><span>Número do pedido</span><strong>#${pedido.numero}</strong></div>
        <div class="summary-row"><span>Unidade de retirada</span><strong>${pedido.unidade}</strong></div>
        <div class="summary-row total"><span>Total</span><strong>${moeda.format(pedido.total)}</strong></div>
    `;
}

function configurarPainelGerente() {
    const filtroProdutos = document.getElementById("filtroProdutos");
    const resultadoProdutos = document.getElementById("resultadoProdutos");
    const filtroPedidos = document.getElementById("filtroPedidos");
    const resultadoPedidos = document.getElementById("resultadoPedidos");
    const filtroFaturamento = document.getElementById("filtroFaturamento");
    const resultadoFaturamento = document.getElementById("resultadoFaturamento");

    const dadosUnidades = {
        recife: { nome: "Recife", pedidos: 26, faturamento: 819 },
        fortaleza: { nome: "Fortaleza", pedidos: 22, faturamento: 693 },
        salvador: { nome: "Salvador", pedidos: 34, faturamento: 1071 }
    };

    if (filtroProdutos && resultadoProdutos) {
        filtroProdutos.addEventListener("change", () => {
            const categoria = filtroProdutos.value;
            const itens = produtos.filter((produto) => produto.categoria === categoria);

            resultadoProdutos.innerHTML = itens.map((produto) => (
                `<li>${produto.nome}</li>`
            )).join("");
        });
    }

    if (filtroPedidos && resultadoPedidos) {
        filtroPedidos.addEventListener("change", () => {
            const unidade = dadosUnidades[filtroPedidos.value];
            resultadoPedidos.textContent = unidade
                ? `${unidade.nome} possui ${unidade.pedidos} pedidos registrados hoje.`
                : "";
        });
    }

    if (filtroFaturamento && resultadoFaturamento) {
        filtroFaturamento.addEventListener("change", () => {
            const unidade = dadosUnidades[filtroFaturamento.value];
            resultadoFaturamento.textContent = unidade
                ? `Faturamento estimado em ${unidade.nome}: ${moeda.format(unidade.faturamento)}.`
                : "";
        });
    }
}

function configurarForms() {
    const cadastro = document.getElementById("cadastroForm");
    const login = document.getElementById("loginForm");
    const checkout = document.getElementById("checkoutForm");

    if (cadastro) {
        cadastro.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = new FormData(cadastro);
            const usuario = Object.fromEntries(form.entries());
            localStorage.setItem("usuario", JSON.stringify(usuario));
            alert("Cadastro realizado com sucesso.");
            window.location.href = "login.html";
        });
    }

    if (login) {
        login.addEventListener("submit", (event) => {
            event.preventDefault();
            localStorage.setItem("logado", "true");
            window.location.href = "conta.html";
        });
    }

    if (checkout) {
        if (!obterCarrinho().length) {
            alert("Adicione pelo menos um item à sacola antes de finalizar o pedido.");
            window.location.href = "carrinho.html";
            return;
        }

        checkout.addEventListener("submit", (event) => {
            event.preventDefault();
            finalizarPedido();
        });
    }
}

function limparDadosUsuario() {
    localStorage.clear();
    alert("Dados salvos foram removidos.");
    window.location.href = "index.html";
}

configurarUnidade();
renderizarCardapio();
renderizarDetalhesProduto();
renderizarCarrinho();
renderizarPedido();
configurarPainelGerente();
configurarForms();
