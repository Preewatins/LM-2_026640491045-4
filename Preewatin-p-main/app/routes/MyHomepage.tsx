import { useState } from 'react';
import { cards } from './data'; 
import { useNavigate } from '@remix-run/react';


function Profile({ id, nam, email, tel , bgp, imgu, usrn, cdat, }: 
  { nam: string, id: number ,email: any, tel: number, bgp: string, imgu: string, usrn: string, cdat: string,}
) {
  const navigate = useNavigate();

  return (
    <div key={id} className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgp})` }}
        title="Profile Picture"
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={imgu} alt="User Icon" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{usrn}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(`/card/${id}`)} // Navigate to ProfileView
        >
          View
        </button>
      </div>
    </div>
  );
}

export default function MyCard() {
  const [active, setActive] = useState(true);

  const name = "Preewatin Prateepchamcharas";
  const note = "รหัสนักศึกษา 026640491045-4";
  const note2 = "Tel: 087-773-2939";

  const items = cards.filter(cardItem => cardItem.active === active);
  const cardItems = items.map(cardItem =>
    <Profile
      nam={cardItem.name}
      id={cardItem.id}
      email={cardItem.email}
      tel={cardItem.tel}
      bgp={cardItem.bgProf}
      imgu={cardItem.userIcon}
      usrn={cardItem.userName}
      cdat={cardItem.createdAt}
    />
  );

  function handleClickActive() {
    setActive(true);
    alert("Showing active profiles");
  }
  
  function handleClickNonAct() {
    setActive(false);
    alert("Showing non-active profiles");
  }

  return (
    <>
      <div className="m-3 bg-sky-200 p-10">
        <h1 className="text-3xl">สมุนไพร: {name}</h1>
      </div>
      <div className="basis-1/4 m-2 p-3 bg-green-300 rounded-3xl text-red-700 font-bold">{note}</div>
      <div className="basis-1/2 m-2 p-3 bg-green-300 rounded-3xl text-orange-700 font-bold">{note2}</div>
      <hr />
      {cardItems}
      <hr />
      <button className="w-1/2 bg-rose-700 text-red-100 font-bold rounded-3xl" onClick={handleClickActive}>Active</button>
      <button className="w-1/2 bg-rose-700 text-red-100 font-bold rounded-3xl" onClick={handleClickNonAct}>Non-Active</button>
    </>
  );
}