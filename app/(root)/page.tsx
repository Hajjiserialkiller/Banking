import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = { firstName: 'Adrian', lastName: 'JSM', email: 'contact@jsmastery.pro' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName || 'Guest'} subtext='Access and manage your account and transactions efficiently.'/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.36} />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 100 }, { currentBalance: 200 }]} />
    </section>
  )
}

export default Home
