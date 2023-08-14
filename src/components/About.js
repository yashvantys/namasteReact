import { Component } from "react"
import UserClass from "./UserClass"
class About extends Component {
    constructor(props) {
        super(props)
        //console.log("Parent constructor")
    }
    componentDidMount() {
        //console.log("Parent componentDidMount")
    }
    render() {
        //console.log("Parent render")
        return (
            <div className="about-us">
                <h1>inside About us page</h1>
                <UserClass name={"First"} location={"Gandhinagar"} />
            </div>
        )
    }
}

export default About