const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// MongoDB URI - replace with your actual MongoDB URI
const uri = "mongodb+srv://anshadrazakk:Asdrzkknt%40123@cluster0.qyxtmlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB Client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToDb() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/projects', async (req, res) => {
    try {
        await connectToDb();
        console.log('Fetching projects from database');

        const projects = await client.db("Works").collection("Projects").find({}).toArray();
        console.log('Projects fetched:', projects);

        if (projects.length > 0) {
            res.json(projects);
        } else {
            res.status(404).send('No projects found');
        }
    } catch (e) {
        console.error('Error fetching projects:', e.message);
        res.status(500).send(e.message);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
