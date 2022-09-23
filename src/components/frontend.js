import React, {useState, useEffect} from 'react'
import backgroundpix from '../assets/background.png' 
import supabase from './config.js';

const Frontend = () => {

const [ gameUser, setGameUser ] = useState(null);
const [gameError, setGameError] = useState(null);

useEffect(() => {

const fetch = async() => {
const {data, error} = await supabase
.from('user')
.select()
.order( 'lc' , {ascending:false})

if(data){
setGameUser(data)
setGameError(null)
console.log(data)
}

if(error){
setGameError(error)
setGameUser(null)
console.log(error)
}
}

fetch()

}, [])

    const records = [
        {
            medal:'🥇',
            rank: 1,
            name: 'Theo',
            Address: '📍 Montreal',
            lc: '1500'
        },
        {
            medal:'🥈',
            rank: 2,
            name: 'Maddie',
            Address: '📍 Los Angeles',
            lc: '1300'
        },
        {
            medal:'🥉',
            rank: 3,
            name: 'Greg',
            Address: '📍 Miami',
            lc: '1100'
        },
        {
            medal:'',
            rank: 4,
            name: 'Gabe',
            Address: '📍 Toronto',
            lc: '900'
        },
        {
            medal:'',
            rank: 5,
            name: 'Rizqi',
            Address: '📍 Indonesia',
            lc: '800'
        }
    ]

  return (
    <div>
    <div className="parent">
      {/* lEADERBOARD TEXT */}
      <div className="child1">
      <h1  className="leadtext font-extrabold"> LEADERBOARD </h1> 
      </div>

      {/* BUTTONS */}
      <div className="child2">
        <a href="/create"> <button className="button1"> Add New Peer </button> </a>
        <button className="button2"> Send Funds </button>
      </div>

      {/* TABLE */}
      { gameUser && (
      <div className="p-5 h-screen bg-transparent tableHolder">
        <table className="w-80">
<thead className="bg-gray-50 border-b-2 border-black">
  <tr>
    <th className="p-3 text-2xl font-semibold tracking-wide text-left">  </th>
    <th className="p-3 text-2xl font-semibold tracking-wide text-left"> Rank </th>
    <th className="p-3 text-2xl font-semibold tracking-wide text-left"> Name </th>
    <th className="p-3 text-2xl font-semibold tracking-wide text-left address1"> Address </th>
    <th className="p-3 text-2xl font-semibold tracking-wide text-left"> $LC </th>
  </tr>
</thead>

<tbody>
{gameUser.map((game) => (
  <tr classname="bg-white">
    <td className="p-3 text-xl text-gray-700"> {game.medal} </td>
    <td className="p-3 text-xl text-gray-700 font-bold"> {(gameUser.indexOf(game)) + 1} </td>
    <td className="p-3 text-xl text-gray-700 font-bold"> {game.name} </td>
    <td className="p-3 text-xl text-gray-700 font-bold address2"> {game.address} </td>
    <td className="p-3 text-xl text-gray-700 font-bold"> {game.lc} </td>
  </tr>
))}
</tbody>
        </table>
      </div>
              )}
      </div>  
    </div>
  )
}

export default Frontend