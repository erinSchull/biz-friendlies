import React, {Component} from 'react';

import './bathrooms.css';

class Bathrooms extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            address: '',
            site: '',
            neutral: false,
            transFriend: false
        }
        this.handleInputName = this.handleInputName.bind(this);
        this.handleNeutralInput = this.handleNeutralInput.bind(this);
        this.handleTransFriendInput = this.handleTransFriendInput.bind(this);
        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleSiteInput = this.handleSiteInput.bind(this);
    }
        handleInputName(e){
            this.setState({
                name: e.target.value
            })
        }
        handleNeutralInput(e){
            this.setState({
                neutral: e.target.value
            })
        }
        handleTransFriendInput(e){
            this.setState({
                transFriend: e.target.value
            })
        }
        handleAddressInput(e){(
            this.setState({
                address: e.target.value
            })
        )}
        handleSiteInput(e){( 
            this.setState({
                site: e.target.value
            })
        )}

    render(){
        return(
            <div id="bathrooms-page" >
                <h3> Submit this form for businesses with or without gender neutral bathrooms</h3>
                <form className='bathroom-form'>
                    <input type="text" className='input-name'
                    placeholder='Location Name' name="name"
                    onChange={this.handleInputName} />
                    <input type='text' className='input-address' 
                    name='address' placeholder='Address' 
                    onChange={this.handleAddressInput} />
                    <input type='text' className='input-social'
                    name='site' placeholder='Website or Social Media'
                    onChange={this.handleSiteInput} />
                    <section className='bathroom-checklist' >
                        <p>Check any number of boxes that apply regarding the bathrooms</p>
                        <p><input type='checkbox' name='bathroom-check' onClick={this.handleNeutralInput} value='true' /> Gender Neutral</p>
                        <p>*gender neutral can apply to family restrooms </p>
                        <p> <input type='checkbox' name='bathroom-check' value='true' onClick={this.handleTransFriendInput} /> Transgender Friendly </p>
                        <p> <input type='checkbox' name='bathroom-check'/> Another option? </p>
                        <input type='text' name='comments' placeholder='Any further comments' />
                    </section>
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

export default Bathrooms