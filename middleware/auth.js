const jwt = require('jsonwebtoken');
const config= require('config');


module.exports=function (req,res,next) {
      let token=req.header('x-auth-token');
      if (!token) {
        return res.status(401).send('Unauthorised....');
      }

      try {
          const decoded=jwt.verify(token,config.get('privateKey'));
          //console.log('decoded: ',decoded);
          req.user=decoded;
         // console.log('req.user: ',req.user);
          next();
        
      } catch (error) {
        console.error('Invalid token')
      }
      
    
}