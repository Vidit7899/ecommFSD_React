import db from "../models/index.js";

const Product=db.product;
const Category=db.category

export const createProduct=(req, res)=>{

    let {prodName, prodDesc, prodPrice,  categoryCatId}=req.body;

    Product.create({
        prodName, 
        prodDesc,
        prodPrice,
        categoryCatId
      }).then(product => {
        
       return res.status(201).send(product);
      }).catch(error => {
        console.error('Error creating product:', error);
        res.status(500).send(error||{message:"Something went wrong"});
      });
}

export const getAll =(req, res)=>{
    Product.findAll().then(products => {
        
        return res.status(201).send(products);
      }).catch(error => {
        console.error('Error getting products:', error);
        res.status(500).send(error||{message:"Something went wrong"});
      });
}

export const getProductsByCategory=async (req, res)=>{

const category=await Category.findByPk(req.params.catId);

const products = await category.getProducts();

res.send(products)

// Product.findAll({
//     where:{
//         categoryCatId:req.params.catId
//     }
// })
// .then(products=>{
//     res.status(201).send(products);
// })
// .catch((error)=>{
//     res.status(500).send(error||{message:"Something went wrong while getting products for given categroy Id"});
// }) 
}

export const getOneProduct = (req, res)=>{
    let prodId=req.params.id;

    Product.findByPk(prodId).then(product => {
        if(!product){
            res.status(400).send({message:`Product with id: ${prodId} doesnot exists`});
        }
        
        return res.status(201).send(product);
      }).catch(error => {
        console.error('Error getting product:', error);
        res.status(500).send(error||{message:"Something went wrong"});
      });
}

export const updateProduct=(req, res)=>{
    const prodId= req.params.id;

    const {prodName,prodDesc} = req.body;

    const product={};

    if(prodName){
        product.prodName=prodName;
    }

    if(prodDesc){
        product.prodDesc=prodDesc;
    }

    Product.update(product,{
        where:{prodId:prodId}
    })
    .then((updatedProduct)=>{
        res.send({message:updatedProduct});
    })
    .catch((error)=>{
        console.error('Error updating product:', error);
        res.status(500).send(error||{message:"Something went wrong"});
    })
}

export const deleteProduct =(req,res)=>{
    const prodId= req.params.id;

    Product.destroy({
        where:{
            prodId:prodId
        }})
        .then((data)=>{
            res.send({message:"Successfully deleted the category"});
        })
        .catch((err)=>{
            res.status(500).send({message:"Something went wrong"});
        })
}
