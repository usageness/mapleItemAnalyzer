var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200)
		{
			//console.log("parameter is : " + getParameterByName('id'));
		}
    }

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200)
		{
			var myObj = JSON.parse(this.responseText);

			let newItem = "";
			for(var i = 0; i < myObj.list.length; i++) {
				//let list = document.getElementById("list-unstyled").innerHTML;
				// 동적 생성

				newItem += "<div class=\"item rounded col-xs-1 col-sm-1 col-md-1 col-lg-1\"><img class=\"align-self-center thumbnail\" src=\"img/items/" + myObj.list[i].imgsrc + "\" title=\"" + myObj.list[i].name + "\"></div>"

			}
			document.getElementById("itemlist").innerHTML = newItem;
		}
		
		var items = document.querySelectorAll(".item");
		//console.log(items);
		//console.log(items.length);

		for (var i = 0; i < items.length; i++) {
			items[i].addEventListener("click", function() {
				//console.log("function start");
				var nowChildren = this.childNodes;
				//console.log("nowChildren : " + nowChildren);
				var itemId = nowChildren[0].title;
				//console.log(itemId);
				window.location.href = '/item?id='+itemId;
			});
			//console.log(i + "번째 이벤트리스너 추가");
		}
		
	};

	xmlhttp.open("GET", "/data/itemData.txt", true);
	xmlhttp.send();