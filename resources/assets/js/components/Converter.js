import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Converter extends Component {
    render() {
        return (
            <section className="converter">
                <div class="container">
                    <h3>Weight Converter</h3>
                    <br/>

                    <div className="row">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Kilogram" />
                        </div>
                        <div className="col-md-2 text-center">
                            <i className="fa fa-exchange" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Pound" />
                        </div>

                        <div className="clearfix"></div>

                    </div>
                </div>
            </section>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Converter />, document.getElementById('app'));
}
