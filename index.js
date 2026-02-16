var username = "username";
var welcomeDict = {"wim1": "images/female1.png",
                    "wim2": "images/female2.png",
                    "wim3": "images/male1.png",
                    "wim4": "images/male2.png"};
var charSelect = "images/male1.png";
var wim1 = document.getElementById("wim1");
var wim2 = document.getElementById("wim2");
var wim3 = document.getElementById("wim3");
var wim4 = document.getElementById("wim4");

var cardDict = {
    "C2" : "images/cards/clubs_2.png",
    "C3": "images/cards/clubs_3.png",
    "C4": "images/cards/clubs_4.png",
    "C5": "images/cards/clubs_5.png",
    "C6": "images/cards/clubs_6.png",
    "C7": "images/cards/clubs_7.png",
    "C8": "images/cards/clubs_8.png",
    "C9": "images/cards/clubs_9.png",
    "C10": "images/cards/clubs_10.png",
    "CJ": "images/cards/clubs_jack.png",
    "CQ": "images/cards/clubs_queen.png",
    "CK": "images/cards/clubs_king.png",
    "CA": "images/cards/clubs_ace.png",
    "D2": "images/cards/diamonds_2.png",
    "D3": "images/cards/diamonds_3.png",
    "D4": "images/cards/diamonds_4.png",
    "D5": "images/cards/diamonds_5.png",
    "D6": "images/cards/diamonds_6.png",
    "D7": "images/cards/diamonds_7.png",
    "D8": "images/cards/diamonds_8.png",
    "D9": "images/cards/diamonds_9.png",
    "D10": "images/cards/diamonds_10.png",
    "DJ": "images/cards/diamonds_jack.png",
    "DQ": "images/cards/diamonds_queen.png",
    "DK": "images/cards/diamonds_king.png",
    "DA": "images/cards/diamonds_ace.png",
    "H2" : "images/cards/hearts_2.png",
    "H3" : "images/cards/hearts_3.png",
    "H4" : "images/cards/hearts_4.png",
    "H5" : "images/cards/hearts_5.png",
    "H6" : "images/cards/hearts_6.png",
    "H7" : "images/cards/hearts_7.png",
    "H8" : "images/cards/hearts_8.png",
    "H9" : "images/cards/hearts_9.png",
    "H10" : "images/cards/hearts_10.png",
    "HJ" : "images/cards/hearts_jack.png",
    "HQ" : "images/cards/hearts_queen.png",
    "HK" : "images/cards/hearts_king.png",
    "HA" : "images/cards/hearts_ace.png",
    "S2" : "images/cards/spades_2.png",
    "S3" : "images/cards/spades_3.png",
    "S4" : "images/cards/spades_4.png",
    "S5" : "images/cards/spades_5.png",
    "S6" : "images/cards/spades_6.png",
    "S7" : "images/cards/spades_7.png",
    "S8" : "images/cards/spades_8.png",
    "S9" : "images/cards/spades_9.png",
    "S10" : "images/cards/spades_10.png",
    "SJ" : "images/cards/spades_jack.png",
    "SQ" : "images/cards/spades_queen.png",
    "SK" : "images/cards/spades_king.png",
    "SA" : "images/cards/spades_ace.png",
}

const resultMessages = {
    'RF' : "Royal Flush!!!!!!!!!!!!!!!",
    'SF' : "Straight Flush!!!!!!!!",
    '4K' : 'Four Of A Kind!!!!!!!',
    'FH' : 'Full House!!!!!!!!!!!!!!!',
    'F' : 'Flush!!!!!!!!!!!!!!!!!!!!!!!!!!',
    'S' : 'Straight!!!!!!!!!!!!!!!!!!!',
    '3K' : "Three Of A Kind!!!",
    '2P' : "Two Pair!!!!!!!!!!!!!!!!!!!",
    'P' : "Pair!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    'HC' : "High Card!!!!!!!!!!!!!!!!"
}

function welcomeClick(img) {
    var div = document.getElementById(img);
    wim1.style.backgroundColor = "#f4f4f4";
    wim2.style.backgroundColor = "#f4f4f4";
    wim3.style.backgroundColor = "#f4f4f4";
    wim4.style.backgroundColor = "#f4f4f4";    
    div.style.backgroundColor = "lightcoral";
    charSelect = welcomeDict[img];
}

function goToGame() {
    username = document.getElementById("textInput").value;
    localStorage.setItem("username", username);
    localStorage.setItem("charSelect", charSelect);
    // window.location.href = "index.html"

}

function startPage() {
    document.getElementById("userName").innerHTML = localStorage.getItem("username");
    document.getElementById("userPic").src = localStorage.getItem("charSelect");
}

function updateTextbox() {
    const rangeValue = document.getElementById('myRange').value;
    document.getElementById('myTextbox').value = rangeValue;
}

function updateSlider() {
    const textboxValue = document.getElementById('myTextbox').value;
    if (textboxValue == "") {
        document.getElementById('myRange').value = 0
    }
    else {
        document.getElementById('myRange').value = textboxValue;
    }
}

async function closeEndContent() {
    
}

var userResponse = false;
var playerInTurn;
let callAmt;
let activePlayers = []
const lbAmount = 1;
const bbAmount = 2;

function setUserAction(action) {
    console.log("setUserAction")

}

function waitUserAction() {
    return new Promise(resolve => {
        window.setUserAction = function() {
            resolve();
        };
    });
}

function waitEndAction() {
    return new Promise(resolve => {
        window.closeEndContent = function() {
            resolve();
        };
    });
}

async function asyncAwaitUserResponse() {
    console.log("start waiting for user input");
    await waitUserAction();
    console.log("user input received");
    console.log("userResponse = " + userResponse)
    return userResponse;
}


function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

class Frontend{

    static showDiv(id, type="block") {
        // id is string input of div id
        var div = document.getElementById(id);
        div.style.display = type;
    }

    static hideDiv(id) {
        var div = document.getElementById(id);
        div.style.display = 'none';
    }

