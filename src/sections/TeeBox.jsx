import { useEffect } from 'react';
import '../css/styles.css';

export default function TeeBox() {

    useEffect(() => {
        const canvas = document.getElementById("teeCanvas");
        const ctx = canvas.getContext("2d");

        const adjustCanvasSize = () => {
            
            const sectionHeight = document.querySelector('.section-height').clientHeight;

            const navHeight = document.querySelector('.nav-spacing').clientHeight;

            const textContentHeight = document.querySelector('.tee-content').clientHeight;

            const canvasHeight = sectionHeight - textContentHeight - navHeight;

            canvas.width = window.innerWidth;
            canvas.height = canvasHeight;

            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        adjustCanvasSize();
        window.addEventListener('resize', adjustCanvasSize);

        return () => {
            window.removeEventListener('resize', adjustCanvasSize);
        };
    }, []);


    return (
    
        <section id='teebox' className="section-height">
            <div className='nav-spacing'></div>
            <div className='tee-content'>
                <p>Hello I am Jake Nothvogel</p>
                <p>I'm an aspiring developer looking for opportunities to grow myself</p>
            </div>
            <canvas className = 'tee-canvas' id='teeCanvas'></canvas>
        </section>
        
    );
}