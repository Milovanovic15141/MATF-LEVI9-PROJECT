createDom();

for (var arr=[],i=0;i<9;i++) 
    arr[i] = i + 1;

init();


//initial random positioning pictures
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

//after every move clear the divs and put pictures in new order
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
    //checking if puzzle is in right order, if it is, creating "win" span element
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

//shuffle posision of pictures
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
    for(var i = 1; i <= 3; i++){
        var row = document.createElement('div');
        row.style.height = '33%';
        row.setAttribute('id', 'row' + (i).toString());
        for(var j = 1; j <= 3; j++){
            var tmp = document.createElement('div');
            tmp.setAttribute('id', (j+((i-1)*3)).toString());
            tmp.style.width = "33%";
            tmp.style.height = '100%';
            tmp.style.float = "left";
            row.appendChild(tmp);
            wrapper.appendChild(row);
        }
    }
    document.body.appendChild(wrapper);
}

