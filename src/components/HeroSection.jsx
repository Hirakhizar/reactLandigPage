
const HeroSection = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
                    industry's standard placeholder text since the 1500s when an unknown printer scrambled a galley of type to make a type specimen book.
                </p>
                <div className="hero-btn">
                    <button className="btn-shopNow">SHOP NOW</button>
                    <button className="btn-category">Category</button>

                </div>
               <div className="shopping">
                <p>Available On</p>
                <img src="/images/amazon.png" alt="" />
              

                
               </div>
            </div>
            <div className="hero-image">
                <img src="/images/show2.jpg" alt="" />
            </div>
        </main>
    );
};

export default HeroSection;
