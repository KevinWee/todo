<?php
	class DBOperator{//封装函数
		public $db;
		public function __construct($dbhost,$dbport,$dbname,$dbuser,$dbpasswd){//构造函数
            try {
                $this->db = new PDO("mysql:host=".$dbhost.";port=".$dbport.";dbname=".$dbname.";charset=utf8",$dbuser,$dbpasswd);//数据库连接
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
		}
		public function insertHomeWork($table,$start_time,$expect_end_time,$type,$content){//数据库增加
			$time=date("Y-m-d H:i:s" ,time());//当前时间
			$sql = "insert into ".$table .' (user_id,create_time,is_finished,start_time,expect_end_time,type,content )'." VALUES (1,'$time',0,'$start_time','$expect_end_time','$type','$content')";
            $db = $this->db;
            try {
                $db->exec($sql);
                $lastInsertId = $db->query("SELECT LAST_INSERT_ID()")->fetch(PDO::FETCH_NUM)[0];
                echo $lastInsertId;
            } catch(Exception $e) {
                echo $sql;
                echo $e->getMessage();
            }
		}
		public function deleteHomeWork($table,$id){//数据库删除
			$sql = "delete from ".$table." where id=".$id; 
            $db = $this->db;
            try {
                $db->exec($sql);
                echo "success";
            } catch(Exception $e) {
                echo $sql;
                echo $e->getMessage();
            }
		}
		public function finishHomeWork($table,$id,$isFinished){//数据库更新
			$time=date("H:i" ,time());//当前时间
			$sql = "update ".$table." set is_finished=".$isFinished.",actual_end_time='$time' where id=".$id;
            $db =$this->db;
            try {
                $db->exec($sql);
                $updateResult = ['status'=>'success','actualEndTime'=>$time];
                echo json_encode ($updateResult);
            } catch(Exception $e) {
                echo $sql;
                echo $e->getMessage();
            }
		}
		public function queryUnfinishedHomeWorkInDay($table){//数据库查询全部记录
			$sql = "SELECT * FROM ".$table." where is_finished=0 and to_days(create_time) = to_days(now())";
            $db = $this->db;
            try {
                $sth = $db->query($sql);
                $todo=array();
                $i=0;
                while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                    $todo[$i]=array($row['id'],$row['start_time'],$row['expect_end_time'],$row['type'],$row['content']);
                    $i++;
                }
                return $todo;
            } catch(Exception $e) {
                echo $sql;
                echo $e->getMessage();
            }
        }
        public function queryFinishedHomeWorkInDay($table){//数据库查询全部记录
			$sql = "SELECT * FROM ".$table." where is_finished=1 and to_days(create_time) = to_days(now())";
            $db = $this->db;
            try {
                $sth = $db->query($sql);
                $completed=array();
                $i=0;
                while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
                    $completed[$i]=array($row['id'],$row['start_time'],$row['expect_end_time'],$row['type'],$row['content'],$row['actual_end_time']);
                    $i++;
                }
                return $completed;
            } catch(Exception $e) {
                echo $sql;
                echo $e->getMessage();
            }
		}
	}
?>