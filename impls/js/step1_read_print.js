const readline=require('readline');
const reader=require('./reader');
const printer=require('./printer');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.setPrompt('user> ');
rl.prompt();

function READ(str){
  return reader.read_str(str);
}

function EVAL(ast,env){
  return ast;
}

function PRINT(exp){
  return printer.pr_str(exp);
}

function rep(str){
  try{
  return PRINT(EVAL(READ(str),""));
  }
  catch(err) {
    console.log(err);
  }
}

rl.on('line', (ans) =>{
  console.log(rep(ans));
  rl.prompt();
})
