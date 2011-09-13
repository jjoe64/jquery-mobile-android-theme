function isAndroid() {
	if (typeof(DEBUG_ANDROID_THEME) != 'undefined' && DEBUG_ANDROID_THEME) return true
	
	var ua = navigator.userAgent.toLowerCase()
	return ua.indexOf("android") > -1
}

$(function() {
	if (isAndroid()) {
		// add android class to body
		$('body').addClass('android')
	}
})

