<script>
function load3d(item_id,flag)
{ 
	//insert user details here	
var username = "";
var password = "";
var API_KEY = "";
var item_id = item_id;
$.ajax({
	type: "GET",
	url: "http://disha3d.com/API/API.php",
	data: {'user': username,'password': password,'API_KEY': API_KEY,'prodid': item_id,},
	success :  function(resp)
		{	
			 //Handling custom errors
			if(resp == 0)
			{
				//Model does not exists								
			}
			else if
			(resp == 2)
			{
				//Username and password incorrect
			}
			else if(resp == 3)
			{
				//API_KEY incorrect
			}
			else if(resp == 00)
			{
				// Request does not exist
			}
			//MODEL EXISTS!
			else{
					
			//REFER TO NOTE 1 OF INTEGRATION DOCUMENT
				if(flag==1)
				{
					//GENERATE BUTTONS
					$(/* --Selector for button division-- */).html('<img src="--Button Image Source--"   onclick="load3d('+item_id+',2)" > ');
				}
				else if(flag==2)
				{
					//Display 3D Model
					$(/* --Selector for <IFRAME>-- */).html('<iframe id="3diframe" src="'+resp+'" width="600" height="480" frameBorder="0" allowfullscreen/>');										
			 	}
									
				else
				{
					alert('not defined');
				}
			}
		}
});
}

$(document).ready(function(){
	load3d('<ITEM ID>',1);
  });
 
</script>

// for product detail page
<script>
function load3d(item_id,flag)
{ 
	//insert user details here	
	var username = "";
	var password = "";
	var API_KEY = "";
	var item_id = item_id;
	$.ajax({
				type: "GET",
				url: "http://disha3d.com/API/API.php",
				data: {'user': username,'password': password,'API_KEY': API_KEY,'prodid': item_id,},
				success :  function(resp)
						 {	
							if(resp == 0){}else if(resp == 2){}else if(resp == 3){}else if(resp == 00){}
							else{
								    if(flag==1)
									{
										$('#div3d').html('<img src="/_ui/desktop/common/images/3d.png"  style="margin-top: 292px;border: 1px solid #bfbfbf;width: 84px;height: 85px !important;cursor:pointer;margin-right:-79px;" onclick="load3d('+item_id+',2)" height="30px"> ');
								         oldercontent = $('#3d').html();
									}
									else if(flag==2)
									{
										$('#3d').html('<iframe id="3diframe" src="'+resp+'" width="600" height="480" frameBorder="0" allowfullscreen/>');										
							        }
									else if(flag==3)
									{
										 $('#full').html('<iframe src="'+resp+'" height="480px" width="600px" frameBorder="0"  />');
									}
									else{
										alert('not defined');
									}
							}
						 }
				});
}

$(document).ready(function(){
	load3d('<ITEM ID>',1);
  });
 
</script>
