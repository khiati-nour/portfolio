import './style.css'
import { Card, Button } from "react-bootstrap";

const Projects = () => {
const CardInfo = [
{title: "Weather App", img:`${process.env.PUBLIC_URL}/weather-app.png`, text:"a small web application to show the forecast for 5 days", link:"Demo"},
{title: "Speakty", img:`${process.env.PUBLIC_URL}/speakty.png`, text:"a platform where people can play language games,chat,participate live events to improve their language skills.", link:"z"},
{title: "Order Form", img:`${process.env.PUBLIC_URL}/order-form.png`, text:"a website with 4 games to enjoy during the holidays", link:"e"},
{title: "Holiday Games", img:`${process.env.PUBLIC_URL}/snackgame.png`, text:"create a webshop with order form ", link:"f"},
{title: "To Do List", img:`${process.env.PUBLIC_URL}/todolist.png`, text:"sa todolist where you can add your todos, and checked the done todos", link:"f"},
{title: "My nightly cocktail", img:`${process.env.PUBLIC_URL}/my-nightly-cocktail.png`, text:"an online delivery cocktail bar", link:"f"}

]
 const renderCards= (card, index) =>{
return(
    <Card style={{ width: '18rem' }} key={index} className="box">
    <Card.Img variant="top" src={card.img} />
    <Card.Body>
      <Card.Title> {card.title}  </Card.Title>
      <Card.Text>
       {card.text}
      </Card.Text>
      <Button variant="primary">Dimo</Button>
    </Card.Body>
  </Card>
)



 }

    return(
        <div className="grid">
       {CardInfo.map(renderCards)}
</div>
    )
}

export default Projects