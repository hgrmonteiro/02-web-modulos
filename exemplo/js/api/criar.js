export async function enviarDados(dados) {
    const url = "https://2217e6cc-6ec6-45c5-b620-67436defcd34-00-2cd7yzgv08kuq.picard.replit.dev/";
    const urlUsuarios = url + "usuarios";

    try {
        const resposta = await fetch(urlUsuarios, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dados),
        });

        if (!resposta.ok) {
            throw new Error('Erro no envio dos dados!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao enviar dados:', erro);
        throw erro;
    }
}

export function imprimeObjetoJson(objetoJson){
  return `<div>ID: ${objetoJson.id}</div> 
          <div>Nome: ${objetoJson.nome}</div> 
          <div>Nascimento: ${objetoJson.nascimento}</div>
          <div>E-mail: ${objetoJson.email}</div>`;
}
