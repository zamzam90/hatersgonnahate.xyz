//print to console
function hello()
{
  console.log("Hello world!");
}
//make an annoying alertbox xD
function HELLO()
{
  alert("HELLO WORLD!!");
}
//reversing a word, maybe..
function reverse()
{
  var haettuTeksti = document.getElementById('reversedwrd').value;
  var sananPituus = haettuTeksti.length;
  var uusiSana = '';
  for(var i = sananPituus-1; i >= 0; i--)
  {
    uusiSana = uusiSana + haettuTeksti[i];
  }
  document.getElementById('result').innerHTML = uusiSana;
}
