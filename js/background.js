var notification;

function fetch_options(){
	var googleSheet = new GoogleSpreadsheet();
	
	var sheetUrl		= googleSheet.getSheetUrl();
	var sheetFeedUrl	= googleSheet.getFeedUrl();

	var xml = new JKL.ParseXML( sheetFeedUrl );
    var data = xml.parse();

	//document.getElementById("sheetLink").href = "javascript:chrome.tabs.create({url: '" + sheetUrl + "'});";

	localStorage["feedCount"] = data.feed.entry.length;

	for (i=0; i<data.feed.entry.length ;i++ )
	{
		localStorage["optTitle"+i] = data.feed.entry[i].title["#text"];
		localStorage["optLink"+i]  = data.feed.entry[i].content["#text"];
		
	}
}