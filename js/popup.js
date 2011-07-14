function paint_options(){
	var googleSheet = new GoogleSpreadsheet();

	var sheetUrl		= googleSheet.getSheetUrl();
	var sheetFeedUrl	= googleSheet.getFeedUrl();

	var xml = new JKL.ParseXML( sheetFeedUrl );
    var data = xml.parse();

	document.getElementById("sheetLink").href = "javascript:chrome.tabs.create({url: '" + sheetUrl + "'});";

	for (i=0; i<data.feed.entry.length ;i++ )
	{
		var optTitle = data.feed.entry[i].title["#text"];
		var optLink  = data.feed.entry[i].content["#text"];
		
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
