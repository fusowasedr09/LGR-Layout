const url = "https://script.google.com/macros/s/AKfycbwI0Wr02aZTlcv-Vr4FOYHfaq-uYICg5iinDLwLZd6XPgKIdnQsgpz4NT3BdsxMTFM/exec" // スプレッドシートのデータのURLを適宜置き換えて使用
const options = {
	method: "GET"
};

//NodeCG:Replicantの宣言
const gametitleA_Rep = nodecg.Replicant("gametitleA");
const gamecategoryA_Rep = nodecg.Replicant("gamecategoryA");
const gameestimateA_Rep = nodecg.Replicant("gameestimateA");
const playerA_Rep = nodecg.Replicant("playerA");
const playerAtwitter_Rep = nodecg.Replicant("playerAtwitter");
const playerAniconico_Rep = nodecg.Replicant("playerAniconico");
const playerAyoutube_Rep = nodecg.Replicant("playerAyoutube");
const playerAtwitch_Rep = nodecg.Replicant("playerAtwitch");
const commA_Rep = nodecg.Replicant("commA");

//json取得
function getJson(url, options){
	return fetch(url, options)
	.then(response => response.json());
}

async function fetchJson(url, options, counter){
	const response = await getJson(url,options);
	var json_number = counter; //ボタン処理用の関数
	console.log(response[json_number]);
	
	// ゲーム情報をReplicantに入れる
	gametitleA_Rep.value = response[json_number].gametitle;
	gamecategoryA_Rep.value = response[json_number].category;
	gameestimateA_Rep.value = response[json_number].estimate;
	playerA_Rep.value = response[json_number].player;
	
	// プレイヤーのTwitch,Twitter,niconicoの情報をReplicantに入れる
	playerAtwitch_Rep.value = response[json_number].twitch;
	playerAtwitter_Rep.value = response[json_number].twitter;
	playerAyoutube_Rep.value = response[json_number].youtube;
	playerAniconico_Rep.value = response[json_number].niconico;

	commA_Rep.value = response[json_number].comm;
}

// ボタン処理（ID読み込み）
document.getElementById('submitBtn').addEventListener('click', () =>{
	const screenA_id = document.getElementById('ScreenA_id').value;
	fetchJson(url, options, screenA_id);
})

// Dashboardの情報を最新のデータに更新する処理
gametitleA_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameTitleA").innerHTML = newVal;
})
gamecategoryA_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameCategoryA").innerHTML = newVal;
})
gameestimateA_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameEstimateA").innerHTML = newVal;
})
playerA_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameRunnerA").innerHTML = newVal;
})
commA_Rep.on('change',(newVal)=>{
	document.getElementById("playerA_Comm").innerHTML = newVal;
})

