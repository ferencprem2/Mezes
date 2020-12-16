change();

function change(){
    let num = document.getElementById("szam").value;
document.getElementById("liszt").innerHTML =(num*5).toFixed(2) + "Liszt dkg: ";
document.getElementById("cukor").innerHTML =(num*1.67).toFixed(2) + "Cukor dkg: ";
document.getElementById("szoda").innerHTML =(num*0.17).toFixed(2) + "Szóda bikarbóna kk: ";
document.getElementById("fusz").innerHTML =(num*0.08).toFixed(2) + "Fűszer kk: ";
document.getElementById("toj").innerHTML = (num*0.17).toFixed(2) + "db Tojás";
document.getElementById("mez").innerHTML = (num*1.67).toFixed(2) + "Méz dkg:";
document.getElementById("vaj").innerHTML = (num*0.08).toFixed(2) + "Vaj ek:";
document.getElementById("tojf").innerHTML =(num*0.08).toFixed(2) + "Tojás db:";

}

