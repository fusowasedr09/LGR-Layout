const url = "https://script.google.com/macros/s/AKfycbwI0Wr02aZTlcv-Vr4FOYHfaq-uYICg5iinDLwLZd6XPgKIdnQsgpz4NT3BdsxMTFM/exec" // スプレッドシートのデータのURLを適宜置き換えて使用
const options = {
	method: "GET"
};

//NodeCG:Replicantの宣言
const gametitleC_Rep = nodecg.Replicant("gametitleC");
const gamecategoryC_Rep = nodecg.Replicant("gamecategoryC");
const gameestimateC_Rep = nodecg.Replicant("gameestimateC");
const playerC_Rep = nodecg.Replicant("playerC");
const playerCtwitter_Rep = nodecg.Replicant("playerCtwitter");
const playerCniconico_Rep = nodecg.Replicant("playerCniconico");
const playerCyoutube_Rep = nodecg.Replicant("playerCyoutube");
const playerCtwitch_Rep = nodecg.Replicant("playerCtwitch");
const commC_Rep = nodecg.Replicant("commC");

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
	gametitleC_Rep.value = response[json_number].gametitle;
	gamecategoryC_Rep.value = response[json_number].category;
	gameestimateC_Rep.value = response[json_number].estimate;
	playerC_Rep.value = response[json_number].player;
	
	// プレイヤーのTwitch,Twitter,niconicoの情報をReplicantに入れる
	playerCtwitch_Rep.value = response[json_number].twitch;
	playerCtwitter_Rep.value = response[json_number].twitter;
	playerCyoutube_Rep.value = response[json_number].youtube;
	playerCniconico_Rep.value = response[json_number].niconico;
}

// ボタン処理（ID読み込み）
document.getElementById('submitBtn').addEventListener('click', () =>{
	const screenC_id = document.getElementById('ScreenC_id').value;
	fetchJson(url, options, screenC_id);
})

// Dashboardの情報を最新のデータに更新する処理
gametitleC_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameTitleC").innerHTML = newVal;
})
gamecategoryC_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameCategoryC").innerHTML = newVal;
})
gameestimateC_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameEstimateC").innerHTML = newVal;
})
playerC_Rep.on('change',(newVal)=>{
	document.getElementById("currentgameRunnerC").innerHTML = newVal;
})

