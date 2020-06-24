var element = document.getElementById("root")
var displayData = ""
fetch("https://api.covid19india.org/data.json")
    .then(data => data.json())
    .then(data => {
    
        for(var key in data['cases_time_series'][0] )
            {
                
                displayData = displayData +"<th>"+ key +"</th>"
                
            }
        for (let index = 0; index < data['cases_time_series'].length; index++) {
            
            var date = data['cases_time_series'][index]
            displayData = displayData +"<tr>"
            for(var key in date )
            {
                
                displayData = displayData +"<td>"+ date[key] +"</td>"
                
            }
            displayData = displayData +"</tr>"
      
        }
        element.innerHTML = displayData
    })
    