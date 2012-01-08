function parse_post(element) {
	// console.log(element);
	var post = new Object();
	post.title = $(element).find("title").text();
	post.link = $(element).find("link").text();
	post.category = $(element).find("category").text();
	post.img = $(element).find("enclosure").attr('url');
	post.description = $("<div/>").html($(element).find("description")).text();
	
	var shorten = 120;
	if (post.title.length > 80) {
		shorten = 70;
	}
	
	post.description = $.trim($(post.description).text());
	post.description = post.description.substr(0, shorten);
	// console.log(post);
	return post;
}

function open_item(url) {
	chrome.tabs.create({url: url});
	chrome.browserAction.setBadgeText({text:''});
}
