

const joblist = [
    {
        id: 1,
        company: 'Coding Ninjas',
        role: 'SDE',
        location: 'Gurgaon',
        salary: '14-20LPA',
        skills: ['REACT', 'NODEJS', 'JS', 'SQL', 'MONGODB','EXPRESS'],
        applications: 2,
        deadline: '30 Aug 2024',
        openings: 10,
        datePosted: '7 Apr 2024',
        applicants: []
    },
    {
        id: 2,
        company: 'Go Digit',
        role: 'Angular Developer',
        location: 'Pune',
        salary: '10-12LPA',
        skills: ['ANGULAR', 'JS', 'SQL', 'MONGODB'],
        applications: 5,
        deadline: '30 Aug 2024',
        openings: 4,
        datePosted: '7 Apr 2024',
        applicants: []
    }
]

export function displayJob(reqid){

    const resultJob = joblist.find((job)=>{
        if (reqid == job.id){
            return job
        }
    });
    return resultJob;

}

export function jobapplicationupdate(reqid,name,filename){

    //const applicant = new ApplicantsOfJob(name,filename);
    const resultJob = joblist.find((job)=>{
        if (reqid == job.id){
            job.applications++
            const temp = {'name': 'dummy','filname': 'dummy'}
            temp.name = name;
            temp.filname = filename;
            job.applicants.push(temp)
            return job
        }
        
    });
    //console.log(joblist[0].applicants)
    return resultJob;
}

export default joblist