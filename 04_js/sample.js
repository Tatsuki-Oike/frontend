// 1 変数の定義

// 1.1 変数の定義
let sample_let = 3
const sample_const = 5
document.querySelector(".variable_def").insertAdjacentHTML("beforeend",
`<p> sample_let : ${sample_let} , sample_const : ${sample_const}</p>`)

// 1.2 変数を再代入
sample_let += 100  // sample_const += 1 はだめ
document.querySelector(".variable_re").insertAdjacentHTML("beforeend",
`<p> sample_let : ${sample_let} , sample_const : ${sample_const}</p>`)


// 2 function

// 2.1  関数の定義1
function add_function(x, y) {
    z = x + y
    return z
}
document.querySelector(".function1").insertAdjacentHTML("beforeend",
`<p> add_function : ${add_function(5, 3)} </p>`)

// 2.2  関数の定義2
const add_noname = function(x, y) {
    z = x + y
    return z
}
document.querySelector(".function2").insertAdjacentHTML("beforeend",
`<p> add_noname : ${add_noname(5, 3)} </p>`)

// 2.3 arrow関数の定義1
const add_arrow = (x, y) => {
    z = x + y
    return z
}
document.querySelector(".arrow_function1").insertAdjacentHTML("beforeend",
`<p> add_arrow : ${add_arrow(5, 3)} </p>`)

// 2.4 arrow関数の定義2
const add_arrow_simple = (x, y) => z = x + y
document.querySelector(".arrow_function2").insertAdjacentHTML("beforeend",
`<p> add_arrow_simple : ${add_arrow_simple(5, 3)} </p>`)


// 3 Array

// 3.1 Array
const sample_array = ["Taro", "Jiro", "Saburo", "Shiro"]
document.querySelector(".array").insertAdjacentHTML("beforeend",
`<p> sample_array : ${sample_array} </p>`) // 配列表示
document.querySelector(".array").insertAdjacentHTML("beforeend",
`<p> sample_array[0] : ${sample_array[0]} </p>`) // 0番目の要素取り出し
document.querySelector(".array").insertAdjacentHTML("beforeend",
`<p> sample_array.slice(1, 3) : ${sample_array.slice(1, 3)} </p>`) // スライス
document.querySelector(".array").insertAdjacentHTML("beforeend",
`<p> sample_array.length : ${sample_array.length} </p>`) // 長さ

// 3.2 Array 処理
// 条件取り出し (filter)
document.querySelector(".array_exec").insertAdjacentHTML("beforeend",
`<p> sample_array.filter : ${sample_array.filter(i => i === "Jiro")} </p>`) 
// 要素ごとに関数適応 (map)
document.querySelector(".array_exec").insertAdjacentHTML("beforeend",
`<p> sample_array.map : ${sample_array.map(i => "My name is" + i )} </p>`)
let sum = "";
// 要素ごとに関数適応 (forEach)
sample_array.forEach(i => sum += i)
document.querySelector(".array_exec").insertAdjacentHTML("beforeend",
`<p> sample_array.forEach : ${sum} </p>`)


// 4 Object
const intro = {
    name : "Tatsuki",
    age : 23,
    frends : ["Akira", "Taro", "Jiro"],
    introduce : function(){
        return "My name is " + this.name
    }
}
document.querySelector(".object").insertAdjacentHTML("beforeend",
`<p> intro.name : ${intro.name}  </p>`)
document.querySelector(".object").insertAdjacentHTML("beforeend",
`<p> intro.age : ${intro.age}  </p>`)
document.querySelector(".object").insertAdjacentHTML("beforeend",
`<p> intro.frends : ${intro.frends}  </p>`)
document.querySelector(".object").insertAdjacentHTML("beforeend",
`<p> intro.introduce : ${intro.introduce()}  </p>`)


// 5 基本的な文

// 5.1 for

// 5.1.1 数値
for (let i=0; i<4; i++){
    document.querySelector(".for").insertAdjacentHTML("beforeend",
    `<p> for : ${i}  </p>`)
}

// 5.1.2 Array
const for_array = [0, 2, 4, 6, 8]
let show_array = []
for (let i in for_array){
    show_array.push(`(${i}:  ${for_array[i]})`)
}
document.querySelector(".for").insertAdjacentHTML("beforeend",
    `<p> for list : ${show_array.join(" | ")}  </p>`)

// 5.1.3 Object
const for_object = {
    name : "Tatsuki",
    age : 23,
    sex : "Man",
    job : "Student"
}
show_array = []
for (let key in for_object){
    show_array.push(`(${key}:  ${for_object[key]})`)
}
document.querySelector(".for").insertAdjacentHTML("beforeend",
    `<p> for object : ${show_array.join(" | ")} </p>`)

// 5.2 while
let value = 0
show_array = []
while (value < 3){
    value += 1
    show_array.push(`(${value})`)
}
document.querySelector(".while").insertAdjacentHTML("beforeend",
    `<p> while : ${show_array.join(" | ")} </p>`)

// 5.3 if

// 5.3.1 if文
show_array = []
for (let i in for_array){
    if (i == 2){
        show_array.push(`(${i}:  ${for_array[i]})`)
    }
}
document.querySelector(".if").insertAdjacentHTML("beforeend",
    `<p> if list : ${show_array.join(" | ")} </p>`)

// 5.3.2 if, else if, else
show_array = []
for (let key in for_object){
    if(key==="name"){
        show_array.push(`(My name is ${for_object[key]})`)
    } else if(key==="job"){
        show_array.push(`(My job is ${for_object[key]})`)
    } else{
        show_array.push(`(else)`)
    }
}
document.querySelector(".if").insertAdjacentHTML("beforeend",
    `<p> if object : ${show_array.join(" | ")} </p>`)


// h2に余白追加
const h2_object = document.querySelectorAll("h2")
h2_object.forEach(function (h2_item) {
    h2_item.style.paddingTop = "20px";
});