import db from "../models/index.js";

const Category =db.category;

export const create = (req, res)=>{

    let {catName, catDesc}=req.body;

    Category.create({
        catName, 
        catDesc 
      }).then(category => {
       return res.status(201).send(category);
      }).catch(error => {
        console.error('Error creating category:', error);
        res.status(500).send(error||{message:"Something went wrong"});
      });
}

export const getAll =(req, res)=>{
    Category.findAll().then(categories => {
        return res.status(201).send(categories);
      }).catch(error => {
        console.error('Error getting categories:', error);
        res.status(500).send(error||{message:"Something went wrong"});
      });
}

export const getOneCategory = (req, res)=>{
    let catId=req.params.id;

    Category.findByPk(catId).then(category => {
        if(!category){
            res.status(400).send({message:`Category with id: ${catId} doesnot exists`});
        }
        return res.status(201).send(category);
      }).catch(error => {
        console.error('Error getting category:', error);
        res.status(500).send(error||{message:"Something went wrong"});
      });
}

export const updateCategory=(req, res)=>{
    const catId= req.params.id;

    const {catName,catDesc} = req.body;

    const category={};

    if(catName){
        category.catName=catName;
    }

    if(catDesc){
        category.catDesc=catDesc;
    }

    Category.update(category,{
        where:{catId:catId}
    })
    .then((updatedCategory)=>{
        res.send({message:updatedCategory});
    })
    .catch((error)=>{
        console.error('Error getting category:', error);
        res.status(500).send(error||{message:"Something went wrong"});
    })
}

export const deleteCategory =(req,res)=>{
    const catId= req.params.id;

    Category.destroy({
        where:{
            catId:catId
        }})
        .then((data)=>{
            res.send({message:"Successfully deleted the category"});
        })
        .catch((err)=>{
            res.status(500).send({message:"Something went wrong"});
        })
}
