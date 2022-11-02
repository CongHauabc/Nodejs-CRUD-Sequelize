import  express  from "express";
import HomePage from '../controllers/HomeController'
let router = express.Router();

let InitWebRouter = (app)=>{
    router.get('/',HomePage.getHomePage)
    router.get('/about',HomePage.getAbout)
    router.get('/crud',HomePage.getCrud)
    router.post('/post-crud',HomePage.postCRUD)
    router.get('/get-crud',HomePage.displayGetCRUD)
    return app.use("/",router)
}
module.exports = InitWebRouter;