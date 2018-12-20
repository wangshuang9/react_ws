import React from "react";

class Footer extends React.Component {
	static defaultProps = {
		title:"这是footer"
	}
    render() {
        const { title } = this.props;
        return <footer className="footer">
        	<h4 className="mt15">{title}</h4>
    	</footer>
    }
}

export default Footer;
