import  jwt from 'jsonwebtoken'



export const  createToken = async(email,id)=>{
    let token =  jwt.sign({email,id},process.env.JWT_SECRET,{expiresIn:"180m"})
    return token
    
}
export const jwtDecode = async (token) =>{
    let data =  jwt.decode(token)
    return data
}