    static changeImage(id, imageSource) {
        var img = document.getElementById(id);
        img.src = imageSource;
    }

    static changeTextContent(id, text) {
        var content = document.getElementById(id)
        content.textContent = text
    }

    static hideCards(playerID) {
        var card1 = document.getElementById(playerID + 'c1');
        card1.style.visibility = "hidden";
        var card2 = document.getElementById(playerID + 'c2');
        card2.style.visibility = "hidden";
    }

    static showCards(playerID) {
        var card1 = document.getElementById(playerID + 'c1');
        card1.style.visibility = "visible";
        var card2 = document.getElementById(playerID + 'c2');
        card2.style.visibility = "visible";
    }

    static hideBlinds(playerID) {
        let sb = document.getElementById(playerID + 'sb');
        let bb = document.getElementById(playerID + 'bb');
        sb.style.display = 'none';
        bb.style.display = 'none';
    }

    static showSB(playerID) {
        let sb = document.getElementById(playerID + 'sb');
        sb.style.display = 'inline';
    }

    static showBB(playerID) {
        let bb = document.getElementById(playerID + 'bb');
        bb.style.display = 'inline';
    }

    static changeParagraphColor(id, color) {
        const paragraph = document.getElementById(id);
        paragraph.style.color = color;
    }

}

class Player {
    constructor(robot, name, id, imgURL, money=200) {
        this.isrobot = robot;
        this.name = name;
        this.id = id;
        this.money = money;
        this.moneyi = 0;
        this.card1 = ''; 
        this.card2 = '';
        this.active = true;  
        this.inRound = true;
        this.betThisRound = 0;
        this.betThisHand = 0;
        this.imgURL = imgURL;
        this.result = 0;
        this.wonThisHand = 0;
        this.allIn = false;
        this.rank = 0;
        this.finalCards;
        this.betThisHandCopy = 0;
        Frontend.changeTextContent(this.id + 'p1', this.money);
        Frontend.changeTextContent(this.id + 'p2', this.betThisRound);
    }
}

class DealCards {
    constructor(actPlayers, testBoard=false) {
        if (testBoard) {
            var deal = this.dealBoard(actPlayers.length, testBoard);
        } else {
            var deal = this.deal(actPlayers.length);
        }
        this.pockets = deal[0];
        this.board = deal[1];
        // deals cards
        for (var p of actPlayers) {
            const cards = this.pockets.pop();
            p.card1 = cards[0];
            p.card2 = cards[1];
        }
    }

    shuffleDeck() {
        const suits = ['H', 'D', 'C', 'S'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      
        const deck = [];
      
        // Create a deck of cards
        for (const suit of suits) {
            for (const rank of ranks) {
                deck.push([suit, rank]);
            }
        }
        // Shuffle cards
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      
        return deck;
    }

    deal(numPlayers) {
        var deck = this.shuffleDeck();
        var board = [];
        var pockets = [];
    
        for (let i = 0; i < numPlayers; i++) {
            var card1 = deck.pop();
            var card2 = deck.pop();
            pockets.push([card1, card2]);
        }
        for (let i = 0; i < 5; i++) {
            board.push(deck.pop());
        }
        return [pockets, board];
    }

    dealBoard(numPlayers, givenBoard) {
        var d = this.shuffleDeck();
        let deck = [];
        for (let c of d) {
            let add = true;
            for (let g of givenBoard) {
                if (c[0] == g[0] && c[1] == g[1]) {
                    add = false;
                }
            }
            if (add) {
                deck.push(c);
            }
        }
        var pockets = [];
        for (let i = 0; i < numPlayers; i++) {
            var card1 = deck.pop();
            var card2 = deck.pop();
            pockets.push([card1, card2]);
        }
        return [pockets, givenBoard];
    }

}  

class Hand {
    constructor(littleBlind=0, testBoard = []) {
        this.activePlayers = players.filter(player => player.active === true);
        this.littleBlind = littleBlind;
        this.bigBlind = (this.littleBlind + 1) % this.activePlayers.length;

        console.log(this.activePlayers + ' activePlayers')
        
        if (testBoard.length > 0) {
            this.dealtCards = new DealCards(this.activePlayers, testBoard=testBoard)
        } else {
            this.dealtCards = new DealCards(this.activePlayers)
        }
        this.card1 = this.dealtCards.board[0];
        this.card2 = this.dealtCards.board[1];
        this.card3 = this.dealtCards.board[2];
        this.card4 = this.dealtCards.board[3];
        this.card5 = this.dealtCards.board[4];

        this.active = true;
        this.totalVar = 0;
        this.pot = 0;
        this.start = null;
        this.finalPots = [];
        this.currentPots = [];
        this.callAmount = 0;
        this.playerQueue = [];

        for (let p of this.activePlayers) {
            Frontend.showCards(p.id);
            p.betThisHand = 0;
            p.inRound = true;
            p.wonThisHand = 0;
            p.betThisRound = 0;
            p.result = '';
            p.allIn = false;
            p.rank = 0;
            p.finalCards = [];
            p.moneyi = p.money;
            p.inHand = true;
            p.betThisHandCopy = 0;
        }

    }

    async initialize() {
        Frontend.showSB(this.activePlayers[this.littleBlind].id);
        Frontend.showBB(this.activePlayers[this.bigBlind].id);
        await this.bettingRound(['back', 'back', 'back', 'back', 'back']);
        if (this.active) {
            await this.bettingRound([this.card1, this.card2, this.card3, 'back', 'back']);
            if (this.active) {
                await this.bettingRound([this.card1, this.card2, this.card3, this.card4, 'back']);
                if (this.active) {
                    await this.bettingRound([this.card1, this.card2, this.card3, this.card4, this.card5]);
                }
            }
        }
        Frontend.hideBlinds(this.activePlayers[this.littleBlind].id);
        Frontend.hideBlinds(this.activePlayers[this.bigBlind].id);
        await this.endRound();
    }
    
