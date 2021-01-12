function pr_str(malType){
  if (Array.isArray(malType)) {
    return ["(", ...malType.map(el=> pr_str(el)).join(" "),")"].join("");
  } else return malType.val.toString();
}

exports.pr_str=pr_str;

