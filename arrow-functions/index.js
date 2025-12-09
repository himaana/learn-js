/*
    Replace Function Expression with arrow functions in the code below:
    function ask(question, yes, no) {
        if (confir(question)) yes();
        else no();
    }
    
    ask(
        "Do you agree?",
        function() {alert("You agreed."); },
        function() {alert("You canceled the execution."); }
    )
*/
function ask(question, yes, no) {
  if (confir(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
