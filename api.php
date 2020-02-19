<?php
    header('Content-Type: text/html;charset=utf-8');
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    date_default_timezone_set("Asia/Shanghai");
    require "DBOperator.php";
     
    $op = @$_GET['op'];
    $hw = new DBOperator('z29.kasjet.com','8807','bekrum','bekrum','bekrum');
    if($op == 'queryAll'){
        $todoJsonStr = $hw -> queryUnfinishedHomeWorkInDay('homework_info');
        $completedJsonStr = $hw -> queryFinishedHomeWorkInDay('homework_info');
        $todolist = ['todo'=>$todoJsonStr,'completed'=>$completedJsonStr];
        echo json_encode ($todolist);
    }elseif($op == 'insert'){
        $start_time = $_POST['startTime'];
        $expect_end_time = $_POST['expectEndTime'];
        $type = $_POST['type'];
        $content = $_POST['content'];
        echo $hw -> insertHomeWork('homework_info',$start_time,$expect_end_time,$type,$content);
    }elseif($op == 'delete'){
        $homeworkId = $_POST['id'];
        echo $hw -> deleteHomeWork('homework_info',$homeworkId);
    }elseif($op == 'update'){
        $homeworkId = $_POST['id'];
        $isFinished = $_POST['isFinished'];
        echo $hw -> finishHomeWork('homework_info',$homeworkId,$isFinished);
    }
?>