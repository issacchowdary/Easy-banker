
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
     const LoggedIn={firstName :"Issac" ,lastName:"Chowdary", email:"123@gmail.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                   type="greeting"
                   title="Welcome"
                   user={LoggedIn?.firstName || "guest"}
                   subtext="banking and checking account details made easy."
                />
                <TotalBalanceBox
                   accounts={[]}
                   totalBanks={1}
                   totalCurrentBalance={1000.13}
                />

            </header>

            Recent Transactions
        </div>
        <RightSideBar 
         user={LoggedIn}
         transactions={[]}
         banks={[{currentBalance:500 },{ currentBalance:600 }]}

        />
    </section>
  )
}

export default Home