function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	var loading = function(done) {
		var xmlhttpItem = new XMLHttpRequest();
		xmlhttpItem.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200)
			{
				var myObj = JSON.parse(this.responseText);
				var id = getParameterByName('id');
				var type;
				for(var i = 0; i < myObj.list.length; i++) {
					if(myObj.list[i].name == id) {
						type = myObj.list[i].type;
						document.getElementById("thumbnail").innerHTML = "<img src=\"/img/items/" + myObj.list[i].imgsrc + " \" width=\"175\" >";
						document.getElementById("name").innerHTML = myObj.list[i].name;
						document.getElementById("kind").innerHTML = myObj.list[i].kind;
						document.getElementById("reqlev").innerHTML = myObj.list[i].reqlev;
						document.getElementById("reqstr").innerHTML = myObj.list[i].reqstr;
						document.getElementById("reqdex").innerHTML = myObj.list[i].reqdex;
						document.getElementById("reqint").innerHTML = myObj.list[i].reqint;
						document.getElementById("reqluk").innerHTML = myObj.list[i].reqluk;
						document.getElementById("reqpop").innerHTML = myObj.list[i].reqpop;
						document.getElementById("upgrade").innerHTML = myObj.list[i].upgrade;
						document.getElementById("scissors").innerHTML = myObj.list[i].scissors;
						document.getElementById("starforce").innerHTML = myObj.list[i].starforce;
						document.getElementById("earndrop").innerHTML = myObj.list[i].earndrop;
						document.getElementById("earnquest").innerHTML = myObj.list[i].earnquest;
						document.getElementById("earnmake").innerHTML = myObj.list[i].earnmake;
						document.getElementById("earnetc").innerHTML = myObj.list[i].earnetc;

						//console.log("로딩함수 동작");

						// type :: 0 1 4 5 6 7 8 9 공격력 장비, 2 3 마력 장비
						if(type == "0") { // 전사계열 무기 (공격력)
							document.getElementById("job").innerHTML = "전사";
							document.getElementById("atkOrMag").innerHTML = "공격력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].atk;
							document.getElementById("spdOrNot").innerHTML = "공격속도: ";
							document.getElementById("spd").innerHTML = myObj.list[i].spd;
						}else if(type == "1") { // 전사계열 방어구 (공격력)
							document.getElementById("job").innerHTML = "전사";
							document.getElementById("atkOrMag").innerHTML = "방어력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].defense;
						}else if(type == "2") { // 법사계열 무기 (마력)
							document.getElementById("job").innerHTML = "마법사";
							document.getElementById("atkOrMag").innerHTML = "마력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].mag;
							document.getElementById("spdOrNot").innerHTML = "공격속도: ";
							document.getElementById("spd").innerHTML = myObj.list[i].spd;
						}else if(type == "3") { // 법사계열 방어구 (마력)
							document.getElementById("job").innerHTML = "마법사";
							document.getElementById("atkOrMag").innerHTML = "방어력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].defense;
						}else if(type == "4") { // 궁수계열 무기 (공격력)
							document.getElementById("job").innerHTML = "궁수";
							document.getElementById("atkOrMag").innerHTML = "공격력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].atk;
							document.getElementById("spdOrNot").innerHTML = "공격속도: ";
							document.getElementById("spd").innerHTML = myObj.list[i].spd;
						}else if(type == "5") { // 궁수계열 방어구 (공격력)
							document.getElementById("job").innerHTML = "궁수";
							document.getElementById("atkOrMag").innerHTML = "방어력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].defense;
						}else if(type == "6") { // 도적계열 무기 (공격력)
							document.getElementById("job").innerHTML = "도적";
							document.getElementById("atkOrMag").innerHTML = "공격력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].atk;
							document.getElementById("spdOrNot").innerHTML = "공격속도: ";
							document.getElementById("spd").innerHTML = myObj.list[i].spd;
						}else if(type == "7") { // 도적계열 방어구 (공격력)
							document.getElementById("job").innerHTML = "도적";
							document.getElementById("atkOrMag").innerHTML = "방어력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].defense;
						}else if(type == "8") { // 해적계열 무기 (공격력)
							document.getElementById("job").innerHTML = "해적";
							document.getElementById("atkOrMag").innerHTML = "공격력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].atk;
							document.getElementById("spdOrNot").innerHTML = "공격속도: ";
							document.getElementById("spd").innerHTML = myObj.list[i].spd;
						}else if(type == "9") { // 해적계열 방어구 (공격력)
							document.getElementById("job").innerHTML = "해적";
							document.getElementById("atkOrMag").innerHTML = "방어력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].defense;
						}else if(type == "12") { // 장신구 (공격력/마력)
							document.getElementById("job").innerHTML = "전직업";
							document.getElementById("atkOrMag").innerHTML = "방어력: ";
							document.getElementById("atk").innerHTML = myObj.list[i].defense;
						}

						//console.log("로딩함수 동작2");
						done();
						break;
					}
				}
			}
		};
		
		xmlhttpItem.open("GET", "/data/itemData.txt", true);
		xmlhttpItem.send();
		
		//console.log("로딩함수 끝");
	}
	
	
	loading(function done() {
		//console.log("던함수 실행!");
		var xmlhttpSet = new XMLHttpRequest();
		xmlhttpSet.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200)
			{
				var myObj = JSON.parse(this.responseText);
				var id = getParameterByName('id');
				var setEffectName, jobName
				var setItemList = "", setEffectList = "";

				if(id.includes("네크로")) {
					jobName = document.getElementById("job").innerHTML;
					setEffectName = "네크로 세트(" + jobName + ")";
					//console.log("네크로 세트효과 발동!");
				}else if(id.includes("무스펠") || id.includes("쟈이힌")) {
					jobName = document.getElementById("job").innerHTML;
					if (jobName == "전사") jobName = "워리어";
					else if (jobName == "마법사") jobName = "메이지";
					else if (jobName == "궁수") jobName = "아처";
					else if (jobName == "도적") jobName = "로그";
					else if (jobName == "해적") jobName = "파이렛";
					setEffectName = "7th " + jobName + " 세트";
					//console.log("무스펠/쟈이힌 세트효과 발동!");
				}else if(id.includes("로얄 반 레온")) {
					jobName = document.getElementById("job").innerHTML;
					setEffectName = "로얄 반 레온 " + jobName + " 세트";
					//console.log("로얄 반 레온 세트효과 발동!");
				}else if(id.includes("우트가르드") || id.includes("펜살리르")) {
					jobName = document.getElementById("job").innerHTML;
					if (jobName == "전사") jobName = "워리어";
					else if (jobName == "마법사") jobName = "메이지";
					else if (jobName == "궁수") jobName = "아처";
					else if (jobName == "도적") jobName = "로그";
					else if (jobName == "해적") jobName = "파이렛";
					setEffectName = "8th " + jobName + " 세트";
					//console.log("우트가르드/펜살리르 세트효과 발동!");
				}else if(id.includes("라이온하트")) {
					setEffectName = "라이온하트 세트";
					//console.log("라이온하트 세트효과 발동!");
				}else if(id.includes("드래곤테일")) {
					setEffectName = "드래곤테일 세트";
					//console.log("드래곤테일 세트효과 발동!");
				}else if(id.includes("팔콘윙")) {
					setEffectName = "팔콘윙 세트";
					//console.log("팔콘윙 세트효과 발동!");
				}else if(id.includes("레이븐혼")) {
					setEffectName = "레이븐혼 세트";
					//console.log("레이븐혼 세트효과 발동!");
				}else if(id.includes("샤크투스")) {
					setEffectName = "샤크투스 세트";
					//console.log("샤크투스 세트효과 발동!");
				}else if(id.includes("파프니르") || id.includes("하이네스") || id.includes("이글아이") || id.includes("트릭스터")) {
					jobName = document.getElementById("job").innerHTML;
					setEffectName = "루타비스 세트(" + jobName + ")";
					//console.log("루타비스 세트효과 발동!");
				}else if(id.includes("앱솔랩스")) {
					jobName = document.getElementById("job").innerHTML;
					setEffectName = "앱솔랩스 세트(" + jobName + ")";
					//console.log("앱솔랩스 세트효과 발동!");
				}else if(id.includes("아케인셰이드")) {
					jobName = document.getElementById("job").innerHTML;
					setEffectName = "아케인셰이드 세트(" + jobName + ")";
					//console.log("아케인셰이드 세트효과 발동!");
				}else if(id == "아쿠아틱 레터 눈장식" || id == "응축된 힘의 결정석" || id.includes("혼테일의 목걸이") || id.includes("네이터 펜던트") || id == "골든 클로버 벨트" || id == "데아 시두스 이어링" || id == "영생의 돌" || id == "핑크빛 성배" || id == "블랙빈 마크" || id == "파풀라투스 마크" || id == "지옥의 불꽃" || id == "분노한 자쿰의 벨트") {
					jobName = document.getElementById("job").innerHTML;
					setEffectName = "보스 장신구 세트";
					//console.log("보스 장신구 세트효과 발동!");
				}
				else {
				
				}

				

				for(var i = 0; i < myObj.list.length; i++) {
					if(myObj.list[i].title == setEffectName) {
						setItemList += "<div class=\"setItemTitle\">" + setEffectName + "</div><ul>";
						for(var j = 0; myObj.list[i].setItem[j] != null; j++) {
							if (myObj.list[i].setItem[j].type != "무기") {
								setItemList += "<li class =\"setItemLi\"><span class=\"setItemName\"><a href=\"item?id=" + myObj.list[i].setItem[j].name + "\">" + myObj.list[i].setItem[j].name + "</a></span><span class=\"setItemType\">(" + myObj.list[i].setItem[j].type + ")</span></li>";
							}else{
								setItemList += "<li class =\"setItemLi\"><span class=\"setItemName\">" + myObj.list[i].setItem[j].name + "</span><span class=\"setItemType\">(" + myObj.list[i].setItem[j].type + ")</span></li>";
							}
						}
						
						setItemList += "</ul><hr>";
						
						setEffectList += "<div class=\"setItemSection\">"
						for(var j = 0; myObj.list[i].setEffect[j] != null; j++) {
							//console.log(myObj.list[i].setEffect[j].subject);
							setEffectList += "<div class=\"setEffectSubject\">" + myObj.list[i].setEffect[j].subject + "</div><ul>";
							for(var k = 0; myObj.list[i].setEffect[j].effect[k] != null; k++) {
								setEffectList += "<li class=\"setEffectDes\">" + myObj.list[i].setEffect[j].effect[k].stat + "</li>";
							}
							setEffectList += "</ul>";
						}
						setEffectList += "</div>"

						document.getElementById("setItem").innerHTML = setItemList + setEffectList;
						break;
					}
				}
			}
		};

		xmlhttpSet.open("GET", "/data/setItemData.txt", true);
		xmlhttpSet.send();
	})
	
	  
	  
	  
	  function onAnalyze() {
		  let link = document.getElementById("name").innerHTML;
		  link = "iteminfo?id=" + link;
		  window.location.href = link;
	  }