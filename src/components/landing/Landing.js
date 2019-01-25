import React, {Component} from 'react';

import './landing.css';

class Landing extends Component{
    render(){
        return(
            <section className='landing'>
                <h2>Welcome to LGBT Friendlies</h2>

                <h3>A website made by an ally for the LGBT community to share business allies and unfriendlies</h3>

                
                <div className='for-grid'>
                    <div className='feature' >
                        Screenshot of featured page
                    </div>
                    <div className='sub1' >
                        Screenshot of Submission 1
                    </div>
                    <div className='sub2' >
                        Screenshot of Submission 2
                    </div>
                </div>
            </section>
        )
    }
}
export default Landing