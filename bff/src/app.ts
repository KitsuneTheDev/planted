import express from 'express';

const app  = express();

if(!process.env) {
    console.log('Cannot land on a PORT!');
    process.exit(1);
} else {
    console.log(process.env.PORT);
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server runnin on port: ${PORT}`));
}