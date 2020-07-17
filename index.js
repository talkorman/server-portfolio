const port = process.env.PORT || 3000;
const express = require('express');
var final_list = [],
    table = [],
    change_container;
const app = express();
app.listen(port, () => console.log(`starting server at ${port}`));
app.use(express.static('public/'));
app.use(express.json({ limit: '10mb' }));