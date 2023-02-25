import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import welcome from '../../assets/welcome.mp3'
const Homepage = () =>
{
    const audio = new Audio(welcome);
    useEffect(() =>
    {
        Swal.fire({
            title: 'Welcome to AIM',
            text: 'Greetings To you',
            icon: 'Success',
            // showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Greetings!!!'
        }).then(async (result) =>
        {
            if (result.isConfirmed)
            {
                await audio.play()
                console.log(audio)
                // setStates(true)
                // do something here when user confirms action
            }
        });


    }, [])





    return (
        <div>Homepage</div>
    )
}

export default Homepage