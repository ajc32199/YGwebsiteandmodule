import {useEffect, useState } from 'react';

const Home = () => {
    const [members, setMembers] = useState(null);

    useEffect(() => {
        const fetchMembers = async()=>{
            const response = await fetch('https:/http://localhost:3000/api/members');
            const json = await response.json();

            if(response.ok){
                setMembers(json);
            }
        }
        fetchMembers();
    }, []);
    return(
        <div className="Home">
            <div className="members">
                {members && members.map(() => (
                    <p key={members._id}>
                        {members.name}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Home;