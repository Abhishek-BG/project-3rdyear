const {prisma} = require('../utils/dbConnector');
exports.getAllUsers = async(req,res) =>{
    try{
        const Data = await prisma.User.findMany({where:{role:'user'}});
        res.status(200).send({status:true,data:Data});
    }catch(err){
         
         res.status(400).send({status:false,message:err});
    }

}
exports.addGenre=async (req,res)=>{
    const {name}=req.body;
    try{
        const genreData=await prisma.genre.create({data:{name}})
        res.status(200).send({data:genreData,status:true,message:"genre created"})
    }
    catch(err){
        res.status(400).send({message:err,status:false});
    }
}
exports.addMovie=async(req,res)=>{
    const {title,desc,year,url,bannerUrl,genreId}=req.body;
    console.log(req.body);
    try{
        const movieData=await prisma.Movies.create({data:{
            title,
            desc,
            year:parseInt(year),
            url,
            bannerUrl,
            genreId
        }})
        res.status(200).send({data:movieData,status:true,message:"Movie added Successfully"})
    }
    catch(err){
        res.status(400).send({status:false,message:err})
    }
    
}

exports.viewGenre=async(req,res)=>{
    try{
        const genreData=await prisma.Genre.findMany();
        res.status(200).send({data:genreData,status:true})
    }
    catch(err){
        res.status(400).send({status:false,message:err})
    }
}

exports.viewMovies=async(req,res)=>{
    try{
        const movieData=await prisma.Movies.findMany();
        res.status(200).send({data:movieData,status:true})
    }
    catch(err){
        res.status(400).send({status:false,message:err})
    }
}

//edit movie controller 
exports.editMovies = async (req,res)=>{
    const movieId = req.params.id;
    const {title,desc} = req.body;
    try{
        const updateMovie = prisma.Movies.update({where:movieId},{data:{
            title,
            desc
        }})
        res.status(200).send({status:true,message:updateMovie});
    }catch(err){
        res.status(400).send({status:false,message:err.message});
    }

}

exports.deleteMovie = async (req,res)=>{
    const movieId = req.params.id;
    try{
        const deleteMovie = await prisma.Movies.delete({where:{id:movieId}})
        res.status(201).send({status:true,message:'Deleted Successfully'});
    }
    catch(err){
        res.status(200).send({status:false,message:err});
    }
}
exports.deleteGenre = async (req,res)=>{
    console.log(req.params.id);
    const genreId = req.params.id;
    try{
        await prisma.Movies.deleteMany({where:{genreId:genreId}});//one to many delete
        const deleteData = await prisma.Genre.delete({
         where:{id:genreId}
        })
         res.status(201).send({status:true,message:'Deleted Successfully'});
    }catch(err){
         res.status(200).send({status:false,message:err});
    }
}
exports.editGenre = async (req,res)=>{
    const genreId = req.params.id;
    const {name} = req.body;
    try{
        const updateData = await prisma.Genre.update({
         where:{id:genreId},
         data:{name}
        })
         res.status(201).send({data:{status:true,message:"Updated Successfully"}});
    }catch(err){
         res.status(200).send({status:false,message:err});
    }
}