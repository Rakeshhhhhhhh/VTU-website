import React from "react";
import {Image, Row,Col, Container,Card} from "react-bootstrap";
// import {Link} from "react-router-dom";



const About=()=>{
    
    return(
        <>
        <Container>
        <div>
          
        <Image src="https://vtu.ac.in/wp-content/uploads/2019/03/vtul.png" className="vtu" rounded/>
      
       <Row className="justify-content-left my-3">
            <Col>
                <h3 className="heading"><b><u>Visvesvaraya Technological University,Belagaum</u></b></h3><br/>
                <p>VTU is one of the largest Technological Universities in India with 24 years of Tradition of excellence<br/> in Engineering & Technical Education, Research and Innovations. It came into existence in the year <br/>1998 to cater the needs of Indian industries for trained technical manpower with practical experience <br/>and sound theoretical knowledge.</p><br/>
            </Col>   
        </Row>        

      
       
       
      <Row>
        <Col md={4}>
        <h2 style={{marginLeft:100}}><b>182</b></h2>
        <p>Affiliated Colleges (Non Autonomous)</p>
        </Col>
        <Col md={4}>
        <h2 style={{marginLeft:100}}><b>1</b></h2>
        <p style={{marginLeft:30}}>Constituent College</p>
        </Col>
        <Col md={4}>
        <h2 style={{marginLeft:100}}><b>25</b></h2>
        <p style={{marginLeft:30}}>Autonomous colleges</p>
        </Col>
    </Row><br/><br/>
    <Row>
        <Col md={4}>
        <h2 style={{marginLeft:200}}><b>37</b></h2>
        <p style={{marginLeft:150}}> UG programmes</p>
        </Col>
        <Col md={2}>
        <h2 ><b>96</b></h2>
        <p>PG programmes</p>
        </Col>
        <Col md={6}>
        <h2><b>7</b></h2>
        <p>Faculty of Research</p>
        </Col>
    </Row><br/><br/>
    <div style={{marginLeft:30}}> 
        <p>The university is currently having 182 affiliated colleges, 1 constituent college and 25 Autonomous colleges with undergraduate programs in 37 disciplines, PG programs in 96 disciplines and Ph.D. & M.sc(Engg.)  research programs with 7 faculty, over 3 lakhs Engineering Students study in the various institutes affiliated to the University. </p>
    </div><br/>
    <Container className="min">
        
        <p>The University has revised the syllabus for UG and PG from the academic year 2014-15.It has four regional centers across the State of <br/>Karnataka in</p>
        <Row>
            <Col md={3}>
        <Card style={{ width: '15rem',height:"18rem" }}>
        <Card.Body> 
            <Image src= "https://vtu.ac.in/wp-content/uploads/2019/03/belagavi.jpg"  style={{width:"13rem"}}></Image>
          <Card.Title style={{textAlign:"center",marginTop:2,color:"black"}}><b>Belgavi</b></Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: '15rem',height:"18rem" }}>
        <Card.Body> 
            <Image src= "https://vtu.ac.in/wp-content/uploads/2019/03/bengaluru.jpg" style={{width:"13rem"}}></Image>
          <Card.Title style={{textAlign:"center",marginTop:2,color:"black"}}><b>Bengaluru</b></Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: '15rem',height:"18rem" }}>
        <Card.Body> 
            <Image src= "https://vtu.ac.in/wp-content/uploads/2019/03/kalaburagi.jpg"  style={{width:"13rem"}}></Image>
          <Card.Title style={{textAlign:"center",marginTop:2,color:"black"}}><b>kalaburagi</b></Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: '15rem',height:"18rem" }}>
        <Card.Body> 
            <Image src= "https://vtu.ac.in/wp-content/uploads/2019/03/mysuru.jpg"  style={{width:"13rem"}}></Image>
          <Card.Title style={{textAlign:"center",marginTop:2,color:"black"}}><b>Mysuru</b></Card.Title>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container><br/>
      <p>respectively. University is comprised of a multi-disciplinary and multi-level institution offering wide ranging programmes in engineering, technology and <br/>Management. The University is making steady progress in developing and providing best technical environment for education and will continue to serve the<br/> nation in coming years.</p>
      <p>Equipped with the extremely rich resources of an outstanding student body and faculty strong partnerships with business, industry, and government and support<br/> from alumni and friends, VTU is designing a future of global preeminence, leadership, and service.</p>
      </div>
      </Container>
       </>
     
    ) 
}
export default About;
