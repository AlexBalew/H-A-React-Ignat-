import React from 'react'
import {Message} from "./Message";


const messageData = {
    avatar: 'https://s3.amazonaws.com/com.offerpop.services.media/images/media/5b2bf21a78a4726c86a30642/5f232a441209ca98fd21d9cb.JPEG',
    name: 'Roger',
    message: 'Screw You, I am Kevin Bacon!',
    time: '23:48',
}


function HW1() {
    return (
        <div>
            <hr/>
            Home assignment 1
            <hr/>
            <div>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
