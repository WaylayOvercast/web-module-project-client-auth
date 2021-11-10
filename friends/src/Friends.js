import React from 'react';


const Friends = props =>{
    return (
        <div className='friends'>
            <p>Name: {props.friend.name}&nbsp;
                Age: {props.friend.age}&nbsp;
                Email:{props.friend.email} </p>
        </div>
    )
}


export default Friends;