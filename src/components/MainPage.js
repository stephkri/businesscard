import logo from "../images/icard-logo-v3.jpg";

export default function MainPage(props) {
  return (
    <section className="main-page">
      <h1>Welcome to iCard!</h1>
      <h4>If you’re tired of looking in five or six different places for the whole of somebody’s contact info — or for your own! — then you’ve come to the right place.</h4>
      <p>With iCard, all you need is a single QR code per person, and everybody’s information is stored in a single card. Click one of the buttons above to get started!</p>
      <img className="main-logo" src={logo} alt="logo"></img>
    </section>
  )
}