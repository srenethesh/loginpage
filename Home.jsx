import React from 'react'
import './App.css'
import LogoutIcon from '@mui/icons-material/Logout';
import styled from 'styled-components';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function App() {
  

  const CardContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    background-color: #967bb6;
    margin: 10px;
    width: 250px;
  `;
  
  const CardContainer1 = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #e8ccd7;
  margin: 10px;
  width: 250px;
`;

  return (
    <div>
      <header className='header'>
        <nav className='nav'>
        <img id='img' src='https://www.codebuilders.in/img/code-builders-logo.svg' height='50' width='50' alt='Codebuilders'></img>    
        <p className='logo-text'>VPS <br></br>CodeBuilders</p>
          <ul className='ul'>    
                   
           				<li id='li'><a id='a' href="#home">Home</a></li>
				          <li id='li'><a id='a' href="#link">Link</a></li>
				          <li id='li'><a id='a' href="#dropdown">Dropdown</a></li>
				          <li id='li'><a id='a' href="#disabled">Disabled</a></li>
                  <li id='logout'><a id='a' href='logout'>Log Out <LogoutIcon id='style'/></a></li>
          </ul>
        </nav>
      </header>

      {/*Card1*/}
      <div className='cards-align'>
      <CardContainer>
        <p>Student Management</p>
        <p>128</p>
        <GroupAddIcon id='icon'/>
        <hr></hr>
        <a href='student-mangt'>View Report</a>
        <ArrowForwardIosIcon id='arrow-icon'/>
      </CardContainer>

      {/*Card2*/}
   
      <CardContainer1>
        <p id='text-color'>Invoices</p>
        <p id='text-color'>33</p>
        <ChatBubbleOutlineIcon id='icon1'/>
        <hr></hr>
        <a id='text-color' href='invoices'>View Report</a>
        <ArrowForwardIosIcon id='arrow-icon1'/>
      </CardContainer1>


      {/*Card3*/}
      <CardContainer>
        <p>Assest Management</p>
        <p>128</p>
        <SupervisorAccountIcon id='icon'/>
        <hr></hr>
        <a href='asset-mang'>View Report</a>
        <ArrowForwardIosIcon id='arrow-icon'/>
      </CardContainer>

      {/*Card4*/}
      <CardContainer1>
        <p id='text-color'>Certificate Management</p>
        <p id='text-color'>128</p>
        <CardMembershipIcon id='icon1'/>
        <hr></hr>
        <a id='text-color' href='certificate-mang'>View Report</a>
        <ArrowForwardIosIcon id='arrow-icon1'/>
      </CardContainer1>
      </div>
    </div>
  )
}

export default App
