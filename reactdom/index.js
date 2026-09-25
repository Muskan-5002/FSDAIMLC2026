// console.log("Hello...")

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'red'}},"Name: Muskan Jaiswal")
const h21 = React.createElement('h2',{style:{color:'red'}},"Roll: 2400321530130")
const h1 = React.createElement('h1',{},"ABES Engineering College")
const img = React.createElement('img',{src:'https://i.pinimg.com/736x/98/19/e7/9819e70c6e10a4d9b70716de1a910132.jpg', style:{height:'300px', width:'250px', padding:'10px',borderRadius:'50%', border:'2px solid black'}})
const div = React.createElement('div',{style:{border:'6px solid black', textAlign:'center', margin:'10px 450px', backgroundColor:'#ede8cb'}},img, h1, h2, h21)
root.render(div);