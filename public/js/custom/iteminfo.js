function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
	  
	
	  
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200)
		{
			var myObj = JSON.parse(this.responseText);
			var id = getParameterByName('id');
			var type;
			for(var i = 0; i < myObj.list.length; i++) {
				if(myObj.list[i].name == id) {
					type = myObj.list[i].type;
					let level = myObj.list[i].reqlev;
					document.getElementById("name").innerHTML = myObj.list[i].name;
					document.getElementById("kind").innerHTML = myObj.list[i].kind;
					
					document.getElementById("reqlev").innerHTML = level;
					document.getElementById("thumbnail").innerHTML = "<img src=\"/img/items/" + myObj.list[i].imgsrc + " \" width=\"100\" >";
					
					
					
					// type :: 0 1 4 5 6 7 8 9 공격력 장비, 2 3 마력 장비 
					if(type == "0") { // 전사계열 무기 (공격력)
			  			document.getElementById("job").innerHTML = "전사계열";
						document.getElementById("atkOrMag").innerHTML = "공격력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
						document.getElementById("demonavangar").innerHTML = "<form action=\"\"><input onclick=\"filter()\" type=\"checkbox\" name=\"demon\" id=\"demonchk\">데몬어벤져로 계산</form>";
		  			}else if(type == "1") { // 전사계열 방어구 (공격력)
						document.getElementById("job").innerHTML = "전사계열";
						document.getElementById("atkOrMag").innerHTML = "방어력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].defense;
						document.getElementById("wporar").innerHTML = "방어구";
						document.getElementById("demonavangar").innerHTML = "<form action=\"\"><input onclick=\"filter()\" type=\"checkbox\" name=\"demon\" id=\"demonchk\">데몬어벤져로 계산</form>";
					}else if(type == "2") { // 법사계열 무기 (마력)
						document.getElementById("job").innerHTML = "마법사계열";
						document.getElementById("atkOrMag").innerHTML = "마력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].mag;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
					}else if(type == "3") { // 법사계열 방어구 (마력)
						document.getElementById("job").innerHTML = "마법사계열";
						document.getElementById("atkOrMag").innerHTML = "방어력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].defense;
						document.getElementById("wporar").innerHTML = "방어구";
					}else if(type == "4") { // 궁수계열 무기 (공격력)
						document.getElementById("job").innerHTML = "궁수계열";
						document.getElementById("atkOrMag").innerHTML = "공격력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
					}else if(type == "5") { // 궁수계열 방어구 (공격력)
						document.getElementById("job").innerHTML = "궁수계열";
						document.getElementById("atkOrMag").innerHTML = "방어력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].defense;
						document.getElementById("wporar").innerHTML = "방어구";
					}else if(type == "6") { // 도적계열 무기 (공격력)
						document.getElementById("job").innerHTML = "도적계열";
						document.getElementById("atkOrMag").innerHTML = "공격력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
					}else if(type == "7") { // 도적계열 방어구 (공격력)
						document.getElementById("job").innerHTML = "도적계열";
						document.getElementById("atkOrMag").innerHTML = "방어력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].defense;
						document.getElementById("wporar").innerHTML = "방어구";
						document.getElementById("zenon").innerHTML = "<form action=\"\"><input onclick=\"filter()\" type=\"checkbox\" name=\"zen\" id=\"zenonchk\">제논으로 계산</form>";
					}else if(type == "8") { // 해적계열 무기 (공격력)
						document.getElementById("job").innerHTML = "해적계열";
						document.getElementById("atkOrMag").innerHTML = "공격력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
					}else if(type == "9") { // 해적계열 방어구 (공격력)
						document.getElementById("job").innerHTML = "해적계열";
						document.getElementById("atkOrMag").innerHTML = "방어력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].defense;
						document.getElementById("wporar").innerHTML = "방어구";
						document.getElementById("zenon").innerHTML = "<form action=\"\"><input onclick=\"filter()\" type=\"checkbox\" name=\"zen\" id=\"zenonchk\">제논으로 계산</form>";
					}else if(type == "10") { // 럭 제논 도적 무기 (공격력)
						document.getElementById("job").innerHTML = "하이브리드(도적)계열";
						document.getElementById("atkOrMag").innerHTML = "공격력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
					}else if(type == "11") { // 덱 제논 해적 무기 (공격력)
						document.getElementById("job").innerHTML = "하이브리드(해적)계열";
						document.getElementById("atkOrMag").innerHTML = "공격력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("spdOrNot").innerHTML = "공격속도: ";
						document.getElementById("spd").innerHTML = myObj.list[i].spd;
						document.getElementById("wporar").innerHTML = "무기";
					}else if(type == "12") { // 장신구
						document.getElementById("job").innerHTML = "전직업(장신구)";
						document.getElementById("atkOrMag").innerHTML = "공격력/마력: ";
						document.getElementById("atk").innerHTML = myObj.list[i].atk;
						document.getElementById("wporar").innerHTML = "장신구";
					}
					
					// 쟈이힌 체크 (추옵 7단계)
					
					let lev5 = myObj.list[i].plusAtt6 != null ? true : false;
					let coefficient_solostat = (Math.floor(level / 20) + 1);
					let coefficient_bistat = (Math.floor(level / 40) + 1);
					
					if(lev5) {
						document.getElementById("plusAtt").innerHTML = "<td><font color=red style=\"font-weight:bold\">추가 공격력/마력</font></td><td><span id=\"plusAtt1\"></span></td><td><span id=\"plusAtt2\"></span></td><td><span id=\"plusAtt3\"></span></td><td><span id=\"plusAtt4\"></span></td><td><span id=\"plusAtt5\"></span></td><td><span id=\"plusAtt6\"></span></td><td><span id=\"plusAtt7\"></span></td>";
						
						document.getElementById("plushead").innerHTML = "<th>아이템 등급</th><th>7</th><th>6</th><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th>"
						
						document.getElementById("plusAtt1").innerHTML = myObj.list[i].plusAtt1;
						document.getElementById("plusAtt2").innerHTML = myObj.list[i].plusAtt2;
						document.getElementById("plusAtt3").innerHTML = myObj.list[i].plusAtt3;
						document.getElementById("plusAtt4").innerHTML = myObj.list[i].plusAtt4;
						document.getElementById("plusAtt5").innerHTML = myObj.list[i].plusAtt5;
						document.getElementById("plusAtt6").innerHTML = myObj.list[i].plusAtt6;
						document.getElementById("plusAtt7").innerHTML = myObj.list[i].plusAtt7;
						
						
						document.getElementById("statAtt").innerHTML = "<td><font color=blue style=\"font-weight:bold\">주 스텟</font></td><td id=\"stattable\" colspan=\"7\"><span id=\"firstStat\">0</span></td>";
						
						//console.log("쟈이힌 같은데" + myObj.list[i].plusAtt6);
						
						document.getElementById("atkstat").innerHTML = "<td style=\"font-weight:bold\">공격력/마력</td><td>"+myObj.list[i].plusAtt1+"</td><td>"+myObj.list[i].plusAtt2+"</td><td>"+myObj.list[i].plusAtt3+"</td><td>"+myObj.list[i].plusAtt4+"</td><td>"+myObj.list[i].plusAtt5+"</td><td>"+myObj.list[i].plusAtt6+"</td><td>"+myObj.list[i].plusAtt7+"</td>";
					}else{
						document.getElementById("plusAtt").innerHTML = "<td><font color=red style=\"font-weight:bold\">추가 공격력/마력</font></td><td><span id=\"plusAtt1\"></span></td><td><span id=\"plusAtt2\"></span></td><td><span id=\"plusAtt3\"></span></td><td><span id=\"plusAtt4\"></span></td><td><span id=\"plusAtt5\"></span></td>";
						
						document.getElementById("plushead").innerHTML = "<th>아이템 등급</th><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th>"
						
						document.getElementById("plusAtt1").innerHTML = myObj.list[i].plusAtt1;
						document.getElementById("plusAtt2").innerHTML = myObj.list[i].plusAtt2;
						document.getElementById("plusAtt3").innerHTML = myObj.list[i].plusAtt3;
						document.getElementById("plusAtt4").innerHTML = myObj.list[i].plusAtt4;
						document.getElementById("plusAtt5").innerHTML = myObj.list[i].plusAtt5;
						
						document.getElementById("statAtt").innerHTML = "<td><font color=blue style=\"font-weight:bold\">주 스텟</font></td><td id=\"stattable\" colspan=\"5\"><span id=\"firstStat\">0</span></td>";
						
						//console.log("쟈이힌 아닌거같은데" + myObj.list[i].plusAtt6);
						
						document.getElementById("atkstat").innerHTML = "<td style=\"font-weight:bold\">공격력/마력</td><td>"+myObj.list[i].plusAtt1+"</td><td>"+myObj.list[i].plusAtt2+"</td><td>"+myObj.list[i].plusAtt3+"</td><td>"+myObj.list[i].plusAtt4+"</td><td>"+myObj.list[i].plusAtt5+"</td>";
						
					}
					
					document.getElementById("solostat").innerHTML = "<td style=\"font-weight:bold\">단일스텟</td><td>"+(coefficient_solostat*3)+"</td><td>"+(coefficient_solostat*4)+"</td><td>"+(coefficient_solostat*5)+"</td><td>"+(coefficient_solostat*6)+"</td><td>"+(coefficient_solostat*7)+"</td><td></td><td></td>";
						
						document.getElementById("bistat").innerHTML = "<td style=\"font-weight:bold\">이중스텟</td><td>"+(coefficient_bistat*3)+"</td><td>"+(coefficient_bistat*4)+"</td><td>"+(coefficient_bistat*5)+"</td><td>"+(coefficient_bistat*6)+"</td><td>"+(coefficient_bistat*7)+"</td><td></td><td></td>";
					
					// 추옵 로드
					
					
					break;
				}
			}
		}
	};
	  
	xmlhttp.open("GET", "/data/itemData.txt", true);
	xmlhttp.send();
	
	
	  
	  function filter(){
		  var str, dex, int, luk, att, mag, all, dmg, maxhp, type, reqlev, weapontype, itemtype, mystat, lev5;
		  var level = 0, dmchk = false, znchk = false, demonchk, zenonchk;
		  var plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6 = -1, plusAtt7 = -1;

		  reqlev = Number(document.getElementById("reqlev").innerHTML);
          str = Number(document.getElementById("str").value);
		  dex = Number(document.getElementById("dex").value);
		  int = Number(document.getElementById("int").value);
		  luk = Number(document.getElementById("luk").value);
		  att = Number(document.getElementById("att").value);
		  mag = Number(document.getElementById("mag").value);
		  all = Number(document.getElementById("all").value);
		  dmg = Number(document.getElementById("dmg").value);
		  maxhp = Number(document.getElementById("maxhp").value);
		  type = document.getElementById("job").innerHTML;
		  weapontype = document.getElementById("kind").innerHTML;
		  itemtype = document.getElementById("wporar").innerHTML;
		  
		  lev5 = document.getElementById("plusAtt6") != null ? true : false;
		  
		  mystat = Number(document.getElementById("mystat").value);
		  
		  plusAtt1 = Number(document.getElementById("plusAtt1").innerHTML);
		  plusAtt2 = Number(document.getElementById("plusAtt2").innerHTML);
		  plusAtt3 = Number(document.getElementById("plusAtt3").innerHTML);
		  plusAtt4 = Number(document.getElementById("plusAtt4").innerHTML);
		  plusAtt5 = Number(document.getElementById("plusAtt5").innerHTML);
		  
		  if(lev5) {
		  	plusAtt6 = Number(document.getElementById("plusAtt6").innerHTML);
		  	plusAtt7 = Number(document.getElementById("plusAtt7").innerHTML);
		  }
		  
		  if(type == "전사계열") {
		  
		  	demonchk = document.getElementById('demonchk');
		  
		  	if(demonchk.checked) { dmchk = true; } else { dmchk = false; }
		 	 //console.log("데벤져 체크 : " + dmchk);
		  }
		  
		  if(type == "도적계열" || type == "해적계열") {
		  
		  	zenonchk = document.getElementById('zenonchk');
		  
		  	if(zenonchk.checked) { znchk = true; } else { znchk = false; }
		 	 //console.log("제논 체크 : " + znchk);
		  }
		  
		  // 데벤져인가요?
		  if(dmchk) {
			  maxhp = maxhp / 17.5;
			  calculate(maxhp, str, 0, att, dmg, reqlev, itemtype, mystat, dmchk);
			  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
		  }
		  // 제논인가요?
		  else if(znchk || type == "하이브리드계열") {
			  let stetArray = [str, dex, luk];

				  stetArray.sort(function(a, b) {
					  return b - a; // 내림차순 정렬
				  });

				  //console.log("현재 스탯(정렬됨) :" + stetArray[0] + stetArray[1] + stetArray[2]);

				  calculate(stetArray[0], stetArray[1]+stetArray[2], all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
		  }else{
			  // type == 0; ()
			  if(type == "전사계열") {
				  // STR, DEX
				  calculate(str, dex, all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "마법사계열") {
				  // INT, LUK
				  calculate(int, luk, all, mag, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(mag, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "궁수계열") {
				  // DEX, STR
				  calculate(dex, str, all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "도적계열") {
				  // LUK, DEX
				  calculate(luk, dex, all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "해적계열") {
				  if(weapontype == "건") // 건: DEX, STR
					  calculate(dex, str, all, att, dmg, reqlev, itemtype, mystat, dmchk); 
				  else // 너클, 핸드캐논: STR, DEX
					  calculate(str, dex, all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "하이브리드(해적)계열") { // 덱 제논 - 세트아이템 (덱을 주스탯으로, 나머지를 합쳐서 부스탯으로 봄)
				  calculate(dex, str+luk, all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "하이브리드(도적)계열") { // 럭 제논 - 세트아이템 (운을 주스탯으로, 나머지를 합쳐서 부스탯으로 봄)
				  calculate(luk, str+dex, all, att, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(att, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }else if(type == "전직업(장신구)") { // 장신구 (가장 높은 스탯이 주스탯)				  
				  let attmag;
				  let mainstet;
					  
				  if(str + 4*att > int + 4*mag) {
					  attmag = att;
					  mainstet = str;
				  }else if(dex + 4*att > int + 4*mag) {
					  attmag = att;
					  mainstet = dex;
				  }else if(luk + 4*att > int + 4*mag) {
					  attmag = att;
					  mainstet = luk;
				  }else{
					  attmag = mag;
					  mainstet = int;
				  }

				  calculate(mainstet, 0, all, attmag, dmg, reqlev, itemtype, mystat, dmchk);
				  description_detail(attmag, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5);
			  }
		  }
      };
	  
	  function calculate(mainStat, subStat, all, att, dmg, reqlev, itemtype, mystat, dmchk) {
		  var ranked, totalstat, score, realstat;
		  
		  if(itemtype == "장신구") {
				  if(mystat == "") {
					  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 5*보스데미지%
					  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (5*dmg);
				  }
				  else{
					  // 세부 스텟 계산 on
					  realstat = mystat/100;
					  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (5*dmg);
				  }
				  //console.log("악세사리를 계산합니다");
		  
	  	  }else if(reqlev <= 120) { // 1. 네크로 장비 (올스텟의 경우 고정 계수 10으로 대체, 뎀은 효율이 낮아 하향조정)
			  if(mystat == "") {
				  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 5*보스데미지%
			  	  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (5*dmg);
			  }
			  else{
				  // 세부 스텟 계산 on
				  realstat = mystat/100;
				  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (5*dmg);
			  }
			  
			  //console.log("네크로 장비를 계산합니다");
			  
		  }else if(reqlev <= 130) { // 2. 반 레온 장비 (올스텟의 경우 고정 계수 10으로 대체, 뎀은 효율이 낮아 하향조정)
			  if(mystat == "") {
				  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 5*보스데미지%
				  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (5*dmg);
			  }else{
				  // 세부 스텟 계산 on
				  realstat = mystat/100;
				  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (5*dmg);
			  }
			  //console.log("반 레온 장비를 계산합니다");
			  
		  }else if(reqlev <= 140) { // 3. 여제 장비 (올스텟의 경우 고정 계수 10으로 대체, 뎀 효율은 상대적으로 낮은편)
			  if(mystat == "") {
				  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 10*보스데미지%
				  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (10*dmg);
			  }else{
				  // 세부 스텟 계산 on
				  realstat = mystat/100;
				  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (10*dmg);
			  }
			  //console.log("여제 장비를 계산합니다");
			  
		  }else if(reqlev <= 150) { // 4. 카루타 장비 (올스텟의 경우 고정 계수 10으로 대체, 뎀 계수 정상적용)
			  if(mystat == "") {
				  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 15*보스데미지%
				  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (15*dmg);
			  }else{
				  // 세부 스텟 계산 on
				  realstat = mystat/100;
				  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (15*dmg);
			  }
			  //console.log("루타비스 장비를 계산합니다");
		  }else if(reqlev <= 160) { // 5. 앱솔랩스 장비 (올스텟의 경우 고정 계수 10으로 대체, 뎀 계수 정상적용)
			  if(mystat == "") {
				  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 15*보스데미지%
				  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (15*dmg);
			  }else {
				  // 세부 스텟 계산 on
				  realstat = mystat/100;
				  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (15*dmg);
			  }
			  //console.log("앱솔랩스 장비를 계산합니다");
		  }else if(reqlev <= 200) { // 6. 아케인셰이드 장비 (올스텟의 경우 고정 계수 10으로 대체, 뎀 계수 정상적용)
			  if(mystat == "") {
				  // 4*주스텟 + 1*부스텟 + 10*올스텟% + 16*공격력 + 15*보스데미지%
				  score = (4*mainStat) + (1*subStat) + (10*all) + (16*att) + (15*dmg);
			  }else {
				  // 세부 스텟 계산 on
				  realstat = mystat/100;
				  score = (4*mainStat) + (1*subStat) + (realstat*all) + (16*att) + (15*dmg);
			  }
			  //console.log("아케인셰이드 장비를 계산합니다");
		  }
		  
		  var dm = 1;
		  
		  if (dmchk) {
			  score = Math.round(score);
			  mainStat = Math.round(mainStat);
			  dm = 0;
		  }
		  else{
			  dm = 1;
		  }
		  
		  cal_rank(score, itemtype, reqlev);
		  
		  if(mystat == "") {
		      document.getElementById("allstatpoint").innerHTML = all*10*dm;
			  totalstat = mainStat+(all*10*dm);
		  }else{
			  document.getElementById("allstatpoint").innerHTML = all*realstat*dm;
			  totalstat = mainStat+(all*realstat*dm);
		  }
		  
		  document.getElementById("firstStat").innerHTML = mainStat;
		  document.getElementById("statGrade").innerHTML = totalstat;
		  document.getElementById("mainstatpoint").innerHTML = mainStat;
		  
	  }
	  
	  function cal_rank(score, itemtype, reqlev) {
		  var ranked;
		  
		  if(itemtype == "무기") {
			  if(reqlev <= 120) {
				  // 네크로 장비 극추옵 0 ~ 1163
				  if(score > 1060)
					  ranked = "R+";
				  else if(score > 940)
					  ranked = "R";
				  else if(score > 820)
					  ranked = "SSS";
				  else if(score > 700)
					  ranked = "SS";
				  else if(score > 580)
					  ranked = "S";
				  else if(score > 460)
					  ranked = "A";
				  else if(score > 340)
					  ranked = "B";
				  else if(score > 220)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 130) {
				  // 반 레온 장비 극추옵 0 ~ 1206
				  if(score > 1140)
					  ranked = "R+";
				  else if(score > 1010)
					  ranked = "R";
				  else if(score > 880)
					  ranked = "SSS";
				  else if(score > 750)
					  ranked = "SS";
				  else if(score > 620)
					  ranked = "S";
				  else if(score > 490)
					  ranked = "A";
				  else if(score > 360)
					  ranked = "B";
				  else if(score > 230)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 140) {
				  // 여제 장비 극추옵 0 ~ 1346
				  if(score > 1300)
					  ranked = "R+";
				  else if(score > 1150)
					  ranked = "R";
				  else if(score > 1000)
					  ranked = "SSS";
				  else if(score > 850)
					  ranked = "SS";
				  else if(score > 700)
					  ranked = "S";
				  else if(score > 550)
					  ranked = "A";
				  else if(score > 400)
					  ranked = "B";
				  else if(score > 250)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 150) {
				  // 파프니르 장비 극추옵 0 ~ 1570
				  if(score > 1460)
					  ranked = "R+";
				  else if(score > 1290)
					  ranked = "R";
				  else if(score > 1120)
					  ranked = "SSS";
				  else if(score > 950)
					  ranked = "SS";
				  else if(score > 780)
					  ranked = "S";
				  else if(score > 610)
					  ranked = "A";
				  else if(score > 440)
					  ranked = "B";
				  else if(score > 270)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 160) {
				  // 앱솔랩스 장비 극추옵 0 ~ 2193
				  if(score > 2020)
					  ranked = "R+";
				  else if(score > 1780)
					  ranked = "R";
				  else if(score > 1540)
					  ranked = "SSS";
				  else if(score > 1300)
					  ranked = "SS";
				  else if(score > 1060)
					  ranked = "S";
				  else if(score > 820)
					  ranked = "A";
				  else if(score > 580)
					  ranked = "B";
				  else if(score > 340)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 200) {
				  // 아케인셰이드 장비 극추옵 0 ~ 3430
				  if(score > 3300)
					  ranked = "R+";
				  else if(score > 2900)
					  ranked = "R";
				  else if(score > 2500)
					  ranked = "SSS";
				  else if(score > 2100)
					  ranked = "SS";
				  else if(score > 1700)
					  ranked = "S";
				  else if(score > 1300)
					  ranked = "A";
				  else if(score > 900)
					  ranked = "B";
				  else if(score > 500)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else{
				  //console.log("알 수 없는 에러가 발생하였습니다.");
			  }
		  }else if(itemtype == "방어구") {
			  if(reqlev <= 130) {
				  // 네크로 ~ 반 레온 장비 극추옵 점수 : 0~490
				  if(score > 480)
					  ranked = "R+";
				  else if(score > 415)
					  ranked = "R";
				  else if(score > 370)
					  ranked = "SSS";
				  else if(score > 325)
					  ranked = "SS";
				  else if(score > 280)
					  ranked = "S";
				  else if(score > 235)
					  ranked = "A";
				  else if(score > 190)
					  ranked = "B";
				  else if(score > 145)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 150) {
				  // 여제 ~ 파프니르 장비 극추옵 점수 : 0~546
				  if(score > 530)
					  ranked = "R+";
				  else if(score > 485)
					  ranked = "R";
				  else if(score > 430)
					  ranked = "SSS";
				  else if(score > 375)
					  ranked = "SS";
				  else if(score > 320)
					  ranked = "S";
				  else if(score > 265)
					  ranked = "A";
				  else if(score > 210)
					  ranked = "B";
				  else if(score > 155)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 160) {
				  // 앱솔랩스 장비 극추옵 점수 : 0~609
				  if(score > 600)
					  ranked = "R+";
				  else if(score > 555)
					  ranked = "R";
				  else if(score > 490)
					  ranked = "SSS";
				  else if(score > 425)
					  ranked = "SS";
				  else if(score > 360)
					  ranked = "S";
				  else if(score > 295)
					  ranked = "A";
				  else if(score > 230)
					  ranked = "B";
				  else if(score > 165)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(reqlev <= 200) {
				  // 아케인셰이드 장비 극추옵 점수 : 0~700
				  if(score > 690)
					  ranked = "R+";
				  else if(score > 616)
					  ranked = "R";
				  else if(score > 542)
					  ranked = "SSS";
				  else if(score > 468)
					  ranked = "SS";
				  else if(score > 395)
					  ranked = "S";
				  else if(score > 321)
					  ranked = "A";
				  else if(score > 247)
					  ranked = "B";
				  else if(score > 173)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else{
				  //console.log("알 수 없는 에러가 발생하였습니다.");
			  }
		  }else if(itemtype == "장신구") {
			  
			  let id = getParameterByName('id');
			  
			  if(id == "아쿠아틱 레터 눈장식" || id == "응축된 힘의 결정석") { // 레벨 100
				  // 자쿰 눈, 얼굴장식 극추옵 점수 : 0~490
				  if(score > 460)
					  ranked = "R+";
				  else if(score > 415)
					  ranked = "R";
				  else if(score > 370)
					  ranked = "SSS";
				  else if(score > 325)
					  ranked = "SS";
				  else if(score > 280)
					  ranked = "S";
				  else if(score > 235)
					  ranked = "A";
				  else if(score > 190)
					  ranked = "B";
				  else if(score > 145)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(id == "혼테일의 목걸이" || id == "카오스 혼테일의 목걸이") { 
				  // 혼테일 팬던트 극추옵 점수 : 0~350
				  if(score > 340)
					  ranked = "R+";
				  else if(score > 310)
					  ranked = "R";
				  else if(score > 280)
					  ranked = "SSS";
				  else if(score > 250)
					  ranked = "SS";
				  else if(score > 220)
					  ranked = "S";
				  else if(score > 190)
					  ranked = "A";
				  else if(score > 160)
					  ranked = "B";
				  else if(score > 130)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(id == "매커네이터 펜던트" || id == "데아 시두스 이어링" || id == "지옥의 불꽃") { // 레벨 130대
				  // 매커네이터 펜던트 극추옵 점수 : 0~490
				  if(score > 460)
					  ranked = "R+";
				  else if(score > 415)
					  ranked = "R";
				  else if(score > 370)
					  ranked = "SSS";
				  else if(score > 325)
					  ranked = "SS";
				  else if(score > 280)
					  ranked = "S";
				  else if(score > 235)
					  ranked = "A";
				  else if(score > 190)
					  ranked = "B";
				  else if(score > 145)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(id == "도미네이터 펜던트" || id == "핑크빛 성배" || id == "골든 클로버 벨트" || id == "블랙빈 마크" || id == "파풀라투스 마크" || id == "분노한 자쿰의 벨트") { // 레벨 140대
				  // 도미네이터 펜던트 극추옵 점수 : 0~518
				  if(score > 500)
					  ranked = "R+";
				  else if(score > 450)
					  ranked = "R";
				  else if(score > 400)
					  ranked = "SSS";
				  else if(score > 350)
					  ranked = "SS";
				  else if(score > 300)
					  ranked = "S";
				  else if(score > 250)
					  ranked = "A";
				  else if(score > 200)
					  ranked = "B";
				  else if(score > 150)
					  ranked = "C";
				  else if(score > 100)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else if(id == "영생의 돌") {
				  // 영생의 돌 극추옵 점수 : 0~186
				  if(score > 180)
					  ranked = "R+";
				  else if(score > 160)
					  ranked = "R";
				  else if(score > 140)
					  ranked = "SSS";
				  else if(score > 120)
					  ranked = "SS";
				  else if(score > 100)
					  ranked = "S";
				  else if(score > 80)
					  ranked = "A";
				  else if(score > 60)
					  ranked = "B";
				  else if(score > 40)
					  ranked = "C";
				  else if(score > 20)
					  ranked = "D";
				  else
					  ranked = "E";
			  }else{
				  //console.log("알 수 없는 에러가 발생하였습니다.");
			  }
		  }
		
		  
		document.getElementById("score").innerHTML = score;
		document.getElementById("rank").innerHTML = ranked;
	  }
	  
	  function plusClear() {
		  document.getElementById("plusAtt1").style.backgroundColor = "#eeeeee";
		  document.getElementById("plusAtt2").style.backgroundColor = "#eeeeee";
		  document.getElementById("plusAtt3").style.backgroundColor = "#eeeeee";
		  document.getElementById("plusAtt4").style.backgroundColor = "#eeeeee";
		  document.getElementById("plusAtt5").style.backgroundColor = "#eeeeee";
		  
		  if(document.getElementById("plusAtt6") != null) {
			  document.getElementById("plusAtt6").style.backgroundColor = "#eeeeee";
			  document.getElementById("plusAtt7").style.backgroundColor = "#eeeeee";
		  }
		  
		  document.getElementById("wpab").style.backgroundColor = "#eeeeee";
		  document.getElementById("wphigh").style.backgroundColor = "#ffffff";
		  document.getElementById("wpmid").style.backgroundColor = "#eeeeee";
		  document.getElementById("wplow").style.backgroundColor = "#ffffff";
		  document.getElementById("wpno").style.backgroundColor = "#eeeeee";
		  document.getElementById("armab").style.backgroundColor = "#eeeeee";
		  document.getElementById("armhigh").style.backgroundColor = "#ffffff";
		  document.getElementById("armmid").style.backgroundColor = "#eeeeee";
		  document.getElementById("armlow").style.backgroundColor = "#ffffff";
		  document.getElementById("armno").style.backgroundColor = "#eeeeee";
		  document.getElementById("accab").style.backgroundColor = "#eeeeee";
		  document.getElementById("acchigh").style.backgroundColor = "#ffffff";
		  document.getElementById("accmid").style.backgroundColor = "#eeeeee";
		  document.getElementById("acclow").style.backgroundColor = "#ffffff";
		  document.getElementById("accno").style.backgroundColor = "#eeeeee";
	  }
	  
	  function descript(gd, lev5) {
		  if(!lev5)
			  switch (gd){
				case "5" :
					document.getElementById("plusAtt5").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "1단계 (매우 높음)";
					break;
				case "4" :
					document.getElementById("plusAtt4").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "2단계 (높음)";
					break;
				case "3" :
					document.getElementById("plusAtt3").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "3단계 (보통)";
					break;
				case "2" :
					document.getElementById("plusAtt2").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "4단계 (낮음)";
					break;
				case "1" :
					document.getElementById("plusAtt1").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "5단계 (매우 낮음)";
					break;
				default :
					document.getElementById("grade").innerHTML = "추옵 없음";
			}
		else {
			switch (gd){
				case "7" :
					document.getElementById("plusAtt7").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "1단계 (매우 높음)";
					break;
				case "6" :
					document.getElementById("plusAtt6").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "2단계 (높음)";
					break;
				case "5" :
					document.getElementById("plusAtt5").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "3단계 (다소 높음)";
					break;
				case "4" :
					document.getElementById("plusAtt4").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "4단계 (보통)";
					break;
				case "3" :
					document.getElementById("plusAtt3").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "5단계 (다소 낮음)";
					break;
				case "2" :
					document.getElementById("plusAtt2").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "6단계 (낮음)";
					break;
				case "1" :
					document.getElementById("plusAtt1").style.backgroundColor = "#F8C9CE";
					document.getElementById("grade").innerHTML = "7단계 (매우 낮음)";
					break;
				default :
					document.getElementById("grade").innerHTML = "추옵 없음";
			}
		}
	}
	  
	  
	  function description_detail(stat, plusAtt1, plusAtt2, plusAtt3, plusAtt4, plusAtt5, plusAtt6, plusAtt7, itemtype, lev5) {
		  if(lev5) {
			  if(stat >= plusAtt7) {
				  plusClear();
				  descript("7", lev5);
				  recommend(itemtype, "1");
			  }
			  else if(stat >= plusAtt6) {
				  plusClear();
				  descript("6", lev5);
				  recommend(itemtype, "2");
			  }
			  else if(stat >= plusAtt5){
				  plusClear();
				  descript("5", lev5);
				  recommend(itemtype, "3");
			  } else if(stat >= plusAtt4) {
				  plusClear();
				  descript("4", lev5);
				  recommend(itemtype, "4");
			  }
			  else if(stat >= plusAtt3){
				  plusClear();
				  descript("3", lev5);
				  recommend(itemtype, "5");
			  }
			  else if(stat >= plusAtt2){
				  plusClear();
				  descript("2", lev5);
				  recommend(itemtype, "6");
			  }
			  else if(stat >= plusAtt1){
				  plusClear();
				  descript("1", lev5);
				  recommend(itemtype, "7");
			  }
			  else {
				  plusClear();
				  descript("0", lev5);
				  recommend(itemtype, "0");
			  }
		  }
		  else{
			  if(stat >= plusAtt5) {
				  plusClear();
				  descript("5", lev5);
				  recommend(itemtype, "1");
			  }
			  else if(stat >= plusAtt4) {
				  plusClear();
				  descript("4", lev5);
				  recommend(itemtype, "2");
			  }
			  else if(stat >= plusAtt3){
				  plusClear();
				  descript("3", lev5);
				  recommend(itemtype, "3");
			  }
			  else if(stat >= plusAtt2){
				  plusClear();
				  descript("2", lev5);
				  recommend(itemtype, "4");
			  }
			  else if(stat >= plusAtt1){
				  plusClear();
				  descript("1", lev5);
				  recommend(itemtype, "5");
			  }
			  else {
				  plusClear();
				  descript("0", lev5);
				  recommend(itemtype, "0");
			  }
		  }
	  }
	  
	  function recommend(type, atkmag) {
		  
		  if(type == "무기") { // 무기
			  switch (atkmag){
				case "1" :
					document.getElementById("wpab").style.backgroundColor = "#F8C9CE";
					document.getElementById("wphigh").style.backgroundColor = "#F8C9CE";
					break;
				case "2" :
					document.getElementById("wpmid").style.backgroundColor = "#F8C9CE";
					document.getElementById("wplow").style.backgroundColor = "#F8C9CE";
					break;
				case "3" :
					document.getElementById("wpno").style.backgroundColor = "#F8C9CE";
					break;
				default :
					break;
			  }
		  }else if(type == "방어구") { // 방어구
			  let mainstat = Number(document.getElementById("mainstatpoint").innerHTML);
			  let allstat = Number(document.getElementById("allstatpoint").innerHTML);
			  mainstat = mainstat + allstat;
			  
			  if (mainstat >= 120) {
				  document.getElementById("armab").style.backgroundColor = "#F8C9CE";
				  document.getElementById("armhigh").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 110) {
				  document.getElementById("armmid").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 100) {
				  document.getElementById("armlow").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 80) {
				  document.getElementById("armno").style.backgroundColor = "#F8C9CE";
			  }
		  }else { // 장신구
			  let mainstat = Number(document.getElementById("statGrade").innerHTML);
			  console.log(mainstat);
			  
			  if (mainstat >= 120) {
				  document.getElementById("accab").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 110) {
				  document.getElementById("acchigh").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 100) {
				  document.getElementById("accmid").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 90) {
				  document.getElementById("acclow").style.backgroundColor = "#F8C9CE";
			  }else if (mainstat >= 80) {
				  document.getElementById("accno").style.backgroundColor = "#F8C9CE";
			  }
		  }
	  }
	  
	  function onDetail() {
		  let link = document.getElementById("name").innerHTML;
		  link = "item?id=" + link;
		  window.location.href = link;
	  }
	  
	  function onTwitter() {
		  let url = "http://mapleitem.com/"
		  let name = document.getElementById("name").innerHTML;
		  let rank = document.getElementById("rank").innerHTML;
		  let score = document.getElementById("score").innerHTML;
		  
		  let text = score + "점의 " + rank + "급 " + name + " 획득!";
		  window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url);
	  }
	  
	  function onFacebook() {
		  let url = "http://mapleitem.com/"
		  window.open("https://www.facebook.com/sharer/sharer.php?u=" + url);
	  }
	  
	  function onLine() {
		  let url = "http://mapleitem.com/"
		  let name = document.getElementById("name").innerHTML;
		  let rank = document.getElementById("rank").innerHTML;
		  let score = document.getElementById("score").innerHTML;
		  let br = "\n";
		  
		  let text = score + "점의 " + rank + "급 " + name + " 획득!";
		  window.open("http://line.me/R/msg/text/?" + text + br + url);
	  	  
	  }