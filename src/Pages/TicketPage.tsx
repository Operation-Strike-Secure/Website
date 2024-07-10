// import React from "react";

// import BackgroundImage from '../Composants/All Pages/BackgroundImage';
// import Navbar from '../Composants/All Pages/Navbar';
// import FilterableRectangle from '../Composants/Ticket En Cour/FilterableRectangle';
// import RoundedRectangle from '../Composants/Ticket En Cour/RoundedRectangle';
// import ButtonNewTicket from '../Composants/Nouveau Ticket/ButtonNewTicket';
// import Tableau from '../Composants/Ticket En Cour/Tableau';

// import backgroundImage from '../assets/Fond.png';
// import logo from '../assets/Logo.svg';

// export const TicketPage: React.FC = () => {

//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <BackgroundImage imageUrl={backgroundImage}>
//       <Navbar
//         logoUrl={logo}
//         title="OPERATION STRIKE & SECURE"
//         tabs={['STATISTIQUES', 'TICKETS', 'ADMIN']}
//         routes={['/stat', '/ticket', '/loginAdmin']}
//       />
//       <div>
//         <RoundedRectangle>
//           <FilterableRectangle />
//           <div className="button-container">
//             <ButtonNewTicket onPress={handleClick} text="CRÉER TICKET +"/>
//           </div>
//           <Tableau />
//         </RoundedRectangle>
//       </div>
//     </BackgroundImage>
//   );
// };

// export default TicketPage;

import React from "react";

import BackgroundImage from '../Composants/All Pages/BackgroundImage';
import Navbar from '../Composants/All Pages/Navbar';
import FilterableRectangle from '../Composants/Ticket En Cour/FilterableRectangle';
import RoundedRectangle from '../Composants/Ticket En Cour/RoundedRectangle';
import ButtonNewTicket from '../Composants/Nouveau Ticket/ButtonNewTicket';
import Tableau from '../Composants/Ticket En Cour/Tableau';

import backgroundImage from '../assets/Fond.png';
import logo from '../assets/Logo.svg';

export const TicketPage: React.FC = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <BackgroundImage imageUrl={backgroundImage}>
      <Navbar
        logoUrl={logo}
        title="OPERATION STRIKE & SECURE"
        tabs={['STATISTIQUES', 'TICKETS', 'ADMIN']}
        routes={['/stat', '/ticket', '/loginAdmin']}
      />
      <RoundedRectangle>
        <FilterableRectangle />
        <div className="button-container">
          <ButtonNewTicket onPress={handleClick} text="CRÉER TICKET +"/>
        </div>
        <Tableau />
      </RoundedRectangle>
    </BackgroundImage>
  );
};

export default TicketPage;