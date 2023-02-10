import { Request } from "express";
import multer, { diskStorage } from "multer";

// RETORNO LA UBICACION DE LA CARPETA DONDE TRABAJO ACTUALMENTE, A ESTO LE PONGO LA CARPETA storage
const PATH_STORAGE = `${ process.cwd() }/storage`

const storage = diskStorage({
    destination( req: Request, file: Express.Multer.File, cb: any ) {
        cb( null, PATH_STORAGE );
    },
    filename( req: Request, file: Express.Multer.File, cb: any ) {
        const ext = file.originalname.split('.').pop(); // image.jpg => obtengo la extencion osea jpg
        const fileNameRandom = `image-${ Date.now() }.${ ext }`; // le ponemos un nuevo nombre para que no se repita
        cb( null, fileNameRandom );
    }
});

const multerMiddleware = multer({ storage });

export { multerMiddleware };