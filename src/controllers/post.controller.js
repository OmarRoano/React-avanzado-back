const Post = require('../models/post.model');
const {post} = require('../app');

// obtener todos los post (GET)
exports.getAllPost = async (req, res) => { //request-respuesta
    //res.json(posts);
    try{
        const post = await Post.find();
        res.json(post);
    }catch(err){res.status(500).json({message:'Error al al obtener todos los post', error: error.message})}
}

exports.getPostById = async(req, res)=>{

    try {
        const post = await Post.findById(req.params.id);
        if (post) return res.json(post);
        return res.status(401).json({message: 'Post no encontrado'});
    }catch (err) {
        return res.status(500).json({message: 'Error al obtener el post', error: err.message});
    }

    /*console.log('Parametro de id : ')
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({error:'Post no encontrado'});
    res.json(post);*/
}

exports.createPost = async(req,res) => {
    //en lugar de usar un id con fecha, usar un id numerico pero primero deben de buscar qeu no exista un id con el mismo valor, si ya existe uno, mostrar el error del post con id existente

    const post = new Post(req.body);
    await post.save();
    return res.status(201).json(post);

   /* const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);

    return res.status(201).json(newPost);*/
}

//actualiza datos por id
exports.updatePost = async (req,res) => {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(updated)
    /*
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({error:'Post no encontrado'});

    posts[index] = {
        ...posts[index],
        title: req.body.title,
        content: req.body.content
    };

    return  res.status(204).end();*/
};

exports.deletePost = async(req,res) => {

    await Post.findByIdAndDelete(req.params.id);
    return res.status(204).end();
    /*
    const id = parseInt(req.params.id);
    const inicial = posts.length;
    posts = posts.filter(p => p.id !== id)
    if (posts.length === inicial) return res.status(404).json({error:'Post no encontrado'});

    //actualizar el modulo donde esta nuestro arreglo de post
    require('../models/post.model').splice(0,require('../models/post.model').length, ...posts);

    return res.status(204).end();*/
};