    async bettingRound(cards){
        for (let i = 1; i <= 5; i++) {
            Frontend.changeImage('card' + i.toString() + 'Image', Utils.translateCard(cards[i - 1]));
        }
        for (let i = this.littleBlind; i < this.littleBlind + this.activePlayers.length; i++) {
            let currentPlayer = this.activePlayers[i % this.activePlayers.length];
            if (currentPlayer.inRound) {
                this.playerQueue.push(currentPlayer);
            }
            currentPlayer.betThisRound = 0;
            this.updateFrontend(currentPlayer);
        }
        this.callAmount = 0;

        if (cards[0] == "back") {
            // blinds
            let lbPlayer = this.playerQueue.shift();
            if (lbAmount >= lbPlayer.money) {
                this.bet(lbPlayer, lbPlayer.money);
            } else {
                this.bet(lbPlayer, lbAmount);
                this.playerQueue.push(lbPlayer);
            }
            this.updateFrontend(lbPlayer);

            let bbPlayer = this.playerQueue.shift();
            if (bbAmount >= bbPlayer.money) {
                this.bet(bbPlayer, bbPlayer.money);
            } else {
                this.bet(bbPlayer, bbAmount);
                this.playerQueue.push(bbPlayer);
            }
            this.updateFrontend(bbPlayer);
        }

        // players' turns
        while (this.playerQueue.length > 0) {
            let player = this.playerQueue.shift();
            console.log("player turn " + player.id + " " + player.name);
            if (this.activePlayers.filter(p => p.inHand).length == 1) {
                console.log("one active rest folded");
                continue;
            } else if (this.callAmount == player.betThisRound && this.activePlayers.filter(p => p.inRound).length == 1) {
                await this.delay(1000);
                console.log("one active with all ins");
                continue;
            }
            playerInTurn = player;
            callAmt = this.callAmount;
            let playerAction;

            console.log("pot " + this.pot);
            console.log("call " + this.callAmount);
            console.log("player btr " + player.betThisRound);
            console.log("player money " + player.money);

            if (player.isrobot) {
                playerAction = await this.cpuMove(player, players[0]);
                console.log("cpu " + player.id + " action " + playerAction);
            } else {
                this.updateFrontend(player);
                this.actionHandler(player);
                playerAction = await this.promptMove(player);
                this.showAction(player, playerAction);
                await this.delay(1000);
                Frontend.hideDiv(player.id + "action");
                Frontend.changeTextContent("checkcallDisplay", "Check");
                console.log("user " + player.id + " action " + playerAction);
            }

            if (playerAction[0] == "fold") {
                console.log("hit fold");
                player.inRound = false;
                player.inHand = false;
                Frontend.hideCards(player.id);
            } else if (playerAction[0] == "checkcall") {
                console.log("hit checkcall");
                this.bet(player, Math.min(player.money, this.callAmount - player.betThisRound));
            } else if (playerAction[0] == "raise") {
                console.log("hit raise");
                this.bet(player, playerAction[1] + this.callAmount - player.betThisRound);
            } else if (playerAction[0] == "allIn") {
                console.log("hit allIn");
                this.bet(player, player.money);
            }
            this.updateFrontend(player);
        }
        
    }

    async promptMove(p) {
        console.log(p.card1);
        console.log(p.card2);
        console.log("Move Prompted");
        document.getElementById("myRange").setAttribute("max", (p.money - this.callAmount + p.betThisRound));
        Frontend.showDiv('actionContainer');
        Frontend.changeImage(p.id + 'c1', Utils.translateCard(p.card1));
        Frontend.changeImage(p.id + 'c2', Utils.translateCard(p.card2));
        var response = await asyncAwaitUserResponse();
        console.log("response received: " + response);
        Frontend.changeImage(p.id + 'c1', Utils.translateCard('back'));
        Frontend.changeImage(p.id + 'c2', Utils.translateCard('back'));
        return response;
    }

    bet(player, amount) {
        console.log(player.id + " amount bet " + amount);
        player.betThisHand += amount;
        player.betThisRound += amount;
        this.pot += amount;
        if (player.betThisRound > this.callAmount) {
            this.callAmount = player.betThisRound;
            this.playerQueue = [];
            let c = 0;
            for (let i = 0; i < this.activePlayers.length; i++) {
                if (this.activePlayers[i].id == player.id) {
                    c = i;
                    break;
                }
            }
            for (let i = c + 1; i < c + this.activePlayers.length; i++) {
                if (this.activePlayers[i % this.activePlayers.length].inRound) {
                    this.playerQueue.push(this.activePlayers[i % this.activePlayers.length]);
                }
            }
        }
        if (amount == player.money) {
            player.allIn = true;
            player.inRound = false;
        }
        player.money -= amount;
    }

