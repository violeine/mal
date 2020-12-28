const readline=require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.setPrompt('user> ');
rl.prompt();

function READ(str){
  return str;
}

function EVAL(ast,env){
  return ast;
}

function PRINT(exp){
  return exp
}

function rep(str){
  return PRINT(EVAL(READ(str),""));
}

rl.on('line', (ans) =>{
  console.log(rep(ans));
  rl.prompt();
})
