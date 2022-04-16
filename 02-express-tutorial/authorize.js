 const authorize = (req, res , next) => {
    const {user} = req.query;
    if(user === 'john'){
       req.user = {name: 'john',id:3}
    }else{
       res.status(404).send('Unauthorize')
    }
    next()
 }
 module.exports = authorize