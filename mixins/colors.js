//js for using the huemint cards to update the site's palette color  
import axios from "axios";


// <----------- variables ----------->


// api data calling
var url = "https://api.huemint.com/color";
var data = {
    "mode":"transformer", // transformer, diffusion or random
    "num_colors":5, // max 12, min 2
    "temperature":"1.2", // max 2.4, min 0
    "num_results":1, // max 50 for transformer, 5 for diffusion
    "adjacency":["0", "65", "45", "35", "15", "65", "0", "35", "65", "35", "45", "35", "0", "35", "45", "35", "65", "35", "0", "15", "15", "35", "45", "15", "0"], // nxn adjacency matrix as a flat array of strings
    "palette":["-", "-", "-", "-", "-"], // locked colors as hex codes, or '-' if blank
};
var customConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};

// hex color variables held on each card
var hexes = ['f0d5a8', '3e1d09', 'd37a26', 'd6a12c', '9f5a2e'];

// initial color pallete implemented
var results = ["#f0d5a8", "#3e1d09", "#d37a26", "#d6a12c", "#9f5a2e"];
var locked = [false, false, false, false, false];


// <----------- set site colors ----------->


// set the colors on the correct DOM elements from the colors provided
function setColor(color, pos) {
    pos++;
    var backgrounds = document.getElementsByClassName("background_color"+pos);
    var text = document.getElementsByClassName("text_color"+pos);
    var borders = document.getElementsByClassName("border_color"+pos);
    var cardText = document.getElementById("hex_card"+pos);
    console.log("hex_card"+pos);

    // sets background color
    for (var i in backgrounds) {
        if (backgrounds.hasOwnProperty(i)) {
            backgrounds[i].style.backgroundColor = color;
        }
    }

    // sets text color
    for (var i in text) {
        if (text.hasOwnProperty(i)) {
            text[i].style.color = color;
        }
    }

    // sets border color
    for (var i in borders) {
        if (borders.hasOwnProperty(i)) {
            borders[i].style.borderColor = color;
        }
    }

    // changes text in card to new hex value
    cardText.value = color.substring(1, color.lenght);
    hexes[pos-1] = color.substring(1, color.lenght);

    textColor(color, pos);
}

// text is readable on the page
function textColor(color, pos) {
    var primaryText = document.getElementsByClassName("primary_text_color"+pos);

    // pulls hex code without the #
    color = color.slice(1);

    // converts the hex color provided into rgb values
    var r = parseInt(color.slice(0, 2), 16);
    var g = parseInt(color.slice(2, 4), 16);
    var b = parseInt(color.slice(4, 6), 16);

    // sets text color based on contrast
    var text = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#4c4c4c' : '#F5F5F5';

    for (var i in primaryText) {
        if (primaryText.hasOwnProperty(i)) {
            primaryText[i].style.color = text;
        }
    }
    
    // navbar is set to background_color1; text in navbar is only changed
    if (pos == 1) {
        var navbar = document.getElementById('navbar');
        if (text == "#F5F5F5") {
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('navbar-light');
        } else {
            navbar.classList.add('navbar-light');
            navbar.classList.remove('navbar-dark');
        }
    }
}


// <----------- when hex codes are manually inputed by the user ----------->


function changeHex(cardNum) {

    // var checks each letter in the inputted hex to see if its valid
    var hexTest = /^([0-9A-F]{1}){1,6}$/i;
    var card = document.getElementById("hex_card"+cardNum);
    var hex = card.value;
    cardNum--;

    // if inputted text uses valid hex chars and is 0-6 in length ... continue
    if (hexTest.test(hex) && hex.length < 7) {
        hexes[cardNum] = hex;

        // if text length is 6, update the color and lock
        if (hex.length == 6) {
            results[cardNum] = "#"+hex;
            setColor("#"+hex, cardNum);
            if (!locked[cardNum]) {
                lockCard(cardNum+1);
            }
            card.blur();
        }
    // if inputted text uses invalid chars or is 7, then set the innerText back
    } else if (hex.length != 0) {
        card.blur();
        card.value = hexes[cardNum-1];
        console.log(hexes);
    }

    console.log(card.value);
}

// Locks the card with the inputed hex colors
function lockCard(card) {
    console.log("Card inputted: "+card);
    var btnTop = document.getElementById("lock-btn-top"+card);
    var btnBottom = document.getElementById("lock-btn-bottom"+card);
    card--;
    (locked[card]) ? locked[card] = false : locked[card] = true;
    if (locked[card]) {
        btnTop.classList.add('locked-top');
        btnTop.classList.remove('unlocked-top');
        btnBottom.classList.add('locked-bottom');
        btnBottom.classList.remove('unlocked-bottom');
    } else {
        btnTop.classList.add('unlocked-top');
        btnTop.classList.remove('locked-top');
        btnBottom.classList.add('unlocked-bottom');
        btnBottom.classList.remove('locked-bottom');
    }
}


// <----------- methods and functions that will be availble ----------->


export const colorMixin = {
    methods: {

        // colors from Huemint are fetched and sets the colors on the site
        getColors() {

            // creates the palette to send over
            for (let i = 0; i < 5; i++) {
                if (locked[i]) {
                    data.palette[i] = results[i];
                } else {
                    data.palette[i] = "-";
                }
            }

            console.log(results);
            console.log(data.palette);

            axios.post(url, JSON.stringify(data), customConfig).then((response) => {
                results = response.data.results[0].palette;
                console.log(results);
                for (var i in results) {
                    setColor(results[i], i);
                }
            }, (error) => {
                console.log(error);
            });
        },

        // pages are refreshed and sets up the colors when moving between pages
        refresh() {
            for (var i in results) {
                setColor(results[i], i);
            }
        },

        // lock or unlock the selected color in the palette
        lock(pos) {
            lockCard(pos);
        },

        // when someone edits the hex, run some checks and set it if right
        hexChange(card) {
            changeHex(card);
        },

        // copy the selected hex value to the user's clipboard
        toClipboard(card) {
            navigator.clipboard.writeText(results[card-1]);

            // get the snackbar DIV
            var toast = document.getElementById("copy_toast");

            // add the "show" class to DIV
            toast.classList.add("show");

            // after 3 seconds, remove the show class from DIV
            setTimeout(function(){ toast.classList.remove("show"); }, 2000);
        },

        // when button is hovered, set it's background to what is provided
        btnHovered(btnId, color) {
            var btn = document.getElementById(btnId);
            console.log("Id: " + btnId + ", and it's return: " + btn);
            btn.style.backgroundColor = results[color-1];
        },

        // when button is unhovered, set it's background color to transparent
        btnUnhovered(btnId) {
            var btn = document.getElementById(btnId);
            btn.style.backgroundColor = 'transparent';
        }
    }
}
