import React from "react";

const UserCard = ({ userData }) => {
    return(
        <div>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
            <p>{userData.bio}</p>
        </div>
    );
}

export default UserCard;