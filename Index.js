var commands = [];
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
let terminal = document.getElementById("terminal");

var cursor = document.getElementById("cursor");
window.addEventListener("keyup", enterKey);


// Fix: Define git properly
var git = 0;

function moveIt(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}

function typeIt(from, e) {
    e = e || window.event;
    var w = document.getElementById("typer");
    var tw = from.value;

    // Fix: Update the 'typer' span to show what is typed in the textarea
    w.innerHTML = tw;
}


function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);  // Save the command in history
      git = commands.length;  // Update git to reflect the current position in the command history
      addLine("TerminalWebsiteUnkownUser.com:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());  // Process the command entered
      command.innerHTML = "";  // Clear the command line after execution
      textarea.value = "";  // Clear the textarea
    }
    if (e.keyCode == 38 && git != 0) {  // Up arrow to cycle commands
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {  // Down arrow to cycle commands
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

// Fix: Function to loop through the lines and display them with a delay
function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}

// Fix: Function to add a line to the terminal with a delay
function addLine(text, style, delay) {
    setTimeout(function() {
        const line = document.createElement("div");
        line.classList.add(style);
        line.textContent = text;
        terminal.appendChild(line);
    }, delay);
}
