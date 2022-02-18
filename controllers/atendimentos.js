module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta em atendimentos'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        
        res.send('Voce esta realizando um POST')
    })
}