const express = require('express');
const cookieParser = require('cookie-parser');

const app=express();
const index=require('./routes/index');
const db=require('./config/mongoose');
const port=3000;
// const layouts=require('express-ejs-layouts');
const expressEjsLayouts = require('express-ejs-layouts');       //This is a new library installed for expressLayouts to make the layouts more structured and beautiful.


app.use(expressEjsLayouts);     //In order to use the layouts feature of the express ejs, this middle ware will be used
//This will be used to find the variable 'body' in layouts.ejs that will ultimately replace the html file inside it.
//After reading this comment go to layout.ejs file.

app.set('layout extractStyles', true);      //Without this line, we will not be able to use the style variable at proper place in the layout.ejs file
app.set('layout extractScripts', true);     //Same is the case with script tag.

app.use(express.urlencoded());
app.use(cookieParser());        //This needs to run the cookie and read and write it. It is a middleware.

app.use(express.static(__dirname + '/assets'));     //Static folders must be defined by the express app. As we cannot directly use the 
// add the external css file in the layout.ejs file.


app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/',index);

app.listen(port,function(err){
    if(err){
        console.log('Error Occured ' + err);
        return;
    }
    console.log('Server running on port : '+port);
});