    async endRound() {
        let endPlayers = this.activePlayers.sort((a, b) => a.betThisHand - b.betThisHand);
        let finalAmounts = [];
        let finalPots = [];
        let finalPlayers = [];
        let inHandPlayers = this.activePlayers.filter(player => player.inHand === true);
        let foldedPlayers = this.activePlayers.filter(player => player.inHand === false);
        this.evaluateHand(inHandPlayers);
        this.evaluateHand(foldedPlayers);
        console.log("endPlayers");
        console.log(endPlayers);
        for (let ep of endPlayers) {
            ep.betThisHandCopy = ep.betThisHand;
        }
        for (let i = 0; i < endPlayers.length; i++) {
            if (endPlayers[i].allIn || i == endPlayers.length - 1) {
                if (finalAmounts.includes(endPlayers[i].betThisHandCopy)) {
                    continue;
                }
                let currPotAmount = endPlayers[i].betThisHandCopy;
                finalAmounts.push(currPotAmount);
                finalPots.push(0);
                finalPlayers.push([]);
                for (let j = 0; j < endPlayers.length; j++) {
                    if (endPlayers[j].inHand && endPlayers[j].betThisHandCopy >= currPotAmount) {
                        if (finalPlayers[finalPlayers.length - 1].length == 0) {
                            finalPlayers[finalPlayers.length - 1].push(endPlayers[j]);
                            finalPots[finalPots.length - 1] += endPlayers[j].betThisHand;
                            endPlayers[j].betThisHand -= endPlayers[j].betThisHand;
                            this.pot -= endPlayers[j].betThisHand;
                            continue;
                        }
                        if (endPlayers[j].rank < finalPlayers[finalPlayers.length - 1][0].rank) {
                            finalPlayers[finalPlayers.length - 1] = [endPlayers[j]];
                        } else if (endPlayers[j].rank == finalPlayers[finalPlayers.length - 1][0].rank) {
                            finalPlayers[finalPlayers.length - 1].push(endPlayers[j]);
                        }
                    }
                    let amt = Math.min(endPlayers[j].betThisHandCopy, currPotAmount) - (endPlayers[j].betThisHandCopy - endPlayers[j].betThisHand);
                    finalPots[finalPots.length - 1] += amt;
                    endPlayers[j].betThisHand -= amt;
                    this.pot -= amt;
                }
            }
        }
        console.log(finalAmounts);
        console.log(finalPots);
        console.log(finalPlayers);
        for (let i = 0; i < finalAmounts.length; i++) {
            for (let j = 0; j < finalPlayers[i].length; j++) {
                finalPlayers[i][j].money += Math.round(finalPots[i] / finalPlayers[i].length);
                finalPlayers[i][j].wonThisHand += Math.round(finalPots[i] / finalPlayers[i].length);
            }
        }
        inHandPlayers.sort((a, b) => 10000 * (a.rank - b.rank) + 0.0001 * (b.wonThisHand - a.wonThisHand));
        foldedPlayers.sort((a, b) => a.rank - b.rank);
        for (let p of this.activePlayers) {
            p.wonThisHand -= p.betThisHandCopy;
            if (p.money == 0) {
                p.active = false;
                Frontend.hideDiv(p.id);
            }
        }
        console.log("final remaining");
        console.log(inHandPlayers);
        console.log(foldedPlayers);
        console.log("results");
        for (let i of inHandPlayers) {
            console.log("in hand " + i.id + " " + i.name + " initial: " + i.moneyi + " final: " + i.money + " bth: " + i.betThisHandCopy + " wth " + i.wonThisHand);
        }
        for (let i of foldedPlayers) {
            console.log("folded " + i.id + " " + i.name + " initial: " + i.moneyi + " final: " + i.money + " bth: " + i.betThisHandCopy + "wth " + i.wonThisHand);
        }
        await this.showEndDisplay([...inHandPlayers, ...foldedPlayers]);
        return;
    }

