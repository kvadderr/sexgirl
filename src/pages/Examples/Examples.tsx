import './Examples.module.scss'

const GalleryBox = ({ img, text }) => {
    return (
        <div className="box" style={{ '--img': `url(${img})` }} data-text={text}>
            <div className="box-content">{text}</div>
        </div>
    );
}

const Examples = () => {
    return (
        <div className="container">
            <GalleryBox img="https://i.postimg.cc/sgBkfbtx/img-1.jpg" text="Renji" />
            <GalleryBox img="https://i.postimg.cc/3RZ6bhDS/img-2.jpg" text="Sora" />
            <GalleryBox img="https://i.postimg.cc/DZhHg0m4/img-3.jpg" text="Kaito" />
            <GalleryBox img="https://i.postimg.cc/KjqWx5ft/img-4.jpg" text="Tsuki" />
            <GalleryBox img="https://i.postimg.cc/nrcWyW4H/img-5.jpg" text="Mitsui" />
        </div>
    )
}

export default Examples