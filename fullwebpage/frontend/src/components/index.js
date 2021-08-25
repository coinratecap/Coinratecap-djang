<<<<<<< HEAD
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Header from './Navbar/Header.js'







function Cointable() {
  const [tableData] = useState([
    { id: '', coinlogo: 'Bnb', name: 'Bitcoin', ticker: 'BTC', chain: 'Smart Chain', price: 500, marketcap: 5000000000, launcheddate: '2days ago', rated: '1200', rate: '5' }
  ])
  const columns = [
    { title: 'Id', field: 'id', export: false },
    { title: 'Coinlogo', field: 'coinlogo' },
    { title: 'Name', field: 'name' },
    { title: 'Ticker', field: 'ticker' },
    { title: 'Chain', field: 'chain' },
    { title: 'Price', field: 'price', type: 'currency', currencySetting: { minimumFractionDigits: 0 } },
    { title: 'Marketcap', field: 'marketcap', type: 'currency', currencySetting: { minimumFractionDigits: 0 } },
    { title: 'Launched Date', field: 'launcheddate' },
    { title: 'Rated', field: 'rated' },
    { title: 'Rate', field: 'rate' },


  ]

  return (

    <div className="container">
      {Header}
      <Header subtitle="best" />
      <div className="Promotedcoin ">
        <MaterialTable columns={columns} title="Promoted"  data={tableData}
      //   actions={[{icon:()=><button>View</button>,
      //   tooltip: 'view',
      //   onClick:(e, data)=>console.log(data)

      // }]}


        options={{ searchAutoFocus: true, searchFieldVariant: 'filled',
        pageSizeOptions: [10, 20, 50, 100, 200], pageSize: 10,
        paginationType: 'stepped', exportButton: true, exportAllData: true,
        exportFileName: 'Coinratecap_promoted_coin' }} />

      </div>
    </div>
  );
}





export default Cointable;
=======
import React from 'react';

const coins = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Coins</h1>
    </div>
  );
};

export default coins;
>>>>>>> 70d60eee38ec77d5b18095a340338ed17d945c6a
