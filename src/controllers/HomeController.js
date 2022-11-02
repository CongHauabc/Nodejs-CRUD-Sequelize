import db from "../models/index";
import CreateNewUser from '../service/CRUDservices'
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll({
      raw:true
    });
    
    return res.render("homePage.ejs",{
        data:JSON.stringify(data)
    });
  } catch (e) {
    console.log(e);
  }
};
let getAbout = (req, res) => {
  return res.render("test/about.ejs");
};
let getCrud = (req,res) =>{
  return res.render("./crud.ejs")
}
let postCRUD = async(req,res)=>{
  await CreateNewUser.createNewUser(req.body)
  return res.send('post metho with NCH')
}
let displayGetCRUD = async(req,res)=>{
  let data = await CreateNewUser.getAllUser()
  console.log('--------------------------------------')
  console.log(data)
  console.log('--------------------------------------')

  return res.render('./displayCRUD.ejs',{
    dataTable:data
  })
}
module.exports = {
  getHomePage: getHomePage,
  getAbout: getAbout,
  getCrud:getCrud,
  postCRUD:postCRUD,
  displayGetCRUD:displayGetCRUD,
};
