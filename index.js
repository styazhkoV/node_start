const express = require('express')
const mongoose = require('mongous')
const express = require('express-handlebars')


const PORT = process.env.PORT || 3000

const app = express()// Подключение и настройка 
const hbs = exphpbs({
    defaultLayout:'main',
    extname: 'hbs'
})
app.engine('hbs' , hbs.engine)
app.set('view engine', 'hbs')
app.set('viwes','viwes' )//движка для рендера страниц


async function start (){
    try{
      await mongoose.connect('', {
          useNewUrlParser: true,
          useFindAndModify: false
      }) 
      app.listen(PORT, () => {
        console.log('Server has been started')
    })
    }catch (e) {
        console.log(e)
    }
}
start()


