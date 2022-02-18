module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta em atendimentos'));
}