// Using Beacon for analytics

var UIAnalytics = {

	options:{	
		username:"Manipal", // User currently Logged In
		timeIntervel:"2000", // Default 2 Sec (return and flush data for 2 Sec)
		accessLocation:false,
		browserType:true // True if need co-ordinates
	},
	dataObject:{
		location:"Not Available",
		InitialLandPageUrl:"",
		targetBrowser:"",
		
	},	
	init:function(UserOptions){

		if(!UserOptions)
		{
			UserOptions = this.options;
		}

		var keys_array = Object.keys(UserOptions);

		for(i=0;i<keys_array.length;i++)
		{
			if(this.options[keys_array[i]])
			{
				this.options[keys_array[i]] = keys_array[i];
			}
		}

		this.addEventTargets();

		if(UserOptions.accessLocation)
			this.options.location = this.getCurrentLocation();
		
		if(UserOptions.browserType)
			this.options.targetBrowser = this.getBrowserType();

		this.dataObject.InitialLandPageUrl = window.location.href;

	},
	addEventTargets:function(){
		
		var eventElements =  document.querySelectorAll('[data-uiAnalyticsEvent]');

		if(eventElements.length >0)
		{
			for (var item of eventElements) {
				if(item.tagName == "BUTTON")
					item.addEventListener("click",function(el){
					console.log(el.target.getAttribute('data-uianalyticsevent'));
					},false);
				else
				{
					item.addEventListener("mouseover",function(el){
						console.log(el.target.getAttribute('data-uianalyticsevent')+" Mouse In "+new Date().getTime());
					},false);
					item.addEventListener("mouseout",function(el){
						console.log(el.target.getAttribute('data-uianalyticsevent')+" Mouse Out "+new Date().getTime());
					},false);

				}
			}
		}
	},
	getCurrentLocation:function(){

		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position){
	        	return position.coords;
	        });
	    } else {
	       return "Not Available";
	    }

	},
	getBrowserType:function(){
	
		if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
			return "Opera";

		if(typeof InstallTrigger !== 'undefined')
			return "Firefox";

		if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)))
			return "Safari";	

		if(false || !!document.documentMode)
			return "IE";
		
		// if(!!isIE && !!window.StyleMedia)
		// 	return "Edge";
	
		if(!!window.chrome && !!window.chrome.webstore)
			return "Chrome";
		
		if((isChrome || isOpera) && !!window.CSS)
			return "Blink";

	},
	getPresentTime:function(){
		var d = new Date();
		return  d.getTime()
	}
}