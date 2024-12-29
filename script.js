function criarMeta() {
    const nomeMeta = document.getElementById("nome")
    const motivacaoMeta = document.getElementById("motivacao")
    const recompensaMeta = document.getElementById("recompensa")
    const prazoMeta = document.getElementById("prazo")
    const categoriaMeta = document.getElementById("categoria")
    
    let nome = nomeMeta.value.trim()
    let motivacao = motivacaoMeta.value.trim()
    let recompensa = recompensaMeta.value.trim()
    let prazo = prazoMeta.value;
    let categoria = categoriaMeta.value

    if (nome === "") {
        alert("Por favor, insira pelo menos o nome da meta!")
        return;
    }

    const listaMetas = document.getElementById("listaMetas")
    let novaMeta = document.createElement("li")
    novaMeta.textContent = nome
    listaMetas.appendChild(novaMeta) 

    // Limpar campos após a criação da meta
    nomeMeta.value = ""
    motivacaoMeta.value = ""
    recompensaMeta.value = ""
    prazoMeta.value = ""
    categoriaMeta.value = ""

}