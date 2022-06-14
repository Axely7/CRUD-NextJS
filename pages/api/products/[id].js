export default function hanlder(req, res){
    
    console.log(req.query);
    return res.status(200).json('getting one product: ' + req.query.id);
}