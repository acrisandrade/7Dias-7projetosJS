function GerarQrCode(){
    var inputUser = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=';
    var conteudoQR = GoogleChartAPI + inputUser;
   if(inputUser == ''){
    window.alert("Insira uma url")    
}else{
    document.querySelector('#QRCodeImage').src = conteudoQR;

}

}



