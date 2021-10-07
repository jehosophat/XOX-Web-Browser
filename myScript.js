function kazanan(){
	var kutu1,kutu2,kutu3,kutu4,kutu5,kutu6,kutu7,kutu8,kutu9;
	kutu1 = document.getElementById("kutu1");
	kutu2 = document.getElementById("kutu2");
	kutu3 = document.getElementById("kutu3");
	kutu4 = document.getElementById("kutu4");
	kutu5 = document.getElementById("kutu5");
	kutu6 = document.getElementById("kutu6");
	kutu7 = document.getElementById("kutu7");
	kutu8 = document.getElementById("kutu8");
	kutu9 = document.getElementById("kutu9");
	//her bir kutu değişken olarak tutuldu
	if(kutu1.innerHTML !== "" && kutu1.innerHTML === kutu2.innerHTML && kutu1.innerHTML === kutu3.innerHTML){
		return true;
	}
	if (kutu4.innerHTML !== "" && kutu4.innerHTML === kutu5.innerHTML && kutu4.innerHTML === kutu6.innerHTML){
		return true;
	}
	if (kutu7.innerHTML !== "" && kutu7.innerHTML === kutu8.innerHTML && kutu7.innerHTML === kutu9.innerHTML){
		return true;
	}
	//üst 3 kontrol, yatayda kazanma durumu var mı kontrolü
	if(kutu1.innerHTML !== "" && kutu1.innerHTML === kutu4.innerHTML && kutu1.innerHTML === kutu7.innerHTML){
		return true;
	}
	if(kutu2.innerHTML !== "" && kutu2.innerHTML === kutu5.innerHTML && kutu2.innerHTML === kutu8.innerHTML){
		return true;
	}
	if(kutu3.innerHTML !== "" && kutu3.innerHTML === kutu6.innerHTML && kutu3.innerHTML === kutu9.innerHTML){
		return true;
	}
	//üst 3 kontrol dikeyde kazanma durumu var mı konrtolü
	if(kutu1.innerHTML !== "" && kutu1.innerHTML === kutu5.innerHTML && kutu1.innerHTML === kutu9.innerHTML){
		return true;
	}
	if(kutu3.innerHTML !== "" && kutu3.innerHTML === kutu5.innerHTML && kutu3.innerHTML === kutu7.innerHTML){
		return true;
	}
	//çaprazda kazanma durumu var mı kontrolü
	return false;
}	

var yeniden_baslat = document.getElementById("yeniden_baslat");
var sira = 1;  //0 -> O, 1-> X'i temsil ediyor
var kutular = document.getElementsByClassName("kutu");
var kazandiMi = false;
var durumBolumu = document.getElementById("durumBilgisi");

for(var i = 0;i<9;i++){
	kutular[i].onclick = function(){
		if(this.innerHTML !== "X" && this.innerHTML !== "O" && kazandiMi==false){
			if(sira%2 === 1){
				this.innerHTML = "X";
				durumBolumu.innerHTML = "Sıra : O";
				kazandiMi = kazanan();
				if(kazandiMi){
					durumBolumu.innerHTML = "X Kazandı!";
					
				}
			}
			else{
				this.innerHTML = "O";
				durumBolumu.innerHTML = "Sıra : X";
				kazandiMi = kazanan();
				if(kazandiMi){
					durumBolumu.innerHTML = "O Kazandı!";
					
				}
			}
			sira++;
			if(sira == 10 && !kazandiMi){
				durumBolumu.innerHTML="Berabere!";
			}		
		}
	}
}

yeniden_baslat.onclick = function(){
	var kutu1,kutu2,kutu3,kutu4,kutu5,kutu6,kutu7,kutu8,kutu9;
	kutu1 = document.getElementById("kutu1");
	kutu2 = document.getElementById("kutu2");
	kutu3 = document.getElementById("kutu3");
	kutu4 = document.getElementById("kutu4");
	kutu5 = document.getElementById("kutu5");
	kutu6 = document.getElementById("kutu6");
	kutu7 = document.getElementById("kutu7");
	kutu8 = document.getElementById("kutu8");
	kutu9 = document.getElementById("kutu9");

	kutu1.innerHTML = "";
	kutu2.innerHTML = "";
	kutu3.innerHTML = "";
	kutu4.innerHTML = "";
	kutu5.innerHTML = "";
	kutu6.innerHTML = "";
	kutu7.innerHTML = "";
	kutu8.innerHTML = "";
	kutu9.innerHTML = "";

	sira = 1;
	kazandiMi = false;
	durumBolumu.innerHTML = "Sıra : X";
};
