
 var allDayTasks = localStorage.getItem("tasks");
 if (allDayTasks === null){
     allDayTasks ={};
 }
 else{
     allDayTasks = JSON.parse(allDayTasks);
 }

 // look for the key with # and show its
for(key in allDayTasks){
    $("#"+ key).val(allDayTasks[key])   // $("#9")
}
    
$(".saveBtn").click(function(){
    //console.log(this);
    var taskContent = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
    allDayTasks[time]=taskContent
    console.log(allDayTasks)

    localStorage.setItem("tasks", JSON.stringify(allDayTasks))
})

var current = moment().hours();
console.log (current)
current=13;
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

