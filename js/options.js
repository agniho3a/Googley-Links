var OptionsManager = ( function() {
	
	var singleInstance    = null;

	function OptionsManagerImpl() {

		var sheetUrlTextBoxID = null;
		var feedUrlTextBoxID  = null;

		
		this.isReady = function() {
			return (this.sheetUrlTextBoxID != null) && (this.feedUrlTextBoxID != null);
		} //isReady
		
		this.setSheetUrlTextBoxID = function(txtSheetID) {
			this.sheetUrlTextBoxID = txtSheetID;
		} //setSheetUrlTextBoxID

		this.setFeedUrlTextBoxID = function(txtFeedID) {
			this.feedUrlTextBoxID = txtFeedID;
		}//setFeedUrlTextBoxID

		this.restoreOptions = function() {
			if(this.isReady()){
				var storedSheetURL = localStorage["sheetURL"];
				var storedFeedURL  = localStorage["feedURL"];

				if((storedSheetURL == null) || (storedFeedURL == null)){
					storedSheetURL = "";
					storedFeedURL  = "";
				}

				document.getElementById(this.sheetUrlTextBoxID).value = storedSheetURL;
				document.getElementById(this.feedUrlTextBoxID).value = storedFeedURL;
			} else {
				alert("Please set the TextBox IDs to populate first !");
			}
		} //restoreFields

		this.saveOptions = function() {
			var storedSheetURL = document.getElementById(this.sheetUrlTextBoxID).value;
			var storedFeedURL  = document.getElementById(this.feedUrlTextBoxID).value;
			
			localStorage["sheetURL"] = storedSheetURL;
			localStorage["feedURL"]  = storedFeedURL ;

			console.log("Options saved !");

		}//saveFields

		this.init = function() {
			console.log("Init Called");
		}//init

	} //OptionsManagerImpl
	
	return function () {
		if(singleInstance == null) {
			singleInstance = new OptionsManagerImpl();
			singleInstance.init();
		}

		return singleInstance;
	};

})();