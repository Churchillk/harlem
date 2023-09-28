(function () {
	var country = {'code':'unk','id':0,'defaultLangauge':'en-us'};
	if (!window.evidon) window.evidon = {};
	if (window.evidon.notice) {
		window.evidon.notice.setLocation(country);
	}
	else {
		window.evidon.location = country;
	}
})();