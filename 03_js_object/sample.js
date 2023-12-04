// 1 jsの基本 (テキスト)

// 1.1 要素の書き換え (テキスト)
document.querySelector("h2").textContent = "タイトルを変更"
document.querySelector(".sample_class").textContent = "classを指定して文章を変えるよ"
document.querySelector("#sample_id").textContent = "idを指定して文章を変えるよ"
document.querySelector("#delete_id").remove() //要素の消去

// 1.2 要素の書き換え (css)
document.querySelector("h2").style.color = "blue"
document.querySelector(".sample_class").style.border = "solid 1px blue"
document.querySelector("#sample_id").style.backgroundColor = "red"


// 2 複数のクラス

// 2.1 consoleオブジェクト
console.log("2.1 consoleオブジェクト")
console.log("Hello World")

// 2.2 複数の要素とってくる (querySelector)
console.log("2.2 複数の要素取ってくる (querySelector)")
console.log("select multi_class : " + document.querySelector(".multi_class").textContent)
console.log("select All : ")
console.log(document.querySelectorAll(".multi_class"))
console.log("select one : " + document.querySelectorAll(".multi_class")[0].textContent)

// 2.3 要素をとってくる (getElementBy)
console.log("2.3 複数の要素取ってくる (getElementBy)")
console.log("get id : " + document.getElementById("sample_id").innerHTML)
console.log("get multi_class : " + document.getElementsByClassName("multi_class"))
console.log("get one : " + document.getElementsByClassName("multi_class").item(2).innerHTML)


// 3 要素を追加
document.querySelector(".addition").insertAdjacentHTML("beforebegin", "<li> beforebegin </li>")
document.querySelector(".addition").insertAdjacentHTML("afterbegin", "<li> afterbegin </li>")
document.querySelector(".addition").insertAdjacentHTML("beforeend", "<li> beforeend </li>")
document.querySelector(".addition").insertAdjacentHTML("afterend", "<li> afterend </li>")
document.write("<p>Hello World</p>");


// 4 その他のオブジェクト

// 4.1 windowオブジェクト
// window.alert("警告")
// window.confirm("確認")
// window.prompt()

// 4.2 locationオブジェクト
console.log("4.2 locationオブジェクト")
console.log("location port : " + location.port)
console.log("location host : " + location.host)
console.log("location href : " + location.href)