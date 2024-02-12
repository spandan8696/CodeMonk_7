
import React, { useState, useEffect } from 'react';
import './Services.css';
import Image1 from "../Images/mountain.png"
import Image2 from "../Images/forest.png"
import { motion } from 'framer-motion';
import Image3 from "../Images/city.png";
import Image4 from "../Images/backwater.png";
import Image5 from "../Images/sunrise.png";
import Image6 from "../Images/dunes.png"




function Services() {
    // const [showModal, setShowModal1] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

   
    const [scrollPosition, setScrollPosition] = useState(0);

    const [secondCardY, setSecondCardY] = useState(0);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);

   
    const handleButtonClick1 = () => {
        setShowModal1(true);
        setSecondCardY(scrollPosition * -0.8);
    };

    const handleCloseModal1 = () => {
        setShowModal1(false);
        setQuestion('');
        setAnswer('');
    };

    const handleButtonClick2 = () => {
        setShowModal2(true);
    };

    const handleCloseModal2 = () => {
        setShowModal2(false);
        setQuestion('');
        setAnswer('');
        setSecondCardY(0);
    };

    const handleButtonClick3 = () => {
        setShowModal3(true);
    };

    const handleCloseModal3 = () => {
        setShowModal3(false);
        setQuestion('');
        setAnswer('');
    };

    const handleButtonClick4 = () => {
        setShowModal4(true);
    };

    const handleCloseModal4 = () => {
        setShowModal4(false);
        setQuestion('');
        setAnswer('');
    };

    const handleButtonClick5 = () => {
        setShowModal5(true);
    };

    const handleCloseModal5 = () => {
        setShowModal5(false);
        setQuestion('');
        setAnswer('');
    };

    const handleButtonClick6 = () => {
        setShowModal6(true);
    };

    const handleCloseModal6 = () => {
        setShowModal6(false);
        setQuestion('');
        setAnswer('');
    };



    // const handleButtonClick = () => {
    //     setShowModal(true);
    // };

    // const handleCloseModal = () => {
    //     setShowModal(false);
    //     setQuestion('');
    //     setAnswer('');
    // };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswer(question);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='services' id='Services'>

            {/* 1st Card */}


            <motion.div
                className="App1"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: scrollPosition * 0.3, y: scrollPosition * 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <button className="cardButton"
                    style={{ backgroundImage: `url(${Image1})` }}
                    onClick={handleButtonClick1}>
                    Card Button
                </button>
                {showModal1 && (
                    <div className="modal">
                        <div className="modalContent">
                            <button className="closeButton" onClick={handleCloseModal1}>
                                Close
                            </button>
                            <div className="answerArea">
                                <h3 className="answerText">{answer}</h3>
                            </div>
                            <form onSubmit={handleSubmit} className='questionArea'>
                                <input
                                    type="text"
                                    className='question'
                                    value={question}
                                    onChange={handleQuestionChange}
                                    placeholder="Enter a question..."
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </motion.div>


            {/* 2nd Card */}

            <motion.div
                className="App2"
                initial={{ opacity: 0, x: 0, y: 30 }}
                animate={{ opacity: 1, x: scrollPosition * 0.7, y: scrollPosition * -0.2 }}
                transition={{ duration: 0.5 }}
            >
                <button className="cardButton"
                    style={{ backgroundImage: `url(${Image2})` }}
                    onClick={handleButtonClick1}>
                    Card Button
                </button>
                {showModal2 && (
                    <div className="modal">
                        <div className="modalContent">
                            <button className="closeButton" onClick={handleCloseModal1}>
                                Close
                            </button>
                            <div className="answerArea">
                                <h3 className="answerText">{answer}</h3>
                            </div>
                            <form onSubmit={handleSubmit} className='questionArea'>
                                <input
                                    type="text"
                                    className='question'
                                    value={question}
                                    onChange={handleQuestionChange}
                                    placeholder="Enter a question..."
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </motion.div>

            {/* 3rd Card */}

            <motion.div
                className="App3"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: scrollPosition * 0.2, y: scrollPosition * 0 }}
                transition={{ duration: 0.5 }}
            >
                <button className="cardButton" 
                 style={{ backgroundImage: `url(${Image3})` }}
                onClick={handleButtonClick3}>
                    Card Button
                </button>
                {showModal3 && (
                    <div className="modal">
                        <div className="modalContent">
                            <button className="closeButton" onClick={handleCloseModal3}>
                                Close
                            </button>
                            <div className="answerArea">
                                <h3 className="answerText">{answer}</h3>
                            </div>
                            <form onSubmit={handleSubmit} className='questionArea'>
                                <input
                                    type="text"
                                    className='question'
                                    value={question}
                                    onChange={handleQuestionChange}
                                    placeholder="Enter a question..."
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </motion.div>

            {/* 4th Card */}

            <motion.div
                className="App4"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: scrollPosition * 0.45, y: scrollPosition * -0.2 }}
                transition={{ duration: 0.5 }}
            >
                <button className="cardButton" 
                 style={{ backgroundImage: `url(${Image4})` }}
                onClick={handleButtonClick4}>
                    Card Button
                </button>
                {showModal4 && (
                    <div className="modal" >
                        <div className="modalContent">
                            <button className="closeButton" onClick={handleCloseModal4}>
                                Close
                            </button>
                            <div className="answerArea">
                                <h3 className="answerText">{answer}</h3>
                            </div>
                            <form onSubmit={handleSubmit} className='questionArea'>
                                <input
                                    type="text"
                                    className='question'
                                    value={question}
                                    onChange={handleQuestionChange}
                                    placeholder="Enter a question..."
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </motion.div>

            {/* 5th Card */}

            <motion.div
                className="App5"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: scrollPosition * 0.15, y: scrollPosition * -0.05 }}
                transition={{ duration: 0.5 }}
            >
                <button className="cardButton" 
                 style={{ backgroundImage: `url(${Image5})` }}
                onClick={handleButtonClick5}>
                    Card Button
                </button>
                {showModal5 && (
                    <div className="modal">
                        <div className="modalContent">
                            <button className="closeButton" onClick={handleCloseModal5}>
                                Close
                            </button>
                            <div className="answerArea">
                                <h3 className="answerText">{answer}</h3>
                            </div>
                            <form onSubmit={handleSubmit} className='questionArea'>
                                <input
                                    type="text"
                                    className='question'
                                    value={question}
                                    onChange={handleQuestionChange}
                                    placeholder="Enter a question..."
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </motion.div>

            {/* 6th Card */}

            <motion.div
                className="App6"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: scrollPosition * 0.35, y: scrollPosition * -0.2 }}
                transition={{ duration: 0.5 }}
            >
                <button className="cardButton" 
                 style={{ backgroundImage: `url(${Image6})` }}
                onClick={handleButtonClick6}>
                    Card Button
                </button>
                {showModal6 && (
                    <div className="modal">
                        <div className="modalContent">
                            <button className="closeButton" onClick={handleCloseModal6}>
                                Close
                            </button>
                            <div className="answerArea">
                                <h3 className="answerText">{answer}</h3>
                            </div>
                            <form onSubmit={handleSubmit} className='questionArea'>
                                <input
                                    type="text"
                                    className='question'
                                    value={question}
                                    onChange={handleQuestionChange}
                                    placeholder="Enter a question..."
                                />
                                <button type="submit" className="submitButton">
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default Services;