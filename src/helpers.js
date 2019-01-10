export const multipleIncludes = (phrase, ...strings) => {
   if(typeof(phrase) !== "string") return false;

   for(let i = 0; i < strings.length; i++){
      if(typeof(strings[i]) !== "string") continue;
      if(phrase.includes(strings[i])) return true;
   }
   
   return false;
}