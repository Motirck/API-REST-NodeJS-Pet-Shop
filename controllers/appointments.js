module.exports = app => {
    // O req é o que a API recebe e res é o que ela devolverá
    app.get('/appointments', (req, res) => res.send('Você está na rota de atendimentos'))
}
