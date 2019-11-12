//per sessions
const time1 = ['17:10', '17:11', '18:45', '20:54', '21:49', '21:50', '22:02', '22:03'];
const energy1 = [0, 15.14, 5.18, 13.48, 0, 8.26, 20, 14.43];
const co21= [0, 28.63, 22.95, 27.68, 0, 24.71, 0, 27.79];
const amount1 = [0, 8.63, 2.95, 7.68, 0, 4.71, 0, 7.79];
const mark1 = '22:02';

//total usage by hour of day
const hour1 = [8,9,10,11,12];

const energy2 = [243, 156, 365, 30, 156, 265, 356, 543];

//[0.04,28.07,09.21,,,,,,]
const duration2 = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
const duration1 = [0.04, 28.07, 9.21, 31.16, 0.06, 11.23, 0.07, 38.11, 31.17];

//chart2
export const linedatamark2 = mark1;
export const linedatalabel2 = time1;
export const linedataset2 = [
  { data: energy1, label: 'kWh used' },
  { data: co21, label: 'CO2 saved' },
  { data: amount1, label: 'US$ cost', yAxisID: 'y-axis-1' }
];


export const polarlabel1 = time1;
export const polarenergy1 = energy1;

export const dataLabels = time1;

export const dataLine1 = 
{
  data: energy1, 
  label: 'Series A'
}

export const dataLine2 = 
{
  data: amount1, 
  label: 'Series A'
}



export const DurationCharts = [
  {
  type: 'line',
  label: 'Session Duration',
  backgroundColor: 'rgba(0,0,255,0.4)',
  borderColor: 'rgba(0,0,255,0.4)',
  data: duration1,
  fill: true,
  yAxisID: 'amountCharged',
  },
  {
  type: 'bar',
  label: 'Charge Session Duration ',
  data: energy1,
  backgroundColor: 'rgba(255,0,255,0.4)',
  borderColor: 'rgba(255,0,255,0.4)',
  fill: false,
  yAxisID: 'energyUsed',
  },
  {
    type: 'bar',
    label: 'not used',
    data: duration2,
    backgroundColor: 'rgba(0,204,106 ,1)', //green
    borderColor: 'rgba(255,0,255,0.4)',
    fill: false,
    yAxisID: 'energyUsed',
    }
]


//polar pie chart
export const hours =["10 AM", "11 AM", "NOON", "1 PM", "2 PM", "3 PM"];
export const dataPolarCharts =
[
  {
    label: "Energy kWh Total Usage",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    data: [2478,1267,734,784,433]
  }
]


export const timeLabels = time1;
//line bar charts




//dataset 
export const dataCharts = [
    {
    type: 'line',
    label: 'Money $ Charge for Station A on Monday',
    backgroundColor: 'rgba(0,0,255,0.4)',
    borderColor: 'rgba(0,0,255,0.4)',
    data: amount1,
    fill: true,
    yAxisID: 'amountCharged',
    },
    {
    type: 'bar',
    label: 'Engery kWh Usage for Station A on Monday',
    data: energy1,
    backgroundColor: 'rgba(255,0,255,0.4)',
    borderColor: 'rgba(255,0,255,0.4)',
    fill: false,
    yAxisID: 'energyUsed',
    },
    {
    type: 'bar',
    label: 'Co2 Saved',
    data: co21,
    backgroundColor: 'rgba(0,204,106 ,1)',
    borderColor: 'rgba(0,0,255,0.4)',
    fill: false,
    },

]
