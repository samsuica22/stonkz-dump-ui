import NavBar from '@/components/NavBar'
import WsbResponse from '@/interfaces/WsbItem'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';


export default function Home() {

  const [wsbData, setWsbData] = useState<WsbResponse[]>([]);

  useEffect(() => {
    callWSBApi();
  }, [])

  const callWSBApi = async () => {
    let today = new Date().toLocaleDateString();
    try {
      const response = await fetch(`https://tradestie.com/api/v1/apps/reddit?date=` + today);
      const responseData: WsbResponse[] = await response.json();
      setWsbData(responseData);


    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <NavBar />

      <div className={styles.tickerTable}>
        <DataGrid
          columns={
            [{ headerName: 'Ticker', field: 'ticker', flex: 2 },
            { headerName: 'Sentiment', field: 'sentiment', flex: 2 },
            { headerName: 'No. Of Comments', field: 'no_of_comments', flex: 1 },
            { headerName: 'Sentiment Score', field: 'sentiment_score', flex: 1 }]
          }
          getRowId={(row: any) => row.ticker + row.sentiment}
          rows={wsbData}
          pageSize={10}
          autoHeight
          disableSelectionOnClick
          onRowClick={(row: any) => window.open('https://stocktwits.com/symbol/' + row.row.ticker)}
        />
      </div>
    </>
  )
}
