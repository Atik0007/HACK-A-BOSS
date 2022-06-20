import { useState } from 'react';
import { format } from 'date-fns';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './styles/Twitter.css';
export default function Twitter() {
    const [tweet, setTweet] = useState(null);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        // prevent default action of the event (refresh page)
        e.preventDefault();

        // set loading to true
        setLoading(true);

        // set error to null
        setError(null);

        // try to get the tweet
        try {
            // Fetching the tweet from the API
            const response = await fetch(
                `http://localhost:4000/tweets?keyword=${keyword}`
            );

            // Destructuring the data from the response
            const { data } = await response.json();
            console.log(data);

            if (response.ok) {
                // set the tweet to the data
                setTweet(data);
            } else {
                // set the error to the data
                setError(data?.error || 'Something went wrong');
            }
        } catch (err) {
            // set error to the error message
            setError(err.message || 'Something went wrong');
        } finally {
            // set loading to false
            setLoading(false);
        }
    };

    return (
        <main className="container">
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    id="keyword"
                    name="keyword"
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button disabled={loading} className="btn">
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </Form>

            {error && <p className="text-danger">{error}</p>}

            {tweet && (
                <>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {tweet.tweets.map((tweet) => {
                            const dateTime = format(
                                new Date(tweet.createdAt),
                                'dd/MM/yyyy - hh:mm'
                            );

                            return (
                                <li key={tweet.id}>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={`http://localhost:4000/${tweet.image}`}
                                            alt="Tweet"
                                        />
                                        <Card.Body>
                                            <Card.Title>
                                                {tweet.idUser}
                                            </Card.Title>
                                            <Card.Text>{tweet.text}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <time dateTime={dateTime}>
                                                    {format(
                                                        new Date(
                                                            tweet.createdAt
                                                        ),
                                                        'dd/MM/yyyy - hh:mm'
                                                    )}
                                                </time>
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </li>
                            );
                        })}
                    </Row>
                </>
            )}
        </main>
    );
}
