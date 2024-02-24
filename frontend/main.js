window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterr.azurewebsites.net/api/GetResumeCounter?code=_ZVlmkO7iotALXIXJ1Rz1-jBBfIXDzmODKnxs1KNqdD3AzFuv_VHOw=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(localFunctionApi).then(response => {
        return response.json()
    }).then(response=>{
        console.log ("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}