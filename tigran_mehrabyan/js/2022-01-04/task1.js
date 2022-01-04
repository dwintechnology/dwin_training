// celsius to fahrenheit

function Converter(degree, char){
    if(char == "C"){
        return (degree - 32) * 5 / 9;
    }else if(char == "F"){
        return (degree * 9 / 5) + 32;
    }else{
        return "something wrong"
    }
}