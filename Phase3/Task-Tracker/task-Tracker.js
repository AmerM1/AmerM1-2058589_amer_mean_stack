let fs= require("fs")
let tasks = JSON.parse(fs.readFileSync("track.json").toString());
let http = require("http");
let url = require("url");
let addtask=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title >Task Tracker</title>
</head>
<body>

    <div class="container">
        <div class="row justify-content-center">
        <br/><br/><h1 >Task Planner </h1>
        <br/><br/>
        <br/><br/><br/><br/>
        </div>
        <h2>Task Add</h2><br/>
        <form class="form-group" action="addT">
        <div class="row">
               <div class="col-2"><label>Emp Id: </label></div>
        <div  class="col-3"><input type="text" name="empid" class="form-control" /></div>
        </div>
        <div class="row">
            <div class="col-2"><label>Task Id: </label></div>
            <div class="col-3"><input type="text" name="taskid" class="form-control"/></div>
        </div>
        <div class="row">
            <div class="col-2"><label>Task:</label></div>
             <div class="col-3"><input type="text" name="task" class="form-control"/></div>
        </div>
        <div class="row">
            <div class="col-2"><label>Deadline:</label></div>
            <div class="col-3"><input type="date" name="DeadLine" class="form-control"/></div>
        </div><br/><br/>

        <div class="row">
            <div class="col-2"><input type="submit" value="Add Task" class="btn btn-primary" /></div>
        </div>
        </form>
        <hr/>
</body>
</html>`

let deletetask=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>
    <div >
        <h2>Delete Task</h2><br/>
        <form class="form-group" action="delete">
        
        <div class="row">
            <div class="col-2"><label>Task Id :</label></div>
            <div class="col-3"><input type="text"  name="taskid" class="form-control"/></div>
        </div><br/>

        <div class="row">
            <div class="col-2"><input type="submit" value="Delete Task" class="btn btn-danger" /></div>
        </div>
        </form>
        <hr/>
</body>
</html>`

let table=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>


    <form class="form-group" action="table">
    <div>
    <tbody id="demo">
    <!--This will be filled by Javascript-->
  </body>
        <div class="row">
            <div class="col-2"><input type="submit" value="Show Task Tabel" class="btn btn-light" /></div>
            <br></br>
        </div>
        </form>
     
</body>
</html> 

`
let tableHide=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="cssfile.css">
    <title>Task Tracker</title>
</head>
<body>


    <form class="form-group" action="tableHide">
    <div>
    <tbody id="demo">
    <!--This will be filled by Javascript-->
  </body>
        <div class="row">
            <div class="col-2"><input type="submit" value="Disable table" class="btn btn-dark" /></div>
            <br></br>
        </div>
        </form>
     
</body>
</html> `

let server = http.createServer((request,response)=> {
let urlInfo = url.parse(request.url,true);
    if(urlInfo.path != "/favicon.ico"){
     if(urlInfo.pathname == "/addT"){
         let Task = urlInfo.query;
         let result = tasks.find(l=>l.taskid == Task.taskid);
        response.writeHead(200,{"content-type":"text/html"});
            if(result == undefined){
            let data = {empid:Task.empid,taskid:Task.taskid,task:Task.task,DeadLine:Task.DeadLine};
            tasks.push(data);
            let taskString = JSON.stringify(tasks);
            fs.writeFileSync("track.json",taskString);
            // alert("Data stored in file");
            response.write(addtask)
            response.write(deletetask);
            response.write(table);  
            }else{
            response.write("Task Id must be unique")
            response.write(addtask)
            response.write(deletetask);  
            response.write(table);
            }
        }else if(urlInfo.pathname == "/delete"){
            let Task = urlInfo.query;
            let result = tasks.find(l=>l.taskid == Task.taskid);
           response.writeHead(200,{"content-type":"text/html"});
               if(result != undefined){
               const index = tasks.findIndex(x => x.taskid === Task.taskid);
               if (index !== undefined) tasks.splice(index, 1);
                let taskString = JSON.stringify(tasks);
                fs.writeFileSync("track.json",taskString);
                response.write(addtask)
                response.write(deletetask);  
                response.write(table);
            }else{
            response.write("Task Id not Exist")
            response.write(addtask)
            response.write(deletetask);  
            response.write(table);
            }
        }else if(urlInfo.pathname=="/table"){            
         
            let tableStart = "<table border=1><tr><th>Employee ID</th><th>Task ID</th><th>Task Name</th><th>Deadline</th></tr>";
            let tableData = "";
            for (let task of tasks) {
                tableData += "<tr><td>"+task.empid+"</td><td>"+task.taskid+"</td><td>"+task.task+"</td><td>"+task.DeadLine+"</td></tr>";
            }
            response.write(addtask);  
            response.write(deletetask);  
            response.write(tableHide);
            response.write(tableStart+tableData+"</table>");

        }else if(urlInfo.pathname == "/tabelHide"){
            response.write(addtask);  
            response.write(deletetask);  
            response.write(table);

        }else{
    response.write(addtask);  
    response.write(deletetask);  
    response.write(table);
}
}
    response.end();
})

server.listen(9090,()=>console.log("Server running on port 9090"))