/// Quiz Question 


var quesArr = [
    {
      num: 1,
      question: "The 17th Asian Games were held in",
      options: {
        a: "2014",
        b: "2018",
        c: "2016",
        d: "2015",
      },
      correctAns: "2014",
    },
    {
      num: 2,
      question: "WWW stands for",
      options: {
        a: "World Whole Web ",
        b: "Wide World Web",
        c: "Web World Wide",
        d: "World Wide Web",
      },
      correctAns: "World Wide Web",
    },
    {
      num: 3,
      question: "A light sensitive device that converts drawing, printed text or other images into digital form is",
      options: {
        a: " Keyboard",
        b: "Scanner",
        c: "OMR",
        d: "None of these",
      },
      correctAns: "Scanner",
    },
    {
      num: 4,
      question: "A collection of system programs that controls and co-ordinates the overall operations of a computer system is called",
      options: {
        a: "System software",
        b: "Operating system",
        c: "Utility program",
        d: "Device driver",
      },
      correctAns: "Operating system",
    },
    {
      num: 5,
      question: "Which technology is used in compact disks",
      options: {
        a: "Mechanical",
        b: "Electrical",
        c: "Electro Magnetic",
        d: "Laser",
      },
      correctAns: "Laser",
    },
  ];
  
  let interval;
  let counterend = 0;
  let sec = document.querySelector("#sec")
  let minutues = document.querySelector("#minutues")
  
  function starting(timepara, minpara) {
    ///Timer Function
  
  
  
  
    interval = setInterval(() => {
  
  
  
      sec.innerHTML = timepara;
      timepara--;
      minutues.innerHTML = minpara
      if (timepara === 0) {
        timepara = 60
        sec.innerHTML = timepara;
  
        minpara--
        minutues.innerHTML = minpara;
        counterend++
        console.log(counterend)
      }
  
  
      if (counterend === 3) {
  
        let clear = clearInterval(interval)
        sec.innerHTML = "00"
        minutues.innerHTML = "00"
        alert("Your Time Out Try again");
        location.href = "starts.html";
  
      }
  
  
    }, 1000)
  
  }
  
  
  
  
  let nextbtn = document.querySelector("#nextbtn");
  
  
  
  
  let showQueston = (e) => {
  
  
    ///NEXt BUTOON DISABLED
  
    nextbtn.disabled = true
  
  
    //question
    let Ques1 = document.querySelector("#Ques1");
    Ques1.innerHTML = `Q${quesArr[e].num} ${quesArr[e].question}`;
    //option
  
    let ans1 = document.querySelectorAll(".ans1")
    ans1[0].innerHTML = quesArr[e].options.a
    ans1[1].innerHTML = quesArr[e].options.b
    ans1[2].innerHTML = quesArr[e].options.c
    ans1[3].innerHTML = quesArr[e].options.d
  
  
  
  
  }
  
  
  
  let coounter = 0;
  
  
  ///NEXT QUESTION BUTTON
  
  let nextQues = () => {
  
    if (coounter === 3) {
  
  
      nextbtn.innerHTML = "Submit"
  
    }
    if (coounter === 4) {
      valdation(coounter)
  
      
  
      nextbtn.setAttribute("data-toggle", "modal")
      nextbtn.setAttribute("data-target", "#resultModal")
  
  
  
      ////RESULT
  
      let Correct = document.querySelector("#Correct");
      let wrong = document.querySelector("#wrong")
      let score = document.querySelector("#score")
      let percent = document.querySelector("#percent")
      let calpercent = (scorecount / 50) * 100;
  
      Correct.innerHTML = right
      wrong.innerHTML = wrongcount
      score.innerHTML = scorecount
      percent.innerHTML = `${calpercent}%`
  
      let clear = clearInterval(interval)
  
  
  
    }
    else {
      valdation(coounter)
      coounter++
      showQueston(coounter)
      ReomoveactiveClass()
      let quesnumber = document.querySelector("#quesnumber")
      quesnumber.innerHTML = `${quesArr[coounter].num}  out of 5 Question`
  
  
  
    }
  
  }
  
  
  
  ///active class
  
  
  
  let activeClass = (e) => {
    ReomoveactiveClass()
    e.classList.add("active")
  
    ///NEXt BUTOON DISABLED
  
    nextbtn.disabled = false
  
  }
  
  //Remove active Class
  
  let ReomoveactiveClass = () => {
  
    let acitve = document.querySelectorAll(".ans1")
    for (i = 0; i < acitve.length; i++) {
      acitve[i].classList.remove("active")
    }
  
  }
  
  var scorecount = 0;
  var right = 0;
  var wrongcount = 0;
  
  let valdation = (e) => {
    let acitve = document.getElementsByClassName("active");
  
  
    if (acitve[0].innerHTML === quesArr[e].correctAns) {
      scorecount += 10
  
      right++
  
    }
    else {
      wrongcount++
    }
  
  }
  
  