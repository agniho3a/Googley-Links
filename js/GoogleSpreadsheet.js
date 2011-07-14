var GoogleSpreadsheet = (function() {

	var singleInstance = null;

	function GoogleSpreadsheetImpl()
	{
		var sheetURL = null;
		var feedURL  = null;

		this.isReady = function (){
			return (this.sheetURL != null) && (this.feedURL != null);
		}

		this.setSheetUrl = function (sheetLink){
			this.sheetURL = sheetLink;
		}

		this.setFeedUrl = function (feedLink) {
			this.feedURL = feedLink;
		}

		this.Init = function(){
			this.sheetURL = localStorage["sheetURL"];
			this.feedURL  = localStorage["feedURL"];
		}

		this.getFeedXML = function () {
			var xml = new JKL.ParseXML(this.feedUrl);
			return xml;
		}

		this.getSheetUrl = function() {
			return this.sheetURL;
		}

		this.getFeedUrl = function() {
			return this.feedURL;
		}
	}


	return function() {
		if (singleInstance == null)
		{
			singleInstance = new GoogleSpreadsheetImpl();
			singleInstance.Init();
		}
		return singleInstance;
	};
})();