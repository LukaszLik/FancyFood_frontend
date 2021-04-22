import React from "react";

interface State {}
interface Props {}

export class HomePage extends React.Component<Props, State> {
    render() {
        return (
            <div className="home-page">
                <h1>Hello</h1>
            </div>
        );
    }
}
