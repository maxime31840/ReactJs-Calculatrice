import React from "react";

export default function FooterCustom() {
    return (
        <div className="flex flex-row justify-between p-4 bg-gray-800 text-cyan-400">
            <div>Made By Maxime LOURDEL &copy;2025</div>
            <div className="flex space-x-4">
                <a href="mailto:maxime.lourdel31@gmail.com" className="text-cyan-400 hover:underline">Me Contacter</a>
                <a 
                    href="https://www.linkedin.com/in/maximelourdel" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-400 hover:underline"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
