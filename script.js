function calcularTempoJuntos() {
    // Data de início do relacionamento (20 de março de 2023)
    const dataInicio = new Date("2023-03-20T00:00:00"); 
    
    // Pega o horário atual do dispositivo do usuário (local)
    const agora = new Date();

    // Diferença em anos, meses e dias
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();

    // Se o mês atual for menor que o mês de início, ajusta os anos
    if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses += 12;
    }

    // Ajuste de dias (caso o dia atual seja menor que o dia de início)
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0); // Último dia do mês anterior
        dias += ultimoMes.getDate();
    }

    // Cálculo de horas, minutos e segundos
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Cálculo das semanas (convertendo o total de dias para semanas)
    const diasTotais = Math.floor((agora - dataInicio) / (1000 * 60 * 60 * 24)); // Diferença total em dias
    const semanas = Math.floor(diasTotais / 7); // Convertendo dias em semanas

    // Exibição da diferença no formato de anos, meses, semanas, dias, horas, minutos e segundos
    document.getElementById("contador").innerText = 
        `${anos} anos, ${meses} meses, ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(calcularTempoJuntos, 1000);
