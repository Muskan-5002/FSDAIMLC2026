// console.log("Hello...")

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'red'}},"Name: Muskan Jaiswal")
const h21 = React.createElement('h2',{style:{color:'red'}},"Roll: 2400321530130")
const h1 = React.createElement('h1',{},"ABES Engineering College")
const img = React.createElement('img',{src:'https://i.pinimg.com/736x/eb/06/8f/eb068f137a434e813b3772d8ffcfc6de.jpg', style:{height:'200px', width:'200px'}})
const div = React.createElement('div',{style:{border:'10px solid red', textAlign:'center'}},img, h1, h2, h21)
root.render(div);