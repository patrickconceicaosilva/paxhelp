let nometitularplano = document.getElementById("nometitularplano");
let cpftitularplano = document.getElementById("cpftitularplano");
let nomefalecido = document.getElementById("nomefalecido");
let rgchamador = document.getElementById("rgchamador");
let pesofalecido = document.getElementById("pesofalecido");
let religiaofalecido = document.getElementById("religiaofalecido");
let causadamorte = document.getElementById("causadamorte");
let localcorpo = document.getElementById("localcorpo");
let liberacaocorpo = document.getElementById("liberacaocorpo");
let responsavelliberacao = document.getElementById("responsavelliberacao");
let horariofalecimento = document.getElementById("horariofalecimento");
let localvelorio = document.getElementById("localvelorio");
let presentenovelorio = document.getElementById("presentenovelorio");
let horariosepultamento = document.getElementById("horariosepultamento");

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');

    function verificarCampos() {
        const campos = form.querySelectorAll('input');
        let todosPreenchidos = true;

        campos.forEach(campo => {
            if (campo.value.trim() === '') {
                todosPreenchidos = false;
            }
        });

        const botaoEnviar = document.getElementById('generate');
        botaoEnviar.disabled = !todosPreenchidos;
    }

    verificarCampos();

    form.addEventListener('input', verificarCampos);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nometitularplano = document.getElementById('nometitularplano').value;
        const cpftitularplano = document.getElementById('cpftitularplano').value;
        const nomefalecido = document.getElementById('nomefalecido').value;
        const rgchamador = document.getElementById('rgchamador').value;
        const pesofalecido = document.getElementById('pesofalecido').value;
        const religiaofalecido = document.getElementById('religiaofalecido').value;
        const causadamorte = document.getElementById('causadamorte').value;
        const localcorpo = document.getElementById('localcorpo').value;
        const liberacaocorpo = document.getElementById('liberacaocorpo').value;
        const responsavelliberacao = document.getElementById('responsavelliberacao').value;
        const horariofalecimento = document.getElementById('horariofalecimento').value;
        const localvelorio = document.getElementById('localvelorio').value;
        const presentenovelorio = document.getElementById('presentenovelorio').value;
        const horariosepultamento = document.getElementById('horariosepultamento').value;

        const params = new URLSearchParams({
            nometitularplano,
            cpftitularplano,
            nomefalecido,
            rgchamador,
            pesofalecido,
            religiaofalecido,
            causadamorte,
            localcorpo,
            liberacaocorpo,
            responsavelliberacao,
            horariofalecimento,
            localvelorio,
            presentenovelorio,
            horariosepultamento
        });

        window.location.href = 'relatorio.html?' + params.toString();
    });
});