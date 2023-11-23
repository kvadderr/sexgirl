import s from './Documentation.module.scss'

const Documentation = () => {
    return (
        <div className={s.container}>
            <h1>Инструкция</h1>
            <div className={s.item}>
                <p>1. Девушка должна быть недалеко (можно обрезать ненужные края у фото); волосы и руки не закрывают одежду и тело.</p>
                <img src='https://nueasy.ai/_ipx/w_956/instructions/1.webp' className={s.img} />
                <i>Пример. На первом фото рука и волосы закрывают почти всё тело. Такое фото не подойдёт.</i>
            </div>
            <div className={s.item}>
                <p>2. Избегайте фото, где одежда сливается с фоном или близка к цвету кожи.</p>
                <img src='https://nueasy.ai/_ipx/w_956/instructions/2.webp' className={s.img} />
                <i>Пример. На первом фото рука и волосы закрывают почти всё тело. Такое фото не подойдёт.</i>
            </div>
            <div className={s.item}>
                <p>3. Лучше загружайте изображения хорошего или среднего качества. Чем светлее фото, тем лучше результат.</p>
                <img src='https://nueasy.ai/_ipx/w_956/instructions/3.webp' className={s.img} />
                <i>Пример. На первом фото рука и волосы закрывают почти всё тело. Такое фото не подойдёт.</i>
            </div>
            <div className={s.item}>
                <p>4. Выбирайте фото с облегающей одеждой: топы, нижнее белье, футболки, платья и др. В широкой одежде нейросеть сработает хуже, но справится.</p>
                <img src='https://nueasy.ai/_ipx/w_956/instructions/4.webp' className={s.img} />
                <i>Пример. Первая фотография сложна тем, что нейросети не от чего оттолкнуться! Вторая моя любимая.</i>
            </div>
        </div>
    )
}

export default Documentation