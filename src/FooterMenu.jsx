import "./App.css";

const FooterMenu = () => {
    return (
        <>
            <div className="menu">
                <div className="right_menu">
                    <div className="icon_main">
                        <img src="src/src/sun.svg"/>
                        <span className="h1"><strong>Мой день</strong></span>
                    </div>
                    <div className="icon_main text">
                        <div className="icon_main">
                            <img src="src/src/set.svg"/>
                            <span className="main_text">Сетка</span>
                        </div>
                        <div className="icon_main">
                            <img src="src/src/line.svg"/>
                            <span className="main_text">Список</span>
                        </div>
                    </div>
                </div>
                <div className="left_menu">
                    <div className="icon_main">
                        <img src="src/src/stroke.svg"/>
                        <span className="main_text">Сортировка</span>
                    </div>
                    <div className="icon_main">
                        <img src="src/src/group.svg"/>
                        <span className="main_text">Группировать</span>
                    </div>
                    <div className="icon_main">
                        <img src="src/src/light.svg"/>
                        <span className="main_text">Предложения</span>
                    </div>
                </div>
            </div>
            <div className="text_date">
                <span className="main_text">четверг , 4 июня</span>
            </div>
        </>
    )
}

export default FooterMenu