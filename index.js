let box = document.getElementsByClassName("box");
                let choice = document.getElementsByName("choice");
                let turn = document.getElementById("turn");
                let asc = document.getElementById("asc");
                let ascore = 0;
                let bscore = 0;
                let bsc = document.getElementById("bsc");
                let finish = document.getElementById("finish");
                let show = document.getElementById("show");
                let c;
                let update = 0;
                let m1 = [];
                let m2 = [];
                let m3 = [];
                let m4 = [];

                finish.addEventListener("click",()=>{
                    let win;
                    if(ascore>bscore){
                        show.innerHTML=`<b>PLAYER A HAS WON THE GAME<br><img src="https://i.pinimg.com/originals/87/6f/ab/876fab6207f93c293ae77a70f188c402.gif" width=200px height=150px></b>`;
                    }
                    else if(bscore>ascore){
                        show.innerHTML=`<b>PLAYER B HAS WON THE GAME<br><img src="https://i.pinimg.com/originals/87/6f/ab/876fab6207f93c293ae77a70f188c402.gif" width=200px height=150px></b>`;
                    }
                    else{
                        show.innerHTML=`<b> BOTH PLAYED VERY WELL SO THERE IS TIE</b>`;
                    }
                    

                })
                box = Array.from(box);
                function check(t) {

                    for (j = 0; j <= 30; j = j + 6) {
                        for (let i = 0 + j; i <= 3 + j; i++) {
                            if (box[i].innerText == "S" && box[i + 1].innerText == "O" && box[i + 2].innerText == "S") {
                                let flag = 0;
                                for (let k = 0; k < m1.length; k++) {
                                    if (m1[k] == i) { flag = 1; break; };
                                }
                                if (flag == 0) {
                                    if (t == "A") {
                                        ascore = ascore + 1;
                                        asc.innerText = ascore;


                                    }
                                    else {
                                        bscore = bscore + 1;
                                        bsc.innerText = bscore;

                                    }
                                    m1.unshift(i);
                                    update=1;
                                }

                            }
                        }
                    }


                    for (let i = 0; i <= 23; i++) {
                        if (box[i].innerText == "S" && box[i + 6].innerText == "O" && box[i + 12].innerText == "S") {

                            let flag = 0;
                            for (let k = 0; k < m2.length; k++) {
                                if (m2[k] == i) { flag = 1; break; };
                            }
                            if (flag == 0) {
                                if (t == "A") {
                                    ascore = ascore + 1;
                                    asc.innerText = ascore;


                                }
                                else {
                                    bscore = bscore + 1;
                                    bsc.innerText = bscore;

                                }
                                m2.unshift(i);
                                update=1;
                            }

                        }
                    }
                    for (let j = 0; j <= 18; j = j + 6) {
                        for (let i = 0 + j; i <= 3 + j; i++) {
                            if (box[i].innerText == "S" && box[i + 7].innerText == "O" && box[i + 14].innerText == "S") {

                                let flag = 0;
                                for (let k = 0; k < m3.length; k++) {
                                    if (m3[k] == i) { flag = 1; break; };
                                }
                                if (flag == 0) {
                                    if (t == "A") {
                                        ascore = ascore + 1;
                                        asc.innerText = ascore;


                                    }
                                    else {
                                        bscore = bscore + 1;
                                        bsc.innerText = bscore;

                                    }
                                    m3.unshift(i);
                                    update=1;
                                }
                            }
                        }
                        for (let j = 0; j <= 18; j = j + 6) {
                            for (let i = 5 + j; i >= 2 + j; i--) {
                                if (box[i].innerText == "S" && box[i + 5].innerText == "O" && box[i + 10].innerText == "S") {

                                    let flag = 0;
                                    for (let k = 0; k < m4.length; k++) {
                                        if (m4[k] == i) { flag = 1; break; };
                                    }
                                    if (flag == 0) {
                                        if (t == "A") {
                                            ascore = ascore + 1;
                                            asc.innerText = ascore;


                                        }
                                        else {
                                            bscore = bscore + 1;
                                            bsc.innerText = bscore;

                                        }
                                        m4.unshift(i);
                                        update=1;
                                    }
                                }
                            }
                        }
                    }
                }






                for (let i = 0; i < box.length; i++) {
                    box[i].addEventListener("click", () => {
                        for (let j = 0; j < choice.length; j++) {
                            if (choice[j].checked) {
                                c = choice[j].value;
                            }
                        }
                       
                        if (box[i].innerText == "") {
                            box[i].innerText = c;
                            update=0;
                            check(turn.innerText);
                            if (update == 0) {
                                if (turn.innerText == "A") {
                                    turn.innerText = "B";
                                }
                                else {
                                    turn.innerText = "A";
                                }
                            }
                        }
                    })
                }