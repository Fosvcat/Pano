<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="mobile-web-app-capable" content="yes" />
		<style type="text/css" title="Default">
			/* fullscreen */
			html {
				height:100%;
			}
			body {
				height:100%;
				margin: 0px;
				overflow:hidden; /* disable scrollbars */
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* remove highlight on tab for iOS/Android */
			}
			/* fix for scroll bars on webkit & >=Mac OS X Lion */ 
			::-webkit-scrollbar {
				background-color: rgba(0,0,0,0.5);
				width: 0.75em;
			}
			::-webkit-scrollbar-thumb {
    			background-color:  rgba(255,255,255,0.5);
			}
		</style>	
	</head>
	<body>
<!-- - - - - - - 8<- - - - - - cut here - - - - - 8<- - - - - - - -->
		<script type="text/javascript" src="pano2vr_player.js">
		</script>
		<script src="webxr/three.min.js"></script>
		<script src="webxr/webxr-polyfill.min.js"></script>
		<div id="container" style="width:100%;height:100%;overflow:hidden;">
		<br>Loading...<br><br>
				</div>
		<img id=”btn” src=”image/like.png” width=”40″ height=”40″ style=”position:absolute;right:20px;bottom:20px;z-index:999;”>
		<img id=”btn2″ src=”image/liked.png” width=”40″ height=”40″ style=”position:absolute;right:20px;bottom:20px;z-index:998;”>
		<span id=”result” style=”position:absolute;right:10px;bottom:0px;width:60px;height:20px;z-index:999;text-align:center;color:#488edd;font-size:14px;”>
			<?php
			//连接数据库
			$con = mysqli_connect("localhost","visits","lshD070413","visits");
			if (!$con)
			{
				echo "<script>alert('连接数据库失败')</script>";
				die(mysqli_connect_error());
			}
			//设置数据库字符集 
			mysqli_query($con,"set names utf8");
			//查询数据库
			mysqli_select_db($con,'pano2vr');
			$result = mysqli_query($con,"SELECT * FROM likes");
			while($row = mysqli_fetch_array($result))
			{
				echo $row['likes'];
			}
			//关闭连接
			mysqli_close($con);
			?>
		</span>
		<div style=”position:absolute;width:150px;height:30px;padding:5px 10px;z-index:999;color:#f00;font-size:18px;“>
		<?php
		class visitorInfo
		{
			//获取访客ip
			public function getIp()
			{
				$ip=false;
				if(!empty($_SERVER["HTTP_CLIENT_IP"])){
					$ip = $_SERVER["HTTP_CLIENT_IP"];
				}
				if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
					$ips = explode (", ", $_SERVER['HTTP_X_FORWARDED_FOR']);
					if ($ip) { array_unshift($ips, $ip); $ip = FALSE; }
					for ($i = 0; $i < count($ips); $i++) {
						if (!eregi ("^(10│172.16│192.168).", $ips[$i])) {
							$ip = $ips[$i];
							break;
						}
					}
				}
				return ($ip ? $ip : $_SERVER['REMOTE_ADDR']);
			}
			//获取网站来源
			public function getFromPage(){
				return $_SERVER['HTTP_REFERER'];
			}
		}
			$visitor =new visitorInfo();
			//连接数据库
			$conn=mysqli_connect("localhost","visits","lshD070413","visits");
			if(!$conn){
			echo "<script>alert('连接数据库失败')</script>";
			die(mysqli_connect_error());
			}
			//设置数据库编码方式
			mysqli_set_charset($conn,"utf8") or die(mysqli_connect_error());
			//记录访客的ip地址
			$address=$visitor->getIp();
			//查询当前访客来访的次数的sql语句
			$sql="select times from visits where ip='$address'";
			//查询结果存到$result变量
			$result=mysqli_query($conn,$sql) or die(mysqli_connect_error());
			if(!$row=$result->fetch_row()){
				$sql="insert into visits(ip, times) values('$address','1')";
			}else{
				$times=$row['0']+1;
				$sql="update visits set times='$times' where ip ='$address'";
			}
			$result=mysqli_query($conn,$sql) or die(mysqli_connect_error());
			//获取总的访问人数即数据表中所有ip的数量
			$sql="select count(ip) from visits";
			//$sql="select sum(times) from visits";
			$result=mysqli_query($conn,$sql) or die(mysqli_connect_error());
			if($row=$result->fetch_row()){
				$num=$row[0];
			}
			echo "访问量： ".$num;
			mysqli_close($conn);
		?>
		</div>
		<script type="text/javascript">
	
			// create the panorama player with the container
			pano=new pano2vrPlayer("container");
			// load the configuration
		
			window.addEventListener("load", function() {
				pano.readConfigUrlAsync("pano.xml");
			});
			if (window.navigator.userAgent.match(/Safari/i)) {
				// fix for white borders, rotation on iPhone
				function iosHfix(e) {
					window.scrollTo(0, 1);
					var container=document.getElementById("container");
					var oh=container.offsetHeight;
					document.documentElement.style.setProperty('height', '100vh');
					if (oh!=container.offsetHeight) {
						container.style.setProperty('height',"100%");
					} else {
						container.style.setProperty('height',window.innerHeight+"px");
					}
					window.scrollTo(0, 0);
					pano.setViewerSize(container.offsetWidth, container.offsetHeight);
				};
				setTimeout(iosHfix,0);	
				setTimeout(iosHfix,100);	
				window.addEventListener("resize", function() {
					setTimeout(iosHfix,0);
					// hide toolbar on iPad happens with a delay
					setTimeout(iosHfix,500);
					setTimeout(iosHfix,1000);
					setTimeout(iosHfix,2000);
				});
			}
		</script>
		<noscript>
			<p><b>Please enable Javascript!</b></p>
		</noscript>
<!-- - - - - - - 8<- - - - - - cut here - - - - - 8<- - - - - - - --> 
	</body>
</html>
