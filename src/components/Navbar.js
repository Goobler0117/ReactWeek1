import React from "react";

export default class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar">
               <nav>
                    <ul>
                        <a href='' id="BMX">BMX</a><br />
                        <a href='' id="Skateboarding">Skateboarding</a><br />
                        <a href='' id="Skiing">Skiing</a><br />
                    </ul>
               </nav>
            </div>
        );
    }
}