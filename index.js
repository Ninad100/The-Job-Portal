import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import gethomepage from './controller/homeviewcontroller.js';
import {getjoblist,displayJobController,jobapplication} from './controller/jobseekercontroller.js';
import {uploadStorage} from './middleware/fileupload.js'


const app = express();



app.use(express.static('public'));
app.use(expressEjsLayouts);
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views',path.join(path.resolve(),'views'));

app.get('/',gethomepage);
app.get('/jobs', getjoblist);
app.get('/jobs/:id',displayJobController)

app.post('/jobs/:id',uploadStorage.single("file"),jobapplication);



export default app;
