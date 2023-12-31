import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import CardsSmall from '@/app/_components/dashboardCards/CardsSmall.jsx'
import RecentActivities from './_components/RecentActivities'
import TopAssets from './_components/TopAssets'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['400', '700' , '900'],
  subsets: ['devanagari'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`${poppins.className} p-8 flex flex-col gap-8`}>
      <div className=''>
        <h1 className='text-slate-100 font-bold text-2xl mb-2'>Dashboard</h1>
        <div className='flex gap-6'>
            <CardsSmall props={{title:"Totla assets", value:"1925", subtitle:"Assigned", subtitleValue:"199", color:'bg-emerald-500'}}/>
            <CardsSmall props={{title:"Total Consumable", value:"875", subtitle:"Assigned", subtitleValue:"199", color:'bg-indigo-600'}}/>
            <CardsSmall props={{title:"Totla licences", value:"1240", subtitle:"Installed", subtitleValue:"965", color:'bg-yellow-500'}}/>
            <CardsSmall props={{title:"Totla Support", value:"236", subtitle:"Expired", subtitleValue:"25", color:'bg-cyan-500'}}/>
        </div>
      </div>
      <div>
        <h1 className='text-slate-100 font-bold text-2xl mb-2'>Recent Activity</h1>
        <RecentActivities/>
      </div>
      <div>
        <h1 className='text-slate-100 font-bold text-2xl mb-2'>Top Assets</h1>
        <TopAssets/>
      </div>
    </div>
  )
}
