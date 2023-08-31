function defang(address) {
    let output = "";
    for(let i = 0; i < address.length; i++){
        if(address[i] === "."){
            output += ("[.]");
        }
        else{
            output += address[i];
        }
    }
    return output;
    
};

let address = "1.1.1.1"
console.log(defang(address));

address = "255.100.50.0"
console.log(defang(address));

address = "10.0.0.1"
console.log(defang(address));

address = "172.16.254.1"
console.log(defang(address));

address = "0.0.0.0"
console.log(defang(address));