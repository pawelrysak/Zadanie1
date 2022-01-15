import React, {Component} from 'react';
import axios from 'axios';

class Configuration extends Component {
    state = {
        configStatus: ''
    };

    componentDidMount() {
        this.fetchConfig();
    }

    async fetchConfig() {
        const values = await axios.get('/config/current');
        this.setState({configStatus: values.data});
    }

    renderConfigStatus() {
        return this.state.configStatus;
    }

    render() {
        return (
            <div>
                <h3>Config:</h3>
                <h2>{this.renderConfigStatus()}</h2>
            </div>
        );
    }
}

export default Configuration;