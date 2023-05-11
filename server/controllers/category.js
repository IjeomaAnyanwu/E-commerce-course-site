import Category from '../models/category.js'
import slugify from 'slugify'


export const create = async(req, res) => {
    try{
        const {name} = req.body
        if(!name.trim()) {
            return res.json({error: "Name is required"})
        }
        const existingCategory = await Category.findOne({name})
        if(existingCategory){
            return res.json({error: "Already exist"})
        }

        const category = await new Category({name, slug:slugify(name)}).save()
        res.json(category)

    }catch(err){
        console.log(err)
        return res.status(400).json(err)
    }
}

//CRUD   create read update and delete

export const update = async (req, res) =>{
    try{
        const {name} = req.body
        const {categoryId} = req.params
        const category = await Category.findByIdAndUpdate(
            req.params.categoryId,
         {
            name,
            slug: slugify(name)
         },
         {new:true}
         );
          res.json(category)
    }catch(err){
        console.log(err);
        return res.status(400).json(err.message)

    }
}

export const remove = async (req, res) =>{
    try{
        
        const category = await Category.findByIdAndDelete(req.params.categoryId)
         res.json(category) 

    }catch(err){
        console.log(err);
        return res.status(400).json(err.message)

    }
}

export const list = async (req, res) =>{
    try{
        
        const category = await Category.find({})
         res.json(category)

    }catch(err){
        console.log(err);
        return res.status(400).json(err.message)

    }
}

export const read = async (req, res) =>{
    try{
        const category = await Category.findOne({slug: req.params.slug})
        return res.json(category)

    }catch(err){
        console.log(err);
        return res.status(400).json(err.message)

    }
}



