function fetch_local()
{
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

function add_todo()
{
    var task = document.getElementById('task').value;
    var todos = fetch_local();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function clearDefault(a)
{
    if (a.defaultValue == a.value){
        a.value = "";
    }
};

function remove_todo()
{
    var id = this.getAttribute('id');
    var todos = fetch_local();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show()
    
    return false;
}

function show()
{   
    var todos = fetch_local();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Remove</button></li><hr>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove_todo);
    };

}
 
document.getElementById('add').addEventListener('click', add_todo);
show();