    async cpuMove(player, human) {
        // 3 scenarios, currentCall is above what player can call (all in is only option)
        // currentCall can be called, all in, raise, call, fold
        // call is 0 all in, raise, call
        let randNum = Math.random();
        let playerAction;
        let allInThreshold;
        let raiseThreshold;
        let callThreshold;
        await this.delay(1000);
        if (this.callAmount >= player.money + player.betThisHand) {
            allInThreshold = 0.3
            if (human.rank > player.rank) {
                allInThreshold += 0.2
            }
            if (randNum > allInThreshold) {
                playerAction = ["allIn", player.money]
            } else {
                playerAction = ["fold", 0]
            }
        } else if (this.callAmount == 0) {
            if (player.rank < 3) {
                raiseThreshold = 0.4
            } else {
                raiseThreshold = 0.15
            }
            allInThreshold = 0.97
            if (randNum > allInThreshold) {
                playerAction = ["allIn", player.money]
            } else if (randNum > raiseThreshold) {
                if (randNum > 0.8) {
                    playerAction = ["raise", Math.ceil((player.money + player.betThisRound - this.callAmount) * 0.4)]
                } else {                
                    playerAction = ["raise", Math.ceil((player.money + player.betThisRound - this.callAmount) * 0.1)]
                }
            } else {
                playerAction = ["checkcall", 0]
            }
        } else {
            if (player.rank < human.rank) {
                allInThreshold = 0.96
                raiseThreshold = 0.8
                callThreshold = 0.1
                if (randNum > allInThreshold) {
                    playerAction = ["allIn", player.money]
                } else if (randNum > raiseThreshold) {
                    playerAction = ["raise", Math.ceil((player.money + player.betThisRound - this.callAmount) * 0.2)]
                } else if (randNum > callThreshold) {
                    playerAction = ["checkcall", 0]
                } else {
                    playerAction = ["fold", 0]
                }
            } else {
                allInThreshold = 0.98
                raiseThreshold = 0.85
                callThreshold = 0.5
                if (randNum > allInThreshold) {
                    playerAction = ["allIn", player.money]
                } else if (randNum > raiseThreshold) {
                    playerAction = ["raise", Math.ceil((player.money + player.betThisHand - this.callAmount) * 0.2)]
                } else if (randNum > callThreshold) {
                    playerAction = ["checkcall", 0]
                } else {
                    playerAction = ["fold", 0]
                }

            }
        }
        console.log(playerAction)
        this.showAction(player, playerAction);
        await this.delay(1000);
        Frontend.hideDiv(player.id + "action");
        return playerAction;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showAction(p, action) {
        if (action[0] != "fold" && (this.callAmount >= p.money + p.betThisRound || (action[0] == "raise" && raise[1] + this.callAmount == p.money + p.betThisRound))) {
            Frontend.changeTextContent(p.id + "action", "All In! " + p.money.toString())
            Frontend.changeParagraphColor(p.id + "action", "yellow")
            Frontend.showDiv(p.id + "action")
        } else if (action[0] == "checkcall") {
            Frontend.changeTextContent(p.id + "action", p.betThisRound == this.callAmount ? "Check" : "Call")
            Frontend.changeParagraphColor(p.id + "action", "green")
            Frontend.showDiv(p.id + "action")
        } else if (action[0] == "raise") {
            Frontend.changeTextContent(p.id + "action", "Raise " + action[1].toString())
            Frontend.changeParagraphColor(p.id + "action", "yellow")
            Frontend.showDiv(p.id + "action")
        } else if (action[0] == "allIn") {
            Frontend.changeTextContent(p.id + "action", "All In! " + p.money.toString())
            Frontend.changeParagraphColor(p.id + "action", "yellow")
            Frontend.showDiv(p.id + "action")
        } else if (action[0] == "fold") {
            Frontend.changeTextContent(p.id + "action", "Fold!")
            Frontend.changeParagraphColor(p.id + "action", "red")
            Frontend.showDiv(p.id + "action")
        }
    }
    
    evaluateHand(players) {
        let baskets = {
            'RF' : [],
            'SF' : [],
            '4K' : [],
            'FH' : [],
            'F' : [],
            'S' : [],
            '3K' : [],
            '2P' : [],
            'P' : [],
            'HC' : []
        };
        for (let player of players) {
            let cardsInitial = [this.card1, this.card2, this.card3, this.card4, this.card5, player.card1, player.card2];
            let cards = [];
            // convert cards into arrays for better handling
            for (let card of cardsInitial) {
                if (card[1] == 'J') {
                    cards.push([card[0], 11]);
                } else if (card[1] == 'Q') {
                    cards.push([card[0], 12]);
                } else if (card[1] == 'K') {
                    cards.push([card[0], 13]);
                } else if (card[1] == 'A') {
                    cards.push([card[0], 14]);
                } else {
                    cards.push([card[0], parseInt(card.slice(1))]);
                } 
            }

            // sort cards in descending order of rank
            cards.sort((a, b) => b[1] - a[1]);

            let rankCounts = {};
            let suitCounts = {};
            cards.forEach(card => {
                rankCounts[card.slice(1)] = (rankCounts[card.slice(1)] || 0) + 1;
                suitCounts[card[0]] = (suitCounts[card[0]] || 0) + 1;
            });

            const straightFlush = this.isStraightFlush(cards, suitCounts);
            const isFour = this.isFour(cards, rankCounts);
            const isThreeTwoOneDict = this.isThreeTwoOne(cards, rankCounts);
            const isStraight = this.isStraight(cards)

            // for (let key in isThreeTwoOneDict) {
            //     console.log(key, isThreeTwoOneDict[key]);
            // }

            if (straightFlush[0] && straightFlush[1][0][1] == 14) {
                baskets['RF'].push(player);
                player.finalCards = [0, 0, 0, 0, 0];
                player.result = 'RF';
            } else if (straightFlush[0]) {
                // [player, [straightFlush high card rank, 0, 0, 0, 0]
                baskets['SF'].push(player);
                player.finalCards = [straightFlush[1][0][1], 0, 0, 0, 0];
                player.result = 'SF';
            } else if (isFour[0]) {
                // [player, [4 of a kind rank, highest 5th card, 0, 0, 0]
                baskets['4K'].push(player);
                player.finalCards = [parseInt(isFour[1]), this.highCard(player, cards, isFour[1]), 0, 0, 0];
                player.result = '4K';
            } else if (isThreeTwoOneDict['FH']) {
                // [player, [trip HC, dub HC, 0, 0, 0]]
                baskets['FH'].push(player);
                player.finalCards = [...isThreeTwoOneDict['FH'], 0, 0, 0];
                player.result = 'FH';
            } else if (straightFlush[2]) {
                // there can only be one suit of flush so there can only be one unique highcard in a flush
                // [player, [highest 5 cards of flush]]
                // [player, [hc1, hc2, hc3, hc4, hc5]]
                let sortedRanks = [];
                for (let c of straightFlush[1].slice(0, 5)) {
                    sortedRanks.push(c[1]);
                }
                baskets['F'].push(player);
                player.finalCards = sortedRanks;
                player.result = 'F';
            } else if (isStraight[0]) {
                // [player, [straight HC (integer), 0, 0, 0, 0]]
                baskets['S'].push(player);
                player.finalCards = [isStraight[1], 0, 0, 0, 0];
                player.result = 'S';
            } else if (isThreeTwoOneDict['3K']) {
                // [player, [3k rank, HC1, HC2, 0, 0]]
                baskets['3K'].push(player);
                player.finalCards = [...isThreeTwoOneDict['3K'], 0, 0];
                player.result = '3K';
            } else if (isThreeTwoOneDict['2P']) {
                // [player, [high pair rank, low pair rank, other highest card rank, 0, 0]]
                baskets['2P'].push(player);
                player.finalCards = [...isThreeTwoOneDict['2P'], 0, 0];
                player.result = '2P';
            } else if (isThreeTwoOneDict['P']) {
                // [player, [pair rank, HC1 #, HC2 #, HC3 #, 0]]
                baskets['P'].push(player);
                player.finalCards = [...isThreeTwoOneDict['P'], 0];
                player.result = 'P';
            } else {
                // [player, [hc1, hc2, hc3, hc4, hc5]]
                baskets['HC'].push(player);
                player.finalCards = isThreeTwoOneDict['HC'];
                player.result = 'HC';
            }
        }
        // this ranks each basket and accounts for ties too
        // each nonempty basket will now be a nested array, with each element of subarray
        // representing a ranking of the basket. if two players are in the same subarray, they are tied
        // console.log(baskets)
        this.handlebaskets(baskets);
       
    }

    handlebaskets(baskets) {
        // for (let key in baskets) {
        //     if (baskets[key].length == 1) {
        //         // the length of each basket value will indicate whether 
        //         // player is in tie or not. So if there is only one player in
        //         // a basket, they cannot be tied with any other player 
        //         baskets[key] = [baskets[key]];
        //     }
        // }

        let i = 1;
        for (let key in baskets) {
            if (baskets[key].length == 1) {
                baskets[key][0].rank = i;
                i++;
                // console.log(baskets[key][0], baskets[key][0].rank);
            } else if (baskets[key].length > 1) {
                // console.log(baskets[key]);
                baskets[key].sort((a, b) => b.finalCards[0] - a.finalCards[0] + 0.01 * (b.finalCards[1] - a.finalCards[1]) +
                            0.0001 * (b.finalCards[2] - a.finalCards[2] +  0.000001 * (b.finalCards[3] - a.finalCards[3])) +
                            0.00000001 * (b.finalCards[4] - a.finalCards[4]));

                // for (let e of baskets[key]) {
                //     console.log(e);
                //     console.log(e.finalCards);
                // }

                for (let j = 0; j < baskets[key].length;) {
                    baskets[key][j].rank = i;
                    // console.log('a')
                    let ties = 0;
                    for (let k = j + 1; k < baskets[key].length;) {
                        // console.log('b')
                        // console.log(baskets[key][j].finalCards);
                        // console.log(baskets[key][k].finalCards);
                        if (arraysAreEqual(baskets[key][j].finalCards, baskets[key][k].finalCards)) {
                            baskets[key][k].rank = i;
                            j++;
                            k++;
                            ties++;
                        } else {
                            break;
                        }
                    }
                    j++;
                    i += ties + 1;
                }
                
            }
        }

        // for (let p of players) {
        //     console.log(p);
        //     console.log(p.rank);
        // }

    }

    highCard(player, cards, ...args) {
        // args represent the excepted card values
        let highCard = 0;
        for (let card of cards) {
            for (let exception of args) {
                if (card[1] !== exception && card[1] > highCard) {
                    highCard = card[1];
                }
            }
        }
        // highCard is integer representing highest rank other than rank(s) specified in args
        return highCard
    }

    isStraightFlush(cards, suitCounts) {
        // returns array [bool(are these cards a straightFlush), suited cards if a flush, bool(are these cards a flush?)]
        // so handles checking if cards are a flush 
        // suited cards will be of type ['D', 13]
        let cardscopy = cards.slice();
        let suited = [];
        for (let key in suitCounts) {
            if (suitCounts[key] >= 5) {
                for (let c of cardscopy) {
                    if (c[0] == key) {
                        // suited will be all cards of same suit (atleast 5)
                        suited.push(c);
                    }
                }
            } 
        }
        let suited_copy = suited.slice();
        // suited is still in descending order by card rank
        if (suited.length == 0) {
            // not a flush
            return [false, '', false];
        } else {
            if (this.isStraight(suited)[0]) {
                // straightFlush
                return [true, suited_copy, true]
            } else {
                // straight but not a flush
                return [false, suited_copy, true]
            }
        }
    }

    isStraight(cards) {       
        let cardscopy= cards.slice()
        // in case of a low ace straight
        if (cardscopy[0][1] == 14) {
            cardscopy.push([cardscopy[0][0], 1]);
        }
        // for (let c of cardscopy) {
        //     console.log(c[1]);
        // }

        // checks if there is a straight out of cards ordered by descending rank value
        for (let i = 0; i < cardscopy.length - 4; i++) {
            let straightCount = 0;
            for (let j = 0; j < cardscopy.slice(i).length - 1; j++) {
                if (cardscopy[i + j][1] - cardscopy[i + j + 1][1] == 1) {
                    straightCount++;
                    if (straightCount == 4) {
                        // returns boolean and value of highest card in straight for tiebreaking
                        return [true, cardscopy[i][1]];
                    } 
                } else if (cardscopy[i + j][1] - cardscopy[i + j + 1][1] == 0) {
                        // if pair
                } else {
                        break
                    }
                }
        }
        
        return [false, ''];
    }

    isFour(cards, rankCounts) {
        for (let key in rankCounts) {
            if (rankCounts[key] == 4) {
                // cannot be two 4 kinds of same rank so don't have to worry about fifth card tiebreaker
                return [true, key]
            }
        }
        return [false, '']
    }

    isThreeTwoOne(cards, rankCounts) {
        let cardscopy = cards.slice();
        let trips = [];
        let dubs = [];
        let fh = false;
        let threeKind = false;
        let twopair = false;
        let pair = false;
        let highcard = false;
        // only because cards are entered in descdending order we don't have to worry about second 3 of kind
        for (let key in rankCounts) {
            if (rankCounts[key] == 3) {
                trips.push(parseInt(key));
                // removes trips from cards
                cardscopy = cardscopy.filter(card => card[1] !== parseInt(key));
            } else if (rankCounts[key] == 2) {
                // dubs will also be in descending order
                dubs.push(parseInt(key));
                // removes dubs from cards
                cardscopy = cardscopy.filter(card => card[1] !== parseInt(key));
            }
        }
        trips = trips.sort((a, b) => b - a);
        dubs = dubs.sort((a, b) => b - a);

        if (trips.length > 0) {
            if (dubs.length > 0) {
                // full house
                fh = [trips[0], dubs[0]];
            } else if (trips.length == 2) {
                fh = [trips[0], trips[1]];
            } else {
                // 3 of a kind
                // include highest two cards for tiebreaking
                // console.log(cardscopy)
                // console.log(cardscopy[0])
                // console.log(cardscopy[1])
                threeKind = [trips[0], cardscopy[0][1], cardscopy[1][1]];
            }
        } else if (dubs.length > 1) {
            // two pair
            // again, dubs will be descending rank so don't have to worry about potential third pair
            twopair = [dubs[0], dubs[1], cardscopy[0][1]];     
        } else if (dubs.length == 1) {
            // single pair
            pair = [dubs[0], cardscopy[0][1], cardscopy[1][1], cardscopy[2][1]]
        } else {
            // high card
            highcard = [];
            for (let c of cardscopy.slice(0, 5)) {
                highcard.push(c[1]);
            }
        }
        return {
            'FH' : fh,
            '3K' : threeKind,
            '2P' : twopair,
            'P' : pair,
            'HC' : highcard
        }
    }
   

    async showEndDisplay(playerArr) {
        for (let j = 0; j < 5; j++) {
            // display board
            Frontend.changeImage('ec' + (j + 1).toString(), Utils.translateCard(this.dealtCards.board[j]));
        }
        
        for (let i = 0; i < playerArr.length; i++) {
            // update player images
            Frontend.changeImage("ranked" + (i + 1).toString(), playerArr[i].imgURL)
            // display player cards
            Frontend.changeImage("r" + (i + 1).toString() + "c1", Utils.translateCard(playerArr[i].card1))
            Frontend.changeImage("r" + (i + 1).toString() + "c2", Utils.translateCard(playerArr[i].card2))

            if (playerArr[i].inHand == false) {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p1", "darkgray");
            } else {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p1", "blue");
            }
            Frontend.changeTextContent("r" + (i + 1).toString() + "p1", resultMessages[playerArr[i].result])
            
            if (playerArr[i].wonThisHand == 0) {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p2", "darkgray");
                Frontend.changeTextContent("r" + (i + 1).toString() + "p2", playerArr[i].wonThisHand);
            } else if (playerArr[i].wonThisHand < 0) {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p2", "red");
                Frontend.changeTextContent("r" + (i + 1).toString() + "p2", playerArr[i].wonThisHand);
            } else {
                Frontend.changeParagraphColor("r" + (i + 1).toString() + "p2", "rgb(57, 255, 57)");
                Frontend.changeTextContent("r" + (i + 1).toString() + "p2", '+' + playerArr[i].wonThisHand);
            }
            Frontend.changeTextContent("r" + (i + 1).toString() + "p3", '$' + playerArr[i].money.toString());


        }

        for (let i = 0 ; i < players.length; i++) {
            if (i >= playerArr.length) {
                Frontend.hideDiv('r' + (i + 1).toString());
            } else {
                Frontend.showDiv('r' + (i + 1).toString(), "grid");
            }
        }

        Frontend.showDiv('endDisplay');
        await waitEndAction();
        document.getElementById('endDisplay').style.display = 'none';

    }

    actionHandler(activePlayer) {
        if (this.callAmount == activePlayer.betThisRound) {
            Frontend.changeTextContent('checkcallDisplay', 'Check');
        } else if (this.callAmount < activePlayer.money + activePlayer.betThisRound) {
            Frontend.changeTextContent('checkcallDisplay', 'Call: ' + (this.callAmount - activePlayer.betThisRound));
        } else if (this.callAmount == activePlayer.money + activePlayer.betThisRound) {
            Frontend.changeTextContent('checkcallDisplay', 'Call: All In ' + (activePlayer.money + activePlayer.betThisRound));
        } else {
            Frontend.changeTextContent('checkcallDisplay', 'Partial Call: All In ' + (activePlayer.money + activePlayer.betThisRound));
        }
        if (this.callAmount >= activePlayer.money + activePlayer.betThisRound) {
            // call cannot be met
            Frontend.hideDiv('raise');
            Frontend.showDiv('allIn');
            Frontend.changeTextContent('allInDisplay', 'All In: ' + (activePlayer.money + activePlayer.betThisRound));

        } else if (this.callAmount == activePlayer.money + activePlayer.betThisRound) {
            Frontend.hideDiv('raise');
            Frontend.showDiv('allIn');
            Frontend.changeTextContent('allInDisplay', 'All In: ' + (activePlayer.money + activePlayer.betThisRound));
        } else {
            // call can be met
            Frontend.showDiv('raise');
            Frontend.hideDiv('allIn');
        }
    }

    updateFrontend(player, currentPots=this.pot, calls=this.callAmount, total=0) {
        Frontend.changeTextContent('potAmount', currentPots)
        Frontend.changeTextContent('roundInfoParagraph', calls)
        Frontend.changeTextContent(player.id + 'p1', player.money)
        Frontend.changeTextContent(player.id + 'p2', player.betThisRound);
        Frontend.changeTextContent('total', total);
    }

}


class Orbit {
    constructor() {
        this.activePlayers = players.filter(player => player.active === true)
    }
    async initialize() {
        Frontend.hideDiv("allIn");
        Frontend.showDiv("raise");
        let prevLittle = players.length - 1;
        while (this.activePlayers.length > 1) {
            let little = (prevLittle + 1) % players.length;
            let activeLittle = 0;
            while (!players[little].active) {
                little = (little + 1) % players.length;
            }
            for (let j = 0; j < this.activePlayers.length; j++) {
                if (this.activePlayers[j].id == players[little].id) {
                    activeLittle = j;
                    break;
                }
            }
            prevLittle = little;
            let hand = new Hand(activeLittle);
            await hand.initialize();
            this.activePlayers = players.filter(player => player.active === true);
        }
    
        if (this.activePlayers[0].id == "p1") {
            Frontend.changeTextContent("winner-name", "You");
            Frontend.changeImage("winnerImg", localStorage.getItem("charSelect"));
        }
        else {
            Frontend.changeTextContent("winner-name", this.activePlayers[0].name);
            Frontend.changeImage("winnerImg", "images/player" + this.activePlayers[0].id[1] + ".png");
        }
        
        Frontend.showDiv("winnerContainer")
    }

}

// want to initialize UI, then automatically(?) prompt Hand to handle a bettinground
// within Hand, we want to deal cards to active players first, then start the first
// bettinground with input 5 cards facedown. Then iterate through bettingroudn with flop, turn
// river. Then if players are stil "in" round show cards and calculate winner 



function main() {
    startGame();
}

function startGame() {
    Frontend.hideDiv("winnerContainer");
    Frontend.hideDiv("endDisplay");
    p1 = new Player(false, username, 'p1', localStorage.getItem("charSelect"), money=200);
    p2 = new Player(true, "Stephen", 'p2', 'images/player2.png', money=200);
    p3 = new Player(true, "Alyssa", 'p3', 'images/player3.png', money=200);
    p4 = new Player(true, "Eric", 'p4', 'images/player4.png', money=200);
    p5 = new Player(true, "Alex", 'p5', 'images/player5.png', money=200);

    players = [p1, p3, p2, p5, p4];
    for (let p of players) {
        Frontend.showDiv(p.id);
    }
    let orbit = new Orbit;
    orbit.initialize();
}

class Actions extends Hand {

