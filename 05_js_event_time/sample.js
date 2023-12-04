// 1 イベント系

// 1.1 click
const click_btn_obj = document.querySelector("#click_event") // btn
const click_count_obj = document.querySelector("#click_count") // counter

let click_count = 0 // countを0に設定

click_count_obj.textContent = "クリック数 : " + click_count // click数表示
function plus_one(){
    click_count += 1 // clickごとに+1
    click_count_obj.textContent = "クリック数 : " + click_count // click数表示
}
click_btn_obj.addEventListener("click", plus_one , false) // clickごとに関数実行

// 1.2 mouseover
const mouse_btn_obj = document.querySelector("#mouse_event") // btn
const mouse_count_obj = document.querySelector("#mouse_count") // counter

let mouse_count = 0 // countを0に設定

mouse_count_obj.textContent = "マウスオーバー数 : " + mouse_count // mouseover数表示
function mouse_plus_one(){
    mouse_count += 1 // clickごとに+1
    mouse_count_obj.textContent = "マウスオーバー数 : " + mouse_count // mouseover数表示
}
mouse_btn_obj.addEventListener("mouseover", mouse_plus_one , false) // mouseoverごとに関数実行

// 1.3 keydown
const key_btn_obj = document.querySelector("#key_event") // btn
const key_count_obj = document.querySelector("#key_count") // counter

let key_count = 0 // countを0に設定

key_count_obj.textContent = "キーダウン数 : " + key_count // keydown数表示
function key_plus_one(){
    key_count += 1 // clickごとに+1
    key_count_obj.textContent = "キーダウン : " + key_count // keydown数表示
}
key_btn_obj.addEventListener("keydown", key_plus_one , false)// keydownごとに関数実行

// 1.4 change
const change_input_obj = document.querySelector("#change_event") // input
const change_content_obj = document.querySelector("#change_content") // content

function change_content(e){
    change_content_obj.textContent = "入力されたテキスト : " + e.target.value // input表示
}
change_input_obj.addEventListener("change", change_content , false) // 内容変わるごとに関数実行


// 2 時間操作系
const start_btn_obj = document.querySelector("#timer_click_event") // start btn
const stop_btn_obj = document.querySelector("#stop_click_event") // stop btn
const reset_btn_obj = document.querySelector("#reset_click_event") // reset btn

// 2.1 経過時間計測
// 2.1.1 setInterval
const timer_count_obj = document.querySelector("#set_timer_count") // counter

let timer = 0 // timerを0に設定
let interval_id = null // idをnullに設定

timer_count_obj.textContent = `クリック後の経過時間 : ${timer} 秒` // 経過時間表示
function timer_function(){
    timer += 1 // timer +1
    timer_count_obj.textContent = `クリック後の経過時間 : ${timer} 秒` // 経過時間表示
}
function event_function(){
    interval_id = setInterval(timer_function, 1000) // 1000ミリ(1)秒ごとに関数実行
}
start_btn_obj.addEventListener("click", event_function , false) // clickごとに関数実行

// 2.1.2 clearInterval
function stop_timer_function(){
    clearInterval(interval_id) // setIntervalを止める
}
stop_btn_obj.addEventListener("click", stop_timer_function , false) // clickごとに関数実行

// 2.2 一度だけ実行
// 2.2.1 setTimeout
const only_one_count_obj = document.querySelector("#only_one_count") // counter

let only_one_timer = 0 // timerを0に設定

only_one_count_obj.textContent = `クリック後の経過時間 : ${only_one_timer} 秒` // 経過時間表示
function only_one_function(){
    only_one_timer = 3 // 経過時間を3に設定
    only_one_count_obj.textContent = `クリック後の経過時間 : ${only_one_timer} 秒`  // 経過時間表示
}
function only_one_event_function(){
    setTimeout(only_one_function, 3000) // 3000ミリ(3)秒後に一度だけ実行
}
start_btn_obj.addEventListener("click", only_one_event_function , false) // clickごとに関数実行

// 2.2.2 reset
function reset_timer_function(){
    timer = 0 // timerを0に戻す
    only_one_timer = 0 // only_one_timerを0に戻す
    timer_count_obj.textContent = `クリック後の経過時間 : ${timer} 秒` // 0秒を表示
    only_one_count_obj.textContent = `クリック後の経過時間 : ${only_one_timer} 秒` // 0秒を表示
}

reset_btn_obj.addEventListener("click", reset_timer_function , false) // clickごとに関数実行

// 2.3 ストップウォッチ
const stop_watch_btn_obj = document.querySelector("#stop_watch_event") // btn
const stop_watch_count_obj = document.querySelector("#stop_watch_count") // counter

let stop_watch_timer = 0 // timerを0に設定
let stop_watch_interval_id = null // interval_id
let stop_watch_flag = false // on, off切り替えflag

stop_watch_count_obj.textContent = `クリック後の経過時間 : ${stop_watch_timer} 秒` // 経過時間表示
function stop_watch_function(){
    stop_watch_timer += 1 // +1
    stop_watch_count_obj.textContent = `クリック後の経過時間 : ${stop_watch_timer} 秒` // 経過時間表示
}
function stop_watch_event_function(){
    stop_watch_flag = !stop_watch_flag // flagの逆

    if (stop_watch_flag){ // flagがtrueの場合
        stop_watch_interval_id = setInterval(stop_watch_function, 1000) // 1000ミリ(1)秒ごとに関数実行
    } else { // flagがfalseの場合
        clearInterval(stop_watch_interval_id) // ストップウォッチを止める
    }
}
stop_watch_btn_obj.addEventListener("click", stop_watch_event_function , false) // clickごとに関数実行


// h2に余白追加
const h2_object = document.querySelectorAll("h2")
h2_object.forEach(function (h2_item) {
    h2_item.style.paddingTop = "20px"; //yellow blue green
});