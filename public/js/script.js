$(function(){

    var $activeList = $('#active-list');
    var $completedList = $('#completed-list');

    $.ajax({
        type: 'GET',
        url: 'api/tasks',
        success: function(tasks){
            $.each(tasks, function(i, task){
                $li = $('<li></li>');
                $li = $li.attr('id', task._id);
                if(task.completed){
                    $li = $li.text(task.title);
                    $completedList.append($li);
                }else{
                    $li = $li.text(task.title);
                    $activeList.append($li);
                }
            });
        }
    });


});