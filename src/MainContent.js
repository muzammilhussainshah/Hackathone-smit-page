import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './MainContent.css'; // You can create a CSS file for styling

function TypingAnimation({ text, typingSpeed }) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex === text.length) {
                clearInterval(timer);
            } else {
                setDisplayText(text.slice(0, currentIndex + 1));
                currentIndex++;
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, [text, typingSpeed]);

    return (
        <h5 style={{ color: '#0b5ed7' }}>{displayText}</h5>
    );
}

function MainContent() {
    const typingText = "The largest NGO offering free IT and vocational trainings,";
    const typingSpeed = 50; // Adjust typing speed in milliseconds

    return (
        <div style={{ padding: '5%' }}>
            <div className="main-content-container">
                <div className="content-left">
                    <h2>Welcome to the</h2>
                    <h1><span style={{ color: '#8dc63f' }}>Saylani</span> Welfare</h1>
                    <TypingAnimation text={typingText} typingSpeed={typingSpeed} />
                    <p>
                        Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.
                    </p>
                    <Button variant="outline-secondary">Explore More →</Button>
                </div>
                <div className="content-right">
                    <Image src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png" alt="Image" fluid style={{ width: '500px', height: 'auto' }} />
                </div>
            </div>
            <div className="yellow-container" style={{ backgroundColor: 'rgba(182,239,73,.2)', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '70px', height: '40px', backgroundColor: '#424242', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>General</div>
                    <input type="text" style={{ width: '150px', height: '40px', backgroundColor: 'white', color: 'black', padding: '5px' }} />
                    <div style={{ width: '50px', height: '40px', backgroundColor: '#424242', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>$</div>
                </div>  <Button className="zoom-button" style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>Blood Bank / Thalassemia Treatment</Button>
                <Button className="zoom-button" style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>Family kifalat</Button>
                <Button className="zoom-button" style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>Medical</Button>
                <Button className="zoom-button" style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>Food</Button>
                <Button className="zoom-button" variant="warning" style={{ backgroundColor: '#8dc63f', borderColor: '#8dc63f', color: 'white' }}>Quick Donate</Button>
            </div>
            <div className="responsive-image" style={{ marginTop: '2%' }}>
                <Image src="https://res.cloudinary.com/saylani-welfare/image/upload/v1690779592/website-images/dynamic/7f09ba9c-06e3-4744-af67-74175abc04e6.jpg" alt="Responsive Image" fluid style={{ width: '100%', height: 600 }} />
            </div>
            <h2 style={{ margin: '5%' }}>What We Are Doing</h2>

            <div className="responsive-boxes" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '2%' }}>
                <div className="responsive-box" style={{ width: '200px', backgroundColor: 'rgba(182,239,73,.2)', color: 'white', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646927889/website-images/static/44.png" alt="Box 1" style={{ width: '90px', height: '90px', marginBottom: '10px' }} />
                    <div style={{ color: 'black' }}>
                        Welfare
                    </div>
                </div>
                <div className="responsive-box" style={{ width: '200px', backgroundColor: 'rgba(182,239,73,.2)', color: 'white', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646927857/website-images/static/41.png" alt="Box 2" style={{ width: '90px', height: '90px', marginBottom: '10px' }} />
                    <div style={{ color: 'black' }}>
                        Medical
                    </div>
                </div>
                <div className="responsive-box" style={{ width: '200px', backgroundColor: 'rgba(182,239,73,.2)', color: 'white', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646927849/website-images/static/39.png" alt="Box 3" style={{ width: '90px', height: '90px', marginBottom: '10px' }} />
                    <div style={{ color: 'black' }}>
                        Medical
                    </div>
                </div>
                <div className="responsive-box" style={{ width: '200px', backgroundColor: 'rgba(182,239,73,.2)', color: 'white', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646927853/website-images/static/40.png" alt="Box 4" style={{ width: '90px', height: '90px', marginBottom: '10px' }} />
                    <div style={{ color: 'black' }}>
                        Medical
                    </div>
                </div>
                <div className="responsive-box" style={{ width: '200px', backgroundColor: 'rgba(182,239,73,.2)', color: 'white', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646927923/website-images/static/48.png" alt="Box 5" style={{ width: '90px', height: '90px', marginBottom: '10px' }} />
                    <div style={{ color: 'black' }}>
                        Medical
                    </div>
                </div>
                <div className="responsive-box" style={{ width: '200px', backgroundColor: 'rgba(182,239,73,.2)', color: 'white', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646927876/website-images/static/43.png" alt="Box 6" style={{ width: '90px', height: '90px', marginBottom: '10px' }} />
                    <div style={{ color: 'black' }}>
                        Medical
                    </div>
                </div>
            </div>

            <div className="responsive-images" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <img src="https://time2study.net/wp-content/uploads/2023/05/Saylani-Rozgar-Scheme-2023.jpg" alt="Image 1" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR656cUmWQbpNaZnjkT4EEQrBJKKG-pOWJkA&usqp=CAU" alt="Image 2" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1654923364/website-images/dynamic/c6fdf6af-51d5-4388-97ef-6cf10eb73aca.jpg" alt="Image 3" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <div className="responsive-image" style={{ marginTop: '2%' }}>
                <img src="./1.PNG" alt="Responsive Image" fluid style={{ width: '100%', height: 600 }} />
            </div>



        </div>
    );
}

export default MainContent;
