window.onload = function(){

    document.getElementById("EncodedMessage").style.display = "none";            
    
    let user = "";
    let singChar;
    let SecondMessage;
    let uniVal;
    Number(uniVal);
    
    document.getElementById("ENCODE").onclick = function(){
        user = document.getElementById("TextFieldEncode").value;

        let userLength = user.length;

        for (let i = 0; i<userLength; i++){
            let uniVal = user.codePointAt(i);
            uniVal = uniVal+16;
            singChar = String.fromCharCode(uniVal)
            console.log(singChar)
            SecondMessage = user.substring(0,i)+singChar+user.substring(i+1)
            user = SecondMessage;
            console.log(SecondMessage);

            
        }
    }
    document.getElementById("ENCODE").onclick = function(){
        document.getElementById("EncodedMessage").style.display = "block";

        console.log("123123123")
    }


}

        


