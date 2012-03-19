var notification;

function paint_options(){

	feedCount = localStorage["feedCount"];

	var sheetUrl		= localStorage["sheetURL"];
	document.getElementById("sheetLink").href = "javascript:chrome.tabs.create({url: '" + sheetUrl + "'});";

	for (i=0; i<feedCount ;i++ )
	{
		var optTitle = localStorage["optTitle"+i];
		var optLink  = localStorage["optLink"+i];
		
		add_row(optTitle,optLink.substring(5));
	}

}

function add_row(optTitle, optLink){
	
	var tr = document.createElement("tr");
	var td = document.createElement("td");

	tr.appendChild(td);
			
	if(optTitle != '---'){
		var link = document.createElement("a");
		link.href="javascript:chrome.tabs.create({url: '" + optLink + "'});";
		link.innerText = optTitle;
		td.appendChild(link);
	} else {
		var hr = document.createElement("hr");
		td.appendChild(hr);
	}
	document.getElementById("optionsTable").appendChild(tr);		
	
}

function clearTable(){
	document.getElementById("optionsTable").innerHTML = "";
}

function notifyMe(){
	notification = webkitNotifications.createNotification(
	   'res/icon.png',  // icon url - can be relative
	  'Done!',  // notification title
	  'Googley-Links successfully updated!'  // notification body text
	   );
	
	notification.ondisplay= function() { 
      setTimeout('notification.cancel()', 3000); 
    }; 

	notification.show();
}

function fetchAndReload(){
	fetch_options();
	clearTable();
	paint_options();
	notifyMe();
}