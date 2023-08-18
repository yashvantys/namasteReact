import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            }
        }
        //console.log(this.props.name + "child constructor")
    }
    async componentDidMount() {
        //console.log(this.props.name + "child componentDidMont")
        const data = await fetch("https://api.github.com/users/yashvantys");
        const json = await data.json();
        //console.log(json)
        this.setState({
            userInfo: json
        })
    }

    render() {
        //console.log(this.props.name + "child render")
        const { name, location } = this.state.userInfo
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: yashvantys</h3>
            </div>
        )
    }
}

export default UserClass;