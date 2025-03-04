import React from "react";


//Fonction Division 
export default function Division(a, b) {
    if (b === 0) {
        return "Division par zéro impossible";
    }
    return a / b;
}