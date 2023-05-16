let nameprimesize = 1;
let statusprimesize = 0.65;
let gameprimesize = 0.75;

// フォントサイズ自動調整
function FontSizeAdjust(object, primarysize, coefficient){
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = 36 * primarysize  + "px";
	var metrics = context.measureText(object.innerText);
	var width = metrics.width;
	if(coefficient / width < primarysize){
		object.style.fontSize =  coefficient / width + "em";
	}else{
		object.style.fontSize =  primarysize + "em";
	}
}

// データ更新処理(Eventemitter,PlayerA)
nodecg.Replicant("gametitleA").on('change',(newVal)=>{
	const A_title = document.getElementById("text_gameTitleA");
	A_title.innerHTML = newVal;
	FontSizeAdjust(A_title, gameprimesize, 120)
})
nodecg.Replicant("gamecategoryA").on('change',(newVal)=>{
	const A_category = document.getElementById("text_gameCategoryA")
	A_category.innerHTML = newVal;
	FontSizeAdjust(A_category, gameprimesize, 120)
})
nodecg.Replicant("gameestimateA").on('change',(newVal)=>{
	const A_estimate = document.getElementById("text_gameEstimateA");
	A_estimate.innerHTML = newVal;
	FontSizeAdjust(A_estimate, 1, 60)
})
nodecg.Replicant("playerA").on('change',(newVal)=>{
	const A_nameleft = document.getElementById("PlayerA_name2");
	const A_nameright = document.getElementById("PlayerA_name");
	A_nameleft.innerHTML = newVal;
	A_nameright.innerHTML = newVal;
	FontSizeAdjust(A_nameleft, nameprimesize, 60);
	FontSizeAdjust(A_nameright, nameprimesize, 60);
})
nodecg.Replicant("playerAtwitter").on('change',(newVal)=>{
	const A_twitter = document.getElementById("PlayerA_twitter");
	A_twitter.innerHTML = newVal;
	FontSizeAdjust(A_twitter, statusprimesize, 50);
})
nodecg.Replicant("playerAniconico").on('change',(newVal)=>{
	const A_niconico = document.getElementById("PlayerA_niconico");
	A_niconico.innerHTML = newVal;
	FontSizeAdjust(A_niconico, statusprimesize, 50);
})
nodecg.Replicant("playerAtwitch").on('change',(newVal)=>{
	const A_twitch = document.getElementById("PlayerA_twitch");
	A_twitch.innerHTML = newVal;
	FontSizeAdjust(A_twitch, statusprimesize, 50);
})
nodecg.Replicant("playerAyoutube").on('change',(newVal)=>{
	const A_youtube = document.getElementById("PlayerA_youtube");
	A_youtube.innerHTML = newVal;
	FontSizeAdjust(A_youtube,statusprimesize,50);
})
nodecg.Replicant("commA").on('change',(newVal)=>{
	const A_comment = document.getElementById("CommA_Name");
	A_comment.innerHTML = newVal;
	FontSizeAdjust(A_comment,0.75, 50);
})

// データ更新処理(PlayerB)
nodecg.Replicant("gametitleB").on('change',(newVal)=>{
	const B_title = document.getElementById("text_gameTitleB");
	B_title.innerHTML = newVal;
	FontSizeAdjust(B_title, gameprimesize, 120)
})
nodecg.Replicant("gamecategoryB").on('change',(newVal)=>{
	const B_category = document.getElementById("text_gameCategoryB");
	B_category.innerHTML = newVal;
	FontSizeAdjust(B_category, gameprimesize, 120);
})
nodecg.Replicant("gameestimateB").on('change',(newVal)=>{
	const B_estimate = document.getElementById("text_gameEstimateB");
	B_estimate.innerHTML = newVal;
	FontSizeAdjust(B_estimate, 1, 60)
})
nodecg.Replicant("playerB").on('change',(newVal)=>{
	const B_nameleft = document.getElementById("PlayerB_name2");
	const B_nameright = document.getElementById("PlayerB_name");
	B_nameleft.innerHTML = newVal;
	B_nameright.innerHTML = newVal;
	FontSizeAdjust(B_nameleft, nameprimesize, 60);
	FontSizeAdjust(B_nameright, nameprimesize, 60);
})
nodecg.Replicant("playerBtwitter").on('change',(newVal)=>{
	const B_twitter = document.getElementById("PlayerB_twitter")
	B_twitter.innerHTML = newVal;
	FontSizeAdjust(B_twitter, statusprimesize, 50);
})
nodecg.Replicant("playerBtwitch").on('change',(newVal)=>{
	const B_twitch = document.getElementById("PlayerB_twitch")
	B_twitch.innerHTML = newVal;
	FontSizeAdjust(B_twitch,statusprimesize, 50)
})
nodecg.Replicant("playerBniconico").on('change',(newVal)=>{
	const B_niconico = document.getElementById("PlayerB_niconico")
	B_niconico.innerHTML = newVal;
	FontSizeAdjust(B_niconico,statusprimesize, 50)
})
nodecg.Replicant("playerByoutube").on('change',(newVal)=>{
	const B_youtube = document.getElementById("PlayerB_youtube");
	B_youtube.innerHTML = newVal;
	FontSizeAdjust(B_youtube,statusprimesize, 50)
})
nodecg.Replicant("commB").on('change',(newVal)=>{
	const B_comment = document.getElementById("CommB_Name");
	B_comment.innerHTML = newVal;
	FontSizeAdjust(B_comment,0.75, 50);
})