    static raiseAction() {
        if (Number(document.getElementById("myTextbox").value) <= (playerInTurn.money - callAmt + playerInTurn.betThisRound) && Number(document.getElementById("myTextbox").value) > 0) {
            console.log("raise action");
            userResponse = ['raise', Number(document.getElementById("myTextbox").value)];
            setUserAction();
        }

    }

    static checkcallAction() {
        console.log("check call action");
        userResponse = ['checkcall'];
        setUserAction();        
    }

    static allInAction() {
        console.log("all in action");
        userResponse = ['allIn', 'call'];
        setUserAction();
    }

    static foldAction() {
        console.log("fold action");
        userResponse = ['fold'];
        setUserAction();
    }

}

class Utils {
    static translateCard(card){
        // card is a set of string vals, ex ['H', '4']
        // returns path of image representing card
        // exception is 'back'
        if (card == 'back') {
            return '/images/cards/back.png';
        } else return cardDict[card.join("")];
    }
}

class Test {
    constructor() {

        // this.testStraight();
    }
    static testStraight(testCards){
        let cards = [['D', 12], ['C', 10], ['H', 10], ['S', 9], ['S', 8], ['D', 7], ['D', 6]];
        let cards1 = [['D', 14], ['C', 5], ['H', 4], ['S', 4], ['S', 3], ['D', 2], ['D', 2]];
        let cards2 = [['D', 8], ['H', 7], ['D', 7], ['S', 7], ['D', 6], ['S', 5], ['C', 4]];
    
        let h = new Hand();

    }
    static testEvalCards(hc1, hc2, hc3, hc4, hc5, pc1, pc2){
        let h = new Hand();
        let p = p2;
        h.card1 = hc1;
        h.card2 = hc2;
        h.card3 = hc3;
        h.card4 = hc4;
        h.card5 = hc5;
        p.card1 = pc1;
        p.card2 = pc2;
        h.evaluateHand([p]);
    }
    static testGivenBoard(board) {
        let h = new Hand(0, board);
        h.initialize();
    }
    
}

function test() {
    p2 = new Player(false, "Stephen", 'p2', 'images/player2.png');
    p3 = new Player(false, "Alyssa", 'p3', 'images/player3.png');
    p1 = new Player(false, username, 'p1', charSelect);
    p4 = new Player(false, "Eric", 'p4', 'images/player4.png');
    p5 = new Player(false, "Alex", 'p5', 'images/player5.png');

    players = [p1, p3, p2, p5, p4];

    p2.money = 300;
    p3.money = 400;
    p1.money = 500;
    p4.money = 200;
    p5.money = 100;

    // let t = new Test;
    // Test.testEvalCards('DA', 'DK', 'CA', 'C2', 'S2', 'S5', 'H5')
    // Test.testEvalCards('DA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10')
    // // above is a straightflush so returns [true, array, true]
    // Test.testEvalCards('SA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10')
    // // above is a straight but not a flush, so returns [false, '', false]
    // Test.testStraight([['S', 14], ['D', 13], ['D', 12], ['D', 11], ['D', 10], ['C', 4], ['S', 3]]);
    // // above is he same set of cards, but is a straight so the isStraight function returns [true, 14]


    // Test.testEvalCards('DA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10');
    // Test.testEvalCards('DA', 'DK', 'CA', 'SA', 'C4', 'S3', 'D10');
    // Test.testEvalCards('DA', 'DK', 'CA', 'SA', 'C4', 'S3', 'D3');
    // Test.testEvalCards('SJ', 'C8', 'C5', 'S5', 'H4', 'S3', 'D2');
    // Test.testEvalCards('SA', 'DK', 'DQ', 'DJ', 'C4', 'S3', 'D10')
    // Test.testEvalCards('SJ', 'C8', 'C5', 'SA', 'H4', 'S3', 'D2');
    // Test.testEvalCards('D3', 'DA', 'C10', 'D8', 'D13', 'H7', 'D12');

    // random junk test case
    // Test.testGivenBoard([['S', '3'], ['C', '7'], ['D', '9'], ['H', '2'], ['H', 'J']]);

    // RF dealt
    // Test.testGivenBoard([['S', 'A'], ['S', 'K'], ['S', 'Q'], ['S', 'J'], ['S', '10']]);
    // SF dealt
    // Test.testGivenBoard([['S', '9'], ['S', 'K'], ['S', 'Q'], ['S', 'J'], ['S', '10']]);
    // 4K dealt
    // Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['H', 'A'], ['S', 'J'], ['C', 'A']]);
    // FH dealt
    // Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['C', 'A'], ['S', 'Q'], ['H', 'Q']]);
    // F dealt
    // Test.testGivenBoard([['S', '2'], ['S', '4'], ['S', '8'], ['S', 'J'], ['S', '5']]);
    // S dealt
    // Test.testGivenBoard([['H', '9'], ['S', 'K'], ['C', 'Q'], ['D', 'J'], ['S', '10']]);
    // 3K dealt
    // Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['C', 'A'], ['S', 'Q'], ['H', '9']]);
    // 2P dealt
    Test.testGivenBoard([['S', 'A'], ['D', 'A'], ['C', '9'], ['S', '2'], ['H', '9']]);
    // P dealt
    // Test.testGivenBoard([['S', '3'], ['D', 'J'], ['C', '9'], ['S', '2'], ['H', '9']]);
    // HC dealt
    // Test.testGivenBoard([['S', 'J'], ['D', '2'], ['C', '3'], ['S', '4'], ['H', '10']]);
    // Test.testGivenBoard([['S', '4'], ['D', '5'], ['C', '8'], ['S', '6'], ['H', '7']]);
}
// test();
main();
