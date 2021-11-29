function contar() {
    var i = document.getElementById('txti');
    var f = document.getElementById('txtf');
    var p = document.getElementById('txtp');
    var res = document.getElementById('res');
    
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        alert('[ERRO] Fez merda ai em meu parceiro, tenta dnv')
    } else {
        res.innerHTML = 'Contando: '
        var ni = Number(i.value)
        var nf = Number(f.value)
        var np = Number(p.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            np = 1
        }
        if (ni < nf) {
            // contagem crescente
            for(var c = ni; c <= nf; c += np) {
                res.innerHTML += `${c} \u{27A1} `}
        } else {
            // contagem decrescente
            for(var c = ni; c >= nf; c -= np) {
                res.innerHTML += `${c} \u{27A1} `   }
        } 
        res.innerHTML += `\u{2714}`
    }
  

}