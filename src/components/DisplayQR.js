import "./DisplayQR.scss";

const QRCode = require("qrcode.react");

export default function DisplayQR(props) {

  const url = `https://adoring-volhard-7e0798.netlify.app/showcard/${props.currentCard.id}`
  // const url = `http://localhost:3000/showcard/${props.currentCard.id}`

  const handleBack = e => {
    e.preventDefault();
    props.setPage("MyCards")
  }

  return (
    <>
      <div>
        <ul>
          <li>
           <p>Scan QR code using Camera</p>
          </li>
          <li>
            <QRCode value={url} size={328} />
          </li>
          <li>
            <button
              onClick={handleBack}
              className="QR-cancel"
            >Back</button>
          </li>
        </ul>
      </div>      
    </>
  );
}
