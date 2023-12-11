import { cloudinaryConfig } from "../Claudinary.jsx";

export function backgroundStyles(links) {
    return links.map((link) => {
        const imagePath = link;
        return {
            backgroundImage: `url(${cloudinaryConfig
                .image(imagePath)
                .toURL()})`,
        };
    });
}
