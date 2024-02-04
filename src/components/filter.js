import React, { useState } from 'react';
import FilterPopUp from "./FilterPopUp"

export default function Filter () {

    const [popup, setPopup] = useState(false);

    const togglePopUp = () => {
        setPopup(!popup);

    }

    let nameList = ['Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich',
    'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready',
    'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 
    'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox']
    let tableData =[];

            for(let i = 1; i < 1000; i++){
                tableData.push({ 
                    id : i,
                    name : nameList[Math.floor(Math.random() * nameList.length)],
                    number : Math.floor(Math.random() * 999)})
            }

    return (
        
            <div className="container">
                <div className='popUp'>
                {popup ? <FilterPopUp /> : null}
                </div>
                <div className='filter'>
                    <button onClick={togglePopUp}>
                    popup
                    </button>
                </div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>RanNumber</th>
                    </tr> 
                </thead>
                <tbody>
                    {tableData.map((row)=>{
                        return( <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.number}</td>
                        </tr>)
                       
                    })}
                    
                </tbody>
                </table>
            </div>
    
        )
}