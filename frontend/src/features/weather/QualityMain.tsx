// import style from './QualityMain.module.css';

// interface QualityMainProps {
//     aqi: number;
//     aqiDetail: string | undefined;
// } 

// export default function QualityMain({aqi, aqiDetail}: QualityMainProps){

//     const barLength = ((aqi - 1) * 20) + 10;
//     const markerPosition = `calc(${barLength}% - 4.5px)`;

//     return(
//         <div className={style.contextWrapper}>
//             <div className={style.headerWrapper}>
//                 <div className={style.header}>Air Quality</div>
//             </div>
//             <div className={style.mainWrapper}>
//                 <div className={style.aqiMap}>
//                     <div className={style.aqiMapInner}>
//                         <div className={style.aqiMapBar}></div>
//                         <div className={style.aqiMapBar}></div>
//                         <div className={style.aqiMapBar}></div>
//                         <div className={style.aqiMapBar}></div>
//                         <div className={style.aqiMapBar}></div>
//                     </div>
//                     <div className={style.marker} style={{left: markerPosition}}></div>
//                 </div>
//                 <div className={style.aqiMain}>
//                     <div className={style.mainContext}>
//                         {aqi}
//                     </div>
//                     <div className={style.mainDetail}>
//                         {aqiDetail}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }