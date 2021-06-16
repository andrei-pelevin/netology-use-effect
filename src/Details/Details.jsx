import { useEffect, useState } from 'react';


const Details = ({ info }) => {

    const [componentState, setComponentState] = useState({
        avatar: '/',
        details: {
            city: '',
            company: '',
            position: ''
        }

    });
    const [isOk, setOk] = useState(false);

    useEffect(() => {

        const data = async () => {
            setOk(false)
            try {
                const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setComponentState(data);
                setOk(true)
            } catch (e) {
                console.error(e);
            }
        }
        if (info.id) {
            data();
        }


    }, [info.id])


    let body = <div className="card m-5" style={{ width: '18rem' }}>
        <img src={componentState.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{componentState.name}</h5>

        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">City:{componentState.details.city}</li>
            <li className="list-group-item">Company: {componentState.details.company}</li>
            <li className="list-group-item">Position: {componentState.details.position}</li>
        </ul>
        <div className="card-body">

        </div>
    </div>




    return (<div>
        {isOk ? body : ''}
    </div>)
}


export default Details;