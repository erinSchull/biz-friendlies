import React, {Component} from 'react';

import './services.css';

class Services extends Component{
    constructor(props){
        super(props);
        this.state={
           name:'',
           address: '',
           site: '' ,
           status: '',
           allyText: '' 
        };
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputAddress = this.handleInputAddress.bind(this);
        this.handleInputSite = this.handleInputSite.bind(this);
        this.handleInputStatus = this.handleInputStatus.bind(this);
    }
        handleInputName(e){
            this.setState({
                name: e.target.value
            })
        }
        handleInputAddress(e){
            this.setState({
                address: e.target.value
            })
        }
        handleInputSite(e){
            this.setState({
                site: e.target.value
            })
        }
        handleInputStatus(e){
            this.setState({
                status: e.target.value
            })
        }

        displayAllyEmployee(){
            this.setState({
                allyText: ''
            })
        }

        render(){
        return(
            <div className='service-page' >
                <h3> Submit this form for ally and unfriendly businesses</h3>
                <form className='service-form' >
                    <input type="text" className='input-name'
                    placeholder='Location Name' name="name" 
                    onChange={this.handleInputName} />
                    <section className='status' >
                       <p className='status-ally'> <input type="radio" name="status" 
                       value="ally" 
                       onClick={this.handleInputStatus} /> Ally</p>
                       <p className='status-unfriendly'> <input type="radio" name="status"
                        value="unfriendly" 
                        onClick={this.handleInputStatus} /> Unfriendly </p>
                    </section>

                    <input type="text" className="input-address"
                    name="address" placeholder='Address' 
                    onChange={this.handleInputAddress} />

                    <input type="text" className="input-social"
                    name="site"
                    placeholder='Website or Social Media'
                    onChange={this.handleInputSite} />

                    <p className='ally-text' > <input type='checkbox' name='specific-ally' className='specific-ally' /> Specific friendly employee</p>
                    {/* checkbox handle the input display change to shown */}
                    <div hidden >
                       <input type='text' name='ally-name' className='ally-name' placeholder='Ally Name' /> 
                    </div>
                    <p className='unfriendly-text' ><input type='checkbox' name='specific-unfriendly' className='specific-unfriendly' />Specific unfriendly employee</p>
                    {/* checkbox handle the input display change to shown */}
                    <div hidden>
                        <input type='text' name='unfriendly-name' placeholder='Unfriendly Name' />
                    </div>
                    <section className='buttons' >
                        <input type="submit" className='submit' />
                        {/* submit will set off the redux function to save what was added to local state */}
                        <input type="reset" className='reset' />
                    </section>
                </form>
            </div>
        )
    }
}

export default Services