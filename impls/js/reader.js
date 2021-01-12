function Reader(token){
  let pos=0
  return {
    next: function(){
      return token[pos++];
    },
    peak: function (){
      return token[pos];
    },
    token
  }
}

function read_str(str){
  return read_form(tokenize(str));
}

function tokenize(str){
  const re = new RegExp(/[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)/g);
  return Reader(str.match(re).map(el=> {
    // return el
    return el.replace(/\s|,/g,'');
  }))
}

// console.log(tokenize(`"abc (with parens)"`).token);

function read_form(reader){
  if (reader.peak() == "(") {
    return read_list(reader);
  } else return read_atom(reader);
}

function read_list(reader){
    let result=[];
    reader.next(); // skip the "("
    while (reader.peak()!=")")  {
      if (reader.peak()=='') throw new Error("expected ) but got EOF")
      result.push(read_form(reader));
  }
  reader.next(); // skip the ")" after
  return result;
}

function read_atom(reader){
  const val=reader.peak();

  if (!isNaN(reader.next())) { // inc the pos
    return {val, type:"num"}
  } else {
    return {val, type:"sym"}
  }
}

exports.read_str=read_str;
