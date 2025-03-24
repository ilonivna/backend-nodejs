import express from "express";

const app = express();

const PORT = 3000;



//built-in Express MW for parsing request body
app.use(express.json());

//MW for time logging
app.use((req,res,next)=>{
    console.log(`Date: ${new Date().toLocaleString()}`);
    next();
});

//request handler for GET requests at path "/"
app.get("/", (req,res) => {
    res.json({
        message: "Hello there Pigg"
    });
});

//Error MW
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went really wrong..."
    });
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
