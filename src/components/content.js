import { Carousel } from "react-bootstrap";
export default function Content() {
    return (
        <div className="container fluid">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("./image/img20180620170155909.jpg")}
                        alt="First slide"
                        width={900}
                        height={570}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("./image/truyen-kiem-hiep-hay.jpg")}
                        alt="Second slide"
                        width={900}
                        height={570}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("./image/Truyen-kiem-hiep-moi-nhat-2021.jpg")}
                        alt="Third slide"
                        width={900}
                        height={570}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};