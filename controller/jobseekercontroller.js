
import jobList from "../Model/jobList.js";
import {displayJob,jobapplicationupdate} from '../Model/jobList.js';

function getjoblist(req,res){
    res.render('joblistview',{jobs:jobList});
}

function displayJobController(req,res){
    const reqId = req.params.id;
    const job = displayJob(reqId);
    res.render('jobdescriptionview',{job:job});

}

function jobapplication(req,res){
    const reqId = req.params.id;
    const job = jobapplicationupdate(reqId,req.body.name,req.body.filename);
    //console.log(req.body.filename)
    //console.log(jobList.applicants)
    res.render('jobdescriptionview',{job:job});
}

export {getjoblist,displayJobController,jobapplication}