/**
 *
 * jobservice
 * 
 */

app.factory('JobService',function($http){
	var jobservice={}

	
	jobservice.addjob=function(job){
		console.log('job tittle in service'+job.jobtittle);
	return $http.post("http://localhost:8086/ProAngMe/addjob",job)
}
	
	jobservice.getAllJobs=function(){
		return $http.get("http://localhost:8086/ProAngMe/alljobs");
	}
	jobservice.getJob=function(id){
		return $http.get("http://localhost:8086/ProAngMe/getjob/"+id);
	}
return jobservice;
})