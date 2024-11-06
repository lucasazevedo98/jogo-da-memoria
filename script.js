let primeira = "", segunda = "";
        let tentativas = 0;



        let qtd = Number(prompt("Quantas cartas você quer jogar? 4,6,8,10,12,14?"))

        function regrasParaQtd() {
            while (qtd < 4 || qtd % 2 !== 0 || qtd > 14) {
                qtd = Number(prompt("Quantas cartas você quer jogar? 4,6,8,10,12,14?"))
            }
        }

        regrasParaQtd()

        let dados = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]

        dados.sort(comparador);

        let cartas = []
        let cartasCertas = []


        for (let i = 0; i < qtd / 2; i++) {

            cartas.push(dados[i])
            cartas.push(dados[i])


        }

        function montarJogo() {

            cartas.sort(comparador);

            for (let i = 0; i <= (cartas.length - 1); i++) {
                document.querySelector(".tabuleiro").innerHTML += `
                    <div class="carta" onclick="virar(this)" data-id=${i} data-nome="${cartas[i]}">
                    <img class="tras" src="projeto__parrots__imagens/back.png" />
                    <img class="frente" src="projeto__parrots__imagens/${cartas[i]}.gif" />
                    </div>
            `
            }
        }

        function virar(carta) {
            carta.classList.add("ativar")

            if (primeira === "") {
                primeira = carta
            } else {
                segunda = carta

                if (primeira.dataset.id === segunda.dataset.id) {
                    segunda = ""
                } else {
                    logica()
                }
            }

        }

        function logica() {
            if (primeira.dataset.nome === segunda.dataset.nome) {
                setTimeout(() => {
                    primeira = "", segunda = "";
                }, 1000)

                cartasCertas.push(primeira.dataset.nome)
                cartasCertas.push(segunda.dataset.nome)
                tentativas++

                if (cartasCertas.length === cartas.length) {
                    alert(`Você ganhou em ${tentativas} jogadas!`)
                }




            } else {

                setTimeout(() => {
                    primeira.classList.remove("ativar")
                    segunda.classList.remove("ativar")
                    primeira = "", segunda = "";


                }, 1000)
                tentativas++

            }
        }

        function comparador() {
            return Math.random() - 0.5;
        }

        montarJogo()
