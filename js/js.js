window.onload = init;
function init(){

		var xhr = new XMLHttpRequest();

		xhr.open("GET", "https://picsum.photos/list", true);

		xhr.send(null);

		xhr.onload = function(){

				if (xhr.status == 200) {
					var picsum = JSON.parse(xhr.responseText)
					console.log(picsum);

				var imageString = "";
					for(var x = 510; x <520; x++){
					imageString +=  "<div class = container> <img src= 'https://picsum.photos/200/300?image=" + 
					picsum[x].id 
					+ 
					"'><div class=author>"
					+ 
					picsum[x].author
					+ 
					"</div><div class=author_url>"
					+ 
					"<a href='" + picsum[x].author_url + "'>"+ "AUTHOR URL" +"</a>"
					+ 
					"</div><div class=post_url>"
					+ 
					"<a href='" + picsum[x].post_url + "'>"+ "POST URL" +"</a>"
					+ 

					"</div>"
					+
				"</div>"	
									}
				document.getElementById("gallery").innerHTML = imageString;
				gallery.setAttribute('style', 'font-size: 12px; text-align: left; display:absolute;');





		}



}

}