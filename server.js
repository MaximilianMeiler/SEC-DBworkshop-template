const { MongoClient } = require('mongodb');
const express = require('express');
cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let collection;

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 