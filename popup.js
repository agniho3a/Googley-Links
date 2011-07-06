function paint_options(){
	//link.href="javascript:chrome.tabs.create({url: '" + optURL + "'});";
	var sheetFeedUrl = "https://spreadsheets.google.com/feeds/list/0AlCytEQA783GdHE5M0VYbV93TkpDY0tLTHlyZkRhZGc/od6/public/basic?hl=en_US";
	var xml = new JKL.ParseXML( sheetFeedUrl );
    var data = xml.parse();
	var sheetUrl = "https://spreadsheets0.google.com/spreadsheet/ccc?hl=en_US&key=tq93EXm_wNJCcKKLyrfDadg&hl=en_US#gid=0";
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
			

	var link = document.createElement("a");
	link.href="javascript:chrome.tabs.create({url: '" + optLink + "'});";
	link.innerText = optTitle;
	td.appendChild(link);
	document.getElementById("optionsTable").appendChild(tr);		
	
}
