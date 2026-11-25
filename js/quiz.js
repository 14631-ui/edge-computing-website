// JavaScript for the interactive quiz and Canvas diagram.

// Store the correct answers in an array.
var correctAnswers = ["edge", "latency", "edge"];\n\nfunction quizText(key) {\n  return window.siteTranslate ? window.siteTranslate(key) : key;\n}

// Find the quiz form and result area in the HTML document.
var quizForm = document.querySelector("#quiz-form");
var quizResult = document.querySelector("#quiz-result");

// Listen for the form submission.
quizForm.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page.
  event.preventDefault();

  var score = 0;
  var numberOfQuestions = correctAnswers.length;

  // Make sure all three questions have been answered
  if (
    !document.querySelector('input[name="q1"]:checked') ||
    !document.querySelector('input[name="q2"]:checked') ||
    !document.querySelector('input[name="q3"]:checked')
  ) {
    alert(quizText("Please answer all three questions before checking your score."));
    return;
  }

  // Check each question using a for loop.
  for (var i = 1; i <= numberOfQuestions; i++) {
    var questionName = "q" + i;

    var selectedAnswer = document.querySelector(
      'input[name="' + questionName + '"]:checked',
    );

    // Only compare an answer if an option was selected.
    if (selectedAnswer !== null) {
      if (selectedAnswer.value === correctAnswers[i - 1]) {
        score = score + 1;
      }
    }
  }

  // Display a message based on the student's score.
  if (score === numberOfQuestions) {
    quizResult.textContent =
      quizText("Excellent! You scored") + " " + score + " " + quizText("out of") + " " + numberOfQuestions + ".";
  } else if (score > 0) {
    quizResult.textContent =
      "You scored " +
      score +
      " out of " +
      numberOfQuestions +
      ". Review the pages and try again.";
  } else {
    quizResult.textContent =
      "You scored 0 out of " +
      numberOfQuestions +
      ". Try the quiz again after reviewing the website.";
  }
});

// Clear the score message when the reset button is used.
quizForm.addEventListener("reset", function () {
  quizResult.dataset.hasResult = "";\n  quizResult.textContent = quizText("Your score will appear here.");
});

// Draw a process diagram using the HTML Canvas 2D drawing tools.

function drawEdgeDiagram() {
  const t = window.siteTranslate || function (value) { return value; };

  var canvas = document.querySelector("#edge-canvas");

  // Check that the Canvas element exists.
  if (canvas === null || !canvas.getContext) {
    return;
  }

  var context = canvas.getContext("2d");

  // Clear the Canvas before drawing.
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the Devices box.
  context.lineWidth = 3;
  context.strokeStyle = "#087e8b";
  context.fillStyle = "#e4f5f3";

  context.fillRect(18, 95, 135, 105);
  context.strokeRect(18, 95, 135, 105);

  // Draw the Edge Computer box.
  context.fillStyle = "#dceafb";

  context.fillRect(190, 95, 140, 105);
  context.strokeRect(190, 95, 140, 105);

  // Draw the Cloud box.
  context.fillStyle = "#f1e9ff";

  context.fillRect(370, 95, 132, 105);
  context.strokeRect(370, 95, 132, 105);

  // Add labels inside the boxes.
  context.fillStyle = "#14243a";
  context.font = "bold 17px Arial";
  context.textAlign = "center";

  context.fillText(t("Devices"), 85, 140);
  context.font = "14px Arial";
  context.fillText(t("Sensors / cameras"), 85, 165);

  context.font = "bold 17px Arial";
  context.fillText(t("Edge"), 260, 140);
  context.font = "14px Arial";
  context.fillText(t("Local processing"), 260, 165);

  context.font = "bold 17px Arial";
  context.fillText(t("Cloud"), 436, 140);
  context.font = "14px Arial";
  context.fillText(t("Storage / analysis"), 436, 165);

  // Draw arrows between the boxes.
  context.strokeStyle = "#52677c";
  context.fillStyle = "#52677c";
  context.lineWidth = 3;

  drawArrow(context, 155, 147, 184, 147);
  drawArrow(context, 332, 147, 364, 147);

  // Add a title and explanatory note.
  context.fillStyle = "#14243a";
  context.font = "bold 19px Arial";

  context.fillText(t("A simplified edge computing system"), 260, 43);

  context.font = "13px Arial";
  context.fillStyle = "#53647a";

  context.fillText(
    t("Some data is processed near where it is created."),
    260,
    245,
  );
}

// Draw a line with an arrowhead from one point to another.
function drawArrow(ctx, startX, startY, endX, endY) {
  var headLength = 9;

  var angle = Math.atan2(endY - startY, endX - startX);

  // Draw the arrow line.
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  // Draw the arrowhead.
  ctx.beginPath();

  ctx.moveTo(endX, endY);

  ctx.lineTo(
    endX - headLength * Math.cos(angle - Math.PI / 6),
    endY - headLength * Math.sin(angle - Math.PI / 6),
  );

  ctx.lineTo(
    endX - headLength * Math.cos(angle + Math.PI / 6),
    endY - headLength * Math.sin(angle + Math.PI / 6),
  );

  ctx.closePath();
  ctx.fill();
}

// Draw the diagram after the page elements have loaded.
drawEdgeDiagram();
\n\ndocument.addEventListener("siteLanguageChanged", function () {\n  drawEdgeDiagram();\n  if (quizResult && !quizResult.dataset.hasResult) quizResult.textContent = quizText("Your score will appear here.");\n});\n