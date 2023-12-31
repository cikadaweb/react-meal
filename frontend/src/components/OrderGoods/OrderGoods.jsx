import style from './OrderGoods.module.css';
import {Count} from "../Count/Count.jsx";

export const OrderGoods = ({item}) => (
    <li className={style.item}>
        <img className={style.image} src="img/burger_1.jpg" alt={item} />

        <div className={style.goods}>
            <h3 className={style.title}>{item}</h3>

            <p className={style.weight}>512г</p>

            <p className={style.price}>1279
                <span className="currency">₽</span>
            </p>
        </div>

        <Count count={1}/>
    </li>
);