import React, { useState } from "react";
import Soustraction from "./Soustraction";
import Addition from "./Addition";
import Division from "./Division";
import Multiplication from "./Multiplication";


//Fonction pour la Calculatrice et son affichage
export default function Calculatrice() {
    const [input, setInput] = useState("");

    //Base à 0 donc la base devient la valeur qu'on clique
    const Click = (valeur) => {
        setInput((base) => base + valeur);
    };

    //Pour remettre la base à 0
    const Reset = () => {
        setInput("");
    };


    const Calcul = () => {
        try {
            // Sépare l'entrée en nombres et opérateur en utilisant une expression régulière.
            // L'expression /([+\-*/])/ capture les opérateurs tout en conservant les nombres de part et d'autre.
            const elements = input.split(/([+\-*/])/);
    
            // Vérifie que l'entrée est bien sous la forme "nombre opérateur nombre"
            if (elements.length === 3) {
                const nb1 = parseFloat(elements[0]); // Convertit le premier nombre en float
                const operator = elements[1]; // Récupère l'opérateur
                const nb2 = parseFloat(elements[2]); // Convertit le second nombre en float
                let resultat;
    
                // Sélectionne la bonne fonction de calcul en fonction de l'opérateur
                switch (operator) {
                    case "+":
                        resultat = Addition(nb1, nb2); // Utilise la fonction Addition importée
                        break;
                    case "-":
                        resultat = Soustraction(nb1, nb2); // Utilise la fonction Soustraction
                        break;
                    case "*":
                        resultat = Multiplication(nb1, nb2); // Utilise la fonction Multiplication
                        break;
                    case "/":
                        resultat = Division(nb1, nb2); // Utilise la fonction Division
                        break;
                    default:
                        resultat = "Erreur"; // Si l'opérateur n'est pas reconnu, affiche une erreur
                }
    
                // Convertit le résultat en string et limite à 4 chiffres après la virgule (marche pas)
                setInput(String(parseFloat(resultat.toFixed(4))));
            } else {
                setInput("Erreur"); // Affiche une erreur si l'entrée ne correspond pas au format attendu
            }
        } catch (error) {
            setInput("Erreur"); // Capture toute erreur inattendue et affiche un message d'erreur
        }
    };

    //Affichage graphique de la calculatrice avec les boutons etc
    return (
        <div className="p-5">
            <div className="bg-slate-500 border-[10px] p-10 shadow-md max-w-md mx-auto rounded-lg">
                <h1 className="text-center mb-5 text-cyan-500/100 text-xl">Super Calculatrice</h1>
                <div className="bg-white text-black text-xl p-5 text-right mb-5 rounded-md">
                    {input || "0"} 
                </div>

                <div className="grid grid-cols-4 gap-2 text-white">
                    <button onClick={Reset} className="bg-gray-400 hover:bg-gray-500 p-4 rounded-md">C</button>
                    <button onClick={() => Click("/")} className="bg-red-500 hover:bg-red-700 p-4 rounded-md">/</button>
                    <button onClick={() => Click("*")} className="bg-red-500 hover:bg-red-700 p-4 rounded-md">*</button>
                    <button onClick={() => Click("-")} className="bg-red-500 hover:bg-red-700 p-4 rounded-md">-</button>

                    <button onClick={() => Click("7")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">7</button>
                    <button onClick={() => Click("8")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">8</button>
                    <button onClick={() => Click("9")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">9</button>
                    <button onClick={() => Click("+")} className="bg-red-500 hover:bg-red-700 p-4 rounded-md">+</button>

                    <button onClick={() => Click("4")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">4</button>
                    <button onClick={() => Click("5")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">5</button>
                    <button onClick={() => Click("6")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">6</button>
                    <button onClick={Calcul} className="bg-blue-500 hover:bg-blue-700 p-4 rounded-md row-span-2">=</button>

                    <button onClick={() => Click("1")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">1</button>
                    <button onClick={() => Click("2")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">2</button>
                    <button onClick={() => Click("3")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">3</button>

                    <button onClick={() => Click("0")} className="bg-gray-700 hover:bg-gray-800 p-4 col-span-2 rounded-md">0</button>
                    <button onClick={() => Click(".")} className="bg-gray-700 hover:bg-gray-800 p-4 rounded-md">.</button>
                </div>
            </div>
        </div>
    );
}