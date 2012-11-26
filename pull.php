<?
$temp='';
	$temp1=exec('git pull',$temp);
	#$temp1=explode(',',$temp1);
	print_r($temp[0]);
?>
