import React, { useEffect, useState } from "react";
import axios from "axios";

import { Col, Card, Row, Container, Form, Button } from "react-bootstrap";

function Page() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Make api call to news api
  async function getNewsData() {
    // Set loading boolean to true so that we know to show loading text
    setLoading(true);

    try {
      // Make news api call using axios
      const resp = await axios.get(
        "https://newsapi.org/v2/everything?q=Facebook%20data%20breach&from=2015&sortBy=popularity&apiKey=e3d787ee32884050bb8b714bbe0bff93"
      );
      setNewsData(resp.data.articles);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      // Set loading boolean to false so that we know to show news articles
      setLoading(false);
    }
  }

  useEffect(() => {
    getNewsData();
  }, []);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting traditionally
    alert("Input Submitted: " + inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          "Loading..."
        ) : (
          <Container>
            <Row className="d-flex justify-content-center">
              <Col xs={12} md={6} className="mt-5">
                {Array.isArray(newsData) &&
                  newsData.map((news, index) => (
                    <Row className="d-flex justify-content-center" key={index}>
                      <Col xs={12} className="mt-5 w-500">
                        <a
                          target="_blank"
                          href={news.url}
                          rel="noopener noreferrer"
                        >
                          <Card>
                            <Card.Title className="my-3">
                              {news.title}
                            </Card.Title>
                            <Card.Img src={news.urlToImage} alt={news.title} />
                            <Card.Body>
                              <Card.Text>{news.description}</Card.Text>
                            </Card.Body>
                          </Card>
                        </a>
                      </Col>
                    </Row>
                  ))}
              </Col>
            </Row>
          </Container>
        )}
      </header>
    </div>
  );
}

export default Page;

// API KEY = e3d787ee32884050bb8b714bbe0bff93