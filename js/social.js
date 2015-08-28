$(function(){
    $('#facebook').sharrre({
		  share: {
		    facebook: true
		  },
		  enableHover: false,
		  enableTracking: true,
		  click: function(api, options){
		    api.simulateClick();
		    api.openPopup('facebook');
		  }
	});
	
	 $('#twitter').sharrre({
		  share: {
		    facebook: true
		  },
		  enableHover: false,
		  enableTracking: true,
		  click: function(api, options){
		    api.simulateClick();
		    api.openPopup('twitter');
		  }
	});
	
	 $('#googlePlus').sharrre({
		  share: {
		    facebook: true
		  },
		  enableHover: false,
		  enableTracking: true,
		  click: function(api, options){
		    api.simulateClick();
		    api.openPopup('googlePlus');
		  }
	});
	
	 $('#pinterest').sharrre({
		  share: {
		    facebook: true
		  },
		  enableHover: false,
		  enableTracking: true,
		  click: function(api, options){
		    api.simulateClick();
		    api.openPopup('pinterest');
		  }
	});

  });