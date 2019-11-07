createDom();

for (var arr=[],i=0;i<9;i++) 
    arr[i] = i + 1;
init();


function init() {
    arr = shuffle(arr);
    for(i=0; i<9; i++){
        if(arr[i] != 9){
            var elem = document.createElement("img");
            elem.setAttribute("src", "./images/puzz"+arr[i].toString()+".jpg");
            elem.setAttribute("height", "200px");
            elem.setAttribute("width", "200px");
            document.getElementById((i+1).toString()).appendChild(elem);
        }
    }
    
}

function draw(){
    for(i=0; i<9; i++){
        document.getElementById((i+1).toString()).innerHTML = "";
        if(arr[i] != 9){
            var elem = document.createElement("img");
            elem.setAttribute("src", "./images/puzz"+arr[i].toString()+".jpg");
            elem.setAttribute("height", "200px");
            elem.setAttribute("width", "200px");
            document.getElementById((i+1).toString()).appendChild(elem);
        }
    }
    for(i=0; i<9; i++) {
        if(arr[i] != i+1){
            console.log(arr[i], i+1);
            return;
        }
    }
    
    var win = document.createElement("span");
    win.textContent = "You have won!";
    document.body.appendChild(win);
}

window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==37){
    	e.preventDefault();
    	moveleft();
    }
    if(key==38){
    	e.preventDefault();
    	moveup();
    }
    if(key==39){
    	e.preventDefault();
    	moveright();
    }
    if(key==40){
    	e.preventDefault();
    	movedown();
    }
    
});

function findBlank(){
    for(i = 0; i < 9; i++){
        if(arr[i] == 9)
            blankPosition = i;
    }
    return blankPosition;
}

function moveright() {
    blankPosition = findBlank();
    if(blankPosition != 0 && blankPosition != 3 && blankPosition != 6) {
        arr[blankPosition] = arr[blankPosition - 1];
        arr[blankPosition-1] = 9;
        draw();
    }
}

function moveleft() {
    blankPosition = findBlank();
    if(blankPosition != 2 && blankPosition != 5 && blankPosition != 8) {
        arr[blankPosition] = arr[blankPosition + 1];
        arr[blankPosition+1] = 9;
        draw();
    }
}

function movedown() {
    blankPosition = findBlank();
    if(blankPosition > 2) {
        arr[blankPosition] = arr[blankPosition - 3];
        arr[blankPosition-3] = 9;
        draw();
    }
}


function moveup() {
    blankPosition = findBlank();
    if(blankPosition < 7) {
        arr[blankPosition] = arr[blankPosition + 3];
        arr[blankPosition+3] = 9;
        draw();
    }
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}


//creating dom, 3x3 table of divs
function createDom() {
    var wrapper = document.createElement('div');
    wrapper.style.width = "600px";
    wrapper.style.height = "600px";
    var row1 = document.createElement('div');
    row1.style.height = '33%';
    row1.setAttribute('id', 'row1');
    for(var i = 0; i < 3; i++){
        var tmp = document.createElement('div');
        tmp.setAttribute('id', (1+i).toString());
        tmp.style.width = "33%";
        tmp.style.height = '100%';
        tmp.style.float = "left";
        row1.appendChild(tmp);
    }
    var row2 = document.createElement('div');
    row2.style.height = '33%';
    row2.setAttribute('id', 'row2');
    for(var i = 0; i < 3; i++){
        var tmp = document.createElement('div');
        tmp.setAttribute('id', (4+i).toString());
        tmp.style.width = "33%";
        tmp.style.height = '100%';
        tmp.style.float = "left";
        row2.appendChild(tmp);
    }
    var row3 = document.createElement('div');
    row3.style.height = '33%';
    row3.setAttribute('id', 'row3');
    for(var i = 0; i < 3; i++){
        var tmp = document.createElement('div');
        tmp.setAttribute('id', (7+i).toString())
        tmp.style.width = "33%";
        tmp.style.height = '100%';
        tmp.style.float = "left";;
        row3.appendChild(tmp);
    }
    wrapper.appendChild(row1);
    wrapper.appendChild(row2);
    wrapper.appendChild(row3);
    document.body.appendChild(wrapper);
}

