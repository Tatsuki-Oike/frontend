const click_btn_obj = document.querySelector("#add_task")
const task_list_obj = document.querySelector("#task_list")
const title_obj = document.querySelector("#title")
const content_obj = document.querySelector("#content")

// タスク追加クリック時
function add_task_function(){

    // 1 formの入力取得
    let content = document.forms["task"].elements["content"].value
    let title = document.forms["task"].elements["title"].value

    // 2 list要素
    const list_element = document.createElement("li")
    list_element.setAttribute("class", "list-group-item row justify-content-between")

    // 3 div row要素
    const row_element = document.createElement("div")
    row_element.setAttribute("class", "row justify-content-between")

    // 3.1 div col-10 (task) 要素
    const task_element = document.createElement("div")
    task_element.setAttribute("class", "col-10")

    // 3.1.1 task要素 (title要素)
    const title_element = document.createElement("h5")
    const title_text = document.createTextNode(title)
    title_element.appendChild(title_text)
    task_element.appendChild(title_element)

    // 3.1.2 task要素 (content要素)
    const content_element = document.createElement("p")
    const content_text = document.createTextNode(content)
    content_element.appendChild(content_text)
    task_element.appendChild(content_element)

    // 3.2 div col-10 (delete) 要素
    const task_delete_element = document.createElement("div")
    task_delete_element.setAttribute("class", "col-2 align-self-center text-end")

    // 3.2.1 delte要素
    const delete_element = document.createElement('button');
    delete_element.setAttribute("class", "btn-close")
    delete_element.addEventListener("click", {delete_object: delete_element,handleEvent: delete_task_function}, false)
    task_delete_element.appendChild(delete_element)

    // 4 要素追加
    row_element.appendChild(task_element)
    row_element.appendChild(task_delete_element)
    list_element.appendChild(row_element)

    // 5 html追加
    task_list_obj.appendChild(list_element)
    
    // formの要素消去
    document.forms["task"].elements["title"].value = ""
    document.forms["task"].elements["content"].value = ""

}

// ×ボタンクリック時
function delete_task_function(){
    const delete_task = this.delete_object.closest('li');  
    task_list_obj.removeChild(delete_task);
}

// タスク追加クリック時に関数実行
click_btn_obj.addEventListener("click", add_task_function, false)