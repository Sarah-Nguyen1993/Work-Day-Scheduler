
 //get saved tasks from local storage
 var allDayTasks = localStorage.getItem("tasks");
 if (allDayTasks === null){
     allDayTasks ={};
 }
 else{
     allDayTasks = JSON.parse(allDayTasks);
 }

 // look for the key with # and show its value
for(key in allDayTasks){
    $("#"+ key).val(allDayTasks[key])  
}

//when save btn is clicked, the following function will go find the button's sibling with class of description
//get the value of the input and save that to the local storage
//it also assign an id to its sibling for later use
$(".saveBtn").click(function(){
    var taskContent = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
    allDayTasks[time]=taskContent
    localStorage.setItem("tasks", JSON.stringify(allDayTasks))
})

//using moment.js, compare the time of each row to the current
//if it is smaller than the current, it is the past -> the past time blocks have gray color
//if it it larger than the current, it is the future --> the future time blocks have green color
var current = moment().hours();
$(".description").each(function(){
    var time = parseInt($(this).attr("id"))
    if (time < current){
        $(this).parent().addClass("past")
    }
    else if (time === current){
        $(this).parent().addClass("present")
    
    }
    else{
        $(this).parent().addClass("future")
    }
})

