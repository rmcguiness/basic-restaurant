import { ImageWrapper } from "../next-image-wrapper";
const Carousel = ({ list }: { list: { url: string, size: number }[] }) => {

    return (
        <div>
            {list.map((item) => (
                <div key={item.url}>
                    <ImageWrapper src={item.url} alt="carousel" imageClassName="w-full h-full" wrapperClassName="w-full h-full" />
                </div>
            ))}
        </div>
    )
}

export default Carousel;