import "./Card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Card(props) {

  const handleDisplay = e => {
    e.preventDefault();
    props.displayQR(props.card)
  }

  const handleDelete = e => {
    e.preventDefault();
    props.deleteCard(props.card.id)
  }

  const handleEdit = e => {
    e.preventDefault();
    props.editCard(props.card)
  }

  const handleSave = e => {
    e.preventDefault();
    props.saveCard(props.card)
  }

  // const generateQrCode = () => {
  //   React.render(
  //     <QRCode value={`showcard/${props.card.id}`} size={128} />
      
  //   );
  // }
  return (
    <div>

    <article>
      <div className="card">
        <div className="card_left">
          {props.card.photo &&
            <div className="card_photo">
              <img
                src={props.card.photo}
                alt="amator"
              />
            </div>
          }
        </div>
        <div className="card_body">
          <div className="card_content">
            <div className="card_heading">
              {props.card.fullname &&
                <h3 className="card_name">{`${props.card.fullname}`}</h3>
              }
              {props.card.title &&
                <p className="card_title">{props.card.title}</p>
              }
              {props.card.company &&
                <p className="card_title">{props.card.company}</p>
              }
            </div>
            <div className="card_list">
              {props.card.phone &&
                <div className="card_list-item">
                  <FontAwesomeIcon icon={faPhone} className="icon-phone" />
                  <a href={"tel:" + props.card.phone}>{props.card.phone}</a>
                </div>
              }
              {props.card.email &&
                <div className="card_list-item">
                  <FontAwesomeIcon icon={faAt} className="icon-at" />
                  <a href={"mailto:" + props.card.email}>{props.card.email}</a>
                </div>
              }
              <div className="card_list-item">
                <div className="icon-social">
                  {props.card.github &&
                    <a href={props.card.github}><FontAwesomeIcon icon={faGithub} className="icon-github" /></a>
                  }
                  {props.card.linkedin &&
                    <a href={props.card.linkedin}><FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" /></a>
                  }
                  {props.card.facebook &&
                    <a href={props.card.facebook}><FontAwesomeIcon icon={faFacebook} className="icon-facebook"/></a>
                  }
                  {props.card.instagram &&
                    <a href={props.card.instagram}><FontAwesomeIcon icon={faInstagram} className="icon-instagram" /></a>
                  }
                </div>
              </div>
              {props.card.bio &&
                <div className="card_bio">
                  <p>{props.card.bio}</p>
                </div>
              }
            </div>
        {props.card.isselfcard && (
          <button className="display-button" onClick={handleDisplay} >
            Display QR Code
          </button>
        )}
          </div>
        </div>
      </div>
      <div className="card_options">
        {props.saveCard && (
          <div>
            <button className="display-button" onClick={handleSave} >
              SaveCard
            </button>
          </div>
        )}
        {props.editCard &&
          <button className="edit-button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} className="icon-edit" />
          </button>
        }
        {props.deleteCard &&
          <button className="delete-button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} className="icon-delete" />
          </button>
        }
    </div>
    </article>
    </div>
  )
} 