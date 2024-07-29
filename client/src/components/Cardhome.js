import React from 'react'
import Card from 'react-bootstrap/Card';
function Cardhome() {
  return (
    <>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center",marginTop:"80px"}}>
       <Card style={{display:"grid",placeItems:"center",marginTop:"50px",width:"500px",height:"350px",padding:"10px",margin:"20px"}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSxfi1T4vAGwkEt68RDSWLgM86vBz5HEN9Q&s" />
        <Card.Body>
          <Card.Text style={{fontSize:"15px"}}>
          For the Spring/Summer 2024 season, shorts crept a few inches further up men's thighs and designers.
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{border:"1px solid black",marginBottom:"5px",width:"250px",height:"300px",borderRadius:"20px",backgroundColor:"white"}}>
        <div style={{margin:"20px",padding:"20px",border:"2px solid black",borderRadius:"20px",backgroundColor:"#fdfdea"}}>
            <h6 style={{textAlign:"center",fontWeight:"bold"}}>THE DIGITAL DAILY NEWSLETTER</h6><hr style={{width:"80%",marginLeft:"20px"}}/>
            <h1 style={{fontWeight:"800"}}>A Cultural Force That</h1>
            <h1 style={{fontWeight:"800",color:"red"}}>Transcends Generations</h1>
            <input style={{marginTop:"10px"}} type='text' placeholder='ENTER YOUR EMAIL'/> 
        </div>
      </div>
    </div>
    <div style={{marginTop:"80px",fontSize:"20px",display:"grid",placeItems:"center",padding:"5px"}}>
        <p style={{textAlign:"center",backgroundColor:"#5cb55c",color:"white",borderRadius:"20px",width:"450px"}}>The 30 Best Sites for Menswear: A Men’s Guide to Shopping Online !!</p>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center",marginTop:"70px"}}>
    <div style={{border:"1px solid black",marginBottom:"5px",width:"250px",height:"300px",borderRadius:"20px",backgroundColor:"white"}}>
        <div style={{margin:"20px",padding:"20px",border:"2px solid black",borderRadius:"20px",backgroundColor:"#fdfdea"}}>
            <h6 style={{textAlign:"center",fontWeight:"bold"}}>THE DIGITAL DAILY NEWSLETTER</h6><hr style={{width:"80%",marginLeft:"20px"}}/>
            <h1 style={{fontWeight:"800"}}>THE LATEST</h1>
            <h1 style={{fontWeight:"800",color:"red"}}>TIME TO CELEBRATE</h1>
            <input style={{marginTop:"10px"}} type='text' placeholder='ENTER YOUR EMAIL'/> 
        </div>
      </div>
    <Card style={{width:"500px",height:"350px",padding:"10px",margin:"20px"}}>
        <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:640/0*MIzs6PUJqmFsjjmO.jpg" />
        <Card.Body>
          <Card.Text style={{fontSize:"15px"}}>
          For the Spring/Summer 2024 season, shorts crept a few inches further up men's thighs and designers have been proposing another round of the barely-there micro-short.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Cardhome
