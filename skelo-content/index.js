// ============================================
// INSTALLATION INSTRUCTIONS
// ============================================
// 1. Initialize project: npm init -y
// 2. Install dependencies: npm install express mongoose body-parser cors ejs
// 3. Make sure MongoDB is running locally or use MongoDB Atlas
// 4. Run: node server.js
// 5. Open: http://localhost:3000

// ============================================
// server.js
// ============================================
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://dbabhi:dbabhi@cluster0.38c4tqg.mongodb.net/mydata?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// MongoDB Schema
const problemSchema = new mongoose.Schema({
    problemTitle: { type: String, required: true },
    problemTopic: { type: String, required: true },
    problemDescription: { type: String, required: true },
    exampleInputOutput: [{
        input: String,
        output: String
    }],
    difficulty: { type: String, required: true },
    supportedLanguages: [String],
    validationCode: {
        language: String,
        code: String
    },
    totalTestCases: { type: Number, required: true },
    testCases: [{
        test_case: Number,
        input: String,
        output: String
    }],
    author: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Problem = mongoose.model('Problem', problemSchema);

// ============================================
// PAGE ROUTES (Render HTML views)
// ============================================
app.get('/', (req, res) => {
    res.render('problems');
});

app.get('/view-problems', (req, res) => {
    res.render('index');
});

app.get('/view/:id', (req, res) => {
    res.render('problem-detail');
});

// ============================================
// API ROUTES (Return JSON data)
// ============================================

// API: Get all problems
app.get('/api/problems', async (req, res) => {
    try {
        const problems = await Problem.find().sort({ createdDate: -1 });
        res.json(problems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Get single problem
app.get('/api/problems/:id', async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);
        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }
        res.json(problem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/problems', async (req, res) => {
    try {
        const problemData = {
            problemTitle: req.body['Problem Title'],
            problemTopic: req.body['Problem Topic'],
            problemDescription: req.body['Problem Description'],
            exampleInputOutput: req.body['Example Input & Output'],
            difficulty: req.body['Difficulty'],
            supportedLanguages: req.body['Supported Languages'],
            validationCode: req.body['Validation Code'],
            totalTestCases: req.body['Total Test Cases'],
            testCases: req.body['Test Cases'],
            author: req.body['Author'],
            createdDate: req.body['Created Date'] || new Date()
        };

        const problem = new Problem(problemData);
        await problem.save();
        
        res.status(201).json({ 
            message: 'Problem saved successfully', 
            id: problem._id 
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/api/problems/:id', async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);
        if (!problem) {
            return res.status(404).json({ error: 'Problem not found' });
        }
        res.json({ message: 'Problem deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});