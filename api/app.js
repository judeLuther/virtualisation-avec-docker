const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// MongoDB connection
mongoose.connect('mongodb://db_api:27017/contacts', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema and a model
const proprieteSchema = new mongoose.Schema({
    entreprise: { type: String, required: true },
    administration: { type: String, required: true },
    poste: String
});

const contactSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    proprietes: [proprieteSchema],
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const result = await contact.save();
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error });
    }
});

app.get('/api/contact/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error });
    }
});

app.put('/api/contact/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error });
    }
});

app.delete('/api/contact/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});