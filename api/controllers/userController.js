const router = require('express').Router();
const User = require('../models/User');

// Register
router.post('/', async (req, res) => {
    const { name, email, phoneNumber, age, gender, medicalNeed, address, houseNumber, complement, district, CEP, parentsName, parentsPhoneNumber, parentsPhoneNumber2, notes } = req.body;

    if (!name) {
        res.status(422).json({ error: 'O campo nome é obrigatório' });
        return
    };

    if (!email) {
        res.status(422).json({ error: 'O campo email é obrigatório' });
        return
    };

    if (!phoneNumber) {
        res.status(422).json({ error: 'O campo telefone é obrigatório' });
        return
    };

    if (!age) {
        res.status(422).json({ error: 'O campo idade é obrigatório' });
        return
    };

    if (!gender) {
        res.status(422).json({ error: 'O campo gênero é obrigatório' });
        return
    };
    
    if (!address) {
        res.status(422).json({ error: 'O campo endereço é obrigatório' });
        return
    };

    if (!complement) {
        res.status(422).json({ error: 'O campo complemento é obrigatório' });
        return
    };

    if (!district) {
        res.status(422).json({ error: 'O campo bairro é obrigatório' });
        return
    };

    if (!CEP) {
        res.status(422).json({ error: 'O campo CEP é obrigatório' });
        return
    };

    if (!state) {
        res.status(422).json({ error: 'O campo estado é obrigatório' });
        return
    };

    if (!parentsName) {
        res.status(422).json({ error: 'O campo nome do responsável é obrigatório' });
        return
    };

    if (!parentsPhoneNumber) {
        res.status(422).json({ error: 'O campo telefone do responsável é obrigatório' });
        return
    };

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        return res.status(422).json({ msg: 'Usuário já existe'});
    };

    const user = {
        name,
        email,
        phoneNumber,
        age,
        gender,
        medicalNeed,
        address,
        houseNumber,
        CEP,
        city,
        state,
        parentsName,
        parentsPhoneNumber,
        parentsPhoneNumber2,
        notes
    };

    try {
        await User.create(user);
        res.status(201).json({ msg: 'Usuário cadastrado com sucesso' });
    } catch {
        res.status(500).json({ error: 'Erro no sistema. Tente novamente mais tarde'});
    };
});

module.exports = router;