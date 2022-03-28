import styles from "./FirstLayout.module.css";
import {testimonials} from "../../data";
import Image from "next/image";

const FirstLayout = () => {
    return (
        <div className={styles.gridContainer}>
            {testimonials?.map((item, index) => <article className={styles.item} key={index}>
                <div className={styles.profile}>
                    <div className={styles.imageContainer}>
                        <Image src={item.image} layout={"fill"} className={styles.image} />
                    </div>
                    <div>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.job}>{item.job}</p>
                    </div>
                </div>
                <p className={styles.heading}>{item.heading}</p>
                <p className={styles.comment}>{item.comment}</p>
            </article>)}
        </div>
    );
};

export default FirstLayout;