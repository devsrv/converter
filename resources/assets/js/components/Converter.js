import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function castfield(type)
{
    let placeholder = '';
    let shortform = '';
    switch (type) 
    {
        case 'k':
            placeholder = 'Kilogram';
            shortform = 'K.G';
            break;
        case 'l':
            placeholder = 'Pound';
            shortform = 'LBS';
            break;
        default:
            placeholder = shortform = 'Unit';
    }

    return {placeholder, shortform};
}

class Convfield extends Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        let fieldValue = e.target.value;
        fieldValue = fieldValue.trim();

        this.props.hitChange(fieldValue);
    }

    makefield()
    {
        let fieldtype = castfield(this.props.oftype);
        return (
            <div className="input-block">
                <input type="text" className="form-control" placeholder={fieldtype.placeholder} value={this.props.input} onChange={this.handleChange} />
            </div>
        );
    }

    render()
    {
        return (
            <div className="col-md-4 inline">
                {this.makefield()}

                {this.props.children}
            </div>
        );
    }
}

class ErrorMsg extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        if(!this.props.msg)
        {
            return null;
        }

        return (
            <div className="errortip left">
                <span className="arrow"></span>
                <span className="text">{this.props.msg}</span>
            </div>
        );
    }
}

function validation(val)
{
    if(val == '')
    {
        return {status:false, msg:''};
    }
    else if(isNaN(val))
    {
        return {status:false, msg:'invalid weight input'};
    }
    else if(val <= 0)
    {
        return {status:false, msg:'must be greater zero'};
    }

    return {status:true, msg:''};
}

function weightCov(val)
{
    let type = val.oftype;
    let data = val.input;

    let output = '';
    let valid = validation(data);

    if(type == 'k')
    {
        if(! valid.status)
        {
            return {kg:data, lbs: ''};
        }

        output = {kg:data, lbs: data * 2.20462};
    }
    else if(type == 'l')
    {
        if(! valid.status)
        {
            return {kg:'', lbs: data};
        }

        output = {kg: (data/2.20462), lbs: data};
    }
    else
    {
        output = {kg: '', lbs: ''};
    }

    return output;
}

export default class Converter extends Component {
    constructor(props)
    {
        super(props);
        this.state = {input: '', shortform: '', errMsg: '', oftype:''};
        this.handleKgChange = this.handleKgChange.bind(this);
        this.handlePoundChange = this.handlePoundChange.bind(this);
    }

    validateField(param)
    {
        let valid = validation(param.val);
        if(! valid.status)
        {
            this.setState({errMsg: valid.msg, oftype:param.oftype});
            return false;
        }

        this.setState({errMsg: ''});
        return true;
    }

    handleKgChange(val) {
        this.setState({oftype: 'k', input:val});
        this.validateField({val, oftype:'k'});
    }

    handlePoundChange(val) {
        this.setState({oftype: 'l', input:val});
        this.validateField({val, oftype:'l'});
    }

    render() {

        let kilogram = '';
        let pound = '';

        let converted = weightCov({oftype:this.state.oftype, input:this.state.input});
        kilogram = converted.kg;
        pound = converted.lbs;

        return (
            <section className="converter">
                <div className="container">
                    <h3>Weight Converter</h3>
                    <br/>

                    <div className="row">
                        
                        <Convfield oftype="k" hitChange={this.handleKgChange} input={kilogram}>

                            {(this.state.oftype == 'k')? <ErrorMsg msg={this.state.errMsg} /> : ''}

                            <span>K.G</span>  
                        </Convfield>

                        <div className="col-md-2 text-center">
                            <i className="fa fa-exchange" aria-hidden="true"></i>
                        </div>

                        <Convfield oftype="l" hitChange={this.handlePoundChange} input={pound}>

                            {(this.state.oftype == 'l')? <ErrorMsg msg={this.state.errMsg} /> : ''}

                            <span>LBS</span>  
                        </Convfield>

                    </div>
                </div>
            </section>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Converter />, document.getElementById('app'));
}
