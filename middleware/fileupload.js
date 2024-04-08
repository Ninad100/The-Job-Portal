import multer from "multer";
import path from "path";

const filepath = path.resolve("public","resumes")
console.log(filepath)

const storageOption = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,path.resolve("public","resumes"));
    },
    filename: (req,file,cb)=>{
        const {name} = req.body

        const filename1 = name + '.pdf';
        req.body.filename = filename1;
        cb(null,filename1)
    }
});

export const uploadStorage = multer({storage: storageOption});