import React from "react";

export default class LoginForm extends React.Component {
    render () {
        return (
            <div>
                <h1>Login</h1>
                <form>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="email" placeholder="E-mail Address" />
                </form>
            </div>
        );
    }
}