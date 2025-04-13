const oceanGirlQuestions = [
    {
      question: "Which ocean is the largest on Earth?",
      answer: "Pacific"
    },
    {
      question: "What do you call a group of jellyfish?",
      answer: "Smack"
    },
    {
      question: "Which Disney princess lives under the sea?",
      answer: "Ariel"
    },
    {
      question: "What color is a starfish's blood?",
      answer: "It doesn't have blood"
    },
    {
      question: "Which ocean animal is known as the unicorn of the sea?",
      answer: "Narwhal"
    }
  ];
  

  const tidePick = Math.floor(Math.random() * oceanGirlQuestions.length);
  const treasure = oceanGirlQuestions[tidePick];
  

  const mermaidAnswer = prompt("🌊💬 " + treasure.question);
  

  alert("You answered " + mermaidAnswer + ". The correct answer was " + treasure.answer + ".");
  