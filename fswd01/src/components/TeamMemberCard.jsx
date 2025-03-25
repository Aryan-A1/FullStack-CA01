import React from 'react';

const TeamMemberCard = ({name,job}) =>{
    return(
        <div>
            <p>{name}</p>
            <p>{job}</p>
        </div>
    )
}

export default TeamMemberCard;