// データ更新処理(PlayerC)
nodecg.Replicant("gametitleC").on('change',(newVal)=>{
	const C_title = document.getElementById("text_gameTitleC");
	C_title.innerHTML = newVal;
	FontSizeAdjust(C_title, gameprimesize, 120)
})
nodecg.Replicant("gamecategoryC").on('change',(newVal)=>{
	const C_category = document.getElementById("text_gameCategoryC")
	C_category.innerHTML = newVal;
	FontSizeAdjust(C_category, gameprimesize, 120)
})
nodecg.Replicant("gameestimateC").on('change',(newVal)=>{
	const C_estimate = document.getElementById("text_gameEstimateC");
	C_estimate.innerHTML = newVal;
	FontSizeAdjust(C_estimate, 1, 60)
})
nodecg.Replicant("playerC").on('change',(newVal)=>{
	const C_nameleft = document.getElementById("PlayerC_name2");
	const C_nameright = document.getElementById("PlayerC_name");
	C_nameleft.innerHTML = newVal;
	C_nameright.innerHTML = newVal;
	FontSizeAdjust(C_nameleft, nameprimesize, 60);
	FontSizeAdjust(C_nameright, nameprimesize, 60);
})
nodecg.Replicant("playerCtwitter").on('change',(newVal)=>{
	const C_twitter = document.getElementById("PlayerC_twitter")
	C_twitter.innerHTML = newVal;
	FontSizeAdjust(C_twitter, statusprimesize, 50);
})
nodecg.Replicant("playerCtwitch").on('change',(newVal)=>{
	const C_twitch = document.getElementById("PlayerC_twitch")
	C_twitch.innerHTML = newVal;
	FontSizeAdjust(C_twitch,statusprimesize, 50)
})
nodecg.Replicant("playerCniconico").on('change',(newVal)=>{
	const C_niconico = document.getElementById("PlayerC_niconico")
	C_niconico.innerHTML = newVal;
	FontSizeAdjust(C_niconico,statusprimesize, 50)
})
nodecg.Replicant("playerCyoutube").on('change',(newVal)=>{
	const C_youtube = document.getElementById("PlayerC_youtube");
	C_youtube.innerHTML = newVal;
	FontSizeAdjust(C_youtube,statusprimesize, 50)
})
nodecg.Replicant("commC").on('change',(newVal)=>{
	const C_comment = document.getElementById("CommC_Name");
	C_comment.innerHTML = newVal;
	FontSizeAdjust(C_comment,0.75, 50);
})

// データ更新処理(PlayerD)
nodecg.Replicant("gametitleD").on('change',(newVal)=>{
	const D_title = document.getElementById("text_gameTitleD");
	D_title.innerHTML = newVal;
	FontSizeAdjust(D_title, gameprimesize, 120)
})
nodecg.Replicant("gamecategoryD").on('change',(newVal)=>{
	const D_category = document.getElementById("text_gameCategoryD")
	D_category.innerHTML = newVal;
	FontSizeAdjust(D_category, gameprimesize, 120)
})
nodecg.Replicant("gameestimateD").on('change',(newVal)=>{
	const D_estimate = document.getElementById("text_gameEstimateD");
	D_estimate.innerHTML = newVal;
	FontSizeAdjust(D_estimate, 1, 60)
})
nodecg.Replicant("playerD").on('change',(newVal)=>{
	const D_nameleft = document.getElementById("PlayerD_name2");
	const D_nameright = document.getElementById("PlayerD_name");
	D_nameleft.innerHTML = newVal;
	D_nameright.innerHTML = newVal;
	FontSizeAdjust(D_nameleft, nameprimesize, 60);
	FontSizeAdjust(D_nameright, nameprimesize, 60)
})
nodecg.Replicant("playerDtwitter").on('change',(newVal)=>{
	const D_twitter = document.getElementById("PlayerD_twitter")
	D_twitter.innerHTML = newVal;
	FontSizeAdjust(D_twitter, statusprimesize, 50);
})
nodecg.Replicant("playerDtwitch").on('change',(newVal)=>{
	const D_twitch = document.getElementById("PlayerD_twitch")
	D_twitch.innerHTML = newVal;
	FontSizeAdjust(D_twitch,statusprimesize, 50)
})
nodecg.Replicant("playerDniconico").on('change',(newVal)=>{
	const D_niconico = document.getElementById("PlayerD_niconico")
	D_niconico.innerHTML = newVal;
	FontSizeAdjust(D_niconico,statusprimesize, 50)
})
nodecg.Replicant("playerDyoutube").on('change',(newVal)=>{
	const D_youtube = document.getElementById("PlayerD_youtube");
	D_youtube.innerHTML = newVal;
	FontSizeAdjust(D_youtube,statusprimesize, 50)
})
nodecg.Replicant("commD").on('change',(newVal)=>{
	const D_comment = document.getElementById("CommD_Name");
	D_comment.innerHTML = newVal;
	FontSizeAdjust(D_comment,0.75, 50);
})

// データ更新処理(掲示板)
nodecg.Replicant("board").on('change',(newVal)=>{
	document.getElementById("board").innerHTML = newVal;
})

// データ更新処理(司会進行)
nodecg.Replicant("host").on('change',(newVal)=>{
	document.getElementById("host").innerHTML = newVal;
})