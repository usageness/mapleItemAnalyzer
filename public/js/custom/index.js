console.log('%c메이플 추가옵션 분석기\nDevelop by usage','color:#3E71B3; font-size:30px; font-weight:bold;');
	  
	  
      function filter(){
        var value, name, item, i;

        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("item");

        for(i=0;i<item.length;i++){
          name = item[i].getElementsByClassName("name");
          if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "flex";
          }else{
            item[i].style.display = "none";
          }
        }
      }
	  
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

    
		
	var loading = function(done) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200)
			{
				var myObj = JSON.parse(this.responseText);

				let newItem = "";
				for(var i = 0; i < myObj.list.length; i++) {
					//let list = document.getElementById("list-unstyled").innerHTML;
					// 동적 생성

					newItem += "<div class=\"item\">"
					newItem += "<li class=\"media\">"
					newItem += "<img class=\"d-flex align-self-center mr-3 thumbnail\" src=\"img/items/" + myObj.list[i].imgsrc + "\" alt=\"Generic placeholder image\">"
					newItem += "<div class=\"media-body\">"
					newItem += "<span class=\"name\">" + myObj.list[i].name + "</span>"
					newItem += "</div>"
					newItem += "</li>"
					newItem += "</div>"


				}

				document.getElementById("list-unstyled").innerHTML = newItem;
			}

			var items = document.querySelectorAll(".item");

			for (var i = 0; i < items.length; i++) {
				items[i].addEventListener("click", function() {
					//console.log("function start");
					var nowChildren = this.childNodes;
					for(var i=0; i<nowChildren.length; i++){
						//console.log("nowChildren : " + nowChildren[i]);
						if(nowChildren[i].nodeName == "LI") {
							var media = nowChildren[i];
							var mediaChildren = media.childNodes;
							for(var j=0; j<mediaChildren.length; j++){
								if(mediaChildren[j].nodeName == "DIV") {
									var mediabody = mediaChildren[j];
									var mediabodyChildren = mediabody.childNodes;
									//console.log(mediabodyChildren);
									var itemId = mediabodyChildren[0].textContent;
									//console.log(itemId);
									window.location.href = '/itemInfo?id='+itemId;
								}
							}
						}
					}
				});
				//console.log(i + "번째 이벤트리스너 추가");
			}
			
			//console.log("검색창 아이템 로딩 완료! 인기아이템 리스트 로딩 시작!");
			done();

		};

		xmlhttp.open("GET", "/data/itemData.txt", true);
		xmlhttp.send();
	}
	  
	loading(function done() {
		//console.log("인기아이템 리스트 로딩을 시작합니다.");
		var xmlhttpSet = new XMLHttpRequest();
		xmlhttpSet.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200)
			{
				var myObj = JSON.parse(this.responseText);
				var list = "<ul><h3 class=\"trend\">인기 아이템</h3>";
				

				for(var i = 0; i < myObj.list.length; i++) list += "<li class=\"trendBar\"><table class=\"trendtable\"><tr><td>" + (i+1) + "</td><td><a href=\"/itemInfo?id=" + myObj.list[i].name + "\">" + myObj.list[i].name + "</a></td></tr></table></li>";
					
				list += "</ul>";
						
				document.getElementById("trendlist").innerHTML = list;
				
			}
		};

		xmlhttpSet.open("GET", "/data/trend.txt", true);
		xmlhttpSet.send();
	})    
	  
	  
	  
	function noticeClose() {
		let notice = document.getElementById("notice");
		notice.style.display ="none";
	}
	  
	let list = document.getElementById("list-unstyled");
	let value = document.getElementById("value");
	  
	value.addEventListener("focus", function() {
		list.style.visibility = "visible";
		//console.log("func start");
	});
	  
	value.addEventListener("blur", function() {
		//list.style.visibility = "hidden";
	});