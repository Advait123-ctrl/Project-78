var names1= ["K Srinivas","mother"];
var images1= ["man.png","woman.png"];
var i=0;
function Change() {
    print("In Change");
document.getElementById("names").innerHTML= names1[i];
document.getElementById("images").src= images1[i];
i++;
if(i==2) i=0;
}